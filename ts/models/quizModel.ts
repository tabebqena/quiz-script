import { onlyUnique } from "../utils";
import { Choice } from "./choice";
import { ChoicesList } from './choicesList';
import { MediaList } from "./mediaList";

interface INumber {
    isInteger: Function
}
declare var Number: INumber;


export const QUIZ_TYPES = Object.freeze({
    SC: "SC",
    MC: "MC",
    TF: "TF",
    SORT: "SORT"
});

/**
 * 
 */
export class QuizModel {
    private _id: any;
    private _type: string;
    private _title: string;
    private _mediaList: MediaList;
    private _hint: string;
    private _choicesList: ChoicesList;
    private _correct: Array<number>;
    private _answer: Array<number>;
    private _extra: any;
    private _learningNotes: string;


    constructor(id, type: string, title: string, mediaList: MediaList, hint: string, choicesList: ChoicesList, correct, answer, extra, learningNotes) {
        type = type.toUpperCase();
        let valid = QuizModel.validateEmpty(id, type, mediaList, choicesList)
        if (!valid.valid) {
            throw valid
        }
        this._id = id;
        this._type = type;
        this._title = title || "";
        this._mediaList = mediaList || new MediaList(null);
        this._hint = hint;
        this._choicesList = choicesList || new ChoicesList(null);
        this._correct = correct || [];
        this._answer = answer || [];
        this._extra = extra || {};
        this._learningNotes = learningNotes || "";
    }

    get id() {
        return this._id;
    }
    // no setter for id
    /*  */

    //_type
    get type() {
        return this._type;
    }
    set type(type) {
        if (!QUIZ_TYPES.hasOwnProperty(type)) {
            throw "Invalid Type: " + type + "not in: " + QUIZ_TYPES
        }
        this._type = type;
    }
    // title
    get title() {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

    // mediaList
    set mediaList(mediaList: MediaList) {
        if (!MediaList.isValid(mediaList)) {
            throw "Invalid media List " + typeof (mediaList) + mediaList
        }
        this._mediaList = mediaList;

    }

    get mediaList(): MediaList {
        return this._mediaList;
    }

    // hint
    set hint(hint) {
        if (typeof (hint) !== "string") {
            throw "Invalid Hint type"
        }
        this._hint = hint;
    }
    get hint() {
        return this._hint;
    }
    // choices_list
    set choicesList(choicesList: ChoicesList) {
        if (!choicesList.isChoiceList()) {
            throw "Invalid Choices List"
        }
        var old = this.choicesList;

        for (var i; i < choicesList.length; i++) {
            let choice = choicesList[i]
            if (!choice.isChoice()) {
                throw "Invalid Type" + typeof (choice)
            }
            if (!Choice.validateEmpty(choice.id, choice.text, choice.mediaList)) {
                throw "Invalid: " + choice
                this._choicesList = old;
            }
        }
        this._choicesList = choicesList;
    }

    get choicesList() {
        return this._choicesList;
    }

    // correct
    set correct(correct) {
        if (this.type === QUIZ_TYPES.SC || this.type === QUIZ_TYPES.MC) {
            if (correct === []) {
                this._correct = []
                return
            }
            if (correct.constructor !== Array) {
                throw "Inavalid " + correct.constructor
            }
            for (var x = 0; x < correct.length; x++) {
                const c = correct[x]
                if (typeof (c) !== "number") {
                    throw "Invalid choice type " + c + " " + typeof (c)
                }
            }

            if (correct.length > this.choicesList.length) {
                throw "Invalid correct length: " + correct.length
                + "choicesList length: "
                + this.choicesList.length
            }
        } else if (this.type === QUIZ_TYPES.TF) {
            if (correct === []) {
                this._correct = []
                return
            }
            if (correct.constructor !== Array) {
                throw "Inavalid " + correct.constructor
            }
            for (var x = 0; x < correct.length; x++) {
                const c = correct[x]
                if (typeof (c) !== "number") {
                    throw "Invalid choice type " + c + " " + typeof (c)
                }
            }

            if (correct.length > 1) {
                throw "Invalid correct length: " + correct.length
            }

        }
        this._correct = correct;
    }

    get correct() {
        return this._correct;
    }

    public get learningNotes(): string {
        return this._learningNotes;
    }
    public set learningNotes(value: string) {
        this._learningNotes = value;
    }

    removeFromCorrect(choiceId) {
        if (this.type === QUIZ_TYPES.SC || this.type === QUIZ_TYPES.MC) {
            this.correct.splice(this.correct.indexOf(choiceId), 1)
            this.correct = this.correct.filter(onlyUnique)
        } else if (this.type === QUIZ_TYPES.TF) {
            this.correct = [0]
        }
    }

    addToCorrect(choiceId) {
        if (this.type === QUIZ_TYPES.SC || this.type === QUIZ_TYPES.MC) {
            if (!Number.isInteger(choiceId)) {
                throw "Invalid correct id type"
            }
            if (choiceId >= this.choicesList.length) {
                throw "Invalid correct value >" + this.choicesList.length
            }
            this.correct.push(choiceId)
            this.correct = this.correct.filter(onlyUnique)
        } else if (this.type === QUIZ_TYPES.TF) {
            this.correct = [1]
        }
    }

    // answer
    set answer(answer) {
        if (this.type === QUIZ_TYPES.SC || this.type === QUIZ_TYPES.MC) {
            if (answer === []) {
                this._answer = []
                return
            }

            if (answer.constructor !== Array) {
                throw "Inavalid " + answer.constructor
            }
            for (var x = 0; x < answer.length; x++) {
                let a = answer[x]
                if (typeof (a) !== "number") {
                    throw "Invalid Answer type " + a + " " + typeof (a)
                }
            }
            if (answer.length > this.choicesList.length) {
                throw "Invalid answer " + answer + " choicesList: " + this.choicesList
            }

        } else if (this.type === QUIZ_TYPES.TF) {
            if (answer === []) {
                this._answer = []
                return
            }

            if (answer.constructor !== Array) {
                throw "Inavalid " + answer.constructor
            }
            for (var x = 0; x < answer.length; x++) {
                let a = answer[x]
                if (typeof (a) !== "number") {
                    throw "Invalid Answer type " + a + " " + typeof (a)
                }
            }
            if (answer.length > 1) {
                throw "Invalid answer " + answer + " length"
            }
        }
        this._answer = answer;
    }

    get answer() {
        return this._answer;
    }
    // extra
    set extra(extra) {
        this._extra = extra;
    }

    get extra() {
        return this._extra;
    }

    static validateEmpty(id, type, mediaList, choicesList,) {
        if (!id) {
            return { valid: false, error: "Invalid ID" }
        }
        if (!type) {
            return { valid: false, error: "Invalid Type: " + type }
        }
        if (!QUIZ_TYPES.hasOwnProperty(type)) {
            return { valid: false, error: "Invalid Type: " + type }
        }
        if (mediaList) {
            let v = MediaList.isValid(mediaList)
            if (!v.valid) {
                return { valid: false, error: "Invalid Media List>" + v.error }
            }
        }
        if (choicesList) {
            let v = ChoicesList.isValid(choicesList)
            if (!v.valid) {
                return { valid: false, error: "Invalid Choices List> " + v.error }
            }
        }
        return { valid: true }
    }

    validateFull() {
        let v = QuizModel.validateEmpty(this.id, this.type, this.mediaList, this.choicesList)
        if (!v.valid) {
            return v
        }


        if (!this.title || typeof (this.title) !== "string") {
            return { valid: false, error: "Invalid Quiz Title" }
        }
        if ((!this.hint && this.hint != "") || typeof (this.hint) !== "string") {
            return { valid: false, error: "Invalid Quiz Hint" }
        }
        // if (this.type === QUIZ_TYPES.SC ||
        //     this.type === QUIZ_TYPES.MC ||
        //     this.type === QUIZ_TYPES.SORT) {
        if (!this.choicesList || this.choicesList.length == 0) {
            return { valid: false, error: "No Choices" }
        }
        if (this.choicesList.length === 1) {
            return { valid: false, error: "Only one choice" }
        }
        // } 
        // else if (this.type === QUIZ_TYPES.TF) {
        //     if (this.choicesList && this.choicesList.length > 0) {
        //         return { valid: false, error: " Invalid choices length for T/F question. " }
        //     }
        // }

        for (var x = 0; x < this.choicesList.length; x++) {
            let v = this.choicesList.getChoice(x).validateFull()
            if (!v.valid) {
                return { valid: false, error: "Invalid choice: " + x + "error: " + v.error }
            }
        }

        if (this.type === QUIZ_TYPES.SC) {
            if (!this.correct || this.correct.length < 1) {
                return { valid: false, error: "You should set the correct answer" }
            }
            if (this.correct.length > 1) {
                return { valid: false, error: "Single choice question can't accept more than one correct answer" }
            }
        } else if (this.type === QUIZ_TYPES.MC) {
            if (!this.correct) {
                this.correct = []
            }
        } else if (this.type === QUIZ_TYPES.TF) {
            if (!this.correct || this.correct.length === 0) {
                return { valid: false, error: "You should set the correct answer" }
            }
            if (this.correct.length > 1) {
                return { valid: false, error: "True/False questions can't accept more than ONE correct answer" }
            }
            if (this.correct[0] != 0 && this.correct[0] != 1) {
                return { valid: false, error: "True/False questions can accept only T/F as correct answer" }
            }
        }
        return { valid: true }
    }

    static toDict(quiz: QuizModel) {
        return {
            'id': quiz.id,
            'type': quiz.type,
            'title': quiz.title,
            'hint': quiz.hint,
            'choices': quiz.choicesList.toList(),
            'mediaList': quiz.mediaList.toList(),
            'correct': quiz.correct,
            'answer': quiz.answer,
            'extra': quiz.extra,
            "learningNotes": quiz.learningNotes
        }
    }

    static toJson(quiz) {
        return JSON.stringify(QuizModel.toDict(quiz))
    }

    static fromDict(d) {

        let mediaList = new MediaList(d.mediaList)
        let choicesList = new ChoicesList(d.choices)
        return new QuizModel(
            d.id,
            d.type,
            d.title,
            mediaList,
            d.hint,
            choicesList,
            d.correct,
            d.answer,
            d.extra,
            d.learningNotes)
    }

    static fromJson(json) {
        return QuizModel.fromDict(JSON.parse(json))
    }

}

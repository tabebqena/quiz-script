import { ChoicesList } from './choicesList';
import { MediaList } from "./mediaList"
import { Choice } from "./choice"
import { onlyUnique } from "../utils"

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
    private _media_list: MediaList;
    private _hint: string;
    private _choices_list: ChoicesList;
    private _correct: Array<number>;
    private _answer: Array<number>;
    private _extra: any;
    private _learning_notes: string;


    constructor(id, type: string, title: string, media_list: MediaList, hint: string, choices_list: ChoicesList, correct, answer, extra, learning_notes) {
        type = type.toUpperCase();
        let valid = QuizModel.validate_empty(id, type, media_list, choices_list)
        if (!valid.valid) {
            throw valid
        }
        this._id = id;
        this._type = type;
        this._title = title || "";
        this._media_list = media_list || new MediaList(null);
        this._hint = hint;
        this._choices_list = choices_list || new ChoicesList(null);
        this._correct = correct || [];
        this._answer = answer || [];
        this._extra = extra || {};
        this._learning_notes = learning_notes || "";
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

    // media_list
    set media_list(media_list: MediaList) {
        if (!MediaList.is_valid(media_list)) {
            throw "Invalid media List " + typeof (media_list) + media_list
        }
        this._media_list = media_list;

    }

    get media_list(): MediaList {
        return this._media_list;
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
    set choices_list(choices_list: ChoicesList) {
        if (!choices_list.is_choice_list()) {
            throw "Invalid Choices List"
        }
        var old = this.choices_list;

        for (var i; i < choices_list.length; i++) {
            let choice = choices_list[i]
            if (!choice.is_choice()) {
                throw "Invalid Type" + typeof (choice)
            }
            if (!Choice.validate_empty(choice.id, choice.text, choice.media_list)) {
                throw "Invalid: " + choice
                this._choices_list = old;
            }
        }
        this._choices_list = choices_list;
    }

    get choices_list() {
        return this._choices_list;
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

            if (correct.length > this.choices_list.length) {
                throw "Invalid correct length: " + correct.length
                + "choices_list length: "
                + this.choices_list.length
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

    public get learning_notes(): string {
        return this._learning_notes;
    }
    public set learning_notes(value: string) {
        this._learning_notes = value;
    }

    remove_from_correct(choice_id) {
        if (this.type === QUIZ_TYPES.SC || this.type === QUIZ_TYPES.MC) {
            this.correct.splice(this.correct.indexOf(choice_id), 1)
            this.correct = this.correct.filter(onlyUnique)
        } else if (this.type === QUIZ_TYPES.TF) {
            this.correct = [0]
        }
    }

    add_to_correct(choice_id) {
        if (this.type === QUIZ_TYPES.SC || this.type === QUIZ_TYPES.MC) {
            if (!Number.isInteger(choice_id)) {
                throw "Invalid correct id type"
            }
            if (choice_id >= this.choices_list.length) {
                throw "Invalid correct value >" + this.choices_list.length
            }
            this.correct.push(choice_id)
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
            if (answer.length > this.choices_list.length) {
                throw "Invalid answer " + answer + " choices_list: " + this.choices_list
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

    static validate_empty(id, type, media_list, choices_list,) {
        if (!id) {
            return { valid: false, error: "Invalid ID" }
        }
        if (!type) {
            return { valid: false, error: "Invalid Type: " + type }
        }
        if (!QUIZ_TYPES.hasOwnProperty(type)) {
            return { valid: false, error: "Invalid Type: " + type }
        }
        if (media_list) {
            let v = MediaList.is_valid(media_list)
            if (!v.valid) {
                return { valid: false, error: "Invalid Media List>" + v.error }
            }
        }
        if (choices_list) {
            let v = ChoicesList.is_valid(choices_list)
            if (!v.valid) {
                return { valid: false, error: "Invalid Choices List> " + v.error }
            }
        }
        return { valid: true }
    }

    validate_full() {
        let v = QuizModel.validate_empty(this.id, this.type, this.media_list, this.choices_list)
        if (!v.valid) {
            return v
        }


        if (!this.title || typeof (this.title) !== "string") {
            return { valid: false, error: "Invalid Quiz Title" }
        }
        if ((!this.hint && this.hint != "") || typeof (this.hint) !== "string") {
            return { valid: false, error: "Invalid Quiz Hint" }
        }
        if (this.type === QUIZ_TYPES.SC ||
            this.type === QUIZ_TYPES.MC ||
            this.type === QUIZ_TYPES.SORT) {
            if (!this.choices_list || this.choices_list.length == 0) {
                return { valid: false, error: "No Choices" }
            }
            if (this.choices_list.length === 1) {
                return { valid: false, error: "Only one choice" }
            }
        } else if (this.type === QUIZ_TYPES.TF) {
            if (this.choices_list && this.choices_list.length > 0) {
                return { valid: false, error: " Invalid choices length for T/F question. " }
            }
        }

        for (var x = 0; x < this.choices_list.length; x++) {
            let v = this.choices_list.get_choice(x).validate_full()
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

    static to_dict(quiz: QuizModel) {
        return {
            'id': quiz.id,
            'type': quiz.type,
            'title': quiz.title,
            'hint': quiz.hint,
            'choices': quiz.choices_list.to_list(),
            'media_list': quiz.media_list.to_list(),
            'correct': quiz.correct,
            'answer': quiz.answer,
            'extra': quiz.extra,
            "learning_notes": quiz.learning_notes
        }
    }

    static to_json(quiz) {
        return JSON.stringify(QuizModel.to_dict(quiz))
    }

    static from_dict(d) {

        let media_list = new MediaList(d.media_list)
        let choices_list = new ChoicesList(d.choices)
        return new QuizModel(
            d.id,
            d.type,
            d.title,
            media_list,
            d.hint,
            choices_list,
            d.correct,
            d.answer,
            d.extra,
            d.learning_notes)
    }

    static from_json(json) {
        return QuizModel.from_dict(JSON.parse(json))
    }

}

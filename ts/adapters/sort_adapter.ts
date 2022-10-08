import { QuizModel } from "../models/quizModel";
import { HTML_MODE } from "../quizHTML";
import { createElement, shuffle } from "../utils";
import { ChoiceAdapter } from "./choiceAdapter";

export class SORTAdapter extends ChoiceAdapter {
    // _uglifyId = {};
    constructor(mode: string, quizModel: QuizModel, element: HTMLDivElement) {
        super(mode, quizModel, element);
    }

    _createEditorElement(id: number, text: string = "") {
        // let id = this._quizModel.id + "_choice_" + index;
        let choiceEle = createElement("div",
            {
                "id": "choice-" + id,
                "data-choice-id": id,
                "draggable": true,
            },
            ["quiz-choice", "m-4"]
        );
        let row = createElement("div", {}, ["row"]);
        this.appendDragDiv(row);
        this.appendTextEditorDiv(id, row, text);
        this.appendDelDiv(row, choiceEle);
        choiceEle.appendChild(row);
        this._quizBodyDiv.appendChild(choiceEle);
    }

    createEditorElement(id: number = null, text: string = "", value: string = "", isChecked: boolean = false, is_disabled: boolean = false) {
        if (id === null || id === undefined) {
            id = Math.ceil(Math.random() * 1000)
        }
        return this._createEditorElement(id, text)
    }




    createViewerElement(id: number, text: string = "", isDisabled: boolean = false, showCorrectAnswer: boolean = false) {
        let choiceEle = createElement("div",
            {
                "draggable": !showCorrectAnswer,
                "data-choice-id": id,
            },
            ["quiz-choice", "m-4"],
            "cursor: grab"
        );
        let row = createElement("div", {}, ["row"],);
        if (showCorrectAnswer) {
            this.appendDragDiv(row, "color: gray")
        } else {
            this.appendDragDiv(row,)
        }

        let classes = ["col-11"]
        if (showCorrectAnswer) {
            classes = ["col-10"]
        }
        if (isDisabled) {
            classes.push("text-muted")
        }

        this.appendTextViewerDiv(id, row, text, {}, classes, "")
        if (showCorrectAnswer) {
            let correct = this._quizModel.correct
            this.appendCorrectDiv(row, true, correct.indexOf(id) === this._quizModel.answer.indexOf(id))
        }

        choiceEle.appendChild(row);
        this._quizBodyDiv.appendChild(choiceEle);
    }


    updateView() {
        let _choices = this._quizModel.choicesList.choicesList.slice()
        if (this._mode === HTML_MODE.CREATE) {
            for (var x = 0; x < this._quizModel.choicesList.length; x++) {
                let choice = this._quizModel.choicesList.getChoice(x)
                this.createEditorElement(choice.id, choice.text);
            }
        } else if (this._mode === HTML_MODE.ANSWER) {
            let choices = shuffle(shuffle(shuffle(_choices)))
            for (var i = 0; i < choices.length; i++) {
                let choice = choices[i]
                this.createViewerElement(choice.id, choice.text);
            }

        } else if (this._mode === HTML_MODE.UPDATE_ANSWER) {
            let choices = shuffle(shuffle(shuffle(this._quizModel.choicesList.choicesList.slice())))
            for (var i = 0; i < choices.length; i++) {
                let choice = choices[i]
                this.createViewerElement(choice.id, choice.text);
            }
        } else if (this._mode === HTML_MODE.SHOW_RESULT) {
            let answer = this._quizModel.answer;
            for (var i = 0; i < answer.length; i++) {
                let choice = this._quizModel.choicesList.getChoiceById(answer[i])
                this.createViewerElement(choice.id, choice.text, true, true)
            }
        }
    }

    get_correct(): any[] {
        let choices = this._quizModel.choicesList;
        let rv = []
        for (let index = 0; index < choices.length; index++) {
            rv.push(choices.getChoice(index).id);
        }
        return rv;
    }

    updateModel(quizModel: QuizModel): QuizModel {
        this._quizModel = quizModel;
        let choices = this._quizBodyDiv.getElementsByClassName("quiz-choice");
        if (this._mode === HTML_MODE.ANSWER || this._mode === HTML_MODE.UPDATE_ANSWER) {
            let answer = [];
            for (var x = 0; x < choices.length; x++) {
                answer.push(parseInt(choices[x].getAttribute("data-choice-id")));
            }
            this._quizModel.answer = answer;
            return this._quizModel;
        } else if (this._mode === HTML_MODE.CREATE) {
            let choicesList = this.collectChoices();
            this._quizModel.choicesList = choicesList;
            this._quizModel.correct = this.get_correct();
            return this._quizModel;
        }
    }
}
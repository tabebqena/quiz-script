import { QuizModel } from "../models/quizModel";
import { HTML_MODE } from "../quizHTML";
import { createElement } from "../utils";
import { ChoiceAdapter } from "./choiceAdapter";

export class SCAdapter extends ChoiceAdapter {
    constructor(mode: string, quizModel: QuizModel, element: HTMLDivElement) {
        super(mode, quizModel, element);
    }


    createEditorElement(text: string = "", is_checked: boolean = false) {
        let index = this._quizBodyDiv.children.length;
        let id = this._quizModel.id + "_choice_" + index;
        let choiceEle = createElement("div",
            { "id": id, "data-id": id, "draggable": true, },
            ["quiz-choice", "m-4"]
        );
        let row = createElement("div", {}, ["row"]);

        this.appendDragDiv(row)
        this.appendSelectDiv(row, "radio", is_checked)
        this.appendTextEditorDiv(index, row, text)
        this.appendDelDiv(row, choiceEle)

        choiceEle.appendChild(row);
        this._quizBodyDiv.appendChild(choiceEle);

    }

    appendEmptyChoice() {
        this.createEditorElement()
    }

    createViewerElement(text: string = "", is_checked: boolean = false, is_correct: boolean = false, is_disabled: boolean = false, showCorrectAnswer: boolean = false) {
        let index = this._quizBodyDiv.children.length;
        let id = this._quizModel.id + "_choice_" + index;
        let choice_ele = createElement("div",
            {
                "id": id, "data-id": id, "draggable": true,
            },
            ["quiz-choice", "m-4"]
        );
        let row = createElement("div", {}, ["row"]);
        this.appendSelectDiv(row, "radio", is_checked, is_disabled)
        let classes = ["col-11"]
        if (showCorrectAnswer) {
            classes = ["col-10"]
        }
        this.appendTextViewerDiv(index, row, text, {}, classes, "")

        if (showCorrectAnswer) {
            this.appendCorrectDiv(row, is_checked, is_correct)
        }

        choice_ele.appendChild(row);
        this._quizBodyDiv.appendChild(choice_ele);
    }


    updateView() {
        for (var x = 0; x < this._quizModel.choicesList.length; x++) {
            let text = this._quizModel.choicesList.getChoice(x).text;
            let is_correct = this._quizModel.correct.indexOf(x) != -1;
            let is_checked = this._quizModel.answer.indexOf(x) != -1;
            if (this._mode === HTML_MODE.ANSWER) {
                this.createViewerElement(text, false, false, false, false);
            } else if (this._mode === HTML_MODE.UPDATE_ANSWER) {
                this.createViewerElement(text, is_checked);

            } else if (this._mode === HTML_MODE.CREATE) {
                this.createEditorElement(text, is_correct)
            } else if (this._mode === HTML_MODE.SHOW_RESULT) {
                this.createViewerElement(text, is_checked, is_correct, true, true);
            }
        }
    }

    updateModel(quizModel: QuizModel): QuizModel {
        this._quizModel = quizModel;
        let choices = this._quizBodyDiv.getElementsByClassName("quiz-choice");
        if (this._mode === HTML_MODE.ANSWER || this._mode === HTML_MODE.UPDATE_ANSWER) {
            let answer = [];
            for (var x = 0; x < choices.length; x++) {
                let c = choices[x];
                let inputs = c.getElementsByTagName("input");
                for (var i = 0; i < inputs.length; i++) {
                    let input = inputs[i];
                    if (input.getAttribute("role") === "choice-ctrl") {
                        if (input.checked) {
                            answer.push(x);
                        }
                    }
                }
            }
            this._quizModel.answer = answer;
            return this._quizModel;
        } else if (this._mode === HTML_MODE.CREATE) {
            let choices_list = this.collectChoices();
            let correct = this.get_correct()
            this._quizModel.choicesList = choices_list;
            this._quizModel.correct = correct;
            return this._quizModel;
        }

    }
}
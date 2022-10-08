import { QuizModel } from "../models/quizModel";
import { HTML_MODE } from "../quizHTML";
import { createElement } from "../utils";
import { ChoiceAdapter } from "./choiceAdapter";

export class MCAdapter extends ChoiceAdapter {
    constructor(mode: string, quizModel: QuizModel, element: HTMLDivElement) {
        super(mode, quizModel, element);
    }

    _createEditorElement(index: number, text: string = "", value = "", isChecked: boolean = false) {
        // let index = this._quizBodyDiv.children.length;
        let id = this._quizModel.id + "_choice_" + index;
        let choiceEle = createElement("div",
            { "id": id, "data-id": id, "draggable": true, },
            ["quiz-choice", "m-4"]
        );
        let row = createElement("div", {}, ["row"]);

        this.appendDragDiv(row)
        this.appendSelectDiv(row, "checkbox", isChecked)
        this.appendTextEditorDiv(index, row, text)
        this.appendDelDiv(row, choiceEle)

        choiceEle.appendChild(row);
        this._quizBodyDiv.appendChild(choiceEle);
    }


    createViewerElement(text: string = "", isChecked: boolean = false, isCorrect: boolean = false, isDisabled: boolean = false, showCorrectAnswer: boolean = false) {
        let index = this._quizBodyDiv.children.length;
        let id = this._quizModel.id + "_choice_" + index;
        let choiceEle = createElement("div",
            {
                "id": id, "data-id": id, "draggable": true,
            },
            ["quiz-choice", "m-4"]
        );
        let row = createElement("div", {}, ["row"]);
        this.appendSelectDiv(row, "checkbox", isChecked, isDisabled)
        let classes = ["col-11"]
        if (showCorrectAnswer) {
            classes = ["col-10"]
        }
        this.appendTextViewerDiv(index, row, text, {}, classes, "")

        if (showCorrectAnswer) {
            this.appendCorrectDiv(row, isChecked, isCorrect)
        }

        choiceEle.appendChild(row);
        this._quizBodyDiv.appendChild(choiceEle);
    }


    updateView() {
        let choices = this._quizModel.choicesList;
        for (var x = 0; x < choices.length; x++) {
            let choice = choices.getChoice(x)
            let text = choice.text;
            let id = choice.id
            let isCorrect = this._quizModel.correct.indexOf(choice.id) != -1;
            let isChecked = this._quizModel.answer.indexOf(choice.id) != -1;
            if (this._mode === HTML_MODE.ANSWER) {
                this.createViewerElement(text, false, false, false, false);
            } else if (this._mode === HTML_MODE.UPDATE_ANSWER) {
                this.createViewerElement(text, isChecked);

            } else if (this._mode === HTML_MODE.CREATE) {
                this.createEditorElement(id, text, "", isChecked)
            } else if (this._mode === HTML_MODE.SHOW_RESULT) {
                this.createViewerElement(text, isChecked, isCorrect, true, true);
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
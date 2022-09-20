import { QuizModel } from "../models/quizModel";
import { HTML_MODE } from "../quizHTML";
import { createElement } from "../utils";
import { ChoiceAdapter } from "./choiceAdapter";

export class TFAdapter extends ChoiceAdapter {
    constructor(mode: string, quizModel: QuizModel, element: HTMLDivElement) {
        super(mode, quizModel, element);
    }


    createEditorElement(text: string = "", value: string, isChecked: boolean = false, is_disabled: boolean = false) {
        let index = this._quizBodyDiv.children.length;
        let id = this._quizModel.id + "_choice_" + index;
        let choiceEle = createElement("div",
            { "id": id, "data-id": id, }, //  "draggable": true,
            ["quiz-choice", "m-2"]
        );
        let row = createElement("div", {}, ["row"]);
        let selectDiv = createElement("div", {}, ["col-1", "m-2"]);
        let radio = createElement("input", { "type": "radio", "dir": "auto", "name": this._quizModel.id + "_choices", "role": "choice-ctrl", "data-value": value }, []);
        if (isChecked) {
            radio.setAttribute("checked", "true")
        }
        radio.style.cssText = "margin: 0; position: relative; top: 50%; left: 50%; -ms-transform: translate(50%, -50%);transform: translate(50%,-50%);width: 1.5rem; height:1.5rem";
        selectDiv.appendChild(radio);
        row.appendChild(selectDiv);
        // this.appendTextViewerDiv(index, row, text, {}, ["col-11"])
        this.appendTextEditorDiv(index, row, text)
        choiceEle.appendChild(row);
        this._quizBodyDiv.appendChild(choiceEle);
    }


    createViewerElement(text: string = "", val: string, isChecked: boolean = false, isCorrect: boolean = false, isDisabled: boolean = false, showCorrectAnswer: boolean = false) {
        let index = this._quizBodyDiv.children.length;
        let id = this._quizModel.id + "_choice_" + index;
        let choiceEle = createElement("div",
            {
                "id": id, "data-id": id, "draggable": true,
            },
            ["quiz-choice", "m-4"]
        );
        let row = createElement("div", {}, ["row"]);
        let selDiv = this.appendSelectDiv(row, "radio", isChecked, isDisabled)
        selDiv.firstElementChild.setAttribute("data-value", val)

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
        for (var x = 1; x > -1; x--) {
            let id = this._quizModel.id + "_choice_" + x;
            let val = "true";
            let text = "True"
            if (x === 0) {
                val = "false";
            }
            if (x === 0) {
                text = "False"
            }
            let isCorrect = this._quizModel.correct.indexOf(x) != -1;
            let isChecked = this._quizModel.answer.indexOf(x) != -1;
            if (this._mode === HTML_MODE.ANSWER) {
                this.createViewerElement(text, val, false, false, false, false);
            } else if (this._mode === HTML_MODE.UPDATE_ANSWER) {
                this.createViewerElement(text, val, isChecked);

            } else if (this._mode === HTML_MODE.CREATE) {
                this.createEditorElement(text, val, isCorrect)
            } else if (this._mode === HTML_MODE.SHOW_RESULT) {
                this.createViewerElement(text, val, isChecked, isCorrect, true, true);
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
                        let val = input.getAttribute("data-value")
                        if (input.checked && val === "true") {
                            answer = [1]
                        } else if (input.checked && val === "false") {
                            answer = [0]
                        }
                    }
                }
            }
            this._quizModel.answer = answer;
            return this._quizModel;
        } else if (this._mode === HTML_MODE.CREATE) {
            let correct = []
            for (var x = 0; x < choices.length; x++) {
                let c = choices[x];
                let inputs = c.getElementsByTagName("input");
                for (var i = 0; i < inputs.length; i++) {
                    let input = inputs[i];
                    if (input.getAttribute("role") === "choice-ctrl") {
                        let val = input.getAttribute("data-value")
                        if (input.checked && val === "true") {
                            correct = [1]
                        } else if (input.checked && val === "false") {
                            correct = [0]
                        }
                    }
                }
            }
            this._quizModel.correct = correct;
            let choices_list = this.collectChoices();
            this._quizModel.choicesList = choices_list;
            return this._quizModel;
        }

    }
}
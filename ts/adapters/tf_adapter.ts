import { Choice } from "../models/choice";
import { ChoicesList } from "../models/choicesList";
import { QuizModel } from "../models/quizModel";
import { HTML_MODE } from "../quizHTML";
import { createElement } from "../utils";
import { ChoiceAdapter } from "./choiceAdapter";

export class TFAdapter extends ChoiceAdapter {
    constructor(mode: string, quizModel: QuizModel, element: HTMLDivElement) {
        super(mode, quizModel, element);
        if (mode === HTML_MODE.CREATE && quizModel.choicesList.length === 0) {
            quizModel.choicesList.addChoice(new Choice(0, "False", null))
            quizModel.choicesList.addChoice(new Choice(1, "True", null))
        }
    }


    _createEditorElement(index: number, text: string = "", value: string, isChecked: boolean = false, is_disabled: boolean = false) {
        // let index = this._quizBodyDiv.children.length;
        let id = this._quizModel.id + "_choice_" + index;
        let choiceEle = createElement("div",
            { "id": id, "data-id": id, "data-value": value }, //  "draggable": true,
            ["quiz-choice", "m-2", value]
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
                "id": id, "data-id": id, // "draggable": true,
            },
            ["quiz-choice", "m-4", val]
        );
        let row = createElement("div", {}, ["row"]);
        let selDiv = this.appendSelectDiv(row, "radio", isChecked, isDisabled)
        selDiv.firstElementChild.setAttribute("data-value", val)

        let classes = ["col-10", "ms-2"]
        if (showCorrectAnswer) {
            classes = ["col-9", "ms-2"]
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
            let choice: Choice = this._quizModel.choicesList.getChoiceById(x)
            let val = (choice.id === 1) + ""
            let text = choice.text;;
            let isCorrect = this._quizModel.correct.indexOf(choice.id) != -1;
            let isChecked = this._quizModel.answer.indexOf(choice.id) != -1;
            if (this._mode === HTML_MODE.ANSWER) {
                this.createViewerElement(text, val, false, false, false, false);
            } else if (this._mode === HTML_MODE.UPDATE_ANSWER) {
                this.createViewerElement(text, val, isChecked);

            } else if (this._mode === HTML_MODE.CREATE) {
                this.createEditorElement(x, text, val, isCorrect)
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

            this._quizModel.correct = this.get_correct();
            this._quizModel.choicesList = this.collectChoices();;
            return this._quizModel;
        }
    }

    get_correct() {
        let correct = []
        let choices = this._quizBodyDiv.getElementsByClassName("quiz-choice");
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
        return correct
    }

    collectChoices(): ChoicesList {
        // let choices = this._quizBodyDiv.getElementsByClassName("quiz-choice");
        let choicesList = this._quizModel.choicesList;
        for (var x = 0; x <= 1; x++) {
            let choice: Choice = choicesList.getChoiceById(x);
            let value = (x === 1) + ''
            let es = this._quizBodyDiv.getElementsByClassName("quiz-choice " + value)
            if (es.length > 0) {
                let e = es[0];
                choice.text = e.getElementsByTagName("textarea")[0].value;
            }
        }
        return choicesList;
    }
}
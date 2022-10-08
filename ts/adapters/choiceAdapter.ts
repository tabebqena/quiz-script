import { Choice } from "../models/choice";
import { ChoicesList } from "../models/choicesList";
import { QuizModel, QUIZ_TYPES } from "../models/quizModel";
import { createElement, createFormGroup } from "../utils";

export class ChoiceAdapter {

    protected _quizModel: QuizModel;
    _quizBodyDiv: HTMLDivElement;
    _mode: string;
    constructor(mode: string, quizModel: QuizModel, element: HTMLDivElement) {
        this._quizModel = quizModel;
        this._mode = mode;
        this._quizBodyDiv = element;
    }


    appendDragDiv(element, cssText: string = "") {
        let dragDiv = createElement("div", {}, ["col-1",]);
        let dragSign_ = createElement("span", {}, ["fa", "fa-sort",]);
        dragSign_.style.cssText = "margin: 0; position: relative;        top: 50%; left: 50%; -ms-transform: translate(50%, -50%);transform: translate(50%,-50%); font-size:25px" + ";" + cssText;
        dragDiv.appendChild(dragSign_);
        element.appendChild(dragDiv);
    }

    appendSelectDiv(element, type: string, isChecked: boolean = false, isDisabled: boolean = false): HTMLElement {
        let selectDiv = createElement("div", {}, ["col-1"]);
        let attrs = { "type": type, "dir": "auto", "name": this._quizModel.id + "_choices", "role": "choice-ctrl" }
        if (isDisabled) {
            attrs["disabled"] = "true"
        }
        let radio = createElement("input", attrs, []);
        radio.style.cssText = "margin: 0; position: relative;        top: 50%; left: 50%; -ms-transform: translate(50%, -50%);transform: translate(50%,-50%);width: 1.5rem; height: 1.5rem;";
        if (isChecked) {
            radio.setAttribute("checked", "true")
        }
        selectDiv.appendChild(radio);
        element.appendChild(selectDiv);
        return selectDiv
    }

    appendTextEditorDiv(index, row, text, help = true) {
        let textSpan = createFormGroup(
            this._quizModel.id + "_choice_" + index,
            "Choice",
            "textarea",
            {
                "dir": "auto",
                "data-choice-id": index

            },
            help ? "Choice " + index : ""
        );
        textSpan.classList.add("col-9");

        if (text) {
            (textSpan.querySelector(".form-control") as HTMLTextAreaElement).value = text;
        }
        row.appendChild(textSpan);
    }

    appendTextViewerDiv(index, row, text, attrs: object = {}, classes = [], style = "") {
        let textSpan = createElement("div", {
            "id": this._quizModel.id + "_choice_" + index,
            "data-choice-id": index
        },
            [], "")
        for (var key in attrs) {
            textSpan.setAttribute(key, attrs[key]);
        }
        textSpan.classList.add(...classes)
        textSpan.style.cssText = textSpan.style.cssText + ";" + style
        textSpan.innerText = text;
        row.appendChild(textSpan);
    }

    appendDelDiv(row, choiceEle) {
        let delDiv = createElement("span", {}, ["col-1"]);

        let del = createElement("button", { "type": "button" }, ["btn", "btn-danger",]
        );
        del.innerHTML = "<span><i class='fa fa-close ' ></i></span> ";
        del.style.cssText = "margin: 0; position: relative; top: 50%; left: 50%; -ms-transform: translate(50%, -50%);transform: translate(50%,-50%);";

        del.onclick = () => {
            this._quizBodyDiv.removeChild(choiceEle);
            this.updateModel(this._quizModel)
        };
        delDiv.appendChild(del);
        row.append(delDiv);
    }

    appendCorrectDiv(row, isChecked, isCorrect) {
        let correctDiv = createElement("div", {}, ["col-1"],);
        if (isCorrect) {
            row.classList.add("bg-success", "bg-opacity-10",);
        }
        if (isCorrect && isChecked) {
            correctDiv.innerHTML = "<i class='fa fa-check' style=' font-size:1rem; color: aqua'></i>"
        } else if (isChecked && !isCorrect) {
            correctDiv.innerHTML = "<i class='fa fa-close'  style=' font-size:1rem; color: red'></i>"
        } else if (isCorrect && !isChecked) {
            correctDiv.innerHTML = "<i class='fa fa-circle-o'  style=' font-size:1rem; color: palevioletred'></i>"
        }
        row.appendChild(correctDiv);
    }

    collectChoices() {
        let choices = this._quizBodyDiv.getElementsByClassName("quiz-choice");
        let choicesList = new ChoicesList(null);
        if (this._quizModel.type === QUIZ_TYPES.SC || this._quizModel.type === QUIZ_TYPES.MC || this._quizModel.type === QUIZ_TYPES.SORT) {
            for (var x = 0; x < choices.length; x++) {
                let c = choices[x];
                let textarea = c.getElementsByTagName("textarea")[0]
                let text = textarea.value;

                let choiceId = parseInt(textarea.getAttribute("data-choice-id")) || x
                let choice = new Choice(choiceId, text, null);
                choicesList.addChoice(choice);
            }
        }
        return choicesList;
    }

    get_correct() {
        let choices = this._quizBodyDiv.getElementsByClassName("quiz-choice");
        let correct = [];
        for (var x = 0; x < choices.length; x++) {
            let c = choices[x];
            let inputs = c.getElementsByTagName("input");
            for (var i = 0; i < inputs.length; i++) {
                let input = inputs[i];
                if (input.getAttribute("role") === "choice-ctrl") {
                    if (input.checked) {
                        correct.push(x);
                    }
                }
            }
        }
        return correct;
    }

    _createEditorElement(id: number, text: string = "", value: string = "", isChecked: boolean = false, is_disabled: boolean = false) {
        throw ("Not implemented");
    }

    createEditorElement(id: number = null, text: string = "", value: string = "", isChecked: boolean = false, is_disabled: boolean = false) {
        if (id === null || id === undefined) {
            id = this._quizBodyDiv.children.length;
        }
        return this._createEditorElement(id, text, value, isChecked, is_disabled)
    }

    updateView() {
        throw new Error('Method not implemented.');
    }

    updateModel(_quizModel: QuizModel): QuizModel {
        throw new Error('Method not implemented.');
    }
}

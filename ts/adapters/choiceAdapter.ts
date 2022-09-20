import { Choice } from "../models/choice";
import { ChoicesList } from "../models/choicesList";
import { QuizModel, QUIZ_TYPES } from "../models/quizModel";
import { createElement, createFormGroup } from "../utils";

export class ChoiceAdapter {

    protected _quizModel: QuizModel;
    _quiz_body_div: HTMLDivElement;
    _mode: string;
    constructor(mode: string, quizModel: QuizModel, element: HTMLDivElement) {
        this._quizModel = quizModel;
        this._mode = mode;
        this._quiz_body_div = element;
    }


    append_drag_div(element, cssText: string = "") {
        let drag_div = createElement("div", {}, ["col-1",]);
        let drag_sign_ = createElement("span", {}, ["fa", "fa-grip-vertical",]);
        drag_sign_.style.cssText = "margin: 0; position: relative;        top: 50%; left: 50%; -ms-transform: translate(50%, -50%);transform: translate(50%,-50%); font-size:25px" + ";" + cssText;
        drag_div.appendChild(drag_sign_);
        element.appendChild(drag_div);
    }

    append_select_div(element, type: string, is_checked: boolean = false, is_disabled: boolean = false): HTMLElement {
        let select_div = createElement("div", {}, ["col-1"]);
        let attrs = { "type": type, "dir": "auto", "name": this._quizModel.id + "_choices", "role": "choice-ctrl" }
        if (is_disabled) {
            attrs["disabled"] = "true"
        }
        let radio = createElement("input", attrs, []);
        radio.style.cssText = "margin: 0; position: relative;        top: 50%; left: 50%; -ms-transform: translate(50%, -50%);transform: translate(50%,-50%);width: 1.5rem; height: 1.5rem;";
        if (is_checked) {
            radio.setAttribute("checked", "true")
        }
        select_div.appendChild(radio);
        element.appendChild(select_div);
        return select_div
    }

    append_text_editor_div(index, row, text) {
        let text_span = createFormGroup(this._quizModel.id + "_choice_" + index, "Choice", "textarea", { "dir": "auto", }, "Choice " + index);
        text_span.classList.add("col-9");

        if (text) {
            (text_span.querySelector(".form-control") as HTMLTextAreaElement).value = text;
        }
        row.appendChild(text_span);
    }

    append_text_viewer_div(index, row, text, attrs: object = {}, classes = [], style = "") {
        let text_span = createElement("div", {
            "id": this._quizModel.id + "_choice_" + index
        },
            [], "")
        for (var key in attrs) {
            text_span.setAttribute(key, attrs[key]);
        }
        text_span.classList.add(...classes)
        text_span.style.cssText = text_span.style.cssText + ";" + style
        text_span.innerText = text;
        row.appendChild(text_span);
    }

    append_del_div(row, choice_ele) {
        let del_div = createElement("span", {}, ["col-1"]);

        let del = createElement("button", { "type": "button" }, ["btn", "btn-danger",]
        );
        del.innerHTML = "<span><i class='fa fa-close ' ></i></span> ";
        del.style.cssText = "margin: 0; position: relative; top: 50%; left: 50%; -ms-transform: translate(50%, -50%);transform: translate(50%,-50%);";

        del.onclick = () => {
            this._quiz_body_div.removeChild(choice_ele);
            this.update_model(this._quizModel)
        };
        del_div.appendChild(del);
        row.append(del_div);
    }

    append_correct_div(row, is_checked, is_correct) {
        let correct_div = createElement("div", {}, ["col-1"],);
        if (is_correct) {
            correct_div.innerHTML = "<i class='fa fa-check' style=' font-size:1.5rem; color: aqua'></i>"
        } else if (is_checked) {
            correct_div.innerHTML = "<i class='fa fa-close'  style=' font-size:1.5rem; color: red'></i>"
        }
        row.appendChild(correct_div);
    }

    collect_choices() {
        let choices = this._quiz_body_div.getElementsByClassName("quiz-choice");
        let choicesList = new ChoicesList(null);
        if (this._quizModel.type === QUIZ_TYPES.SC || this._quizModel.type === QUIZ_TYPES.MC || this._quizModel.type === QUIZ_TYPES.SORT) {
            for (var x = 0; x < choices.length; x++) {
                let c = choices[x];
                let text = c.getElementsByTagName("textarea")[0].value;
                let choice = new Choice(x, text, null);
                choicesList.add_choice(choice);
            }
        } else if (this._quizModel.type === QUIZ_TYPES.TF) {
            // empty choice list
        }
        return choicesList;
    }

    get_correct() {
        let choices = this._quiz_body_div.getElementsByClassName("quiz-choice");
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

    append_empty_choice(text = "",) {
        throw "Not implemented Yet"
    }

    update_view() {
        throw new Error('Method not implemented.');
    }

    update_model(_quizModel: QuizModel): QuizModel {
        throw new Error('Method not implemented.');
    }
}

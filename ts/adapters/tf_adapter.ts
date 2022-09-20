import { QuizModel } from "../models/quizModel";
import { HTML_MODE, QuizHTML } from "../quizHTML";
import { createElement } from "../utils";
import { ChoiceAdapter } from "./choiceAdapter";

export class TFAdapter extends ChoiceAdapter {
    constructor(mode: string, quizModel: QuizModel, element: HTMLDivElement) {
        super(mode, quizModel, element);
    }


    create_editor_element(text: string = "", value: string, is_checked: boolean = false, is_disabled: boolean = false) {
        let index = this._quiz_body_div.children.length;
        let id = this._quizModel.id + "_choice_" + index;
        let choice_ele = createElement("div",
            { "id": id, "data-id": id, "draggable": true, },
            ["quiz-choice", "m-4"]
        );
        let row = createElement("div", {}, ["row"]);
        let select_div = createElement("div", {}, ["col-1", "input-group", "mb-3"]);
        let radio = createElement("input", { "type": "radio", "dir": "auto", "name": this._quizModel.id + "_choices", "role": "choice-ctrl", "data-value": value }, []);
        if (is_checked) {
            radio.setAttribute("checked", "true")
        }
        radio.style.cssText = "margin: 0; position: relative;        top: 50%; left: 50%; -ms-transform: translate(50%, -50%);transform: translate(50%,-50%);width: 1.5rem; height:1.5rem";
        select_div.appendChild(radio);
        row.appendChild(select_div);



        this.append_text_viewer_div(index, row, text, {}, ["col-11"])
        choice_ele.appendChild(row);
        this._quiz_body_div.appendChild(choice_ele);

    }


    create_viewer_element(text: string = "", val: string, is_checked: boolean = false, is_correct: boolean = false, is_disabled: boolean = false, show_correct_answer: boolean = false) {
        let index = this._quiz_body_div.children.length;
        let id = this._quizModel.id + "_choice_" + index;
        let choice_ele = createElement("div",
            {
                "id": id, "data-id": id, "draggable": true,
            },
            ["quiz-choice", "m-4"]
        );
        let row = createElement("div", {}, ["row"]);
        let sel_div = this.append_select_div(row, "radio", is_checked, is_disabled)
        sel_div.firstElementChild.setAttribute("data-value", val)

        let classes = ["col-11"]
        if (show_correct_answer) {
            classes = ["col-10"]
        }

        this.append_text_viewer_div(index, row, text, {}, classes, "")

        if (show_correct_answer) {
            this.append_correct_div(row, is_checked, is_correct)
        }

        choice_ele.appendChild(row);
        this._quiz_body_div.appendChild(choice_ele);
    }


    update_view() {
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
            let is_correct = this._quizModel.correct.indexOf(x) != -1;
            let is_checked = this._quizModel.answer.indexOf(x) != -1;
            if (this._mode === HTML_MODE.ANSWER) {
                this.create_viewer_element(text, val, false, false, false, false);
            } else if (this._mode === HTML_MODE.UPDATE_ANSWER) {
                this.create_viewer_element(text, val, is_checked);

            } else if (this._mode === HTML_MODE.CREATE) {
                this.create_editor_element(text, val, is_correct)
            } else if (this._mode === HTML_MODE.SHOW_RESULT) {
                this.create_viewer_element(text, val, is_checked, is_correct, true, true);
            }
        }
    }

    update_model(quizModel: QuizModel): QuizModel {
        this._quizModel = quizModel;
        let choices = this._quiz_body_div.getElementsByClassName("quiz-choice");
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
            return this._quizModel;
        }

    }
}
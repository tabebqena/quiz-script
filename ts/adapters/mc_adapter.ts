import { QuizModel } from "../models/quizModel";
import { HTML_MODE, QuizHTML } from "../quizHTML";
import { createElement } from "../utils";
import { ChoiceAdapter } from "./choiceAdapter";

export class MCAdapter extends ChoiceAdapter {
    constructor(mode: string, quizModel: QuizModel, element: HTMLDivElement) {
        super(mode, quizModel, element);
    }
    create_editor_element(text: string = "", is_checked: boolean = false) {
        let index = this._quiz_body_div.children.length;
        let id = this._quizModel.id + "_choice_" + index;
        let choice_ele = createElement("div",
            { "id": id, "data-id": id, "draggable": true, },
            ["quiz-choice", "m-4"]
        );
        let row = createElement("div", {}, ["row"]);

        this.append_drag_div(row)
        this.append_select_div(row, "checkbox", is_checked)
        this.append_text_editor_div(index, row, text)
        this.append_del_div(row, choice_ele)

        choice_ele.appendChild(row);
        this._quiz_body_div.appendChild(choice_ele);
    }


    append_empty_choice() {
        this.create_editor_element()
    }


    create_viewer_element(text: string = "", is_checked: boolean = false, is_correct: boolean = false, is_disabled: boolean = false, show_correct_answer: boolean = false) {
        let index = this._quiz_body_div.children.length;
        let id = this._quizModel.id + "_choice_" + index;
        let choice_ele = createElement("div",
            {
                "id": id, "data-id": id, "draggable": true,
            },
            ["quiz-choice", "m-4"]
        );
        let row = createElement("div", {}, ["row"]);
        this.append_select_div(row, "checkbox", is_checked, is_disabled)
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
        for (var x = 0; x < this._quizModel.choices_list.length; x++) {
            let text = this._quizModel.choices_list.get_choice(x).text;
            let is_correct = this._quizModel.correct.indexOf(x) != -1;
            let is_checked = this._quizModel.answer.indexOf(x) != -1;
            if (this._mode === HTML_MODE.ANSWER) {
                this.create_viewer_element(text, false, false, false, false);
            } else if (this._mode === HTML_MODE.UPDATE_ANSWER) {
                this.create_viewer_element(text, is_checked);

            } else if (this._mode === HTML_MODE.CREATE) {
                this.create_editor_element(text, is_checked)
            } else if (this._mode === HTML_MODE.SHOW_RESULT) {
                this.create_viewer_element(text, is_checked, is_correct, true, true);
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
                        if (input.checked) {
                            answer.push(x);
                        }
                    }
                }
            }
            this._quizModel.answer = answer;
            return this._quizModel;
        } else if (this._mode === HTML_MODE.CREATE) {
            let choices_list = this.collect_choices();
            let correct = this.get_correct()
            this._quizModel.choices_list = choices_list;
            this._quizModel.correct = correct;
            return this._quizModel;
        }

    }
}
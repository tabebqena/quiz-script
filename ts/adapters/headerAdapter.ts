
import { QuizModel } from "../models/quizModel";
import { HTML_MODE } from "../quizHTML";
import { createElement, createFormGroup } from "../utils";

export class HeaderAdapter {

    private _header_div: HTMLDivElement;
    private _quizModel: QuizModel;
    private _quiz_title_textarea: any;
    private _quiz_hint_area: any;

    private _mode: string;

    constructor(mode: string, model: QuizModel, element: HTMLDivElement) {
        this._mode = mode;
        this._quizModel = model;
        this._header_div = element;
    }

    update_view() {
        if (this._mode === HTML_MODE.CREATE) {
            this.update_as_editor()
        } else {
            this.update_as_viewer()
        }
    }

    update_as_editor() {
        var ele = createFormGroup(this._quizModel.id + "_title", "Quiz Title", "textarea", { "placeholder": "Quiz Title", "required": "true", "dir": "auto", }, "Write the Quiz Title here ...")
        this._quiz_title_textarea = ele.querySelector('.form-control')

        this._quiz_title_textarea.style.cssText = "width:100%"
        this._header_div.appendChild(ele)

        var ele = createFormGroup(this._quizModel.id + "_hint", "Quiz Hint", "textarea", { "placeholder": "Quiz Hint", "dir": "auto", }, "Optional: Write the Quiz Hint here ( Text to help the student ) ...")

        this._quiz_hint_area = ele.querySelector(".form-control")
        this._quiz_hint_area.classList.add("text-muted")
        this._quiz_hint_area.style.cssText = "width:100%"

        this._header_div.appendChild(ele)
        if (this._quizModel.title) {
            this._quiz_title_textarea.value = this._quizModel.title;
        }
        if (this._quizModel.hint) {
            this._quiz_hint_area.value = this._quizModel.hint;
        }
    }

    update_as_viewer() {
        var ele = createElement("div", {}, ["text-primary", "h2"]);
        ele.innerText = this._quizModel.title
        this._header_div.appendChild(ele)
        var ele = createElement("div", {}, ["card-subtitle", "text-muted", "m3"])
        ele.innerText = this._quizModel.hint
        this._header_div.appendChild(ele)
    }



    update_model(): QuizModel {
        this._quizModel.title = this._quiz_title_textarea.value;
        this._quizModel.hint = this._quiz_hint_area.value;
        console.log(this._quizModel)

        return this._quizModel;
    }
}

import { QuizModel } from "../models/quizModel";
import { HTML_MODE } from "../quizHTML";
import { createElement } from "../utils";

export class LearningNotesAdapter {
    private _lp_textarea: HTMLTextAreaElement;
    private _mode: string;
    private _quizModel: QuizModel;
    private _learning_notes_bar: HTMLDivElement;
    constructor(mode: string, model: QuizModel, learning_notes_bar: HTMLDivElement) {
        this._mode = mode;
        this._quizModel = model;
        this._learning_notes_bar = learning_notes_bar;
    }

    update_view() {
        if (this._mode === HTML_MODE.CREATE) {
            this._lp_textarea = (createElement("textarea", { "rows": 3, "placeholder": "learning notes", "dir": "auto", }, [], "width:100%") as HTMLTextAreaElement)
            this._lp_textarea.value = this._quizModel.learning_notes
            this._learning_notes_bar.appendChild(this._lp_textarea)

        } else if (this._mode === HTML_MODE.SHOW_RESULT) {
            let ele = createElement("div", {}, ["alert", "alert-info"], "width:100%")
            ele.innerText = this._quizModel.learning_notes
            this._learning_notes_bar.appendChild(ele)

        }
    }

    update_model(): QuizModel {
        let ln = this._lp_textarea.value;
        this._quizModel.learning_notes = ln;
        return this._quizModel;
    }
}

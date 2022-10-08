import { QuizModel } from "../models/quizModel";
import { HTML_MODE } from "../quizHTML";
import { createElement } from "../utils";

export class LearningNotesAdapter {
    private _lpTextarea: HTMLTextAreaElement;
    private _mode: string;
    private _quizModel: QuizModel;
    private _learningNotesBar: HTMLDivElement;
    constructor(mode: string, model: QuizModel, learningNotesBar: HTMLDivElement) {
        this._mode = mode;
        this._quizModel = model;
        this._learningNotesBar = learningNotesBar;
    }

    updateView() {
        if (this._mode === HTML_MODE.CREATE) {
            this._lpTextarea = (createElement("textarea", { "rows": 3, "placeholder": "learning notes", "dir": "auto", }, [], "width:100%") as HTMLTextAreaElement)
            this._lpTextarea.value = this._quizModel.learningNotes
            this._learningNotesBar.appendChild(this._lpTextarea)

        } else if (this._mode === HTML_MODE.SHOW_RESULT) {
            let text = this._quizModel.learningNotes
            if (text !== undefined && text !== null && text !== "") {
                let ele = createElement("div", {}, ["alert", "alert-info"], "width:100%")
                ele.innerText = this._quizModel.learningNotes
                this._learningNotesBar.appendChild(ele)
            }
        }
    }

    updateModel(): QuizModel {
        let ln = this._lpTextarea.value;
        this._quizModel.learningNotes = ln;
        return this._quizModel;
    }
}

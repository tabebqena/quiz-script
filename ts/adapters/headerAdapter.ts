
import { QuizModel } from "../models/quizModel";
import { HTML_MODE } from "../quizHTML";
import { createElement, createFormGroup } from "../utils";

export class HeaderAdapter {

    private _headerDiv: HTMLDivElement;
    private _quizModel: QuizModel;
    private _quizTitleTextarea: any;
    private _quizHintArea: any;

    private _mode: string;

    constructor(mode: string, model: QuizModel, element: HTMLDivElement) {
        this._mode = mode;
        this._quizModel = model;
        this._headerDiv = element;
    }

    updateView() {
        if (this._mode === HTML_MODE.CREATE) {
            this.updateAsEditor()
        } else {
            this.updateAsViewer()
        }
    }

    updateAsEditor() {
        var ele = createFormGroup(this._quizModel.id + "_title", "Quiz Title", "textarea", { "placeholder": "Quiz Title", "required": "true", "dir": "auto", }, "Write the Quiz Title here ...")
        this._quizTitleTextarea = ele.querySelector('.form-control')

        this._quizTitleTextarea.style.cssText = "width:100%"
        this._headerDiv.appendChild(ele)

        var ele = createFormGroup(this._quizModel.id + "_hint", "Quiz Hint", "textarea", { "placeholder": "Quiz Hint", "dir": "auto", }, "Optional: Write the Quiz Hint here ( Text to help the student ) ...")

        this._quizHintArea = ele.querySelector(".form-control")
        this._quizHintArea.classList.add("text-muted")
        this._quizHintArea.style.cssText = "width:100%"

        this._headerDiv.appendChild(ele)
        if (this._quizModel.title) {
            this._quizTitleTextarea.value = this._quizModel.title;
        }
        if (this._quizModel.hint) {
            this._quizHintArea.value = this._quizModel.hint;
        }
    }

    updateAsViewer() {
        var ele = createElement("div", {}, ["text-primary", "h2"]);
        ele.innerText = this._quizModel.title
        this._headerDiv.appendChild(ele)
        var ele = createElement("div", {}, ["card-subtitle", "text-muted", "m3"])
        ele.innerText = this._quizModel.hint
        this._headerDiv.appendChild(ele)
    }



    updateModel(): QuizModel {
        this._quizModel.title = this._quizTitleTextarea.value;
        this._quizModel.hint = this._quizHintArea.value;
        console.log(this._quizModel)

        return this._quizModel;
    }
}

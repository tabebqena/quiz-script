import { QUIZ_TYPES } from "./models/quizModel";
import { createElement } from "./utils";

export class QuizLayoutCreator {
    private _element: HTMLFormElement;

    private _header_div: HTMLDivElement;
    private _ctrl_bar: HTMLElement;
    private _learning_notes_bar: HTMLDivElement;
    private _quiz_body_div: HTMLDivElement;
    private _media_div: HTMLDivElement;
    private _status_bar: HTMLElement;
    //
    public get learning_notes_bar(): HTMLDivElement {
        return this._learning_notes_bar;
    }

    public get header_div(): HTMLDivElement {
        return this._header_div;
    }
    public get element(): HTMLFormElement {
        return this._element;
    }
    public get quiz_body_div(): HTMLDivElement {
        return this._quiz_body_div;
    }
    public get media_div(): HTMLDivElement {
        return this._media_div;
    }

    public get status_bar(): HTMLElement {
        return this._status_bar;
    }

    constructor(callbacks) {
        this._element = (createElement("form", {}, ["quiz-card", "border-primary"]) as HTMLFormElement);
        this._header_div = (createElement("div", {}, ["quiz-header", "card-header", "container", "container-fluid"]) as HTMLDivElement);
        this._element.appendChild(this._header_div);

        if (callbacks.onAddImageToQuizClicked || callbacks.onImageClicked) {
            this._media_div = (createElement("div", {}, ["quiz-media", "card"]) as HTMLDivElement);
            this._element.appendChild(this._media_div);
        }

        this._quiz_body_div = (createElement("div", {}, ["quiz-body"]) as HTMLDivElement);
        this._element.appendChild(this._quiz_body_div)

        this._learning_notes_bar = (createElement("div", {}, ["col-12", "quiz-learning-notes"], "padding:5px") as HTMLDivElement);
        this._element.appendChild(this._learning_notes_bar)
        this._status_bar = createElement("p", {}, ["form-text", "text-center", "text-danger"])
        this._element.appendChild(this._status_bar)
    }


    add_ctrl_bar() {
        // The user is responsible for creating this bar

        return;
        // this._ctrl_bar = createElement("div", {}, ["col-12", "btn-group"], "padding:5px")

        // if (this._quizHTML._quizModel.type != QUIZ_TYPES.TF) {
        //     let add_option = createElement("input",
        //         {
        //             "type": "button",
        //             "value": "Add Choice",
        //             "where": "div"
        //         },
        //         ["btn", "btn-secondary", "m-2"])

        //     add_option.onclick = () => {
        //         this._quizHTML.add_choice()
        //     }
        //     // this._ctrl_bar.appendChild(add_option)
        //     // Add it to the quiz body for better view

        //     this._quiz_body_div.appendChild(add_option);
        // }
        // let submit = createElement("input",
        //     {
        //         "type": "button",
        //         "value": "Submit"
        //     },
        //     ["btn", "btn-primary", "quiz-submit", "m-2"])
        // submit.onclick = () => {
        //     this._quizHTML.onSubmit()
        // }
        // this._ctrl_bar.appendChild(submit)
        // let cancel = createElement("input",
        //     {
        //         "type": "button",
        //         "value": "Cancel"
        //     },
        //     ["btn", "btn-danger", "quiz-cancel", "m-2"])
        // cancel.onclick = () => {
        //     if (this._quizHTML._callbacks && this._quizHTML._callbacks.onCancelClicked) {
        //         this._quizHTML._callbacks.onCancelClicked()
        //     }
        // }
        // this._ctrl_bar.appendChild(cancel)
        // this._element.appendChild(this._ctrl_bar)
    }

}

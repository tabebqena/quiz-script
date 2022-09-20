import { createElement } from "./utils";

export class QuizLayoutCreator {
    private _element: HTMLFormElement;

    private _headerDiv: HTMLDivElement;
    private _ctrlBar: HTMLElement;
    private _learningNotesBar: HTMLDivElement;
    private _quizBodyDiv: HTMLDivElement;
    private _mediaDiv: HTMLDivElement;
    private _statusBar: HTMLElement;
    //
    public get learningNotesBar(): HTMLDivElement {
        return this._learningNotesBar;
    }

    public get headerDiv(): HTMLDivElement {
        return this._headerDiv;
    }
    public get element(): HTMLFormElement {
        return this._element;
    }
    public get quizBodyDiv(): HTMLDivElement {
        return this._quizBodyDiv;
    }
    public get mediaDiv(): HTMLDivElement {
        return this._mediaDiv;
    }

    public get statusBar(): HTMLElement {
        return this._statusBar;
    }

    constructor(callbacks) {
        this._element = (createElement("form", {}, ["quiz-card", "border-primary"]) as HTMLFormElement);
        this._headerDiv = (createElement("div", {}, ["quiz-header", "card-header", "container", "container-fluid"]) as HTMLDivElement);
        this._element.appendChild(this._headerDiv);

        if (callbacks.onAddImageToQuizClicked || callbacks.onImageClicked) {
            this._mediaDiv = (createElement("div", {}, ["quiz-media", "card"]) as HTMLDivElement);
            this._element.appendChild(this._mediaDiv);
        }

        this._quizBodyDiv = (createElement("div", {}, ["quiz-body"]) as HTMLDivElement);
        this._element.appendChild(this._quizBodyDiv)

        this._learningNotesBar = (createElement("div", {}, ["col-12", "quiz-learning-notes"], "padding:5px") as HTMLDivElement);
        this._element.appendChild(this._learningNotesBar)
        this._statusBar = createElement("p", {}, ["form-text", "text-center", "text-danger"])
        this._element.appendChild(this._statusBar)
    }


    addCtrlBar() {
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

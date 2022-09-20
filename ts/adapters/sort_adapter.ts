import { ChoiceAdapter } from "./choiceAdapter";
import { QuizHTML, HTML_MODE } from "../quizHTML";
import { QuizModel } from "../models/quizModel";
import { createElement, createFormGroup, get_random_str, shuffle } from "../utils";

export class SORTAdapter extends ChoiceAdapter {
    _uglify_id = {};
    constructor(mode: string, quizModel: QuizModel, element: HTMLDivElement) {
        super(mode, quizModel, element);
    }


    create_editor_element(text: string = "",) {
        let index = this._quiz_body_div.children.length;
        let id = this._quizModel.id + "_choice_" + index;
        let choice_ele = createElement("div",
            {
                "id": id,
                "data-id": id,
                "draggable": true,
            },
            ["quiz-choice", "m-4"]
        );
        let row = createElement("div", {}, ["row"]);
        this.append_drag_div(row);
        this.append_text_editor_div(0, row, text);
        this.append_del_div(row, choice_ele);
        choice_ele.appendChild(row);
        this._quiz_body_div.appendChild(choice_ele);
    }


    create_viewer_element(i, id, text: string = "", is_disabled: boolean = false, show_correct_answer: boolean = false) {
        let choice_ele = createElement("div",
            {
                "id": id,
                "data-id": id,
                "draggable": !show_correct_answer,
            },
            ["quiz-choice", "m-4"],
            "cursor: grab"
        );
        let row = createElement("div", {}, ["row"],);
        if (show_correct_answer) {
            this.append_drag_div(row, ";color: gray")
        } else {
            this.append_drag_div(row,)
        }

        let classes = ["col-11"]
        if (show_correct_answer) {
            classes = ["col-10"]
        }
        if (is_disabled) {
            classes.push("text-muted")
        }

        this.append_text_viewer_div(i, row, text, {}, classes, "")
        if (show_correct_answer) {
            let correct = []
            for (var x = 0; x < this._quizModel.choices_list.length; x++) {
                correct.push(x)
            }
            this.append_correct_div(row, true, correct[i] === this._quizModel.answer[i])
        }

        choice_ele.appendChild(row);
        this._quiz_body_div.appendChild(choice_ele);
    }


    append_empty_choice() {
        this.create_editor_element("")
    }



    update_view() {
        if (this._mode === HTML_MODE.CREATE) {
            for (var x = 0; x < this._quizModel.choices_list.length; x++) {
                this.create_editor_element(this._quizModel.choices_list.get_choice(x).text);
            }
            //this.create_sort_choice("");
        } else if (this._mode === HTML_MODE.ANSWER) {
            let sorted = this._quizModel.choices_list.choices_list.slice()
            // [c1,c2,c3 ]
            for (var x = 0; x < sorted.length; x++) {
                let id = get_random_str()
                this._uglify_id[id] = x
            }
            let choices = shuffle(shuffle(shuffle(this._quizModel.choices_list.choices_list.slice())))
            for (var i = 0; i < choices.length; i++) {
                let id = null;
                let text = choices[i]["text"]
                for (var z = 0; z < sorted.length; z++) {
                    let s = sorted[z]
                    if (s["text"] === text) {
                        id = Object.keys(this._uglify_id)[z]
                    }
                }
                this.create_viewer_element(i, id, text);
            }

        } else if (this._mode === HTML_MODE.UPDATE_ANSWER) {
            let sorted = this._quizModel.choices_list.choices_list.slice()
            if (!this._quizModel.answer) {
                this._quizModel.answer = []
            }
            for (var x = 0; x < sorted.length; x++) {
                let id = get_random_str()
                this._uglify_id[id] = x
            }
            // { rand:0, rand:1, rand: 2 }    
            let unsorted = shuffle(shuffle(shuffle(this._quizModel.choices_list.choices_list.slice())))
            for (var i = 0; i < unsorted.length; i++) {
                let id = null;
                let text = null;
                if (this._quizModel.answer.length == 0) {
                    text = unsorted[i]["text"]
                } else {
                    text = sorted[this._quizModel.answer[i]]["text"]
                }
                for (var z = 0; z < sorted.length; z++) {
                    let s = sorted[z]
                    if (s["text"] === text) {
                        id = Object.keys(this._uglify_id)[z]
                    }
                }
                this.create_viewer_element(i, id, text);
            }
        } else if (this._mode === HTML_MODE.SHOW_RESULT) {
            let sorted = this._quizModel.choices_list.choices_list.slice()
            let unsorted = shuffle(shuffle(shuffle(this._quizModel.choices_list.choices_list.slice())))
            let answer = this._quizModel.answer;

            if (!answer) {
                this._quizModel.answer = []
            }

            for (var x = 0; x < sorted.length; x++) {
                if (answer.indexOf(x) === -1) {
                    answer.push(x)
                }
            }

            for (var x = 0; x < sorted.length; x++) {
                let id = get_random_str()
                this._uglify_id[id] = x
            }

            let choices = sorted
            if (this._quizModel.answer.length === 0) {
                choices = unsorted
            }

            for (var i = 0; i < answer.length; i++) {
                let id = null;
                let text = choices[i]["text"];
                for (var z = 0; z < sorted.length; z++) {
                    let s = sorted[z]
                    if (s["text"] === text) {
                        id = Object.keys(this._uglify_id)[z]
                    }
                }
                this.create_viewer_element(i, id, text, true, true)
            }

            /* for (var i = 0; i < sorted.length; i++) {
                let id = null;
                let text = null;
                if (this._quizModel.answer.length == 0) {
                    text = unsorted[i]["text"]
                } else {
                    text = sorted[this._quizModel.answer[i]]["text"]
                }
                for (var z = 0; z < sorted.length; z++) {
                    let s = sorted[z]
                    if (s["text"] === text) {
                        id = Object.keys(this.uglify_id)[z]
                    }
                }
                this.create_sort_choice(id, text);
            } */
        }
    }

    update_model(quizModel: QuizModel): QuizModel {
        this._quizModel = quizModel;
        let choices = this._quiz_body_div.getElementsByClassName("quiz-choice");
        if (this._mode === HTML_MODE.ANSWER || this._mode === HTML_MODE.UPDATE_ANSWER) {
            let answer = [];
            for (var x = 0; x < choices.length; x++) {
                let c = choices[x];
                for (var x = 0; x < choices.length; x++) {
                    let id = choices[x].getAttribute("id")
                    answer.push(this._uglify_id[id]);
                }
            }
            this._quizModel.answer = answer;
            return this._quizModel;
        } else if (this._mode === HTML_MODE.CREATE) {
            let choices_list = this.collect_choices();
            //let correct = []//this.get_correct()
            this._quizModel.choices_list = choices_list;
            this._quizModel.correct = []//correct;
            return this._quizModel;
        }

    }
}
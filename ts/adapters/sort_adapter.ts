import { QuizModel } from "../models/quizModel";
import { HTML_MODE } from "../quizHTML";
import { createElement, getRandomStr, shuffle } from "../utils";
import { ChoiceAdapter } from "./choiceAdapter";

export class SORTAdapter extends ChoiceAdapter {
    _uglifyId = {};
    constructor(mode: string, quizModel: QuizModel, element: HTMLDivElement) {
        super(mode, quizModel, element);
    }


    createEditorElement(text: string = "",) {
        let index = this._quizBodyDiv.children.length;
        let id = this._quizModel.id + "_choice_" + index;
        let choiceEle = createElement("div",
            {
                "id": id,
                "data-id": id,
                "draggable": true,
            },
            ["quiz-choice", "m-4"]
        );
        let row = createElement("div", {}, ["row"]);
        this.appendDragDiv(row);
        this.appendTextEditorDiv(0, row, text);
        this.appendDelDiv(row, choiceEle);
        choiceEle.appendChild(row);
        this._quizBodyDiv.appendChild(choiceEle);
    }


    createViewerElement(i, id, text: string = "", isDisabled: boolean = false, showCorrectAnswer: boolean = false) {
        let choiceEle = createElement("div",
            {
                "id": id,
                "data-id": id,
                "draggable": !showCorrectAnswer,
            },
            ["quiz-choice", "m-4"],
            "cursor: grab"
        );
        let row = createElement("div", {}, ["row"],);
        if (showCorrectAnswer) {
            this.appendDragDiv(row, ";color: gray")
        } else {
            this.appendDragDiv(row,)
        }

        let classes = ["col-11"]
        if (showCorrectAnswer) {
            classes = ["col-10"]
        }
        if (isDisabled) {
            classes.push("text-muted")
        }

        this.appendTextViewerDiv(i, row, text, {}, classes, "")
        if (showCorrectAnswer) {
            let correct = []
            for (var x = 0; x < this._quizModel.choicesList.length; x++) {
                correct.push(x)
            }
            this.appendCorrectDiv(row, true, correct[i] === this._quizModel.answer[i])
        }

        choiceEle.appendChild(row);
        this._quizBodyDiv.appendChild(choiceEle);
    }


    appendEmptyChoice() {
        this.createEditorElement("")
    }



    updateView() {
        if (this._mode === HTML_MODE.CREATE) {
            for (var x = 0; x < this._quizModel.choicesList.length; x++) {
                this.createEditorElement(this._quizModel.choicesList.getChoice(x).text);
            }
            //this.create_sort_choice("");
        } else if (this._mode === HTML_MODE.ANSWER) {
            let sorted = this._quizModel.choicesList.choicesList.slice()
            // [c1,c2,c3 ]
            for (var x = 0; x < sorted.length; x++) {
                let id = getRandomStr()
                this._uglifyId[id] = x
            }
            let choices = shuffle(shuffle(shuffle(this._quizModel.choicesList.choicesList.slice())))
            for (var i = 0; i < choices.length; i++) {
                let id = null;
                let text = choices[i]["text"]
                for (var z = 0; z < sorted.length; z++) {
                    let s = sorted[z]
                    if (s["text"] === text) {
                        id = Object.keys(this._uglifyId)[z]
                    }
                }
                this.createViewerElement(i, id, text);
            }

        } else if (this._mode === HTML_MODE.UPDATE_ANSWER) {
            let sorted = this._quizModel.choicesList.choicesList.slice()
            if (!this._quizModel.answer) {
                this._quizModel.answer = []
            }
            for (var x = 0; x < sorted.length; x++) {
                let id = getRandomStr()
                this._uglifyId[id] = x
            }
            // { rand:0, rand:1, rand: 2 }    
            let unsorted = shuffle(shuffle(shuffle(this._quizModel.choicesList.choicesList.slice())))
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
                        id = Object.keys(this._uglifyId)[z]
                    }
                }
                this.createViewerElement(i, id, text);
            }
        } else if (this._mode === HTML_MODE.SHOW_RESULT) {
            let sorted = this._quizModel.choicesList.choicesList.slice()
            let unsorted = shuffle(shuffle(shuffle(this._quizModel.choicesList.choicesList.slice())))
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
                let id = getRandomStr()
                this._uglifyId[id] = x
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
                        id = Object.keys(this._uglifyId)[z]
                    }
                }
                this.createViewerElement(i, id, text, true, true)
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

    updateModel(quizModel: QuizModel): QuizModel {
        this._quizModel = quizModel;
        let choices = this._quizBodyDiv.getElementsByClassName("quiz-choice");
        if (this._mode === HTML_MODE.ANSWER || this._mode === HTML_MODE.UPDATE_ANSWER) {
            let answer = [];
            for (var x = 0; x < choices.length; x++) {
                let c = choices[x];
                for (var x = 0; x < choices.length; x++) {
                    let id = choices[x].getAttribute("id")
                    answer.push(this._uglifyId[id]);
                }
            }
            this._quizModel.answer = answer;
            return this._quizModel;
        } else if (this._mode === HTML_MODE.CREATE) {
            let choicesList = this.collectChoices();
            //let correct = []//this.get_correct()
            this._quizModel.choicesList = choicesList;
            this._quizModel.correct = []//correct;
            return this._quizModel;
        }

    }
}
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var choiceAdapter_1 = require("./choiceAdapter");
var quizHTML_1 = require("../models/quizHTML");
var utils_1 = require("../utils");
var SORTAdapter = /** @class */ (function (_super) {
    __extends(SORTAdapter, _super);
    function SORTAdapter(quizHTML) {
        var _this = _super.call(this, quizHTML) || this;
        _this._uglify_id = {};
        return _this;
    }
    SORTAdapter.prototype.create_editor_element = function (text) {
        if (text === void 0) { text = ""; }
        var index = this._quiz_body_div.children.length;
        var id = this._quizModel.id + "_choice_" + index;
        var choice_ele = utils_1.createElement("div", {
            "id": id,
            "data-id": id,
            "draggable": true,
        }, ["quiz-choice", "m-4"]);
        var row = utils_1.createElement("div", {}, ["row"]);
        this.append_drag_div(row);
        this.append_text_editor_div(0, row, text);
        this.append_del_div(row, choice_ele);
        choice_ele.appendChild(row);
        this._quiz_body_div.appendChild(choice_ele);
    };
    SORTAdapter.prototype.create_viewer_element = function (i, id, text, is_disabled, show_correct_answer) {
        if (text === void 0) { text = ""; }
        if (is_disabled === void 0) { is_disabled = false; }
        if (show_correct_answer === void 0) { show_correct_answer = false; }
        var choice_ele = utils_1.createElement("div", {
            "id": id,
            "data-id": id,
            "draggable": !show_correct_answer,
        }, ["quiz-choice", "m-4"], "cursor: grab");
        var row = utils_1.createElement("div", {}, ["row"]);
        if (show_correct_answer) {
            this.append_drag_div(row, ";color: gray");
        }
        else {
            this.append_drag_div(row);
        }
        var classes = ["col-11"];
        if (show_correct_answer) {
            classes = ["col-10"];
        }
        if (is_disabled) {
            classes.push("text-muted");
        }
        this.append_text_viewer_div(i, row, text, {}, classes, "");
        if (show_correct_answer) {
            var correct = [];
            for (var x = 0; x < this._quizModel.choices_list.length; x++) {
                correct.push(x);
            }
            this.append_correct_div(row, true, correct[i] === this._quizModel.answer[i]);
        }
        choice_ele.appendChild(row);
        this._quiz_body_div.appendChild(choice_ele);
    };
    SORTAdapter.prototype.append_empty_choice = function () {
        this.create_editor_element("");
    };
    SORTAdapter.prototype.update_view = function () {
        if (this._quizHTML.mode === quizHTML_1.HTML_MODE.CREATE) {
            for (var x = 0; x < this._quizModel.choices_list.length; x++) {
                this.create_editor_element(this._quizModel.choices_list.get_choice(x).text);
            }
            //this.create_sort_choice("");
        }
        else if (this._quizHTML.mode === quizHTML_1.HTML_MODE.ANSWER) {
            var sorted = this._quizModel.choices_list.choices_list.slice();
            // [c1,c2,c3 ]
            for (var x = 0; x < sorted.length; x++) {
                var id = utils_1.get_random_str();
                this._uglify_id[id] = x;
            }
            var choices = utils_1.shuffle(utils_1.shuffle(utils_1.shuffle(this._quizModel.choices_list.choices_list.slice())));
            for (var i = 0; i < choices.length; i++) {
                var id = null;
                var text = choices[i]["text"];
                for (var z = 0; z < sorted.length; z++) {
                    var s = sorted[z];
                    if (s["text"] === text) {
                        id = Object.keys(this._uglify_id)[z];
                    }
                }
                this.create_viewer_element(i, id, text);
            }
        }
        else if (this._quizHTML.mode === quizHTML_1.HTML_MODE.UPDATE_ANSWER) {
            var sorted = this._quizModel.choices_list.choices_list.slice();
            if (!this._quizModel.answer) {
                this._quizModel.answer = [];
            }
            for (var x = 0; x < sorted.length; x++) {
                var id = utils_1.get_random_str();
                this._uglify_id[id] = x;
            }
            // { rand:0, rand:1, rand: 2 }    
            var unsorted = utils_1.shuffle(utils_1.shuffle(utils_1.shuffle(this._quizModel.choices_list.choices_list.slice())));
            for (var i = 0; i < unsorted.length; i++) {
                var id = null;
                var text = null;
                if (this._quizModel.answer.length == 0) {
                    text = unsorted[i]["text"];
                }
                else {
                    text = sorted[this._quizModel.answer[i]]["text"];
                }
                for (var z = 0; z < sorted.length; z++) {
                    var s = sorted[z];
                    if (s["text"] === text) {
                        id = Object.keys(this._uglify_id)[z];
                    }
                }
                this.create_viewer_element(i, id, text);
            }
        }
        else if (this._quizHTML.mode === quizHTML_1.HTML_MODE.SHOW_RESULT) {
            var sorted = this._quizModel.choices_list.choices_list.slice();
            var unsorted = utils_1.shuffle(utils_1.shuffle(utils_1.shuffle(this._quizModel.choices_list.choices_list.slice())));
            var answer = this._quizModel.answer;
            if (!answer) {
                this._quizModel.answer = [];
            }
            for (var x = 0; x < sorted.length; x++) {
                if (answer.indexOf(x) === -1) {
                    answer.push(x);
                }
            }
            for (var x = 0; x < sorted.length; x++) {
                var id = utils_1.get_random_str();
                this._uglify_id[id] = x;
            }
            var choices = sorted;
            if (this._quizModel.answer.length === 0) {
                choices = unsorted;
            }
            for (var i = 0; i < answer.length; i++) {
                var id = null;
                var text = choices[i]["text"];
                for (var z = 0; z < sorted.length; z++) {
                    var s = sorted[z];
                    if (s["text"] === text) {
                        id = Object.keys(this._uglify_id)[z];
                    }
                }
                this.create_viewer_element(i, id, text, true, true);
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
    };
    SORTAdapter.prototype.update_model = function (quizModel) {
        this._quizModel = quizModel;
        var choices = this._quiz_body_div.getElementsByClassName("quiz-choice");
        if (this._quizHTML.mode === quizHTML_1.HTML_MODE.ANSWER || this._quizHTML.mode === quizHTML_1.HTML_MODE.UPDATE_ANSWER) {
            var answer = [];
            for (var x = 0; x < choices.length; x++) {
                var c = choices[x];
                for (var x = 0; x < choices.length; x++) {
                    var id = choices[x].getAttribute("id");
                    answer.push(this._uglify_id[id]);
                }
            }
            this._quizModel.answer = answer;
            return this._quizModel;
        }
        else if (this._quizHTML.mode === quizHTML_1.HTML_MODE.CREATE) {
            var choices_list = this.collect_choices();
            //let correct = []//this.get_correct()
            this._quizModel.choices_list = choices_list;
            this._quizModel.correct = []; //correct;
            return this._quizModel;
        }
    };
    return SORTAdapter;
}(choiceAdapter_1.ChoiceAdapter));
exports.SORTAdapter = SORTAdapter;

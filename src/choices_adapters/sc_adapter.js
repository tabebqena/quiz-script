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
var SCAdapter = /** @class */ (function (_super) {
    __extends(SCAdapter, _super);
    function SCAdapter(quizHTML) {
        return _super.call(this, quizHTML) || this;
    }
    SCAdapter.prototype.create_editor_element = function (text, is_checked) {
        if (text === void 0) { text = ""; }
        if (is_checked === void 0) { is_checked = false; }
        var index = this._quiz_body_div.children.length;
        var id = this._quizModel.id + "_choice_" + index;
        var choice_ele = utils_1.createElement("div", { "id": id, "data-id": id, "draggable": true, }, ["quiz-choice", "m-4"]);
        var row = utils_1.createElement("div", {}, ["row"]);
        this.append_drag_div(row);
        this.append_select_div(row, "radio", is_checked);
        this.append_text_editor_div(index, row, text);
        this.append_del_div(row, choice_ele);
        choice_ele.appendChild(row);
        this._quiz_body_div.appendChild(choice_ele);
    };
    SCAdapter.prototype.append_empty_choice = function () {
        this.create_editor_element();
    };
    SCAdapter.prototype.create_viewer_element = function (text, is_checked, is_correct, is_disabled, show_correct_answer) {
        if (text === void 0) { text = ""; }
        if (is_checked === void 0) { is_checked = false; }
        if (is_correct === void 0) { is_correct = false; }
        if (is_disabled === void 0) { is_disabled = false; }
        if (show_correct_answer === void 0) { show_correct_answer = false; }
        var index = this._quiz_body_div.children.length;
        var id = this._quizModel.id + "_choice_" + index;
        var choice_ele = utils_1.createElement("div", { "id": id, "data-id": id, "draggable": true,
        }, ["quiz-choice", "m-4"]);
        var row = utils_1.createElement("div", {}, ["row"]);
        this.append_select_div(row, "radio", is_checked, is_disabled);
        var classes = ["col-11"];
        if (show_correct_answer) {
            classes = ["col-10"];
        }
        this.append_text_viewer_div(index, row, text, {}, classes, "");
        if (show_correct_answer) {
            this.append_correct_div(row, is_checked, is_correct);
        }
        choice_ele.appendChild(row);
        this._quiz_body_div.appendChild(choice_ele);
    };
    SCAdapter.prototype.update_view = function () {
        for (var x = 0; x < this._quizModel.choices_list.length; x++) {
            var text = this._quizModel.choices_list.get_choice(x).text;
            var is_correct = this._quizModel.correct.indexOf(x) != -1;
            var is_checked = this._quizModel.answer.indexOf(x) != -1;
            if (this._quizHTML.mode === quizHTML_1.HTML_MODE.ANSWER) {
                this.create_viewer_element(text, false, false, false, false);
            }
            else if (this._quizHTML.mode === quizHTML_1.HTML_MODE.UPDATE_ANSWER) {
                this.create_viewer_element(text, is_checked);
            }
            else if (this._quizHTML.mode === quizHTML_1.HTML_MODE.CREATE) {
                this.create_editor_element(text, is_correct);
            }
            else if (this._quizHTML.mode === quizHTML_1.HTML_MODE.SHOW_RESULT) {
                this.create_viewer_element(text, is_checked, is_correct, true, true);
            }
        }
    };
    SCAdapter.prototype.update_model = function (quizModel) {
        this._quizModel = quizModel;
        var choices = this._quiz_body_div.getElementsByClassName("quiz-choice");
        if (this._quizHTML.mode === quizHTML_1.HTML_MODE.ANSWER || this._quizHTML.mode === quizHTML_1.HTML_MODE.UPDATE_ANSWER) {
            var answer = [];
            for (var x = 0; x < choices.length; x++) {
                var c = choices[x];
                var inputs = c.getElementsByTagName("input");
                for (var i = 0; i < inputs.length; i++) {
                    var input = inputs[i];
                    if (input.getAttribute("role") === "choice-ctrl") {
                        if (input.checked) {
                            answer.push(x);
                        }
                    }
                }
            }
            this._quizModel.answer = answer;
            return this._quizModel;
        }
        else if (this._quizHTML.mode === quizHTML_1.HTML_MODE.CREATE) {
            var choices_list = this.collect_choices();
            var correct = this.get_correct();
            this._quizModel.choices_list = choices_list;
            this._quizModel.correct = correct;
            return this._quizModel;
        }
    };
    return SCAdapter;
}(choiceAdapter_1.ChoiceAdapter));
exports.SCAdapter = SCAdapter;

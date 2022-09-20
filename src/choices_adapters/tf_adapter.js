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
var TFAdapter = /** @class */ (function (_super) {
    __extends(TFAdapter, _super);
    function TFAdapter(quizHTML) {
        return _super.call(this, quizHTML) || this;
    }
    TFAdapter.prototype.create_editor_element = function (text, value, is_checked, is_disabled) {
        if (text === void 0) { text = ""; }
        if (is_checked === void 0) { is_checked = false; }
        if (is_disabled === void 0) { is_disabled = false; }
        var index = this._quiz_body_div.children.length;
        var id = this._quizModel.id + "_choice_" + index;
        var choice_ele = utils_1.createElement("div", { "id": id, "data-id": id, "draggable": true, }, ["quiz-choice", "m-4"]);
        var row = utils_1.createElement("div", {}, ["row"]);
        var select_div = utils_1.createElement("div", {}, ["col-1", "input-group", "mb-3"]);
        var radio = utils_1.createElement("input", { "type": "radio", "dir": "auto", "name": this._quizModel.id + "_choices", "role": "choice-ctrl", "data-value": value }, []);
        if (is_checked) {
            radio.setAttribute("checked", "true");
        }
        radio.style.cssText = "margin: 0; position: relative;        top: 50%; left: 50%; -ms-transform: translate(50%, -50%);transform: translate(50%,-50%);width: 1.5rem; height:1.5rem";
        select_div.appendChild(radio);
        row.appendChild(select_div);
        this.append_text_viewer_div(index, row, text, {}, ["col-11"]);
        choice_ele.appendChild(row);
        this._quiz_body_div.appendChild(choice_ele);
    };
    TFAdapter.prototype.create_viewer_element = function (text, val, is_checked, is_correct, is_disabled, show_correct_answer) {
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
        var sel_div = this.append_select_div(row, "radio", is_checked, is_disabled);
        sel_div.firstElementChild.setAttribute("data-value", val);
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
    TFAdapter.prototype.update_view = function () {
        for (var x = 1; x > -1; x--) {
            var id = this._quizModel.id + "_choice_" + x;
            var val = "true";
            var text = "True";
            if (x === 0) {
                val = "false";
            }
            if (x === 0) {
                text = "False";
            }
            var is_correct = this._quizModel.correct.indexOf(x) != -1;
            var is_checked = this._quizModel.answer.indexOf(x) != -1;
            if (this._quizHTML.mode === quizHTML_1.HTML_MODE.ANSWER) {
                this.create_viewer_element(text, val, false, false, false, false);
            }
            else if (this._quizHTML.mode === quizHTML_1.HTML_MODE.UPDATE_ANSWER) {
                this.create_viewer_element(text, val, is_checked);
            }
            else if (this._quizHTML.mode === quizHTML_1.HTML_MODE.CREATE) {
                this.create_editor_element(text, val, is_correct);
            }
            else if (this._quizHTML.mode === quizHTML_1.HTML_MODE.SHOW_RESULT) {
                this.create_viewer_element(text, val, is_checked, is_correct, true, true);
            }
        }
    };
    TFAdapter.prototype.update_model = function (quizModel) {
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
                        var val = input.getAttribute("data-value");
                        if (input.checked && val === "true") {
                            answer = [1];
                        }
                        else if (input.checked && val === "false") {
                            answer = [0];
                        }
                    }
                }
            }
            this._quizModel.answer = answer;
            return this._quizModel;
        }
        else if (this._quizHTML.mode === quizHTML_1.HTML_MODE.CREATE) {
            var correct = [];
            for (var x = 0; x < choices.length; x++) {
                var c = choices[x];
                var inputs = c.getElementsByTagName("input");
                for (var i = 0; i < inputs.length; i++) {
                    var input = inputs[i];
                    if (input.getAttribute("role") === "choice-ctrl") {
                        var val = input.getAttribute("data-value");
                        if (input.checked && val === "true") {
                            correct = [1];
                        }
                        else if (input.checked && val === "false") {
                            correct = [0];
                        }
                    }
                }
            }
            this._quizModel.correct = correct;
            return this._quizModel;
        }
    };
    return TFAdapter;
}(choiceAdapter_1.ChoiceAdapter));
exports.TFAdapter = TFAdapter;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var choice_1 = require("../models/choice");
var choicesList_1 = require("../models/choicesList");
var quizModel_1 = require("../models/quizModel");
var utils_1 = require("../utils");
var ChoiceAdapter = /** @class */ (function () {
    function ChoiceAdapter(quizHTML) {
        this._quizHTML = quizHTML;
        this._quizModel = quizHTML.quizModel;
        this._quiz_body_div = quizHTML.layout_creator.quiz_body_div;
    }
    ChoiceAdapter.prototype.append_drag_div = function (element, cssText) {
        if (cssText === void 0) { cssText = ""; }
        var drag_div = utils_1.createElement("div", {}, ["col-1",]);
        var drag_sign_ = utils_1.createElement("span", {}, ["fa", "fa-grip-vertical",]);
        drag_sign_.style.cssText = "margin: 0; position: relative;        top: 50%; left: 50%; -ms-transform: translate(50%, -50%);transform: translate(50%,-50%); font-size:25px" + ";" + cssText;
        drag_div.appendChild(drag_sign_);
        element.appendChild(drag_div);
    };
    ChoiceAdapter.prototype.append_select_div = function (element, type, is_checked, is_disabled) {
        if (is_checked === void 0) { is_checked = false; }
        if (is_disabled === void 0) { is_disabled = false; }
        var select_div = utils_1.createElement("div", {}, ["col-1"]);
        var attrs = { "type": type, "dir": "auto", "name": this._quizModel.id + "_choices", "role": "choice-ctrl" };
        if (is_disabled) {
            attrs["disabled"] = "true";
        }
        var radio = utils_1.createElement("input", attrs, []);
        radio.style.cssText = "margin: 0; position: relative;        top: 50%; left: 50%; -ms-transform: translate(50%, -50%);transform: translate(50%,-50%);width: 1.5rem; height: 1.5rem;";
        if (is_checked) {
            radio.setAttribute("checked", "true");
        }
        select_div.appendChild(radio);
        element.appendChild(select_div);
        return select_div;
    };
    ChoiceAdapter.prototype.append_text_editor_div = function (index, row, text) {
        var text_span = utils_1.createFormGroup(this._quizModel.id + "_choice_" + index, "Choice", "textarea", { "dir": "auto", }, "Choice " + index);
        text_span.classList.add("col-9");
        if (text) {
            text_span.querySelector(".form-control").value = text;
        }
        row.appendChild(text_span);
    };
    ChoiceAdapter.prototype.append_text_viewer_div = function (index, row, text, attrs, classes, style) {
        var _a;
        if (attrs === void 0) { attrs = {}; }
        if (classes === void 0) { classes = []; }
        if (style === void 0) { style = ""; }
        var text_span = utils_1.createElement("div", {
            "id": this._quizModel.id + "_choice_" + index
        }, [], "");
        for (var key in attrs) {
            text_span.setAttribute(key, attrs[key]);
        }
        (_a = text_span.classList).add.apply(_a, classes);
        text_span.style.cssText = text_span.style.cssText + ";" + style;
        text_span.innerText = text;
        row.appendChild(text_span);
    };
    ChoiceAdapter.prototype.append_del_div = function (row, choice_ele) {
        var _this = this;
        var del_div = utils_1.createElement("span", {}, ["col-1"]);
        var del = utils_1.createElement("button", { "type": "button" }, ["btn-danger",]);
        del.innerHTML = "<span><i class='fa fa-close ' ></i></span> ";
        del.style.cssText = "margin: 0; position: relative; top: 50%; left: 50%; -ms-transform: translate(50%, -50%);transform: translate(50%,-50%);";
        del.onclick = function () {
            _this._quiz_body_div.removeChild(choice_ele);
        };
        del_div.appendChild(del);
        row.append(del_div);
    };
    ChoiceAdapter.prototype.append_correct_div = function (row, is_checked, is_correct) {
        var correct_div = utils_1.createElement("div", {}, ["col-1"]);
        if (is_correct) {
            correct_div.innerHTML = "<i class='fa fa-check' style=' font-size:1.5rem; color: aqua'></i>";
        }
        else if (is_checked) {
            correct_div.innerHTML = "<i class='fa fa-close'  style=' font-size:1.5rem; color: red'></i>";
        }
        row.appendChild(correct_div);
    };
    ChoiceAdapter.prototype.collect_choices = function () {
        var choices = this._quiz_body_div.getElementsByClassName("quiz-choice");
        var choicesList = new choicesList_1.ChoicesList(null);
        if (this._quizModel.type === quizModel_1.QUIZ_TYPES.SC || this._quizModel.type === quizModel_1.QUIZ_TYPES.MC || this._quizModel.type === quizModel_1.QUIZ_TYPES.SORT) {
            for (var x = 0; x < choices.length; x++) {
                var c = choices[x];
                var text = c.getElementsByTagName("textarea")[0].value;
                var choice = new choice_1.Choice(x, text, null);
                choicesList.add_choice(choice);
            }
        }
        else if (this._quizModel.type === quizModel_1.QUIZ_TYPES.TF) {
            // empty choice list
        }
        return choicesList;
    };
    ChoiceAdapter.prototype.get_correct = function () {
        var choices = this._quiz_body_div.getElementsByClassName("quiz-choice");
        var correct = [];
        for (var x = 0; x < choices.length; x++) {
            var c = choices[x];
            var inputs = c.getElementsByTagName("input");
            for (var i = 0; i < inputs.length; i++) {
                var input = inputs[i];
                if (input.getAttribute("role") === "choice-ctrl") {
                    if (input.checked) {
                        correct.push(x);
                    }
                }
            }
        }
        return correct;
    };
    ChoiceAdapter.prototype.append_empty_choice = function (text) {
        if (text === void 0) { text = ""; }
        throw "Not implemented Yet";
    };
    ChoiceAdapter.prototype.update_view = function () {
        throw new Error('Method not implemented.');
    };
    ChoiceAdapter.prototype.update_model = function (_quizModel) {
        throw new Error('Method not implemented.');
    };
    return ChoiceAdapter;
}());
exports.ChoiceAdapter = ChoiceAdapter;

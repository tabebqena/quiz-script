"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var quizHTML_1 = require("../models/quizHTML");
var quizModel_1 = require("../models/quizModel");
var utils_1 = require("../utils");
var QuizLayoutCreator = /** @class */ (function () {
    function QuizLayoutCreator(quizHTML) {
        this._quizHTML = quizHTML;
        this._element = utils_1.createElement("form", {}, ["quiz-card", "border-primary"]);
        this._header_div = utils_1.createElement("div", {}, ["quiz-header", "card-header", "container", "container-fluid"]);
        this._element.appendChild(this._header_div);
        this._media_div = utils_1.createElement("div", {}, ["quiz-media", "card"]);
        this._element.appendChild(this._media_div);
        this._quiz_body_div = utils_1.createElement("div", {}, ["quiz-body"]);
        this._element.appendChild(this._quiz_body_div);
        this._learning_notes_bar = utils_1.createElement("div", {}, ["col-12", "quiz-learning-notes"], "padding:5px");
        this._element.appendChild(this._learning_notes_bar);
        if (this._quizHTML.mode === quizHTML_1.HTML_MODE.CREATE) {
            this.add_ctrl_bar();
        }
        this.add_status_bar();
    }
    Object.defineProperty(QuizLayoutCreator.prototype, "learning_notes_bar", {
        get: function () {
            return this._learning_notes_bar;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuizLayoutCreator.prototype, "header_div", {
        get: function () {
            return this._header_div;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuizLayoutCreator.prototype, "element", {
        get: function () {
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuizLayoutCreator.prototype, "quiz_body_div", {
        get: function () {
            return this._quiz_body_div;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuizLayoutCreator.prototype, "media_div", {
        get: function () {
            return this._media_div;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuizLayoutCreator.prototype, "status_bar", {
        get: function () {
            return this._status_bar;
        },
        enumerable: true,
        configurable: true
    });
    QuizLayoutCreator.prototype.add_ctrl_bar = function () {
        var _this = this;
        this._ctrl_bar = utils_1.createElement("div", {}, ["col-12", "btn-group"], "padding:5px");
        if (this._quizHTML._quizModel.type != quizModel_1.QUIZ_TYPES.TF) {
            var add_option = utils_1.createElement("input", {
                "type": "button",
                "value": "Add Option"
            }, ["btn", "btn-secondary", "m-2"]);
            add_option.onclick = function () {
                _this._quizHTML.add_empty_choice();
            };
            this._ctrl_bar.appendChild(add_option);
        }
        var submit = utils_1.createElement("input", {
            "type": "button",
            "value": "Submit"
        }, ["btn", "btn-primary", "quiz-submit", "m-2"]);
        submit.onclick = function () {
            _this._quizHTML.onSubmitClicked();
        };
        this._ctrl_bar.appendChild(submit);
        var cancel = utils_1.createElement("input", {
            "type": "button",
            "value": "Cancel"
        }, ["btn", "btn-danger", "quiz-cancel", "m-2"]);
        cancel.onclick = function () {
            if (_this._quizHTML._callbacks && _this._quizHTML._callbacks.onCancelClicked) {
                _this._quizHTML._callbacks.onCancelClicked();
            }
        };
        this._ctrl_bar.appendChild(cancel);
        this._element.appendChild(this._ctrl_bar);
    };
    QuizLayoutCreator.prototype.add_status_bar = function () {
        this._status_bar = utils_1.createElement("p", {}, ["form-text", "text-center", "text-danger"]);
        this._element.appendChild(this._status_bar);
    };
    return QuizLayoutCreator;
}());
exports.QuizLayoutCreator = QuizLayoutCreator;

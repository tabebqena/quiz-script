"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var quizHTML_1 = require("../models/quizHTML");
var LearningNotesAdapter = /** @class */ (function () {
    function LearningNotesAdapter(QuizHTML) {
        this._quizHTML = QuizHTML;
    }
    LearningNotesAdapter.prototype.update_view = function () {
        if (this._quizHTML.mode === quizHTML_1.HTML_MODE.CREATE) {
            this._lp_textarea = utils_1.createElement("textarea", { "rows": 3, "placeholder": "learning notes", "dir": "auto", }, [], "width:100%");
            this._lp_textarea.value = this._quizHTML.quizModel.learning_notes;
            this._quizHTML.layout_creator.learning_notes_bar.appendChild(this._lp_textarea);
        }
        else if (this._quizHTML.mode === quizHTML_1.HTML_MODE.SHOW_RESULT) {
            var ele = utils_1.createElement("div", {}, ["alert", "alert-info"], "width:100%");
            ele.innerText = this._quizHTML.quizModel.learning_notes;
            this._quizHTML.layout_creator.learning_notes_bar.appendChild(ele);
        }
    };
    LearningNotesAdapter.prototype.update_model = function () {
        var ln = this._lp_textarea.value;
        this._quizHTML.quizModel.learning_notes = ln;
        return this._quizHTML.quizModel;
    };
    return LearningNotesAdapter;
}());
exports.LearningNotesAdapter = LearningNotesAdapter;

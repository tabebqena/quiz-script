"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var media_adapter_1 = require("../elements_adapters/media_adapter");
var quizModel_1 = require("./quizModel");
var sortablejs_1 = require("sortablejs");
var headerAdapter_1 = require("../elements_adapters/headerAdapter");
var QuizLayoutCreator_1 = require("./QuizLayoutCreator");
var learningNotesAdapter_1 = require("../elements_adapters/learningNotesAdapter");
var utils_1 = require("../utils");
exports.HTML_MODE = Object.freeze({
    CREATE: "CREATE",
    ANSWER: "ANSWER",
    UPDATE_ANSWER: "UPDATE_ANSWER",
    SHOW_RESULT: "SHOW_RESULT",
});
var QuizHTML = /** @class */ (function () {
    function QuizHTML(parent, quizModel, mode, callbacks) {
        this._quizModel = quizModel;
        this._mode = mode;
        this._callbacks = callbacks;
        this._layout_creator = new QuizLayoutCreator_1.QuizLayoutCreator(this);
        this._choices_adapter = utils_1.get_choice_adapter(this, this._quizModel.type);
        this._learning_notes_adapter = new learningNotesAdapter_1.LearningNotesAdapter(this);
        this._header_adapter = new headerAdapter_1.HeaderAdapter(this);
        this._media_adapter = new media_adapter_1.MediaAdapter(this, this._callbacks);
        this.update_view();
        if (parent) {
            parent.appendChild(this._layout_creator.element);
        }
    }
    Object.defineProperty(QuizHTML.prototype, "layout_creator", {
        // private _choices_reveal_answer_adapter: any;
        get: function () {
            return this._layout_creator;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuizHTML.prototype, "element", {
        get: function () {
            return this._layout_creator.element;
        },
        enumerable: true,
        configurable: true
    });
    QuizHTML.prototype.add_empty_choice = function () {
        if (this._quizModel.type !== quizModel_1.QUIZ_TYPES.TF) {
            this._choices_adapter.append_empty_choice();
        }
    };
    QuizHTML.prototype.add_media_item = function (type, url) {
        this._media_adapter.add_media_item(type, url);
        //this._quiz_header_editor_adapter.add_media_item(type, url)
    };
    QuizHTML.prototype.update_view = function () {
        this._header_adapter.update_view();
        this._media_adapter.update_view();
        this._choices_adapter.update_view();
        if (this.mode === exports.HTML_MODE.CREATE) {
            this._learning_notes_adapter.update_view();
            if ((this._quizModel.type === quizModel_1.QUIZ_TYPES.SC || this._quizModel.type === quizModel_1.QUIZ_TYPES.MC ||
                this._quizModel.type === quizModel_1.QUIZ_TYPES.SORT)) {
                var sortable = new sortablejs_1.Sortable(this.layout_creator.quiz_body_div, {
                    sort: true,
                    animation: 150,
                    draggable: ".quiz-choice",
                    direction: "vertical",
                });
            }
        }
        else if (this.mode === exports.HTML_MODE.ANSWER || this.mode === exports.HTML_MODE.UPDATE_ANSWER) {
            if (this._quizModel.type === quizModel_1.QUIZ_TYPES.SORT) {
                var sortable = new sortablejs_1.Sortable(this.layout_creator.quiz_body_div, {
                    sort: true,
                    animation: 150,
                    draggable: ".quiz-choice",
                    direction: "vertical",
                });
            }
        }
        else if (this.mode === exports.HTML_MODE.SHOW_RESULT) {
            this._learning_notes_adapter.update_view();
        }
    };
    QuizHTML.prototype.onSubmitClicked = function () {
        this.layout_creator.status_bar.innerText = "";
        this.update_model();
        var valid = this._quizModel.validate_full();
        if (valid.valid) {
            if (this._callbacks.onSubmitClicked) {
                this._callbacks.onSubmitClicked(this._quizModel);
            }
        }
        else {
            this.layout_creator.status_bar.innerText = valid.error;
        }
    };
    QuizHTML.prototype.update_model = function () {
        if (this.mode === exports.HTML_MODE.CREATE) {
            this._quizModel = this._header_adapter.update_model();
            this._quizModel = this._choices_adapter.update_model(this._quizModel);
            this._quizModel = this._learning_notes_adapter.update_model();
            this._quizModel = this._media_adapter.update_model();
        }
        else if (this.mode === exports.HTML_MODE.ANSWER || this.mode === exports.HTML_MODE.UPDATE_ANSWER) {
            this._quizModel = this._choices_adapter.update_model(this._quizModel); // this._choices_viewer_adapter.update_model(this._quizModel)
        }
        else if (this.mode === exports.HTML_MODE.SHOW_RESULT) {
            /* this._quizModel = this._choices_viewer_adapter.update_model(this._quizModel) */
        }
    };
    Object.defineProperty(QuizHTML.prototype, "quizModel", {
        /**
         * Getter quizModel
         * @return {QuizModel}
         */
        get: function () {
            return this._quizModel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuizHTML.prototype, "mode", {
        /**
         * Getter mode
         * @return {string}
         */
        get: function () {
            return this._mode;
        },
        enumerable: true,
        configurable: true
    });
    return QuizHTML;
}());
exports.QuizHTML = QuizHTML;

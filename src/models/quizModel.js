"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var choicesList_1 = require("./choicesList");
var mediaList_1 = require("./mediaList");
var choice_1 = require("./choice");
var utils_1 = require("../utils");
exports.QUIZ_TYPES = Object.freeze({
    SC: "SC",
    MC: "MC",
    TF: "TF",
    SORT: "SORT"
});
var QuizModel = /** @class */ (function () {
    function QuizModel(id, type, title, media_list, hint, choices_list, correct, answer, extra, learning_notes) {
        var valid = QuizModel.validate_empty(id, type, media_list, choices_list);
        if (!valid.valid) {
            throw valid;
        }
        this._id = id;
        this._type = type.toUpperCase();
        this._title = title || "";
        this._media_list = media_list || new mediaList_1.MediaList(null);
        this._hint = hint;
        this._choices_list = choices_list || new choicesList_1.ChoicesList(null);
        this._correct = correct || [];
        this._answer = answer || [];
        this._extra = extra || {};
        this._learning_notes = learning_notes || "";
    }
    Object.defineProperty(QuizModel.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuizModel.prototype, "type", {
        // no setter for id
        /*  */
        //_type
        get: function () {
            return this._type;
        },
        set: function (type) {
            if (!exports.QUIZ_TYPES.hasOwnProperty(type)) {
                throw "Invalid Type: " + type + "not in: " + exports.QUIZ_TYPES;
            }
            this._type = type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuizModel.prototype, "title", {
        // title
        get: function () {
            return this._title;
        },
        set: function (title) {
            /* if (! typeof (title) == "string"){
                throw "Invalid Title type"
            } */
            this._title = title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuizModel.prototype, "media_list", {
        get: function () {
            return this._media_list;
        },
        // media_list
        set: function (media_list) {
            console.log("80", mediaList_1.MediaList.is_valid(media_list));
            if (!mediaList_1.MediaList.is_valid(media_list)) {
                throw "Invalid media List " + typeof (media_list) + media_list;
            }
            this._media_list = media_list;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuizModel.prototype, "hint", {
        get: function () {
            return this._hint;
        },
        // hint
        set: function (hint) {
            if (typeof (hint) !== "string") {
                throw "Invalid Hint type";
            }
            this._hint = hint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuizModel.prototype, "choices_list", {
        get: function () {
            return this._choices_list;
        },
        // choices_list
        set: function (choices_list) {
            if (!choices_list.is_choice_list()) {
                throw "Invalid Choices List";
            }
            var old = this.choices_list;
            for (var i; i < choices_list.length; i++) {
                var choice = choices_list[i];
                if (!choice.is_choice()) {
                    throw "Invalid Type" + typeof (choice);
                }
                if (!choice_1.Choice.validate_empty(choice.id, choice.text, choice.media_list)) {
                    throw "Invalid: " + choice;
                    this._choices_list = old;
                }
            }
            this._choices_list = choices_list;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuizModel.prototype, "correct", {
        get: function () {
            return this._correct;
        },
        // correct
        set: function (correct) {
            if (this.type === exports.QUIZ_TYPES.SC || this.type === exports.QUIZ_TYPES.MC) {
                if (correct === []) {
                    this._correct = [];
                    return;
                }
                if (correct.constructor !== Array) {
                    throw "Inavalid " + correct.constructor;
                }
                for (var x = 0; x < correct.length; x++) {
                    var c = correct[x];
                    if (typeof (c) !== "number") {
                        throw "Invalid choice type " + c + " " + typeof (c);
                    }
                }
                if (correct.length > this.choices_list.length) {
                    throw "Invalid correct length: " + correct.length
                        + "choices_list length: "
                        + this.choices_list.length;
                }
            }
            else if (this.type === exports.QUIZ_TYPES.TF) {
                if (correct === []) {
                    this._correct = [];
                    return;
                }
                if (correct.constructor !== Array) {
                    throw "Inavalid " + correct.constructor;
                }
                for (var x = 0; x < correct.length; x++) {
                    var c = correct[x];
                    if (typeof (c) !== "number") {
                        throw "Invalid choice type " + c + " " + typeof (c);
                    }
                }
                if (correct.length > 1) {
                    throw "Invalid correct length: " + correct.length;
                }
            }
            this._correct = correct;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuizModel.prototype, "learning_notes", {
        get: function () {
            return this._learning_notes;
        },
        set: function (value) {
            this._learning_notes = value;
        },
        enumerable: true,
        configurable: true
    });
    QuizModel.prototype.remove_from_correct = function (choice_id) {
        if (this.type === exports.QUIZ_TYPES.SC || this.type === exports.QUIZ_TYPES.MC) {
            this.correct.splice(this.correct.indexOf(choice_id), 1);
            this.correct = this.correct.filter(utils_1.onlyUnique);
        }
        else if (this.type === exports.QUIZ_TYPES.TF) {
            this.correct = [0];
        }
    };
    QuizModel.prototype.add_to_correct = function (choice_id) {
        if (this.type === exports.QUIZ_TYPES.SC || this.type === exports.QUIZ_TYPES.MC) {
            if (!Number.isInteger(choice_id)) {
                throw "Invalid correct id type";
            }
            if (choice_id >= this.choices_list.length) {
                throw "Invalid correct value >" + this.choices_list.length;
            }
            this.correct.push(choice_id);
            this.correct = this.correct.filter(utils_1.onlyUnique);
        }
        else if (this.type === exports.QUIZ_TYPES.TF) {
            this.correct = [1];
        }
    };
    Object.defineProperty(QuizModel.prototype, "answer", {
        get: function () {
            return this._answer;
        },
        // answer
        set: function (answer) {
            if (this.type === exports.QUIZ_TYPES.SC || this.type === exports.QUIZ_TYPES.MC) {
                if (answer === []) {
                    this._answer = [];
                    return;
                }
                if (answer.constructor !== Array) {
                    throw "Inavalid " + answer.constructor;
                }
                for (var x = 0; x < answer.length; x++) {
                    var a = answer[x];
                    if (typeof (a) !== "number") {
                        throw "Invalid Answer type " + a + " " + typeof (a);
                    }
                }
                if (answer.length > this.choices_list.length) {
                    throw "Invalid answer " + answer + " choices_list: " + this.choices_list;
                }
            }
            else if (this.type === exports.QUIZ_TYPES.TF) {
                if (answer === []) {
                    this._answer = [];
                    return;
                }
                if (answer.constructor !== Array) {
                    throw "Inavalid " + answer.constructor;
                }
                for (var x = 0; x < answer.length; x++) {
                    var a = answer[x];
                    if (typeof (a) !== "number") {
                        throw "Invalid Answer type " + a + " " + typeof (a);
                    }
                }
                if (answer.length > 1) {
                    throw "Invalid answer " + answer + " length";
                }
            }
            this._answer = answer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuizModel.prototype, "extra", {
        get: function () {
            return this._extra;
        },
        // extra
        set: function (extra) {
            this._extra = extra;
        },
        enumerable: true,
        configurable: true
    });
    QuizModel.validate_empty = function (id, type, media_list, choices_list) {
        if (!id) {
            return { valid: false, error: "Invalid ID" };
        }
        if (!type) {
            return { valid: false, error: "Invalid Type: " + type };
        }
        if (!exports.QUIZ_TYPES.hasOwnProperty(type)) {
            return { valid: false, error: "Invalid Type: " + type };
        }
        if (media_list) {
            var v = mediaList_1.MediaList.is_valid(media_list);
            if (!v.valid) {
                return { valid: false, error: "Invalid Media List>" + v.error };
            }
        }
        if (choices_list) {
            var v = choicesList_1.ChoicesList.is_valid(choices_list);
            if (!v.valid) {
                return { valid: false, error: "Invalid Choices List> " + v.error };
            }
        }
        return { valid: true };
    };
    QuizModel.prototype.validate_full = function () {
        var v = QuizModel.validate_empty(this.id, this.type, this.media_list, this.choices_list);
        if (!v.valid) {
            return v;
        }
        if (!this.title || typeof (this.title) !== "string") {
            return { valid: false, error: "Invalid Quiz Title" };
        }
        if ((!this.hint && this.hint != "") || typeof (this.hint) !== "string") {
            return { valid: false, error: "Invalid Quiz Hint" };
        }
        if (this.type === exports.QUIZ_TYPES.SC ||
            this.type === exports.QUIZ_TYPES.MC ||
            this.type === exports.QUIZ_TYPES.SORT) {
            if (!this.choices_list || this.choices_list.length == 0) {
                return { valid: false, error: "No Choices" };
            }
            if (this.choices_list.length === 1) {
                return { valid: false, error: "Only one choice" };
            }
        }
        else if (this.type === exports.QUIZ_TYPES.TF) {
            if (this.choices_list && this.choices_list.length > 0) {
                return { valid: false, error: " Invalid choices length for T/F question. " };
            }
        }
        for (var x = 0; x < this.choices_list.length; x++) {
            var v_1 = this.choices_list.get_choice(x).validate_full();
            if (!v_1.valid) {
                return { valid: false, error: "Invalid choice: " + x + "error: " + v_1.error };
            }
        }
        if (this.type === exports.QUIZ_TYPES.SC) {
            if (!this.correct || this.correct.length < 1) {
                return { valid: false, error: "You should set the correct answer" };
            }
            if (this.correct.length > 1) {
                return { valid: false, error: "Single choice question can't accept more than one correct answer" };
            }
        }
        else if (this.type === exports.QUIZ_TYPES.MC) {
            if (!this.correct) {
                this.correct = [];
            }
        }
        else if (this.type === exports.QUIZ_TYPES.TF) {
            if (!this.correct || this.correct.length === 0) {
                return { valid: false, error: "You should set the correct answer" };
            }
            if (this.correct.length > 1) {
                return { valid: false, error: "True/False questions can't accept more than ONE correct answer" };
            }
            if (this.correct[0] != 0 && this.correct[0] != 1) {
                return { valid: false, error: "True/False questions can accept only T/F as correct answer" };
            }
        }
        //quiz.choices_list = this.choices_list;
        //quiz.correct = this.correct;
        return { valid: true };
    };
    QuizModel.to_dict = function (quiz) {
        return {
            'id': quiz.id,
            'type': quiz.type,
            'title': quiz.title,
            'hint': quiz.hint,
            'choices': quiz.choices_list.to_list(),
            'media_list': quiz.media_list.to_list(),
            'correct': quiz.correct,
            'answer': quiz.answer,
            'extra': quiz.extra,
            "learning_notes": quiz.learning_notes
        };
    };
    QuizModel.to_json = function (quiz) {
        return JSON.stringify(QuizModel.to_dict(quiz));
    };
    QuizModel.from_dict = function (d) {
        var media_list = new mediaList_1.MediaList(d.media_list);
        var choices_list = new choicesList_1.ChoicesList(d.choices);
        return new QuizModel(d.id, d.type, d.title, media_list, d.hint, choices_list, d.correct, d.answer, d.extra, d.learning_notes);
    };
    QuizModel.from_json = function (json) {
        return QuizModel.from_dict(JSON.parse(json));
    };
    return QuizModel;
}());
exports.QuizModel = QuizModel;

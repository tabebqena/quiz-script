"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var choice_1 = require("./choice");
var utils_1 = require("../utils");
var ChoicesList = /** @class */ (function () {
    function ChoicesList(input) {
        this._choices_list = [];
        if (input) {
            if (input.constructor === Array) {
                this.from_list(input);
            }
            else {
                try {
                    JSON.parse(input);
                    this.from_json(input);
                }
                catch (err) {
                    throw "Invalid input " + typeof (input);
                }
            }
            //throw "Invalid input " + typeof (input)
        }
        else {
            this._choices_list = [];
        }
    }
    ChoicesList.prototype.add_choice = function (choice) {
        if (!choice.is_choice) {
            throw "Invalid choice" + choice;
        }
        this._choices_list.push(choice);
        this._choices_list = this.choices_list.filter(utils_1.onlyUnique);
    };
    ChoicesList.prototype.remove_choice = function (index) {
        this._choices_list.splice(index, 1);
    };
    ChoicesList.prototype.get_choice_index = function (choice) {
        return this._choices_list.indexOf(choice);
    };
    ChoicesList.prototype.get_choice = function (index) {
        return this._choices_list[index];
    };
    ChoicesList.prototype.clear = function () {
        this._choices_list = [];
    };
    Object.defineProperty(ChoicesList.prototype, "choices_list", {
        get: function () {
            return this._choices_list;
        },
        enumerable: true,
        configurable: true
    });
    ChoicesList.prototype.from_list = function (list) {
        for (var x = 0; x < list.length; x++) {
            var choice = choice_1.Choice.from_dict(list[x]);
            this.add_choice(choice);
        }
        return this.choices_list;
    };
    ChoicesList.prototype.from_json = function (j) {
        var list = JSON.parse(j);
        return this.from_list(list);
    };
    ChoicesList.prototype.to_list = function () {
        var res = [];
        var choices = this.choices_list;
        for (var x = 0; x < choices.length; x++) {
            res.push(choice_1.Choice.to_dict(choices[x]));
        }
        return res;
    };
    ChoicesList.prototype.to_json = function () {
        return JSON.stringify(this.to_list());
    };
    ChoicesList.prototype.is_choice_list = function () {
        return true;
    };
    Object.defineProperty(ChoicesList.prototype, "length", {
        get: function () {
            return this._choices_list.length;
        },
        enumerable: true,
        configurable: true
    });
    ChoicesList.is_valid = function (choices_list) {
        if (!choices_list.is_choice_list()) {
            return { valid: false, error: "Invalid Choices List" };
        }
        var choices = choices_list.choices_list;
        for (var x = 0; x < choices.length; x++) {
            var m = choices[x];
            if (!m.is_choice) {
                return { valid: false, error: "Invalid Choice" + m };
            }
            var v = choice_1.Choice.validate_empty(m.id, m.text, m.media_list);
            if (!v.valid) {
                return v;
            }
        }
        return { valid: true };
    };
    return ChoicesList;
}());
exports.ChoicesList = ChoicesList;

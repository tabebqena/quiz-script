"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mediaList_1 = require("./mediaList");
var Choice = /** @class */ (function () {
    function Choice(id, text, media_list) {
        var valid = Choice.validate_empty(id, text, media_list);
        if (!valid.valid) {
            throw valid.error;
        }
        this._id = id;
        this._text = text || "";
        this._media_list = media_list || new mediaList_1.MediaList(null);
    }
    Object.defineProperty(Choice.prototype, "id", {
        // id
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Choice.prototype, "text", {
        get: function () {
            return this._text;
        },
        // no setter for id
        // text
        set: function (text) {
            if (typeof (text) !== "string") {
                throw "Invalid text type " + typeof (text);
            }
            this._text = text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Choice.prototype, "media_list", {
        get: function () {
            return this._media_list;
        },
        // media
        set: function (media_list) {
            if (mediaList_1.MediaList.is_valid(media_list).valid) {
                this._media_list = media_list;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Choice.prototype, "is_choice", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Choice.to_dict = function (choice) {
        return {
            "id": choice.id,
            "text": choice.text,
            "media_list": choice.media_list.to_list()
        };
    };
    Choice.to_json = function (choice) {
        return JSON.stringify(Choice.to_dict(choice));
    };
    Choice.from_dict = function (d) {
        return new Choice(d["id"], d["text"], new mediaList_1.MediaList(d["media_list"]));
    };
    Choice.from_json = function (json) {
        return Choice.from_dict(JSON.parse(json));
    };
    Choice.validate_empty = function (id, text, media_list) {
        if (id === null || id === undefined || id === NaN || !Number.isInteger(id)) {
            return { valid: false, error: "ID Error: " + id };
        }
        if (typeof (text) !== "string") {
            return { valid: false, error: "Invalid text type " + typeof (text) };
        }
        if (media_list) {
            var v = mediaList_1.MediaList.is_valid(media_list);
            if (!v.valid) {
                return { valid: false, error: "Invalid media list: " + v.error };
            }
        }
        return { valid: true };
    };
    Choice.prototype.validate_full = function () {
        var valid = Choice.validate_empty(this.id, this.text, this.media_list);
        if (!valid.valid) {
            return valid;
        }
        if (!this.text || this.text === "") {
            return { valid: false, error: "Invalid text" };
        }
        if (this.media_list) {
            var v = mediaList_1.MediaList.is_valid(this.media_list);
            if (!v.valid) {
                return { valid: false, error: "Invalid media list: " + v.error };
            }
        }
        return { valid: true };
    };
    return Choice;
}());
exports.Choice = Choice;

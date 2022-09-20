"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MEDIA_TYPE = Object.freeze({
    IMAGE: "IMAGE",
    AUDIO: "AUDIO",
    YOUTUBE: "YOUTUBE",
});
var MediaItem = /** @class */ (function () {
    function MediaItem(type, url) {
        var valid = MediaItem.validate_empty(type, url);
        if (!valid.valid) {
            throw valid.error;
        }
        this._type = type;
        this._url = url;
    }
    Object.defineProperty(MediaItem.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (type) {
            if (!exports.MEDIA_TYPE.hasOwnProperty(type)) {
                throw "Invalid type";
            }
            this._type = type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaItem.prototype, "url", {
        get: function () {
            return this._url;
        },
        set: function (url) {
            if (typeof (url) !== "string") {
                throw "Invalid url type " + typeof (url);
            }
            this._url = url;
        },
        enumerable: true,
        configurable: true
    });
    MediaItem.prototype.is_media_item = function () {
        return true;
    };
    MediaItem.validate_empty = function (type, url) {
        if (typeof (type) !== "string") {
            return { valid: false, error: "Invalid type" + typeof (type)
                    + " url: " + url
            };
        }
        return { valid: true };
    };
    MediaItem.prototype.validate_full = function () {
        var valid = MediaItem.validate_empty(this.type, this.url);
        if (!valid.valid) {
            return valid;
        }
        if (!this.type) {
            return { valid: false, error: "Invalid type" };
        }
        if (!this.url) {
            return { valid: false, error: "Invalid url" };
        }
        return { valid: true };
    };
    MediaItem.isMedia = function (m) {
        return m instanceof (MediaItem);
    };
    MediaItem.from_dict = function (d) {
        return new MediaItem(d["type"], d["url"]);
    };
    MediaItem.from_json = function (j) {
        var d = JSON.parse(j);
        return MediaItem.from_dict(d);
    };
    MediaItem.from = function (input) {
        try {
            var j = JSON.stringify(input);
            return MediaItem.from_json(j);
        }
        catch (e) {
            return MediaItem.from_dict(input);
        }
        throw "Invalid input: " + input + " type: " + typeof (input);
    };
    MediaItem.to_dict = function (mediaItem) {
        return { "type": mediaItem.type, "url": mediaItem.url };
    };
    MediaItem.to_json = function (json) {
        return JSON.stringify(MediaItem.to_dict(json));
    };
    return MediaItem;
}());
exports.MediaItem = MediaItem;

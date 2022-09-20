"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mediaItem_1 = require("./mediaItem");
var MediaList = /** @class */ (function () {
    function MediaList(input) {
        this._media_list = [];
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
            this._media_list = [];
        }
    }
    MediaList.prototype.add_media_item = function (item) {
        if (!mediaItem_1.MediaItem.isMedia(item) || !mediaItem_1.MediaItem.validate_empty(item.type, item.url)) {
            throw "Invalid item" + item;
        }
        this._media_list.push(item);
        //this._media_list = this.media_list.filter(onlyUnique)
    };
    MediaList.prototype.remove_media_item = function (index) {
        this._media_list.splice(index, 1);
    };
    MediaList.prototype.get_item_index = function (item) {
        return this._media_list.indexOf(item);
    };
    MediaList.prototype.get_media_item = function (index) {
        return this._media_list[index];
    };
    Object.defineProperty(MediaList.prototype, "media_list", {
        get: function () {
            return this._media_list;
        },
        enumerable: true,
        configurable: true
    });
    MediaList.prototype.from_list = function (list) {
        for (var x = 0; x < list.length; x++) {
            var media_item = mediaItem_1.MediaItem.from(list[x]);
            this.add_media_item(media_item);
        }
        return this.media_list;
    };
    MediaList.prototype.from_json = function (j) {
        var list = JSON.parse(j);
        this.from_list(list);
        return this.media_list;
    };
    MediaList.prototype.to_list = function () {
        var res = [];
        var medias = this.media_list;
        for (var x = 0; x < medias.length; x++) {
            res.push(mediaItem_1.MediaItem.to_dict(medias[x]));
        }
        return res;
    };
    MediaList.prototype.to_json = function () {
        return JSON.stringify(this.to_list());
    };
    MediaList.prototype.is_media_list = function () {
        return true;
    };
    Object.defineProperty(MediaList.prototype, "length", {
        get: function () {
            return this._media_list.length;
        },
        enumerable: true,
        configurable: true
    });
    MediaList.is_valid = function (media_list) {
        if (!media_list.is_media_list()) {
            return { valid: false, error: "Invalid Media List. Not media list" };
        }
        var medias = media_list.media_list;
        for (var x = 0; x < medias.length; x++) {
            var m = medias[x];
            console.log(m);
            console.log(m.is_media_item());
            if (!m.is_media_item()) {
                return { valid: false, error: "Invalid Media Item:" + m };
            }
            var v = mediaItem_1.MediaItem.validate_empty(m.type, m.url);
            console.log(v);
            if (!v.valid) {
                return v;
            }
        }
        return { valid: true };
    };
    return MediaList;
}());
exports.MediaList = MediaList;

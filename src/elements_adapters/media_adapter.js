"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mediaItem_1 = require("../models/mediaItem");
var quizHTML_1 = require("../models/quizHTML");
var utils_1 = require("../utils");
var MediaAdapter = /** @class */ (function () {
    function MediaAdapter(quizHTML, callbacks) {
        var _this = this;
        this._quizHTML = quizHTML;
        this._quizModel = quizHTML.quizModel;
        this._onAddImageToQuizClicked = callbacks.onAddImageToQuizClicked;
        this._onImageClicked = callbacks.onImageClicked;
        var container = utils_1.createElement("div", { "data-id": "container" }, []);
        this._quizHTML.layout_creator.media_div.appendChild(container);
        this._quiz_media_div = utils_1.createElement("div", {
            "id": this._quizModel.id + "_media",
            "data-ride": "carousel"
        }, ["quiz-media", "carousel", "slide"]);
        container.appendChild(this._quiz_media_div);
        if (this._quizHTML.mode === quizHTML_1.HTML_MODE.CREATE) {
            this.add_ctrl_bar(container);
        }
        var inner = utils_1.createElement("div", {}, ["carousel-inner", "col-10"]);
        this._quiz_media_div.appendChild(inner);
        var prev = utils_1.createElement("a", { "role": "button", "data-slide": "prev" }, ["carousel-control-prev", "col-1"], "background: black; z-index: 2");
        var prev_icon = utils_1.createElement("span", { "aria-hidden": "true" }, ["carousel-control-prev-icon",]);
        var prev_txt = utils_1.createElement("span", {}, ["sr-only"]);
        prev_txt.innerText = "Previous";
        prev.appendChild(prev_icon);
        prev.appendChild(prev_txt);
        prev.onclick = function () {
            var children = _this._quiz_media_div.firstElementChild.children;
            var l = children.length;
            var current_active = 0;
            for (var x = 0; x < l; x++) {
                var ele = children[x];
                if (ele.classList.contains("active")) {
                    current_active = x;
                    ele.classList.toggle("active");
                    break;
                }
            }
            var to = 0;
            if (current_active === 0) {
                to = l - 1;
            }
            else {
                to = current_active - 1;
            }
            children[to].classList.add("active");
        };
        this._quiz_media_div.appendChild(prev);
        var next = utils_1.createElement("a", { "role": "button", "data-slide": "next", }, ["carousel-control-next", "col-1"], "background: black; z-index: 2");
        var next_icon = utils_1.createElement("span", { "aria-hidden": "true" }, ["carousel-control-next-icon"]);
        var next_txt = utils_1.createElement("span", {}, ["sr-only"]);
        next_txt.innerText = "Next";
        next.appendChild(next_icon);
        next.appendChild(next_txt);
        next.onclick = function () {
            var children = _this._quiz_media_div.firstElementChild.children;
            var l = children.length;
            var current_active = 0;
            for (var x = 0; x < l; x++) {
                var ele = children[x];
                if (ele.classList.contains("active")) {
                    current_active = x;
                    ele.classList.toggle("active");
                    break;
                }
            }
            var to = 0;
            if (current_active === l - 1) {
                to = 0;
            }
            else {
                to = current_active + 1;
            }
            children[to].classList.add("active");
        };
        this._quiz_media_div.appendChild(next);
    }
    MediaAdapter.prototype.add_ctrl_bar = function (container) {
        var _this = this;
        var ctrl_bar = utils_1.createElement("div", {}, ["btn-group", "container", "row"]);
        container.appendChild(ctrl_bar);
        var add_image_btn = utils_1.createElement("button", {}, ["btn", "btn-lg"]);
        add_image_btn.innerHTML = "<span><i class='fa fa-image'></i></span>";
        add_image_btn.onclick = function (event) {
            event.preventDefault();
            try {
                _this._onAddImageToQuizClicked(_this._quizHTML);
            }
            catch (err) {
                console.error(err);
            }
        };
        ctrl_bar.appendChild(add_image_btn);
    };
    MediaAdapter.prototype.update_view = function () {
        var l = this._quizModel.media_list.length;
        if (l > 0) {
            for (var x = 0; x < l; x++) {
                var m = this._quizModel.media_list.get_media_item(x);
                this.add_media_item(m.type, m.url);
            }
        }
    };
    MediaAdapter.prototype.update_model = function () {
        var container = this._quiz_media_div.firstElementChild;
        var children = container.children;
        var l = children.length;
        for (var x = 0; x < l; x++) {
            var node = children[x];
            if (node.classList.contains("carousel-item")) {
                //let mediaItem = new MediaItem()
                var type = null;
                var url = null;
                if (node.getElementsByTagName("img").length > 0) {
                    type = mediaItem_1.MEDIA_TYPE.IMAGE;
                    url = (node.getElementsByTagName("img")[0]).getAttribute("src");
                    var item = new mediaItem_1.MediaItem(type, url);
                    this._quizModel.media_list.add_media_item(item);
                }
            }
        }
        return this._quizModel;
    };
    MediaAdapter.prototype.add_media_item = function (type, url) {
        var _this = this;
        if (!mediaItem_1.MEDIA_TYPE.hasOwnProperty(type)) {
            throw "Invalid media type: " + type;
        }
        if (!url) {
            throw "Invalid media url";
        }
        var item = utils_1.createElement("div", {}, ["carousel-item"], "height: auto; width: auto; min-width:100px; max-width: 500px; max-height: 500px; margin: 0; top: 50%; left: 50%;");
        item.onclick = function (ev) {
            _this._onImageClicked(url);
        };
        if (this._quizHTML.mode === quizHTML_1.HTML_MODE.CREATE) {
            var del = utils_1.createElement("button", {}, ["btn", "btn-danger"], "position: relative; right: 0; z-index: 5;");
            del.innerHTML = "<span class='fa fa-close' ></span>";
            del.onclick = function (event) {
                event.preventDefault();
                var nodes = _this._quiz_media_div.firstElementChild.children;
                var l = nodes.length;
                var active_index = 0;
                for (var x = 0; x < l; x++) {
                    var node = nodes[x];
                    if (node === item) {
                        active_index = x;
                    }
                }
                item.parentElement.removeChild(item);
                var nodes = _this._quiz_media_div.firstElementChild.children;
                var l = nodes.length;
                if (active_index !== 0) {
                    active_index = active_index - 1;
                }
                for (var x = 0; x < l; x++) {
                    var node = nodes[x];
                    //node.classList.remove("active")
                    if (x === active_index) {
                        node.classList.add("active");
                    }
                }
            };
            item.appendChild(del);
        }
        if (type == mediaItem_1.MEDIA_TYPE.IMAGE) {
            var img = utils_1.createElement("img", { "src": url, }, ["d-block", "w-100"]);
            item.appendChild(img);
            var nodes = this._quiz_media_div.firstElementChild.children;
            var l = nodes.length;
            for (var x = 0; x < l; x++) {
                var node = nodes[x];
                node.classList.remove("active");
            }
            this._quiz_media_div.firstElementChild.appendChild(item);
            item.classList.add("active");
        }
        else {
            throw "Not implemented yet";
        }
    };
    return MediaAdapter;
}());
exports.MediaAdapter = MediaAdapter;

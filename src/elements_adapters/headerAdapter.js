"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var utils_1 = require("../utils");
var HeaderAdapter = /** @class */ (function () {
    function HeaderAdapter(quizHTML) {
        this._quizHTML = quizHTML;
        this._quizModel = quizHTML.quizModel;
        this._header_div = quizHTML.layout_creator.header_div;
    }
    HeaderAdapter.prototype.update_view = function () {
        if (this._quizHTML.mode === index_1.HTML_MODE.CREATE) {
            this.update_as_editor();
        }
        else {
            this.update_as_viewer();
        }
    };
    HeaderAdapter.prototype.update_as_editor = function () {
        var ele = utils_1.createFormGroup(this._quizModel.id + "_title", "Quiz Title", "textarea", { "placeholder": "Quiz Title", "required": "true", "dir": "auto", }, "Write the Quiz Title here ...");
        this._quiz_title_textarea = ele.querySelector('.form-control');
        this._quiz_title_textarea.style.cssText = "width:100%";
        this._header_div.appendChild(ele);
        var ele = utils_1.createFormGroup(this._quizModel.id + "_hint", "Quiz Hint", "textarea", { "placeholder": "Quiz Hint", "dir": "auto", }, "Optional: Write the Quiz Hint here ( Text to help the student ) ...");
        this._quiz_hint_area = ele.querySelector(".form-control");
        this._quiz_hint_area.classList.add("text-muted");
        this._quiz_hint_area.style.cssText = "width:100%";
        this._header_div.appendChild(ele);
        if (this._quizModel.title) {
            this._quiz_title_textarea.value = this._quizModel.title;
        }
        if (this._quizModel.hint) {
            this._quiz_hint_area.value = this._quizModel.hint;
        }
    };
    HeaderAdapter.prototype.update_as_viewer = function () {
        var ele = utils_1.createElement("div", {}, ["text-primary", "h2"]);
        ele.innerText = this._quizModel.title;
        this._header_div.appendChild(ele);
        var ele = utils_1.createElement("div", {}, ["card-subtitle", "text-muted", "m3"]);
        ele.innerText = this._quizModel.hint;
        this._header_div.appendChild(ele);
    };
    HeaderAdapter.prototype.update_model = function () {
        this._quizModel.title = this._quiz_title_textarea.value;
        this._quizModel.hint = this._quiz_hint_area.value;
        /* let container =  this._quiz_media_div.firstElementChild
        let children = container.children;
        let l = children.length;
        for (var x= 0; x < l ; x ++){
            let node = children[x]
            
            if (node.classList.contains("carousel-item")){
                //let mediaItem = new MediaItem()
                let type = null;
                let url  = null;
                if (node.getElementsByTagName("img").length > 0){
                    type = MEDIA_TYPE.IMAGE;
                    url = (node.getElementsByTagName("img")[0] ).getAttribute("src")
                    let item = new MediaItem(type, url)
                    this._quizModel.media_list.add_media_item(item)
                }
            }
        } */
        return this._quizModel;
    };
    return HeaderAdapter;
}());
exports.HeaderAdapter = HeaderAdapter;

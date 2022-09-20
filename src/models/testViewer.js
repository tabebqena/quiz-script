"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var quizHTML_1 = require("./quizHTML");
var TestViewer = /** @class */ (function () {
    function TestViewer(element, quizzes, mode, callbacks) {
        this._small_ul_children = [];
        this._large_ul_children = [];
        this._tab_content_children = [];
        this._flagged = [];
        this._htmls = [];
        this._paginator_children = [];
        this._quizzes_indices = [];
        this._quizzes = quizzes;
        for (var x = 0; x < quizzes.length; x++) {
            var q = quizzes[x];
            if (!q.id) {
                throw "Quiz with no ID" + q;
            }
            if (this._quizzes_indices.includes(q.id)) {
                throw "repeated Quiz with id: " + q.id;
            }
            this._quizzes_indices.push(q.id);
        }
        this._element = element;
        this._mode = mode;
        if (["ANSWER", "UPDATE_ANSWER", "SHOW_RESULT"].indexOf(mode) == -1) {
            throw "Mode Should be in: " + ["ANSWER", "UPDATE_ANSWER", "SHOW_RESULT"];
        }
        this._callbacks = callbacks;
        this.create_layout();
        this.add_quizzes();
    }
    TestViewer.prototype.add_quizzes = function () {
        for (var x = 0; x < this._quizzes.length; x++) {
            this.add_li(x);
            this.add_content(this._quizzes[x]);
        }
        this.show(0);
    };
    TestViewer.prototype.create_layout = function () {
        var _this = this;
        this._nav = utils_1.createElement("nav", {}, ["navbar", "navbar-default", "navbar", "navbar-light", "bg-light"]);
        this._nav_toggler = utils_1.createElement("button", { "data-target": "#navbarMenu", "data-toggle": "collapse" }, ["navbar-toggler", "d-block", "d-md-none"]);
        this._nav_toggler.innerHTML = "<span class='navbar-toggler-icon'></span>";
        var small_ul_container = utils_1.createElement("div", { "id": "navbarMenu", }, ["collapse", "navbar-collapse", "d-md-none"]);
        this._small_ul = utils_1.createElement("ul", { "role": "tablist", "data-tabs": "tabs" }, ["nav", "navbar", , "navbar-nav", "d-block", "mr-auto"], "overflow-y:scroll; max-height:200px; white-space: nowrap"); // ,"navbar", "nav-tabs"
        small_ul_container.appendChild(this._small_ul);
        this._nav.appendChild(this._nav_toggler);
        this._nav.appendChild(small_ul_container);
        this._element.appendChild(this._nav);
        var large_ul_container = utils_1.createElement("div", {}, ["d-md-block", "d-none"]);
        this._large_ul = utils_1.createElement("ul", { "role": "tablist", "data-tabs": "tabs" }, ["d-block", "nav", "nav-tabs"], "overflow-x:scroll; white-space: nowrap;"); //, 
        large_ul_container.appendChild(this._large_ul);
        this._element.appendChild(large_ul_container);
        this._tab_content = utils_1.createElement("div", { "id": "myTabContent" }, []);
        this._element.appendChild(this._tab_content);
        this._paginator_container = utils_1.createElement("nav", { "aria-label": "Navigation " }, []);
        this._paginator = utils_1.createElement("ul", {}, ["pagination", "justify-content-center"], "max-width: 90%; oveerflow-y: scroll");
        this._prev_li = utils_1.createElement("li", {}, ["page-item", "btn",]);
        var prev_a = utils_1.createElement("a", {}, ["page-link",]);
        prev_a.innerHTML = "Previous";
        this._prev_li.appendChild(prev_a);
        this._paginator.appendChild(this._prev_li);
        this._prev_li.onclick = function () {
            _this.go_to_prev();
        };
        this._next_li = utils_1.createElement("li", {}, ["page-item", "btn",]);
        var next_a = utils_1.createElement("a", {}, ["page-link",]);
        next_a.innerHTML = "Next";
        this._next_li.appendChild(next_a);
        this._next_li.onclick = function () {
            _this.go_to_next();
        };
        this._paginator.appendChild(this._next_li);
        this._paginator_container.appendChild(this._paginator);
        this._element.appendChild(this._paginator_container);
    };
    TestViewer.prototype.go_to_next = function () {
        if (this._active_index === this._quizzes.length - 1) {
            return;
        }
        this.show(this._active_index + 1);
    };
    TestViewer.prototype.go_to_prev = function () {
        if (this._active_index === 0) {
            return;
        }
        this.show(this._active_index - 1);
    };
    TestViewer.prototype.on_icon_flagged = function (icon) {
        icon.classList.toggle("fa");
        icon.classList.toggle("text-danger");
    };
    TestViewer.prototype.on_icon_unflagged = function (icon) {
        icon.classList.toggle("fa");
        icon.classList.toggle("text-danger");
    };
    TestViewer.prototype.on_flag_clicked = function (clicked_id) {
        if (this._flagged.indexOf(clicked_id) === -1) {
            this._flagged.push(clicked_id);
        }
        else {
            this._flagged.splice(this._flagged.indexOf(clicked_id));
        }
        var smalls = this._small_ul_children; //this._small_ul.children
        var larges = this._large_ul_children; //this._large_ul.children
        for (var x = 0; x < smalls.length; x++) {
            var e = smalls[x];
            var data_id = e.getAttribute("data-id");
            if (e.getAttribute("data-id") === clicked_id + "_li") {
                if (this._flagged.indexOf(clicked_id) !== -1) {
                    e.classList.add("border-warning", "text-warning");
                    larges[x].classList.add("border-warning", "text-warning");
                    console.log(e);
                    this.on_icon_flagged(e.getElementsByClassName("flag")[0]);
                    this.on_icon_flagged(larges[x].getElementsByClassName("flag")[0]);
                }
                else {
                    e.classList.remove("border-warning", "text-warning");
                    larges[x].classList.remove("border-warning", "text-warning");
                    this.on_icon_unflagged(e.getElementsByClassName("flag")[0]);
                    this.on_icon_unflagged(larges[x].getElementsByClassName("flag")[0]);
                }
            }
        }
    };
    TestViewer.prototype.add_li = function (index) {
        var _this = this;
        var quizModel = this._quizzes[index];
        var id = quizModel.id + "_li";
        var lf = utils_1.createElement("span", {}, ["flag", "fa", "fa-flag", "fa-3x", "p-3"]);
        var sf = utils_1.createElement("span", {}, ["flag", "fa", "fa-flag", "fa-3x", "p-3"]);
        lf.onclick = function (e) {
            e.preventDefault();
            e.stopPropagation();
            _this.on_flag_clicked(quizModel.id);
        };
        sf.onclick = function (e) {
            e.preventDefault();
            e.stopPropagation();
            _this.on_flag_clicked(quizModel.id);
        };
        var l_span = utils_1.createElement("span", {}, ["page-link", "d-inline-block"], "max-width: 70%;  overflow: hidden;");
        l_span.innerHTML = (index + 1) + ": " + quizModel.title;
        var s_span = utils_1.createElement("span", {}, ["page-link", "d-inline-block",], "max-width: 70%;  overflow: hidden;");
        s_span.innerHTML = (index + 1) + ": " + quizModel.title;
        var large_li = utils_1.createElement("li", { "data-id": id }, [
            "nav-item",
            "border", "border-primary", "border-top-0", "border-left-0", "border-right-0", "text-primary", "m-3", "p-3", "col-5", "page-item"
        ], "display: inline-block; text-align: center;  text-decoration:none;");
        var small_li = utils_1.createElement("li", { "data-id": id }, ["nav-item", "page-item", "border", "border-primary", "border-top-0", "border-left-0", "border-right-0", "text-primary", "d-block", "m-2", "p-3", "col-12"]);
        var paginator_li = utils_1.createElement("li", { "data-id": id }, ["page-item", "btn",]);
        var paginator_a = utils_1.createElement("a", {}, ["page-link",]);
        //<li class="page-item"><a class="page-link" href="#">1</a></li>
        paginator_a.innerHTML = (index + 1) + "";
        paginator_li.appendChild(paginator_a);
        large_li.appendChild(lf);
        small_li.appendChild(sf);
        large_li.appendChild(l_span);
        small_li.appendChild(s_span);
        large_li.onclick = function () {
            _this.show(index);
        };
        small_li.onclick = large_li.onclick;
        paginator_li.onclick = large_li.onclick;
        this._small_ul.appendChild(small_li);
        this._small_ul_children.push(small_li);
        this._large_ul.appendChild(large_li);
        this._large_ul_children.push(large_li);
        this._paginator.insertBefore(paginator_li, this._next_li);
        this._paginator_children.push(paginator_li);
    };
    TestViewer.prototype.add_content = function (quizModel) {
        var _this = this;
        var div = utils_1.createElement("div", {
            "id": "quiz-" + quizModel.id + "-content",
            //"role":"tabpanel", 
            "aria-labelledby": "quiz-" + quizModel.id + "-tab"
        }, []); // "tab-pane", "fade"
        var callbacks = this._callbacks;
        callbacks.onSubmitClicked = function (model) {
            _this.onItemSubmitClicked(model);
        };
        var html = new quizHTML_1.QuizHTML(div, quizModel, this._mode, callbacks);
        this._htmls.push(html);
        var el = utils_1.createElement("div", {}, ["container-fluid", "container"]);
        var notes = utils_1.createElement("textarea", { "id": quizModel.id + "_user_notes", "placeholder": "Use this space to take your notes about the question. It will not saved", "dir": "auto", }, [], "width: 90%");
        el.appendChild(notes);
        div.appendChild(el);
        this._tab_content.appendChild(div);
        this._tab_content_children.push(div);
    };
    TestViewer.prototype.onItemSubmitClicked = function (model) {
        this._answers_models.push(model);
    };
    TestViewer.prototype.show = function (index) {
        // this._tab_content.firstElementChild.classList.add("show", "active")
        console.log(index);
        var quizModel = this._quizzes[index];
        this._active_id = quizModel.id;
        this._active_index = index;
        var li_id = quizModel.id + "_li";
        var smalls = this._small_ul_children; //this._small_ul.children
        var larges = this._large_ul_children; //this._large_ul.children
        var contents = this._tab_content_children; //this._tab_content.children
        for (var x = 0; x < smalls.length; x++) {
            var small = smalls[x];
            var large = larges[x];
            var paginator = this._paginator_children[x];
            var content = contents[x];
            if (small.getAttribute("data-id") === li_id) {
                small.classList.add("active");
                large.classList.add("active");
                paginator.classList.add("active");
                content.classList.remove("d-none");
            }
            else {
                small.classList.remove("active");
                large.classList.remove("active");
                paginator.classList.remove("active");
                content.classList.add("d-none");
            }
        }
    };
    TestViewer.prototype.onSubmitClicked = function () {
        for (var x = 0; x < this._htmls.length; x++) {
            var h = this._htmls[x];
            h.onSubmitClicked();
        }
        return this._answers_models;
    };
    return TestViewer;
}());
exports.TestViewer = TestViewer;

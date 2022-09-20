import { MediaItem, MEDIA_TYPE } from "../models/mediaItem";
import { QuizModel } from "../models/quizModel";
import { HTML_MODE, ICallbacks } from "../quizHTML";
import { createElement } from "../utils";

export class MediaAdapter {
    private _quizModel: QuizModel;
    private _quiz_media_div: HTMLElement;
    private _onAddImageToQuizClicked: CallableFunction;
    private _onImageClicked: (url: string) => void;
    private _media_div: HTMLDivElement;
    private _mode: string;

    constructor(mode: string, quizModel: QuizModel, media_div: HTMLDivElement, callbacks: ICallbacks) {
        this._mode = mode;
        this._media_div = media_div;
        this._quizModel = quizModel;

        this._onAddImageToQuizClicked = callbacks.onAddImageToQuizClicked;
        this._onImageClicked = callbacks.onImageClicked

        let container = createElement("div", { "data-id": "container" }, [])
        this._media_div.appendChild(container)
        this._quiz_media_div = createElement("div", {
            "id": this._quizModel.id + "_media",
            "data-ride": "carousel"
        }, ["quiz-media", "carousel", "slide"])
        container.appendChild(this._quiz_media_div)

        if (this._mode === HTML_MODE.CREATE) {
            this.add_ctrl_bar(container)
        }


        let inner = createElement("div", {}, ["carousel-inner", "col-10"])
        this._quiz_media_div.appendChild(inner)

        let prev = createElement("a", { "role": "button", "data-slide": "prev" }, ["carousel-control-prev", "col-1"], "background: black; z-index: 2")
        let prev_icon = createElement("span", { "aria-hidden": "true" }, ["carousel-control-prev-icon",])
        let prev_txt = createElement("span", {}, ["sr-only"])
        prev_txt.innerText = "Previous"
        prev.appendChild(prev_icon)
        prev.appendChild(prev_txt)
        prev.onclick = () => {
            let children = this._quiz_media_div.firstElementChild.children
            let l = children.length;
            let current_active = 0;
            for (var x = 0; x < l; x++) {
                let ele = children[x]
                if (ele.classList.contains("active")) {
                    current_active = x;

                    ele.classList.toggle("active")
                    break;
                }
            }
            let to = 0
            if (current_active === 0) {
                to = l - 1
            } else {
                to = current_active - 1
            }
            children[to].classList.add("active")
        }
        this._quiz_media_div.appendChild(prev)

        let next = createElement("a", { "role": "button", "data-slide": "next", }, ["carousel-control-next", "col-1"], "background: black; z-index: 2")
        let next_icon = createElement("span", { "aria-hidden": "true" }, ["carousel-control-next-icon"])
        let next_txt = createElement("span", {}, ["sr-only"])
        next_txt.innerText = "Next"
        next.appendChild(next_icon)
        next.appendChild(next_txt)
        next.onclick = () => {
            let children = this._quiz_media_div.firstElementChild.children
            let l = children.length;
            let current_active = 0;
            for (var x = 0; x < l; x++) {
                let ele = children[x]
                if (ele.classList.contains("active")) {
                    current_active = x;
                    ele.classList.toggle("active")
                    break;
                }
            }
            let to = 0;
            if (current_active === l - 1) {
                to = 0
            } else {
                to = current_active + 1
            }
            children[to].classList.add("active")
        }
        this._quiz_media_div.appendChild(next)



    }

    add_ctrl_bar(container) {
        let ctrl_bar = createElement("div", {}, ["btn-group", "container", "row"])
        container.appendChild(ctrl_bar)
        let add_image_btn = createElement("button", {}, ["btn", "btn-lg"])
        add_image_btn.innerHTML = "<span><i class='fa fa-image'></i></span>"
        add_image_btn.onclick = (event) => {
            event.preventDefault()
            try {
                this._onAddImageToQuizClicked()
            } catch (err) {
                console.error(err)
            }
        }
        ctrl_bar.appendChild(add_image_btn)

    }

    update_view() {
        let l = this._quizModel.media_list.length
        if (l > 0) {
            for (var x = 0; x < l; x++) {
                let m = this._quizModel.media_list.get_media_item(x)
                this.add_media_item(m.type, m.url)
            }
        }
    }


    update_model(): QuizModel {
        let container = this._quiz_media_div.firstElementChild
        let children = container.children;
        let l = children.length;
        for (var x = 0; x < l; x++) {
            let node = children[x]

            if (node.classList.contains("carousel-item")) {
                //let mediaItem = new MediaItem()
                let type = null;
                let url = null;
                if (node.getElementsByTagName("img").length > 0) {
                    type = MEDIA_TYPE.IMAGE;
                    url = (node.getElementsByTagName("img")[0]).getAttribute("src")
                    let item = new MediaItem(type, url)
                    this._quizModel.media_list.add_media_item(item)
                }
            }
        }
        return this._quizModel;
    }

    add_media_item(type: any, url: any) {

        if (!MEDIA_TYPE.hasOwnProperty(type)) {
            throw "Invalid media type: " + type
        }
        if (!url) {
            throw "Invalid media url"
        }

        let item = createElement("div", {}, ["carousel-item"],
            "height: auto; width: auto; min-width:100px; max-width: 500px; max-height: 500px; margin: 0; top: 50%; left: 50%;")
        item.onclick = (ev) => {
            this._onImageClicked(url)
        }
        if (this._mode === HTML_MODE.CREATE) {
            let del = createElement("button", {}, ["btn", "btn-danger"], "position: relative; right: 0; z-index: 5;")
            del.innerHTML = "<span class='fa fa-close' ></span>"
            del.onclick = (event) => {
                event.preventDefault();
                var nodes = this._quiz_media_div.firstElementChild.children
                var l = nodes.length;
                let active_index = 0
                for (var x = 0; x < l; x++) {
                    let node = nodes[x]
                    if (node === item) {
                        active_index = x
                    }
                }
                item.parentElement.removeChild(item)

                var nodes = this._quiz_media_div.firstElementChild.children
                var l = nodes.length;
                if (active_index !== 0) {
                    active_index = active_index - 1
                }
                for (var x = 0; x < l; x++) {
                    let node = nodes[x]
                    //node.classList.remove("active")
                    if (x === active_index) {
                        node.classList.add("active")
                    }
                }
            }
            item.appendChild(del)
        }
        if (type == MEDIA_TYPE.IMAGE) {
            let img = createElement("img", { "src": url, }, ["d-block", "w-100"],)
            item.appendChild(img)
            let nodes = this._quiz_media_div.firstElementChild.children
            let l = nodes.length;
            for (var x = 0; x < l; x++) {
                let node = nodes[x]
                node.classList.remove("active")
            }

            this._quiz_media_div.firstElementChild.appendChild(item)
            item.classList.add("active")
        } else {
            throw "Not implemented yet"
        }
    }


}

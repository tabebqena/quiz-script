
export function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

export function allowDrop(ev) {
    ev.preventDefault();
    if (ev.target.getAttribute("draggable") == "true")
        ev.dataTransfer.dropEffect = "none"; // dropping is not allowed
    else
        ev.dataTransfer.dropEffect = "all"; // drop it like it's hot

}

export function on_choice_dragstart(ev) {
    let target = ev.target
    ev.dataTransfer.setData("text", ev.target.id);
}

export function drop_choice(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

export function delete_choice(ev) {
    ev.target.parentElement.parentElement.parentElement.removeChild(ev.target.parentElement.parentElement)

}

function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

export function createElement(tag, attrs = {}, classes = [], cssText = ""): HTMLElement {
    let ele = document.createElement(tag)
    setAttributes(ele, attrs);
    ele.classList.add(...classes);
    ele.style.cssText = cssText;
    return ele;
}

export function createFormGroup(id, label, ctrl_tag, ctrl_attrs, help): HTMLElement {
    let ele = createElement("div", {}, ["form-group"])
    let label_ele = createElement("label", { "for": id + "_ctrl", "data-type": "ctrl-label" })
    label_ele.innerHTML = label;
    if (!ctrl_attrs) {
        ctrl_attrs = {}
    }
    ctrl_attrs["id"] = id + "_ctrl"
    ctrl_attrs["aria-describedby"] = id + "_help"
    ctrl_attrs["data-type"] = "ctrl"

    let control_ele = createElement(ctrl_tag, ctrl_attrs, ["form-control"])
    let help_ele = createElement("small", { "data-type": "ctrl-help" }, ["form-text", "text-muted"])
    help_ele.innerHTML = help

    ele.appendChild(label_ele)
    ele.appendChild(control_ele)
    ele.appendChild(help_ele)

    return ele
}



export function handle_drag(event) {
    const selectedItem = event.target
    const list = selectedItem.parentNode
    const x = event.clientX
    const y = event.clientY;

    selectedItem.classList.add('drag-sort-active');
    let swapItem = document.elementFromPoint(x, y) === null ? selectedItem : document.elementFromPoint(x, y);


    if (list === swapItem.parentNode) {
        swapItem = swapItem !== selectedItem.nextSibling ? swapItem : swapItem.nextSibling;
        list.insertBefore(selectedItem, swapItem);
    }
}

export function handle_drop(event) {
    event.target.classList.remove('drag-sort-active');
}

export function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

export function get_random_str(length = 5) {
    return Math.random().toString(36).substring(length);
}

Object.values = Object.values || function (o) { return Object.keys(o).map(function (k) { return o[k] }) };



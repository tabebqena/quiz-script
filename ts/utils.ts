
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

export function onChoiceDragStart(ev) {
    let target = ev.target
    ev.dataTransfer.setData("text", ev.target.id);
}

export function dropChoice(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

export function deleteChoice(ev) {
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

export function createFormGroup(id, label, ctrlTag, ctrlAttrs, help): HTMLElement {
    let ele = createElement("div", {}, ["form-group"])
    let labelEle = createElement("label", { "for": id + "_ctrl", "data-type": "ctrl-label" })
    labelEle.innerHTML = label;
    if (!ctrlAttrs) {
        ctrlAttrs = {}
    }
    ctrlAttrs["id"] = id + "_ctrl"
    ctrlAttrs["aria-describedby"] = id + "_help"
    ctrlAttrs["data-type"] = "ctrl"

    let controlEle = createElement(ctrlTag, ctrlAttrs, ["form-control"])
    let helpEle = createElement("small", { "data-type": "ctrl-help" }, ["form-text", "text-muted"])
    helpEle.innerHTML = help

    ele.appendChild(labelEle)
    ele.appendChild(controlEle)
    ele.appendChild(helpEle)

    return ele
}



export function handleDrag(event) {
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

export function handleDrop(event) {
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

export function getRandomStr(length = 5) {
    return Math.random().toString(36).substring(length);
}

Object.values = Object.values || function (o) { return Object.keys(o).map(function (k) { return o[k] }) };



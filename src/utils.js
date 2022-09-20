"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sort_adapter_1 = require("./choices_adapters/sort_adapter");
var tf_adapter_1 = require("./choices_adapters/tf_adapter");
var mc_adapter_1 = require("./choices_adapters/mc_adapter");
var sc_adapter_1 = require("./choices_adapters/sc_adapter");
var quizModel_1 = require("./models/quizModel");

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
exports.onlyUnique = onlyUnique;

function allowDrop(ev) {
  ev.preventDefault();
  if (ev.target.getAttribute("draggable") == "true")
    ev.dataTransfer.dropEffect = "none"; // dropping is not allowed
  else ev.dataTransfer.dropEffect = "all"; // drop it like it's hot
}
exports.allowDrop = allowDrop;

function on_choice_dragstart(ev) {
  var target = ev.target;
  ev.dataTransfer.setData("text", ev.target.id);
}
exports.on_choice_dragstart = on_choice_dragstart;

function drop_choice(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
exports.drop_choice = drop_choice;

function delete_choice(ev) {
  ev.target.parentElement.parentElement.parentElement.removeChild(
    ev.target.parentElement.parentElement
  );
}
exports.delete_choice = delete_choice;

function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

function createElement(tag, attrs, classes, cssText) {
  var _a;
  if (attrs === void 0) {
    attrs = {};
  }
  if (classes === void 0) {
    classes = [];
  }
  if (cssText === void 0) {
    cssText = "";
  }
  var ele = document.createElement(tag);
  setAttributes(ele, attrs);
  (_a = ele.classList).add.apply(_a, classes);
  ele.style.cssText = cssText;
  return ele;
}
exports.createElement = createElement;

function createFormGroup(id, label, ctrl_tag, ctrl_attrs, help) {
  var ele = createElement("div", {}, ["form-group"]);
  var label_ele = createElement("label", {
    for: id + "_ctrl",
    "data-type": "ctrl-label",
  });
  label_ele.innerHTML = label;
  if (!ctrl_attrs) {
    ctrl_attrs = {};
  }
  ctrl_attrs["id"] = id + "_ctrl";
  ctrl_attrs["aria-describedby"] = id + "_help";
  ctrl_attrs["data-type"] = "ctrl";
  var control_ele = createElement(ctrl_tag, ctrl_attrs, ["form-control"]);
  var help_ele = createElement("small", { "data-type": "ctrl-help" }, [
    "form-text",
    "text-muted",
  ]);
  help_ele.innerHTML = help;
  ele.appendChild(label_ele);
  ele.appendChild(control_ele);
  ele.appendChild(help_ele);
  return ele;
}
exports.createFormGroup = createFormGroup;

function handle_drag(event) {
  var selectedItem = event.target;
  var list = selectedItem.parentNode;
  var x = event.clientX;
  var y = event.clientY;
  selectedItem.classList.add("drag-sort-active");
  var swapItem =
    document.elementFromPoint(x, y) === null
      ? selectedItem
      : document.elementFromPoint(x, y);
  if (list === swapItem.parentNode) {
    swapItem =
      swapItem !== selectedItem.nextSibling ? swapItem : swapItem.nextSibling;
    list.insertBefore(selectedItem, swapItem);
  }
}
exports.handle_drag = handle_drag;

function handle_drop(event) {
  event.target.classList.remove("drag-sort-active");
}

exports.handle_drop = handle_drop;

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
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
exports.shuffle = shuffle;

function get_random_str(length) {
  if (length === void 0) {
    length = 5;
  }
  return Math.random().toString(36).substring(length);
}
exports.get_random_str = get_random_str;

Object.values =
  Object.values ||
  function (o) {
    return Object.keys(o).map(function (k) {
      return o[k];
    });
  };

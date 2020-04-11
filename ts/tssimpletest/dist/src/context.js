"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
document.body.onclick = function (ev) {
    console.log(ev.button); //<- Error!
};

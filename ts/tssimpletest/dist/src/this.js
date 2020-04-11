"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function makeObject(desc) {
    var data = desc.data || {};
    var methods = desc.methods || {};
    return __assign(__assign({}, data), methods);
}
var obj = makeObject({
    data: { x: 0, y: 0 },
    methods: {
        moveBy: function (dx, dy) {
            this.x += dx; // Strongly typed this
            this.y += dy; // Strongly typed this
        }
    }
});
obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);

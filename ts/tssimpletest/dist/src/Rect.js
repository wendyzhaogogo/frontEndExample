"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Node = /** @class */ (function () {
    function Node() {
    }
    return Node;
}());
exports.Node = Node;
var Container = /** @class */ (function () {
    function Container() {
    }
    Container.prototype.add = function (obj) { };
    return Container;
}());
exports.Container = Container;
var Rect = /** @class */ (function (_super) {
    __extends(Rect, _super);
    function Rect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Rect;
}(Container));
exports.Rect = Rect;
var Rect2 = /** @class */ (function (_super) {
    __extends(Rect2, _super);
    function Rect2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Rect2;
}(Rect));
exports.Rect2 = Rect2;
var a = new Rect();
var b = new Rect2();
a.clipFunc = b.clipFunc;
// a.aaa("123").
// const b  = new Rect2("2")
// b.
var c = b;
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cat;
}(Animal));
f1 = f2; // 启用 --strictFunctionTypes 时错误
f2 = f1; // 正确
f2 = f3; // 错误

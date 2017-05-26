"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var debounce_decorator_1 = require("./src/debounce.decorator");
var ForCheck = (function () {
    function ForCheck() {
    }
    ForCheck.prototype.method = function (x) {
        console.log(x);
    };
    return ForCheck;
}());
__decorate([
    debounce_decorator_1.debounce(1000)
], ForCheck.prototype, "method", null);
var fc1 = new ForCheck();
setTimeout(function () { fc1.method(3); }, 100);
setTimeout(function () { fc1.method(4); }, 1100);
setTimeout(function () { fc1.method(5); }, 1500);

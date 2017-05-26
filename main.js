"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var log_decorator_1 = require("./src/log.decorator");
var cache_decorator_1 = require("./src/cache.decorator");
var debounce_decorator_1 = require("./src/debounce.decorator");
// import { timingDecorator } from './src/timing.decorator';
var throttle_decorator_1 = require("./src/throttle.decorator");
var ForCheck = (function () {
    function ForCheck() {
    }
    ForCheck.prototype.method = function (x) {
        console.log(x);
    };
    ForCheck.prototype.method2 = function (x) {
        console.log(x);
    };
    ForCheck.prototype.add = function (a, b) {
        return a + b;
    };
    ForCheck.prototype.method3 = function (x) {
        return 1000 + x;
    };
    return ForCheck;
}());
__decorate([
    debounce_decorator_1.debounce(1000)
], ForCheck.prototype, "method", null);
__decorate([
    throttle_decorator_1.throttle(1000)
], ForCheck.prototype, "method2", null);
__decorate([
    log_decorator_1.log('llala')
], ForCheck.prototype, "add", null);
__decorate([
    cache_decorator_1.cacheDecorator
], ForCheck.prototype, "method3", null);
var fc1 = new ForCheck();
// setTimeout( function() { fc1.method(3) }, 100);
// setTimeout( function() { fc1.method(4) }, 1100);
// setTimeout( function() { fc1.method(5) }, 1500);
// fc1.method2('first');
// fc1.method2('lalala');
// fc1.method2('lalalalalaala');
// fc1.method2('second');
// fc1.method2('third');
fc1.method3(1);
var a = fc1.method3(1);
var b = fc1.method3(1);
console.log(a == b);

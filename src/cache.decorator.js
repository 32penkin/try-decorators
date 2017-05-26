"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function cacheDecorator(target, key, func) {
    var cache = {};
    return {
        value: function (x) {
            if (!(x in cache)) {
                cache[x] = func.value.call(this, x);
            }
            else {
                return cache[x];
            }
        }
    };
}
exports.cacheDecorator = cacheDecorator;

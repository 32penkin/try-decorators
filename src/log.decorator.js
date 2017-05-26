"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function log(message) {
    return function (target, key, func) {
        return {
            value: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                console.log('Arguments: ', args);
                console.log('Result: ', func.value.apply(this, args));
                console.log('Message: ' + message);
            }
        };
    };
}
exports.log = log;

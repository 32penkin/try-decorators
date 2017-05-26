"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function debounce(wait) {
    return function (target, key, func) {
        var state = null;
        var Cooling = 1;
        return {
            value: function () {
                if (state)
                    return;
                func.value.apply(this, arguments);
                state = Cooling;
                setTimeout(function () { state = null; }, wait);
            }
        };
    };
}
exports.debounce = debounce;

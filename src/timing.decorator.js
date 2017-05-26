"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function timingDecorator(timer) {
    return function (target, key, func) {
        var timers = {};
        return {
            value: function () {
                var start = new Date().getMilliseconds();
                var result = func.value.apply(this, arguments);
                if (!(timer in timers))
                    timers[timer] = 0;
                timers[timer] += new Date().getMilliseconds() - start;
                console.log(timers.timer);
                return result;
            }
        };
    };
}
exports.timingDecorator = timingDecorator;

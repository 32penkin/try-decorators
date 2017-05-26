"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isAdmin(par) {
    return par;
}
exports.isAdmin = isAdmin;
function checkAccess(target, key, func) {
    return {
        value: function (arg) {
            if (isAdmin(arg)) {
                return func.value.apply(this, arg);
            }
            else {
                console.log('U do not have access');
            }
        }
    };
}
exports.checkAccess = checkAccess;

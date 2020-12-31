"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Friend = /** @class */ (function () {
    function Friend(id, fullName, phone, email) {
        this.id = id;
        this.fullName = fullName;
        this.phone = phone;
        this.email = email;
    }
    Friend.prototype.print = function () {
        console.log(this.id + "|" + this.fullName + "|" + this.phone + "|" + this.email);
    };
    return Friend;
}());
exports.Friend = Friend;

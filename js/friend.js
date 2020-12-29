"use strict";
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
var friends = [
    new Friend(1, "Eleanor Rigby", "555-234-5678", "revolver@hotmail.com"),
    new Friend(2, "Bobby McGee", "555-432-7654", "j.joplin@gmail.com"),
    new Friend(3, "Jenny Tutone", "555-867-5309", "tutone@aol.com"),
    new Friend(4, "Buddy Holly", "555-987-6543", "weezer@yahoo.com"),
    new Friend(5, "Mary Jane", "555-444-2234", "lastdance@ymail.com")
];
for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
    var friend = friends_1[_i];
    friend.print();
}

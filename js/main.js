"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var friend_1 = require("./friend");
var friends = [
    new friend_1.Friend(1, "Eleanor Rigby", "555-234-5678", "revolver@hotmail.com"),
    new friend_1.Friend(2, "Bobby McGee", "555-432-7654", "j.joplin@gmail.com"),
    new friend_1.Friend(3, "Jenny Tutone", "555-867-5309", "tutone@aol.com"),
    new friend_1.Friend(4, "Buddy Holly", "555-987-6543", "weezer@yahoo.com"),
    new friend_1.Friend(5, "Mary Jane", "555-444-2234", "lastdance@ymail.com")
];
for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
    var friend = friends_1[_i];
    friend.print();
}
console.log("Bye now:)");

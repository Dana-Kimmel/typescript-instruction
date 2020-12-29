"use strict";
var Student = /** @class */ (function () {
    function Student(id, fName, favNumber, favColor) {
        this.id = id;
        this.fName = fName;
        this.favNumber = favNumber;
        this.favColor = favColor;
    }
    Student.prototype.print = function () {
        console.log(this.id + "|" + this.fName + "|" + this.favNumber + "|" + this.favColor);
    };
    return Student;
}());
var students = [
    new Student(1, "Ron", 7, "Pea Green"),
    new Student(2, "Chris", 43, "Red"),
    new Student(3, "Julie", 15, "Pink"),
    new Student(4, "Dana", 1, "Green"),
    new Student(5, "Roe", 17, "Forest Green")
];
for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
    var student = students_1[_i];
    student.print();
}

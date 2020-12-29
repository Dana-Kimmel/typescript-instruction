class Student {
    id : number;
    fName: string;
    favNumber: number;
    favColor: string;

    constructor(id: number, fName: string, favNumber: number, favColor: string) {
this.id = id;
this.fName = fName;
this.favNumber = favNumber;
this.favColor = favColor;
    }

    print(): void{
        console.log(`${this.id}|${this.fName}|${this.favNumber}|${this.favColor}`);
    }
}




let students: Student[] = [
     new Student(1, "Ron", 7, "Pea Green"),
     new Student(2, "Chris", 43, "Red"),
     new Student(3, "Julie", 15, "Pink"),
     new Student(4, "Dana", 1, "Green"),
     new Student(5, "Roe", 17, "Forest Green")
];

for(let student of students) {
    student.print();
}


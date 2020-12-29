class Friend {
    id : number;
    fullName : string;
    phone : string;
    email : string;

    constructor(id : number, fullName : string, phone : string ,email : string) {
        this.id = id;
        this.fullName = fullName;
        this.phone = phone;
        this.email = email;
    }

    print() : void {
        console.log(`${this.id}|${this.fullName}|${this.phone}|${this.email}`);
    }
}

let friends : Friend[] = [
    new Friend (1,"Eleanor Rigby", "555-234-5678", "revolver@hotmail.com"),
    new Friend (2,"Bobby McGee", "555-432-7654", "j.joplin@gmail.com"),
    new Friend (3,"Jenny Tutone", "555-867-5309", "tutone@aol.com"),
    new Friend (4,"Buddy Holly", "555-987-6543", "weezer@yahoo.com"),
    new Friend(5,"Mary Jane", "555-444-2234", "lastdance@ymail.com")
];

for(let friend of friends) {
    friend.print();
}


export class Friend {
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


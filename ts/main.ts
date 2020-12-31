import {Friend} from './friend'

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

console.log("Bye now:)");
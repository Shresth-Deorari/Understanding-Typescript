enum Roles{
    Guest, //0
    Admin, //1
    Editor //2
}

let person: Roles;

person = Roles.Admin;
person = Roles.Guest;
person = 0;

console.log(person);


//We can override the indices provided to the enum values

enum newRoles{
    Admin = 2,
    Guest = 6,
    Editor = 2
}

console.log(newRoles.Admin, newRoles.Editor)        //Damn, we can have same indices

let confusing_role : newRoles = 2;
console.log(confusing_role);



//Alternative to enum

let role: 'admin' | 'editor' | 'guest' = 'admin';
role = 'editor';
role = 'guest';

//Can be used with Tuples

let possibleValues: [1|-1, 1|-1];
possibleValues = [1 , -1];


//type datatype?
type Role = 'Shresth' | 'Sheetal' | 34 | false;

let newRole : Role = false;



var Roles;
(function (Roles) {
    Roles[Roles["Guest"] = 0] = "Guest";
    Roles[Roles["Admin"] = 1] = "Admin";
    Roles[Roles["Editor"] = 2] = "Editor"; //2
})(Roles || (Roles = {}));
var person;
person = Roles.Admin;
person = Roles.Guest;
person = 0;
console.log(person);
//We can override the indices provided to the enum values
var newRoles;
(function (newRoles) {
    newRoles[newRoles["Admin"] = 2] = "Admin";
    newRoles[newRoles["Guest"] = 6] = "Guest";
    newRoles[newRoles["Editor"] = 2] = "Editor";
})(newRoles || (newRoles = {}));
console.log(newRoles.Admin, newRoles.Editor); //Damn, we can have same indices
var confusing_role = 2;
console.log(confusing_role);

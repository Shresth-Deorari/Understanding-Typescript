function throwError(message) {
    console.log(message); //returns anything, not even void
    throw new Error(message);
}
function conosleMessage(message) {
    console.log(message);
}
//Optional Parameters
function throwOptionalError(msg) {
    console.log(msg);
}
throwOptionalError("Damn Nigga");
//Nullish Coelascing
var m = null;
var value = m !== null && m !== void 0 ? m : "Nigga";
console.log(value);

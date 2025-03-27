function throwError(message : string): never{   //Means the function never 
    console.log(message);                       //returns anything, not even void
    throw new Error(message);
}

function conosleMessage(message: string): void{
    console.log(message);
}

//Optional Parameters
function throwOptionalError(msg?: string){
    console.log(msg);
}

throwOptionalError("Damn Nigga");

//Nullish Coelascing
let m  = null;
let value = m??"Nigga";

console.log(value);
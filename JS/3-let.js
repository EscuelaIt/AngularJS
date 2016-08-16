"use strict";
let varES6 = "let es el nuevo var";

console.log(varES6);

let a = 1;
let b = 1;
let c = "inicial";

if (a == b) {
    let c = "son iguales";
    console.log(c);
}
else {
    let c = "son distintos";
    console.log(c);
}

// la variable c se define en distinso ámbitos
console.log(c);
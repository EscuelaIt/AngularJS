//"use strict";
// this =  contexto de ejecución de una función


function miFuncion() {
    console.log(this.variable);
}

var variable = "módulo";

miFuncion();

var complejo = { variable: "propiedad", funcion: miFuncion };
complejo.funcion();

// probar en chorme!!!
// probar con new 

// 1- new ?
// 2- call-apply
// 3- within an object
// 4- global || undefined en strict mode

/** CLOSURES */


for (var i = 1; i <= 5; i++){
    console.log("PRESENT OUT i" + i);
    setTimeout(function () {
        console.log("FUTURE IN i" + i);
    }, 1000);
}
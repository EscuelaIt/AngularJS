// las declaraciones 'suben' al principio del módulo
// var a;
// var b;
/*
a;
b;
var a = b;
var b = 2;
b;
a;
*/


/*
var a = funcionDeclaradaSuperElevada();
var c = funcionExpresionSeQueda();
console.log(a);
console.log(c);

function funcionDeclaradaSuperElevada() {
	return c;
}
var funcionExpresionSeQueda = function () {
	return funcionDeclaradaSuperElevada();
};
*/

function funcionDeclaradaSuperElevada() {
    return c;
}
var a;
var c;
var funcionExpresionSeQueda;
a = funcionDeclaradaSuperElevada();
c = funcionExpresionSeQueda();
console.log(a);
console.log(c);
funcionExpresionSeQueda = function () {
    return funcionDeclaradaSuperElevada();
};
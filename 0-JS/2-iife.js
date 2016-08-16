(
    // es un sentencia
    //console.log('como expresión el iiffe falla')
    function funcionInterna() {
        console.log("funcionInterna autoinvocada");
    }
)();


(
    function saludar() {
        console.log("saludo autoinvocada");
    }
)();


(
    function saludar(nombre) {
        console.log(nombre);
    }
)("Alberto");

var miVariable = "modular";

/** creación de un espacio de nombre protegido
 * y autoejecutable
 */
(function funcionIIFE() {
    var miVariable = "local de la funcionIIFE";
    console.log(miVariable);
})();

console.log(miVariable);

/** Module pattern */

var logger = (function () {
    var deboUsarConsola = true;
    return {
        quieroUsarConsola : deboUsarConsola,
        debug: function (mensaje) {
            if (deboUsarConsola) {
                console.debug(mensaje);
            }
        },
        error: function (excepcion) {
            if (deboUsarConsola) {
                console.error(excepcion);
            }
        }
    };
}
)();

logger.quieroUsarConsola = true;
logger.debug("hola");

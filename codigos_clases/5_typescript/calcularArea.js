/**
 * 23 septiembre 2021
 * @author Diego Iván Oliveros Acosta
 * www.scalapp.co
 */
var areatotal = 8;
var texto1 = "El área de la figura es: ";
var estavivo = false; //no se puede usar 1. 
function calcularArea(lado) {
    console.log(lado * lado);
}
calcularArea(5);
function imprimirArea(lado, text) {
    console.log(text + lado * lado);
}
if (estavivo) {
    imprimirArea(areatotal, texto1);
}
else {
    calcularArea(areatotal);
}
function calcularVolumen(lado) {
    console.log(lado * lado * lado);
}
calcularVolumen(5);

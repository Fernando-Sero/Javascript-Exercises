/* Mostrar una variable y una variable constante*/
let numero = 5;
const numeroConstante = 10;
const variables1 = (document.querySelector("#variables1").innerHTML = `
        <h4>Respuesta:</h4>
        <span>${numero}</span>,
        <span>${numeroConstante}</span>
      `);
/* Area de un circulo */
const pi = 3.1416;
const radio = 7;
const area = pi * radio ** 2;
const variables2 = (document.querySelector("#variables2").innerHTML = `
        <h4>Respuesta:</h4>
        <span>${area}</span>
      `);
/* Concatenar cadena y numero*/
let cadena = "Hola";
let numero2 = 3;
const variables3 = (document.querySelector("#variables3").innerHTML = `
        <h4>Respuesta:</h4>
        <span>${cadena}${numero2}</span>
      `);
const gravedad = 9.8;
const tiempo = 8;
const velocidad = gravedad * tiempo;
const variables4 = (document.querySelector("#variables4").innerHTML = `
  <h4>Respuesta:</h4>
  <span>${velocidad}</span>
`);

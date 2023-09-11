const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const suma = document.querySelector("#suma");
const resta = document.querySelector("#resta");
const mul = document.querySelector("#mul");
const div = document.querySelector("#div");
const resultado = document.querySelector("#resultado");

suma.addEventListener("click", () => {
  const res = parseInt(num1.value) + parseInt(num2.value);
  resultado.textContent = parseInt(res);
});
resta.addEventListener("click", () => {
  const res = parseInt(num1.value) - parseInt(num2.value);
  resultado.textContent = parseInt(res);
});
mul.addEventListener("click", () => {
  const res = parseInt(num1.value) * parseInt(num2.value);
  resultado.textContent = parseInt(res);
});
div.addEventListener("click", () => {
  const res = parseInt(num1.value) / parseInt(num2.value);
  resultado.textContent = parseInt(res);
});

const edad = document.querySelector("#edad");
const comprobar = document.querySelector("#comprobar");
const edadRes = document.querySelector("#edad-res");

comprobar.addEventListener("click", () => {
  if (parseInt(edad.value) >= 18) {
    edadRes.textContent = "Es mayor de edad";
  } else {
    edadRes.textContent = "Es menor de edad";
  }
});

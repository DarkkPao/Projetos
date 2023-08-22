function calcularIMC() {
  const altura = parseFloat(document.getElementById("altura").value);
  const peso = parseFloat(document.getElementById("peso").value);
  const IMC = (peso / Math.pow(altura, 2)).toFixed(2);

  document.getElementById("resultadoP").textContent = IMC;
}

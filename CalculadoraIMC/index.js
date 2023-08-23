function calcularIMC() {
  const altura = parseFloat(document.getElementById("altura").value);
  const peso = parseFloat(document.getElementById("peso").value);
  const IMC = (peso / Math.pow(altura, 2)).toFixed(2);
  const mensagemResultado = "";

  validacao(altura, peso, IMC, mensagemResultado);
  limparCampos();
}

function validacao(altura, peso, IMC, mensagemResultado) {
  if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
    mensagemResultado = "Inválido";
    document.getElementById("resultadoP").textContent = mensagemResultado;
  } else {
    const resultadoComparacao = comparaIMC(IMC);
    mensagemResultado = "Seu IMC: " + IMC + " | " + resultadoComparacao;
    document.getElementById("resultadoP").textContent = mensagemResultado;
  }
}

function limparCampos() {
  document.getElementById("altura").value = null;
  document.getElementById("peso").value = null;
}

function comparaIMC(IMC) {
  if (IMC <= 16.9) {
    return "Muito abaixo do peso ideal";
  } else if (IMC >= 17 && IMC <= 18.4) {
    return "Abaixo do peso ideal";
  } else if (IMC >= 18.5 && IMC <= 24.9) {
    return "Peso ideal";
  } else if (IMC >= 25 && IMC <= 29.9) {
    return "Acima do peso ideal";
  } else if (IMC >= 30 && IMC <= 34.9) {
    return "Obesidade grau I";
  } else if (IMC >= 35 && IMC <= 40) {
    return "Obesidade grau II";
  } else if (IMC > 40) {
    return "Obesidade grau III";
  }
}

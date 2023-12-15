document.addEventListener("DOMContentLoaded", function () {
  // Seletor para o visor da calculadora
  var visor = document.getElementById("visor");

  // Flag para verificar se o último caractere foi um símbolo de operação
  var lastCharWasOperator = false;

  // Adiciona um listener de clique para cada botão
  var buttons = document.querySelectorAll("#buttons-container button");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Lida com cada botão clicado
      handleButtonClick(button.innerText);
    });
  });

  // Adiciona um ouvinte de evento de teclado
  document.addEventListener("keydown", function (event) {
    // Obtém o valor da tecla pressionada
    var key = event.key;

    // Verifica se a tecla pressionada é permitida
    if (isValidInput(key)) {
      handleButtonClick(key);
    } else if (key === "Backspace") {
      handleButtonClick("DEL");
    }
  });

  // Função para verificar se a entrada é válida
  function isValidInput(value) {
    var allowedChars = "0123456789.+-*/c";

    // Permite apenas caracteres na string allowedChars
    return allowedChars.indexOf(value) !== -1;
  }

  // Função para lidar com o clique de um botão
  function handleButtonClick(value) {
    if (value === "=") {
      calculateResult();
    } else if (value === "C" || value === "c") {
      clearDisplay();
    } else if (value === "DEL") {
      deleteLastEntry();
    } else if (isOperator(value)) {
      handleOperator(value);
    } else {
      updateDisplay(value);
      lastCharWasOperator = false;
    }
  }

  // Função para verificar se o caractere é um operador
  function isOperator(value) {
    return "+-*/".indexOf(value) !== -1;
  }

  // Função para lidar com a entrada de operador
  function handleOperator(operator) {
    if (!lastCharWasOperator) {
      // Apenas adiciona o operador se o último caractere não foi um operador
      updateDisplay(operator);
      lastCharWasOperator = true;
    } else {
      // Substitui o operador se o último caractere foi um operador
      visor.value = visor.value.slice(0, -1) + operator;
    }
  }

  // Função para calcular o resultado
  function calculateResult() {
    try {
      visor.value = eval(visor.value);
    } catch (error) {
      visor.value = "Erro";
    }
  }

  // Função para limpar o visor
  function clearDisplay() {
    visor.value = "";
    lastCharWasOperator = false;
  }

  // Função para excluir o último caractere
  function deleteLastEntry() {
    visor.value = visor.value.slice(0, -1);
    lastCharWasOperator = isOperator(visor.value.slice(-1));
  }

  // Função para atualizar o visor com o valor do botão clicado
  function updateDisplay(value) {
    // Adiciona um espaço antes do número, se o último caractere não for um operador
    if (!lastCharWasOperator && isOperator(visor.value.slice(-1))) {
      visor.value += " " + value;
    } else {
      visor.value += value;
    }

    lastCharWasOperator = isOperator(value);
  }
});

document.getElementById("btnCalcIMC").addEventListener("click", function () {
  window.location.href = "../CalculadoraIMC/index.html";
});

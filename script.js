const display = document.getElementById("display");

//Adiciona valor no display
function addNumber(value) {
  display.value += value;
}

// Apaga tudo do display
function clearAll() {
  display.value = "";
}

// Apaga ultimo valor digitado
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Função para calcular
function calculate() {
  const expression = display.value;

  const validExpression = /^[0-9+\-*/.]+$/;

  if (!validExpression.test(expression)) {
    display.value = "Expressão inválida!";
    return;
  }

  try {
    const result = Function('"use strict"; return (' + expression + ')')();
    display.value = result;
  } catch {
    display.value = "Erro";
  }
}
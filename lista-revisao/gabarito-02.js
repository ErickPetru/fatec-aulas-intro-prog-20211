const form = document.getElementById("form");
const field = document.getElementById("field");
const button = document.getElementById("showResult");
const result = document.getElementById("result");

const numbers = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const n = parseInt(field.value);

  field.className = "";
  result.innerHTML = "";

  if (isNaN(n)) {
    result.innerHTML =
      '<p class="negative">Por favor, informe um número para adicionar.</p>';
    field.className = "negative";
    field.focus();
    return;
  }

  numbers.push(n);

  field.value = "";
  field.focus();
});

button.addEventListener("click", () => {
  field.className = "";
  result.innerHTML = "";

  if (!numbers.length) {
    result.innerHTML = '<p class="negative">Nenhum número cadastrado.</p>';
    field.focus();
    return;
  }

  let items = "";
  for (let number of numbers) {
    const square = number * number;
    const root = Math.sqrt(number);

    const portuguese = new Intl.NumberFormat("pt-BR");

    items += `<li>
        Número: <b>${portuguese.format(number)}</b>.
        Quadrado: <b>${portuguese.format(square)}</b>.
        Raíz quadrada: <b>${portuguese.format(root)}</b>.
      </li>`;
  }

  result.innerHTML = `<ul>${items}</ul>`;
});

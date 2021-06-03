const form = document.getElementById("form");
const field = document.getElementById("field");
const button1 = document.getElementById("showNames");
const button2 = document.getElementById("showNamesInverse");
const button3 = document.getElementById("showNamesAlphabetically");
const result = document.getElementById("result");

const names = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  field.className = "";
  result.innerHTML = "";

  if (!field.value) {
    result.innerHTML =
      '<p class="negative">Por favor, informe um nome para adicionar.</p>';
    field.className = "negative";
    field.focus();
    return;
  }

  names.push(field.value);

  field.value = "";
  field.focus();
});

button1.addEventListener("click", () => {
  field.className = "";
  result.innerHTML = "";

  if (!names.length) {
    result.innerHTML = '<p class="negative">Nenhum nome cadastrado.</p>';
    field.focus();
    return;
  }

  let items = "";
  for (let name of names) {
    items += `<li>${name}</li>`;
  }

  result.innerHTML = `<ul>${items}</ul>`;
});

button2.addEventListener("click", () => {
  field.className = "";
  result.innerHTML = "";

  if (!names.length) {
    result.innerHTML = '<p class="negative">Nenhum nome cadastrado.</p>';
    field.focus();
    return;
  }

  let items = "";
  for (let name of [...names].reverse()) {
    items += `<li>${name}</li>`;
  }

  result.innerHTML = `<ul>${items}</ul>`;
});

button3.addEventListener("click", () => {
  field.className = "";
  result.innerHTML = "";

  if (!names.length) {
    result.innerHTML = '<p class="negative">Nenhum nome cadastrado.</p>';
    field.focus();
    return;
  }

  let items = "";
  for (let name of [...names].sort()) {
    items += `<li>${name}</li>`;
  }

  result.innerHTML = `<ul>${items}</ul>`;
});

const form = document.getElementById("form");
const field1 = document.getElementById("field1");
const field2 = document.getElementById("field2");
const field3 = document.getElementById("field3");
const field4 = document.getElementById("field4");
const field5 = document.getElementById("field5");
const result = document.getElementById("result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const n1 = parseInt(field1.value);
  const n2 = parseInt(field2.value);
  const n3 = parseInt(field3.value);
  const n4 = parseInt(field4.value);
  const n5 = parseInt(field5.value);

  field1.className =
    field2.className =
    field3.className =
    field4.className =
    field5.className = "";
  result.innerHTML = "";

  if (isNaN(n1)) {
    result.innerHTML = '<p class="negative">Por favor, informe o Número 1.</p>';
    field1.className = "negative";
    field1.focus();
    return;
  }

  if (isNaN(n2)) {
    result.innerHTML = '<p class="negative">Por favor, informe o Número 2.</p>';
    field2.className = "negative";
    field2.focus();
    return;
  }

  if (isNaN(n3)) {
    result.innerHTML = '<p class="negative">Por favor, informe o Número 3.</p>';
    field3.className = "negative";
    field3.focus();
    return;
  }

  if (isNaN(n4)) {
    result.innerHTML = '<p class="negative">Por favor, informe o Número 4.</p>';
    field4.className = "negative";
    field4.focus();
    return;
  }

  if (isNaN(n5)) {
    result.innerHTML = '<p class="negative">Por favor, informe o Número 5.</p>';
    field5.className = "negative";
    field5.focus();
    return;
  }

  const numbers = [n1, n2, n3, n4, n5].sort((a, b) => (a > b ? 1 : -1));
  result.innerHTML = `<p>
      Maior número: <b>${numbers.pop()}</b>.
      Menor número: <b>${numbers.shift()}</b>.
    </p>`;
});

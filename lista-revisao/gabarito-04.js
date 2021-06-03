const form = document.getElementById("form");
const field1 = document.getElementById("field1");
const field2 = document.getElementById("field2");
const button1 = document.getElementById("showBestStudent");
const button2 = document.getElementById("showWorstStudent");
const button3 = document.getElementById("showAverageGrade");
const result = document.getElementById("result");

const portuguese = new Intl.NumberFormat("pt-BR", {
  minimumIntegerDigits: 1,
  maximumFractionDigits: 1,
  minimumFractionDigits: 1,
});

const students = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  field1.className = field2.className = "";
  result.innerHTML = "";

  if (!field1.value) {
    result.innerHTML =
      '<p class="negative">Por favor, informe um nome para adicionar.</p>';
    field1.className = "negative";
    field1.focus();
    return;
  }

  const n = parseFloat(field2.value);

  if (isNaN(n) || n < 0 || n > 10) {
    result.innerHTML =
      '<p class="negative">Por favor, informe uma nota válida para adicionar.</p>';
    field2.className = "negative";
    field2.focus();
    return;
  }

  students.push({
    name: field1.value,
    grade: n,
  });

  field1.value = field2.value = "";
  field1.focus();
});

button1.addEventListener("click", () => {
  field1.className = field2.className = "";
  result.innerHTML = "";

  if (!students.length) {
    result.innerHTML = '<p class="negative">Nenhum aluno cadastrado.</p>';
    field1.focus();
    return;
  }

  students.sort((a, b) => (a.grade < b.grade ? 1 : -1));
  const first = students[0];

  result.innerHTML = `<p>Parabéns para
  <b>${first.name}</b>,
  melhor aluno da turma com nota
  <b>${portuguese.format(first.grade)}</b>!</p>`;
});

button2.addEventListener("click", () => {
  field1.className = field2.className = "";
  result.innerHTML = "";

  if (!students.length) {
    result.innerHTML = '<p class="negative">Nenhum aluno cadastrado.</p>';
    field1.focus();
    return;
  }

  students.sort((a, b) => (a.grade > b.grade ? 1 : -1));
  const last = students[0];

  result.innerHTML = `<p>Nossos pêsames para
  <b>${last.name}</b>,
  pior aluno da turma com nota
  <b>${portuguese.format(last.grade)}</b>!</p>`;
});

button3.addEventListener("click", () => {
  field1.className = field2.className = "";
  result.innerHTML = "";

  if (!students.length) {
    result.innerHTML = '<p class="negative">Nenhum aluno cadastrado.</p>';
    field1.focus();
    return;
  }

  const sum = students.reduce((sum, student) => sum + student.grade, 0);
  const average = sum / students.length;

  result.innerHTML = `<p>A média aritmética desta turma foi:
      <b>${portuguese.format(average)}</b>.
    </p>`;
});

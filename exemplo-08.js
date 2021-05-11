const form = document.getElementById('form')
const field1 = document.getElementById('field1')
const field2 = document.getElementById('field2')
const field3 = document.getElementById('field3')
const result = document.getElementById('result')

form.addEventListener('submit', (event) => {
  event.preventDefault()

  if (!field1.value || !field2.value) {
    popbox.open('dialog')
    return
  }

  const price = parseFloat(field1.value)
  const discount = parseFloat(field2.value)

  const amountDiscounted = price * discount / 100
  const finalPrice = price - amountDiscounted

  result.innerHTML = `
    <ul>
      <li>Preço base: <b>${price}</b>.</li>
      <li>Valor do desconto: <b>${amountDiscounted}</b>.</li>
      <li>Preço final: <b>${finalPrice}</b>.</li>
    </ul>
  `
})

const picker = new Pikaday({
  field: field3,
  trigger: field3,
  format: 'DD/MM/YYYY',
  showDaysInNextAndPreviousMonths: true,
  toString(date, format) {
    const day = `${date.getDate()}`
    const month = `${date.getMonth() + 1}`
    const year = `${date.getFullYear()}`

    return format
      .replace('DD', day.padStart(2, '0'))
      .replace('D', day)
      .replace('MM', month.padStart(2, '0'))
      .replace('M', month)
      .replace('YYYY', year)
      .replace('YY', year.substr(-2))
  },
  parse(format, dateString) {
    const parts = dateString.split('/')
    const day = parseInt(parts[0], 10)
    const month = parseInt(parts[1], 10) - 1
    const year = parseInt(parts[2], 10)

    return new Date(year, month, day)
  },
  i18n: {
    previousMonth: 'Anterior',
    nextMonth: 'Próximo',
    months: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ],
    weekdays: [
      'Domingo',
      'Segunda-feira',
      'Terça-feira',
      'Quarta-feira',
      'Quinta-feira',
      'Sexta-feira',
      'Sábado'
    ],
    weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
  }
})

const popbox = new Popbox({
  overlay: true
})

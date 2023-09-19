import Calculator from './model/contructor.calculator.js'
import Historial from './model/constructor.historial.js'

// Hacer que el content se mantenga abajo GPT4

const historieContainer = document.querySelector('.history.code')

document.addEventListener('DOMContentLoaded', (event) => {
  historieContainer.scrollTop = historieContainer.scrollHeight
})

//-------------------------------------------------------------

// Todo: Instanciamos la calculadora, historial y User
let calculator = new Calculator()
const historial = new Historial()

//-------------------------------------------------------------

const numOne = document.querySelector('.item.new .num-one')
const numTwo = document.querySelector('.item.new .num-two')
const operationSigno = document.querySelector('.item.new .operation-signo')
const igualTo = document.querySelector('.item.new .igual-to')
const result = document.querySelector('.item.new .result')

// console.log(historial)

// Reiniciamos los valores de la calculadora
const resetTemplate = (newResult) => {
  numOne.innerHTML = calculator.numOne === '' ? 0 : calculator.numOne
  numTwo.innerHTML = calculator.numTwo
  operationSigno.innerHTML = newResult.signo
  result.innerHTML = calculator.result
  igualTo.innerHTML = ''
}

resetTemplate(calculator)

// Todo: Totammos los botones Numericos
const buttonNumber = document.querySelectorAll('.action-button.number')

buttonNumber.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault()
    switch (calculator.operation) {
      case '':
        if (calculator.numOne !== '') {
          numOne.innerHTML += button.value
          calculator.putNumOne(button.value)
        } else {
          numOne.innerHTML = button.value
          calculator.putNumOne(button.value)
        }
        break
      default:
        if (calculator.numTwo !== 0) {
          numTwo.innerHTML += button.value
          calculator.putNumTwo(button.value)
        } else {
          numTwo.innerHTML = button.value
          calculator.putNumTwo(button.value)
        }
        break
    }

    // console.log(calculator)
    // console.log(button.value)
    // console.log(calculator.numOne, calculator.numTwo)
  })
})

// todo: Tomamos los Botones de Operaciones.
const buttonOperation = document.querySelectorAll('.action-button.operation')
buttonOperation.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault()
    switch (button.value) {
      case 'add':
        operationSigno.innerHTML = '+'
        calculator.putOperation(button.value)
        break
      case 'subtract':
        operationSigno.innerHTML = '-'
        calculator.putOperation(button.value)
        break
      case 'multiply':
        operationSigno.innerHTML = 'x'
        calculator.putOperation(button.value)
        break
      case 'divide':
        operationSigno.innerHTML = '÷'
        calculator.putOperation(button.value)
        break
      case 'porcent':
        console.log(calculator)
        if (calculator.numTwo === '') {
          calculator.numOne = calculator.numOne / 100
          numOne.innerHTML = calculator.numOne
        } else {
          calculator.numTwo = calculator.numTwo / 100
          numTwo.innerHTML = calculator.numTwo
        }
      default:
    }

    // console.log(calculator)
    // console.log(button.value)
    // console.log(calculator.operation)
  })
})

// Todo: Tomamos el Boton de AllClear
const buttonAllCrear = document.querySelector('.action-button.all-clear')
buttonAllCrear.addEventListener('click', (event) => {
  event.preventDefault()
  calculator.allClear()
  location.reload()
})

// Todo: Tomamos el boton de Clear
const buttonClear = document.querySelector('.action-button.clear')
buttonClear.addEventListener('click', (event) => {
  event.preventDefault()
  switch (calculator.operation) {
    case '':
      calculator.numOne = ''
      numOne.innerHTML = 0
      break
    default:
      calculator.numTwo = ''
      numTwo.innerHTML = ''
  }
})

// Todo: Aplicamos el Historial al DOM
function getHistorial(response) {
  historial.postHistorial(response)
  const newItem = historieContainer.querySelector('.item.new')
  newItem.insertAdjacentHTML('beforebegin', historial.getTemplates(response))
  historieContainer.scrollTop = historieContainer.scrollHeight

  // console.log(historial.historial)
}

// Todo: Totamos los Botones de Equal
const buttonEqual = document.querySelector('.action-button.equal')
buttonEqual.addEventListener('click', (event) => {
  event.preventDefault()
  if (calculator.numOne !== '' && calculator.numTwo !== '') {
    igualTo.innerHTML = '='
    result.innerHTML = calculator.getResult()
    // Aplicamos el resultado al historial.
    getHistorial(calculator)

    // console.log(calculator)

    // Reiniciamos los valores de la calculadora
    calculator = new Calculator(calculator)

    // console.log(calculator)

    resetTemplate(calculator)
  }
})

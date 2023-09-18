import Calculator from './model/contructor.calculator.js'

// Hacer que el content se mantenga abajo GPT4

document.addEventListener('DOMContentLoaded', (event) => {
  const container = document.querySelector('.history.code')
  container.scrollTop = container.scrollHeight
})

const resultCalculator = {
  type: 'calc',
  numOne: 0,
  operation: {
    type: '',
    value: '',
  },
  numTwo: '',
  result: '',
}

const calculator = new Calculator()
const numOne = document.querySelector('.num-one')
const numTwo = document.querySelector('.num-two')
const operationSigno = document.querySelector('.operation-signo')
const igualTo = document.querySelector('.igual-to')
const result = document.querySelector('.result')

// Reiniciamos los valores de la calculadora
numOne.innerHTML = resultCalculator.numOne
numTwo.innerHTML = resultCalculator.numTwo
operationSigno.innerHTML = resultCalculator.operation.value
result.innerHTML = resultCalculator.result
igualTo.innerHTML = ''

// Totammos los botones.
const buttonNumber = document.querySelectorAll('.action-button.number')

buttonNumber.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault()
    switch (calculator.numOne) {
      case 0:
        if (resultCalculator.numOne !== 0) {
          numOne.innerHTML += Number(button.value)
          resultCalculator.numOne += Number(button.value)
        } else {
          numOne.innerHTML = Number(button.value)
          resultCalculator.numOne = Number(button.value)
        }
        break
      default:
        if (resultCalculator.numTwo !== 0) {
          numTwo.innerHTML += Number(button.value)
          resultCalculator.numTwo += Number(button.value)
        } else {
          numTwo.innerHTML = Number(button.value)
          resultCalculator.numTwo = Number(button.value)
        }
        break
    }
  })
})

const buttonOperation = document.querySelectorAll('.action-button.operation')
buttonOperation.forEach((button) => {})

const buttonEqual = document.querySelector('.action-button.equal')
const buttonAction = document.querySelectorAll('.action-button.action')

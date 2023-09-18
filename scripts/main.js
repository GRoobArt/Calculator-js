import Calculator from './model/contructor.calculator.js'

// Hacer que el content se mantenga abajo GPT4

document.addEventListener('DOMContentLoaded', (event) => {
  const container = document.querySelector('.history.code')
  container.scrollTop = container.scrollHeight
})

//-------------------------------------------------------------

const calculator = new Calculator()
const numOne = document.querySelector('.num-one')
const numTwo = document.querySelector('.num-two')
const operationSigno = document.querySelector('.operation-signo')
const igualTo = document.querySelector('.igual-to')
const result = document.querySelector('.result')

// Reiniciamos los valores de la calculadora
numOne.innerHTML = 0
numTwo.innerHTML = calculator.numTwo
operationSigno.innerHTML = calculator.operation
result.innerHTML = ''
igualTo.innerHTML = ''

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
        calculator.operation = button.value
        break
      case 'subtract':
        operationSigno.innerHTML = '-'
        calculator.operation = button.value
        break
      case 'multiply':
        operationSigno.innerHTML = 'x'
        calculator.operation = button.value
        break
      case 'divide':
        operationSigno.innerHTML = '÷'
        calculator.putNumOne(calculator.numOne)
        calculator.operation = button.value
        break
      case 'porcent':
        if (calculator.numOne === 0) {
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

// Todo: Totamos los Botones de Equal
const buttonEqual = document.querySelector('.action-button.equal')
buttonEqual.addEventListener('click', (event) => {
  event.preventDefault()

  if (calculator.numOne !== '' && calculator.numTwo !== '') {
    igualTo.innerHTML = '='
    result.innerHTML = calculator.getResult()
  }
})

// Todo: Tomamos los Botones Accion
const buttonAction = document.querySelector('.action-button.clear')
buttonAction.addEventListener('click', (event) => {
  event.preventDefault()

  calculator.clear()
  location.reload()
})

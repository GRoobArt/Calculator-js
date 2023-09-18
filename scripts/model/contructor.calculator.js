export default class Calculator {
  constructor({
    type = 'calc',
    numOne = '',
    operation = '',
    numTwo = '',
  } = {}) {
    this.type = type
    this.numOne = Number(numOne) || ''
    this.operation = operation || ''
    this.numTwo = Number(numTwo) || ''
  }

  putNumOne(num) {
    this.numOne += num
  }

  putOperation(operation) {
    this.operation = operation
  }

  putNumTwo(num) {
    this.numTwo += num
  }

  getResult() {
    let operation = this.operation
    let numOne = Number(this.numOne)
    let numTwo = Number(this.numTwo)
    let result
    switch (operation) {
      case 'add':
        result = numOne + numTwo
        return parseFloat(result.toFixed(4))
        break
      case 'subtract':
        result = numOne - numTwo

        return parseFloat(result.toFixed(4))
        break
      case 'multiply':
        result = numOne * numTwo
        return parseFloat(result.toFixed(4))
        break
      case 'divide':
        result = numOne / numTwo
        return parseFloat(result.toFixed(4))
        break
    }
  }

  clear() {
    this.numOne = 0
    this.operation = ''
    this.numTwo = 0
  }
}

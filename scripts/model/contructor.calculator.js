export default class Calculator {
  constructor({
    type = 'calc',
    numOne = '',
    operation = '',
    signo = '',
    numTwo = '',
    result = '',
    state = 'new',
  } = {}) {
    this.type = type
    this.numOne = result || ''
    this.operation = ''
    this.signo = ''
    this.numTwo = ''
    this.result = ''
    this.state = state || 'new'
  }

  putNumOne(num) {
    this.numOne += num
  }

  putOperation(operation) {
    this.operation = operation
    this.signo =
      operation === 'add'
        ? '+'
        : operation === 'subtract'
        ? '-'
        : operation === 'multiply'
        ? 'x'
        : operation === 'divide'
        ? '/'
        : ''
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
        this.result = String(parseFloat(result.toFixed(4)))
        this.state = 'old'
        return parseFloat(result.toFixed(4))
        break
      case 'subtract':
        result = numOne - numTwo
        this.result = parseFloat(result.toFixed(4))
        this.state = 'old'
        return parseFloat(result.toFixed(4))
        break
      case 'multiply':
        result = numOne * numTwo
        this.result = parseFloat(result.toFixed(4))
        this.state = 'old'
        return parseFloat(result.toFixed(4))
        break
      case 'divide':
        result = numOne / numTwo
        this.result = parseFloat(result.toFixed(4))
        this.state = 'old'
        return parseFloat(result.toFixed(4))
        break
    }
  }

  postFollowing() {
    this.numOne = this.result
    this.operation = ''
    this.numTwo = ''
    this.state = 'new'
    this.signo = ''
    this.result = ''
  }

  allClear() {
    this.numOne = 0
    this.operation = ''
    this.numTwo = 0
  }
}

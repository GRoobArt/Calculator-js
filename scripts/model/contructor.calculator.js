export default class Calculator {
  constructor({ type = 'calc', numOne = 0, operation = {}, numTwo = 0 } = {}) {
    this.type = type
    this.numOne = Number(numOne)
    this.operation = operation
    this.numTwo = Number(numTwo)
  }

  putTypo(type) {
    this.typo = type
  }

  putNumOne(numOne) {
    this.numOne += Number(numOne)
  }

  putOperation({ type, value }) {
    this.operation = {
      type: type,
      value: value,
    }
  }
}

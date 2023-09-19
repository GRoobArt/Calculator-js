export default class Historial {
  constructor() {
    this.historial = []
  }

  postHistorial(result) {
    this.historial.push(result)
  }

  getTemplates({ type, numOne, numTwo, state, signo, result }) {
    return `
        <li class="item ${state}">
            <p class="typo">${type}:</p>
            <p class="operation">
                <span class="num-one">${numOne}</span>
                <span class="operation-signo">${signo}</span>
                <span class="num-two">${numTwo}</span>
                <span class="igual-to">=</span>
                <span class="result">${result}</span>
            </p>
        </li>
        `
  }
}

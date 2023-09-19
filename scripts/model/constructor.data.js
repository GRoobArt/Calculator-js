export default class Data {
  constructor(user, history) {
    this.user = user
    this.history = history
  }

  postUser(user) {
    this.user = user
    if (user.token !== '') {
      localStorage.setItem('user', JSON.stringify(this.user))
    }
  }

  deleteSession(user) {
    this.user = user
    localStorage.removeItem('user')
  }

  postHistorial(result) {
    this.history.historial.push(result)
    if (this.user.token !== '') {
      localStorage.setItem('historial', JSON.stringify(this.history))
    }
  }
}

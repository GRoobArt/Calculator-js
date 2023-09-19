export default class User {
  constructor({
    name = '',
    lastname = '',
    email = '',
    token = '',
    password = '',
  } = {}) {
    this.update = new Date() || ''
    this.name = name || ''
    this.email = email || ''
    this.password = password || ''
    this.lastname = lastname || ''
    this.token = token || ''
  }

  async postUser({ update, name, lastname, email }) {
    const res = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      }),
    })
    const data = await res.json()
    this.update = update
    this.name = name
    this.lastname = lastname
    this.email = email
    this.password = '*********'
    this.setToken(data.token)
  }

  setToken(token) {
    this.token = token
  }
}

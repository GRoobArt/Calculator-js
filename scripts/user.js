import Modals from './model/constructor.modal.js'
import User from './model/constructor.user.js'
import dataSession from './main.js'

const user = dataSession.user
const historial = dataSession.history

// Ocultamos el login y mostramos el formulario
const buttonLoginHidden = document.querySelector('.login-content')
const containerFormsLogin = document.querySelector('.forms-login')
const userLogin = document.querySelector('.user-login')

const hiddenElement = document.querySelector('.active')

if (user.token !== '') {
  userLogin.classList.remove('hidden')
  userLogin.querySelector('.name').innerHTML = `${user.name} ${user.lastname}`
  buttonLoginHidden.classList.add('hidden')
}

buttonLoginHidden.addEventListener('click', (event) => {
  event.preventDefault()
  if (user.token === '') {
    hiddenElement.classList.toggle('hidden')
    containerFormsLogin.classList.toggle('hidden')
  }
})

// Logeamos al usario para que pueda guardar su historial
const formsLogin = document.querySelector('.form-login')
formsLogin.addEventListener('submit', (event) => {
  event.preventDefault()
  user.postUser({
    update: new Date(event.timeStamp),
    name: event.target.firsname.value,
    lastname: event.target.lastname.value,
    email: event.target.email.value,
    password: event.target.password.value,
  })

  event.submitter.classList.add('loading')

  setTimeout(() => {
    // Eliminamos clase al submit
    event.submitter.classList.remove('loading')

    // Mostramos el nombre del usuario y Ocultamos Icono de Login
    userLogin.classList.remove('hidden')
    userLogin.querySelector('.name').innerHTML = `${user.name} ${user.lastname}`
    buttonLoginHidden.classList.add('hidden')

    // Mostramos el modal de bienvenida
    new Modals({
      title: 'Bienvenido',
      status: 'check',
      text: `Hola ${user.name} ${user.lastname}!`,
    })

    // Ocultamos el formulario
    hiddenElement.classList.remove('hidden')
    containerFormsLogin.classList.add('hidden')

    // Guardamos en el localStorage
    dataSession.postUser(user)

    // console.log(user)
  }, 2500)
})

// Obtenemos la funcion para deslogearse del usuario
const buttonLogout = document.querySelector('.logout-content')
buttonLogout.addEventListener('click', (event) => {
  event.preventDefault()
  dataSession.deleteSession(new User())
  location.reload()
})

import Data from './model/constructor.data.js'
import User from './model/constructor.user.js'
import Historial from './model/constructor.historial.js'

const localUser = JSON.parse(localStorage.getItem('user'))
const localHistorial = JSON.parse(localStorage.getItem('historial'))

// console.log(localUser, localHistorial)

let user
let historial

if (!localUser && !localHistorial) {
  // console.log(localUser, localHistorial)

  user = new User()
  historial = new Historial()

  // console.log(user, historial)

  console.log('No hay datos en el localStorage')
} else if (localUser && !localHistorial) {
  user = new User(localUser)
  historial = new Historial()

  // console.log(user, historial)

  console.log('hay datos del usuario en el localStorage')
} else if (!localUser && localHistorial) {
  user = new User()
  historial = new Historial()
} else {
  // console.log(localUser, localHistorial)

  user = new User(localUser)
  historial = new Historial()
  localHistorial.historial.forEach((item) => {
    historial.postHistorial(item)
  })

  // console.log(user, historial)

  console.log('hay datos del usuario y historial en el localStorage')
}

const dataSession = new Data(user, historial)

// console.log(dataSession)

export default dataSession

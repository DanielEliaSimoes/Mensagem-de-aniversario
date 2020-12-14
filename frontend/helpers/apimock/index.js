import { zuck } from './db_people'
import { todos } from './db_todos'
import { mockasync } from './mockutils'

const keepLoggedIn = true

const aniversarios = [
  {name: 'Tony Lampada', phone: '+5512981440013', date: '01/01', nova_mensagem: 'feliz aniversario'},
  {name: 'Matheus Silva', phone: '+5511943820940', date: '10/12', nova_mensagem: 'Oiii td bem? Passando para te desejar feliz aniversário.Que Deus te abençoe grandemente com muita saúde, paz, amor e sabedoria. E nesta nova etapa da vida você seja muito feliz e alcance todos os seus sonhos. Felicidades 🎉🎉🎉🥰😘'}
]
const mensagenssalvas = ['feliz aniversario', 'Oiii td bem? Passando para te desejar feliz aniversário.Que Deus te abençoe grandemente com muita saúde, paz, amor e sabedoria. E nesta nova etapa da vida você seja muito feliz e alcance todos os seus sonhos. Felicidades 🎉🎉🎉🥰😘']
export default {
  login (username, password) {
    return mockasync(zuck)
  },
  logout () {
    return mockasync({})
  },
  whoami () {
    const iam = {authenticated: keepLoggedIn}
    if (iam.authenticated) {
      iam.user = zuck
    }
    return mockasync(iam)
  },
  settings () {
    return mockasync({
      SENTRY_DSN_FRONT: ''
      // SENTRY_DSN_FRONT: 'https://abcd1234@sentry.example.com/10'
    })
  },
  list_todos () {
    return mockasync(todos)
  },
  add_todo (newtask) {
    return mockasync({description: newtask, done: false})
  },
  list_names () {
    return mockasync(aniversarios)
  },
  aniversario_salva (aniversario) {
    aniversarios.push(aniversario)
    return mockasync(aniversario)
  },
  message_salva (message) {
    mensagenssalvas.push(message)
    return mockasync(message)
  },
  list_messages () {
    return mockasync(mensagenssalvas)
  }
}

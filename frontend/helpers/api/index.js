import {get, post} from './ajaxutils'

export default {
  login (username, password) {
    return post('/api/login', {username, password})
  },
  logout () {
    return post('/api/logout')
  },
  whoami () {
    return get('/api/whoami')
  },
  settings () {
    return get('/api/settings')
  },
  list_todos () {
    return get('/api/list_todos')
  },
  list_names () {
    return get('/api/list_names')
  },
  list_messages () {
    return get('api/list_messages')
  },
  add_todo (newtask) {
    return post('/api/add_todo', {new_task: newtask})
  },
  message_salva (text) {
    return post('/api/message_salva', {text})
  },
  aniversario_salva (aniversario) {
    return post('/api/aniversario_salva', {aniversario})
  }
}

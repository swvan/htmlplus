import { _404 } from './templates/_404.js'
import { Home } from './templates/home.js'
import { Contact } from './templates/contact.js'
export const Views = {
  '*': _404,
  '/': Home,
  home: Home,
  contact: Contact,
}
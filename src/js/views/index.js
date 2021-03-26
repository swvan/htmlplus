import { Views } from './routes/routes.js'

const route = location.pathname.replace('/', '')

let request = route ? location.pathname : '/'
let name = route.charAt(0).toUpperCase() + route.slice(1) || 'Home'
let content

if (Views[route]) { content = Views[route].content.innerHTML }
else { content = Views.home.content.innerHTML; name = 'Home' }

export const View = {
  display: {
    content: content,
    name: name
  },
  hash: location.hash,
  origin: location.origin,
  parameters: new URLSearchParams(location.search),
  referrer: document.referrer,
  search: location.search,
  url: location.href,
  request: request,
  routes: Views
}
export {
  RegisterComponents
} from './routes/components/register.js'
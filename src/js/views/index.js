import { Views } from './routes/routes.js'

const route = location.pathname.replace('/', '')

let request = route ? location.pathname : '/'
let name = route.charAt(0).toUpperCase() + route.slice(1) || 'Home'
let content

if (Views[route]) { content = Views[route].content.innerHTML }
else { content = Views.home.content.innerHTML; name = 'Home' }

const View = {
  Display: {
    Content: content,
    Name: name
  },
  Hash: location.hash,
  Origin: location.origin,
  Parameters: new URLSearchParams(location.search),
  Referrer: document.referrer,
  Search: location.search,
  Url: location.href,
  Request: request,
  Routes: Views
}
export class ApplicationView{}
export {
  RegisterComponents
} from './routes/components/register.js'
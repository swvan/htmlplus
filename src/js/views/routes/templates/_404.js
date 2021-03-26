const template = document.createElement('template')
template.innerHTML = `
<app-heading><h3>404</h3></app-heading>
`
export const _404 = {
  name: '404',
  path: '/404',
  content: template,
  routes: ['/404']
}
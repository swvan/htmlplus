const template = document.createElement('template')
template.innerHTML = `<app-heading><h3>Contact</h3></app-heading>`
export const Contact = {
  name: 'Contact',
  path: '/contact',
  content: template,
  routes: ['/contact']
}
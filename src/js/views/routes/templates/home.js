const template = document.createElement('template')
template.innerHTML = `<app-heading><h3>Home</h3></app-heading>`
export const Home = {
  name: 'Home',
  path: '/',
  content: template,
  routes: ['/', '/home', '/index', '/index.html', '/index.php']
}
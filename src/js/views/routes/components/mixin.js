export const Mixin = base => class base extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this._shadow = this.shadowRoot
    this.defaultState = {
      slug: this.tagName.toLowerCase(),
      region: this.parentElement.tagName.toLowerCase(),
      position: [].indexOf.call(this.parentNode.children, this),
      level: document.defaultView.getComputedStyle(this).getPropertyValue('z-index'),
      settings: {}
    }
    this._state = this.defaultState
    this.attributeChangedCallback()
  }
  get observedAttributes() { return ['region', 'position', 'level', 'settings'] }
  get getState() { return this.state }
  set setState(changedState) { this._state = { ...this._getState, ...changedState } }
  attributeChangedCallback() { this.observedAttributes.map((attr) => { }) }
  connectedCallback() { this.render() }
}
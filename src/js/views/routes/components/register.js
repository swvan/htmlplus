import { Heading } from './heading.js'
import { Logo } from './logo.js'
import { Aside } from './aside.js'
import { Hero } from './hero.js'
import { Spacer } from './spacer.js'
export const RegisterComponents = (
  registerHeading,
  registerLogo,
  registerAside,
  registerHero,
  registerSpacer,
) => {
  if (registerHeading) customElements.define('ui-heading', Heading)
  if (registerLogo) customElements.define('ui-logo', Logo)
  if (registerAside) customElements.define('ui-aside', Aside)
  if (registerHero) customElements.define('ui-hero', Hero)
  if (registerSpacer) customElements.define('ui-spacer', Spacer)
}
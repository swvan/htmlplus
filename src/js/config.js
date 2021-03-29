import { Application } from './app.js'
const settings = {
  BeforeWindowEventsRegistered:()=>false,
  BeforeApplicationEventsRegistered:()=>false,
  get metadata() {
    return {
      name: [
        ["target", "all"],
        ["audience", "all"],
        ["coverage", "Worldwide"],
        ["distribution", "Global"],
        ["google-site-verification", "GOOGLE UA CODE"]
        ["googlebot", "index,follow"],
        ["yandex-verification", "YANDEX VERIFICATION CODE"],
        ["yandex", "index,follow"],
        ["msvalidate.01", "BING VERIFICATION CODE"],
        ["robots", "archive,follow,imageindex,index,odp,snippet,translate"],
        ["twitter:title", "TITLE OF POST OR PAGE"],
        ["twitter:description", "DESCRIPTION OF PAGE CONTENT"],
        ["twitter:image", "LINK TO IMAGE"],
        ["twitter:site", "@USERNAME"],
        ["twitter:creator", "@USERNAME"],
        ["apple-mobile-web-app-capable", "yes"],
        ["apple-mobile-web-app-status-bar-style", "translucent black"],
        ["MSThemeCompatible", "no"],
        ["msapplication-navbutton-color", "translucent black"],
        ["SKYPE_TOOLBAR", "SKYPE_TOOLBAR_PARSER_COMPATIBLE"],
        ["HandheldFriendly", "True"],
        ["theme-color", "#b1cff4"],
        ["fragment", "!"],
      ],
      http_equiv: [
        ["Page-Enter", "RevealTrans(Duration=1.0,Transition=1)"],
        ["Page-Exit", "RevealTrans(Duration=1.0,Transition=1)"],
      ],
      property: [
        ["fb:app_id", "FB APP ID"],
        ["og:type", "SITE TYPE"],
        ["og:title", "TITLE OF YOUR POST OR PAGE"],
        ["og:description", "DESCRIPTION OF PAGE CONTENT"],
        ["og:image", "LINK TO THE IMAGE FILE"],
        ["og:url", "PERMALINK"],
        ["og:site_name", "SITE NAME"],
      ],
    }
  },
}
const app = new Application
app.Initiate(settings)
console.log(app.Development.Log.History)
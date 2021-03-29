window.App.Session=new Proxy({
  Restricted_Get_Properties:{OS:[],},
  Restricted_Set_Properties:{OS:[],},
,
  get ServiceWorker() {
    return {
      set Register(callBack=console.table) {
        return navigator.serviceWorker
          .register('/service-worker.js', { scope: '/' })
          .then(response => callBack(response))
          .catch(error => ThrowError(`Service Worker Registration Error`,error))
      },
      get Worker() { },
    }
  },
  get Thread(){
    return { 
      Controller:{
        set Register(callBack=console.table) {
          return new Worker('/src/js/controllers/controllerjs', { type: 'module' })
            .then(response => callBack(response))
            .catch(error => ThrowError(`Logic Thread Registration Error`,error))
        },
        get Worker() { },
      },
      State: {
        set Register(callBack=console.table) {
          return new Worker('/src/js/controllers/state.js', { type: 'module' })
            .then(response => callBack(response))
            .catch(error => ThrowError(`State Thread Registration Error`,error))
        },
        get Worker() { },
      }
    }
  },
  Analytics: {
    get Vendors(){
      return {
        Google: MetaDate.GetByName('google-site-verification'),
        Yandex: MetaDate.GetByName('yandex-verification'),
        Bing: MetaDate.GetByName('msvalidate.01')
      }
    },
  },
  get Logger(){''},
},{

})
window.App.=new Proxy({
  get Assemble() {
    if(!App.Booted)
    return import(`./src/js/config.js`)
    .then(()=>{
      Object.defineProperty(
        OS,'Booted',
        {get:()=>true}
      )
      App.Boot.Init
    })
    .catch(error=>{
      App.ThrowError(`Boot Failure`,error)
    }).finally(()=>{StartOS=undefined})
  },
  get
  get 
  },
},{
  get:(os, prop, target)=>{
    if(AppSession.Restricted_Get_Properties.App.includes(prop))
    App.ThrowError(`Restricted Operating System Property Get`,`You are not allowed to retrieve this property: ${prop}`)
    return os[prop]
  },
  set:(os, prop, value)=>{
    if(App.Booted&&prop==='Boot')
    App.ThrowError(`Boot Initiation Error`,`The operating system can only boot once.`)
    return AppSession.Restricted_Set_Properties.App.includes(prop)?
    App.ThrowError(`Restricted Operating System Property Set`,`You are not allowed to set this property: ${prop}`):
    os[prop]=value
  },
})
App.Assemble
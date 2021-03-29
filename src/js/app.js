import { ApplicationAPI } from './controllers/api.js'
import { ApplicationState } from './controllers/state.js'
import { ApplicationCache } from './controllers/cache.js'
import { ApplicationSession } from './controllers/session.js'
import { ApplicationController } from './controllers/controller.js'
import { ApplicationTheme } from './views/theme.js'
import { ApplicationView } from './views/index.js'

export class Application {

  constructor() {

    this.Self=window
    this.Screen=this.Self.screen
    this.Dom=this.Self.document
    this.Body=this.Dom.body
    this.Head=this.Dom.head
    this._$Private={
      Booted:true,
      Index:0,
      RestrictedGetProperties:{ Application: [] },
      RestrictedSetProperties:{ Application: [] },
      CSS:{
        normalize: ['/src/css/styles/normalize.css', 'all'],
        keyframes: ['/src/css/styles/key-frames.css', 'all'],
        common: ['/src/css/styles/common.css', 'all'],
        layout: ['/src/css/styles/layout.css', 'all'],
        typography: ['/src/css/styles/typography.css', 'all'],
        general: ['/src/css/styles/icons/general.css', 'all'],
        arrow: ['/src/css/styles/icons/arrow.css', 'all'],
        auto: ['/src/css/styles/icons/auto.css', 'all'],
        currency: ['/src/css/styles/icons/currency.css', 'all'],
        dingbat: ['/src/css/styles/icons/dingbat.css', 'all'],
        game: ['/src/css/styles/icons/game.css', 'all'],
        music: ['/src/css/styles/icons/music.css', 'all'],
        pointer: ['/src/css/styles/icons/pointer.css', 'all'],
        religion: ['/src/css/styles/icons/religion.css', 'all'],
        shape: ['/src/css/styles/icons/shape.css', 'all'],
        symbol: ['/src/css/styles/icons/symbol.css', 'all'],
        weather: ['/src/css/styles/icons/weather.css', 'all'],
        content: ['/src/css/styles/content.css', 'all'],
        $576px: ['/src/css/styles/media-queries/576px.css', '(min-width:576px)'],
        $768px: ['/src/css/styles/media-queries/768px.css', '(min-width:768px)'],
        $992px: ['/src/css/styles/media-queries/992px.css', '(min-width:992px)'],
        $1200px: ['/src/css/styles/media-queries/1200px.css', '(min-width:1200px)'],
        theme: ['/src/css/theme.css', 'all']
      }
    }

    console.log(this.MetaData('owner'))

    this.Entity = {
      Owner: this.MetaData( 'owner' ).GetName,
      Reply: this.MetaData( 'reply-to' ).GetName,
      Phone: this.MetaData( 'tel' ).GetName,
      Copyright: this.MetaData( 'copyright' ).GetName,
      Established: this.MetaData( 'established' ).GetName,
      Subject: this.MetaData( 'subject' ).GetName,
      Description: this.MetaData( 'description' ).GetName,
      Category: this.MetaData( 'category' ).GetName,
      Keywords: this.MetaData( 'keywords' ).GetName,
    }
    console.log(this.MetaData( 'debug' ))
    this.Development = {
      Developer: this.MetaData( 'author' ).GetName,
      Designer: this.MetaData( 'designer' ).GetName,
      Version: this.MetaData( 'version' ).GetName,
      Debug: this.MetaData( 'debug' ).GetName.toLowerCase() === 'true',
      Support: this.MetaData( 'support' ).GetName,
      Log: {
        Mode: this.MetaData( 'log' ).GetName.toLowerCase() === 'true',
        History: []
      }
    }

    if(this.Development.Log.Mode){
      const LogView = document.createElement('div')
      LogView.id = 'Log'
      this.Body.appendChild(LogView)
      this.Body.addEventListener('development.log',log=>{
        LogView.appendChild(log.detail.View) 
      })
    }

    this.API = new ApplicationAPI( this.MetaData( 'api' ).GetName )
    this.State = new ApplicationState( this._$Private.DefaultState )
    this.Cache = new ApplicationCache
    this.Session = new ApplicationSession
    this.Controller = new ApplicationController
    this.Theme = new ApplicationTheme( this._$Private.CSS )
    this.View = new ApplicationView
  }

  $(input) {
    if (this._paramCheck(input,'object')) return {
      Dom:document.querySelector(input),
      DomAll:document.querySelectorAll(input),
      Shadow: (shadowroot) => shadowroot.querySelector(input).ShadowRoot,
      ShadowAll: (shadowroot) => shadowroot.querySelectorAll(input).ShadowRoot,
      Parent:input.parentElement,
      Next:input.nextElementSibling,
      Prev:input.previousElementSibling
    }
    return {
      Hash:()=>{
        let hash = 0
        if (input.length == 0) return hash
        for (let i = 0; i < input.length; i++) {
          char = input.charCodeAt(i)
          hash = ((hash << 5) - hash) + char6
          hash = hash & hash
        }
        return hash
      },
      Capitalize:input.charAt(0).toUpperCase() + input.slice(1)
    }
  }


  _paramCheck(param, type) {
    if(param)return false
    return typeof param === String( type ) ? true : param instanceof type
  }

  _WindowEvents() {
  }

  _Events() {
  }

  _RegisterEvents(
    BeforeWindowEventsRegistered,
    BeforeApplicationEventsRegistered
  ) {
    this.AddLog( `Registering All Events` )

    if ( this._paramCheck( BeforeWindowEventsRegistered, 'function' ) ) {
      this.AddLog( `Executing Before Window Events Function` )
      BeforeWindowEventsRegistered()
    }

    this.AddLog( `Registering Window Events` )
    this._WindowEvents()

    if ( this._paramCheck( BeforeApplicationEventsRegistered, 'function' ) ) {
      this.AddLog( `Executing Before Application Events Function` )
      BeforeApplicationEventsRegistered()
    }
    
    this.AddLog( `Registering Application Events` )
    this._Events()
  }

  _ProductionEnvironment() {
    return this.MetaData.Base === location.origin
  }

  _Boot() { }

  MetaData(name,value) {
    if(name&&this._paramCheck(name,'string')) {
      if(value&&this._paramCheck(value,'string')){
        return {
          SetName:this.$(`meta[name="${ name }"]`).Dom.content = String( value ),
          SetProperty:this.$( `meta[property="${ name }"]` ).Dom.content = String( value)
        }
      }
      return {
        GetName:String( this.$( `meta[name="${ name }"]`).Dom.content ) ,
        GetProperty:String( this.$( `meta[property="${ property }"]` ).Dom.content ) ,
        SetTitle:document.title = String( name )
      }
    } else {
      return {
        Title:document.title,
        Base:document.baseURI,
      }
    }
  }

  ThrowError( error = { heading: `Error Thrown`, event: `Unspecified error.` } ) {
    if ( this._paramCheck( error, 'object' ) ) {
      const debug = this.Development.Debug
      console.group(`${ error.heading } - Debug: ${ debug }` )
      console.error( error.event )
      console.log( `Report Issues: ${ this.Development.Support || `Unsupported` }` )
      console.log( `Lead Contact: ${ this.Development.Developer || `N/A` }` )
      console.groupEnd()

      if ( debug ) {
        debugger
      } else {
        throw new Error( `Stopping Execution` )
      }
    }
    throw new Error( `Error thrown must be an object.` )
  }

  AddLog(log) {
    if ( this.Development.Log.Mode ) {
      const LogDate = new Date
      const history = {}
      const timestamp ={
          Date:`${ LogDate.getFullYear() }/${ ( LogDate.getMonth() + 1 ) < 10 ? `0${ ( LogDate.getMonth() + 1 ) }` : ( LogDate.getMonth() + 1 ) }/${ LogDate.getDate() }`,
          DateLabel:`${ LogDate.getFullYear() }:${ ( LogDate.getMonth() + 1 ) < 10 ? `0${ ( LogDate.getMonth() + 1 ) }` : ( LogDate.getMonth() + 1 ) }:${ LogDate.getDate() }`,
          Time:new Date(
            window.performance &&
            window.performance.now &&
            window.performance.timing &&
            window.performance.timing.navigationStart ?
            window.performance.now() + window.performance.timing.navigationStart :
            Date.now()
          ).toLocaleTimeString( 'it-IT' ),
          get Label(){ return `${ this.DateLabel }:${ this.Time }` },
      }
      if (this._paramCheck( log, 'string' ) ) {
        
        const historyDateTime=`${ timestamp.DateLabel }:${ timestamp.Time }`
        const historyLabel=`${ this.MetaData.Title }:${ historyDateTime}`
        
        const viewDateTime=`<time datetime="${ timestamp.Date } ${ timestamp.Time }">${ timestamp.Date } ${ timestamp.Time }</time>`
        const viewLabel=`${ this.MetaData.Title } | ${ viewDateTime }`
        const view=document.createElement( 'data' )
        view.value = historyLabel
        view.className = 'entry'
        view.innerHTML = `${ viewLabel } : ${ log }`
        
        history[ historyLabel ] = {
          Location:location,
          Log:log,
          TimeStamp:timestamp,
          View:view
        }
        this.Development.Log.History.push( history )
        if( this.Development.Debug ) {
          console.group(`${ historyLabel } - Log Added`)
          console.table(history)
          console.groupEnd()
          const event = new CustomEvent( 'developement.log',{ details: history })
          this.Body
          return history
        }
      }
    }
  }

  Initiate( settings ) {
    if ( this._paramCheck( settings, 'object' ) ) {
      this._RegisterEvents(
        settings.BeforeApplicationEventsRegistered,
        settings.BeforeWindowEventsRegistered
      )
    }
  }
}
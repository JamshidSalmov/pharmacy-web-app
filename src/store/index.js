import Vue from 'vue'
import Vuex from 'vuex'
import Measurement from './market/measurement'
import Catigory from './market/catigory'
import RigstrPro from './market/RigstrProduct'
import User from './user/user'
import UserSecure from './user/userSecure'
import Company from './market/company'
import Otdel from './market/otdel'
import Sklad from './market/sklad'
import Buy from './buy/buy'
import Sale from "./market/sale"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hostname: 'http://62.209.128.49:5003/api',
    //=====Data for Weather start==========
    api_key: "b08763deb4ab9028285878cfdbb46ad0",
    url_base: "https://api.openweathermap.org/data/2.5/",
    weather: {},
    //====Data for Weather End============
//practice VueX Start========
havolalar: [
  'https://google.com',
  'https://facebook.com',
  'https://instagram.com'
],

  },
  actions: {
    async fetch_weather(ctx, place){
      const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + place + "&units=metric&APPID=b08763deb4ab9028285878cfdbb46ad0")
      const data = await response.json()
      ctx.commit('updateWeather', data)
    },
  
  },
  
  mutations: {
    // Metods for Weather Start==========
    updateWeather(state, data){
      state.weather = data;
    },
    // Metods for Weather end==========
  HavolaQushish(state,newName){
    state.havolalar.push(newName); 
  },
  HavolaniUchirish(state,havolaId){
    state.havolalar.splice(havolaId,1)
  },
  DeleteRow(state, indexx){
    state.options.rows.splice(indexx, 1)
  },
  AddUser(state, newhavola){
    state.options.rows.push(newhavola)
  }
  },
  getters: {
    // Computed for Weather end==========
    Allweather(state){
      return state.weather
    },
    // Computed for Weather end==========
   havolalarSoni(state){
     return state.havolalar.length
   },
   options(state){
     return state.options
   }
  },
  modules: {
    Measurement,
    Catigory,
    RigstrPro,
    User,
    UserSecure,
    Company,
    Otdel,
    Sklad,
    Buy,
    Sale,
  }
})

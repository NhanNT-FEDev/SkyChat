// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import 'vue-awesome/icons/flag'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import store from './store'
// import VueSocketio from 'vue-socket.io'
import Firebase from 'firebase'

Vue.component('icon', Icon)
Vue.config.productionTip = false

let config = {
  apiKey: 'AIzaSyDwSd74KPNMqbYEsNUJQWF-hbckdTYDTHQ',
  authDomain: 'sky-lab-chat.firebaseapp.com',
  databaseURL: 'https://sky-lab-chat.firebaseio.com/',
  storageBucket: 'sky-lab-chat.appspot.com'
}
Firebase.initializeApp(config)
let db = Firebase.database()

Vue.use(VueResource)
Vue.use(function (V) {
  V.prototype.$db = () => db
})
Vue.use(function (V) {
  V.prototype.$firebase = () => Firebase
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App, Icon }
})

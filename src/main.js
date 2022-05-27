import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import NotificationList from '@/components/AlertComponents/NotificationList.vue'
import Input from '@/components/Ui/Input.vue'
Vue.filter('upper',function(val){
  return val.toUpperCase();
})
Vue.component('notes', NotificationList)
Vue.component('my-input',Input)
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
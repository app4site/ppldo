import Vue from 'vue'
import framework7 from './framework7'
import store from './store'
import './registerServiceWorker'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  framework7,
  store,
  render: h => h(App),
}).$mount('#app')

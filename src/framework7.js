import Vue from 'vue'
import Framework7 from 'framework7/dist/framework7.esm.bundle'
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle'
import 'framework7/dist/css/framework7.css'
import MainPage from './views/MainPage.vue'
import IssuePage from './views/IssuePage.vue'

Vue.use(Framework7Vue, Framework7)

export default {
  routes: [
    {
      path: '/',
      component: MainPage,
    },
    {
      path: '/issue/:id',
      component: IssuePage,
    },
  ],
}

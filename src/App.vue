<template lang="pug">
  #app
    f7-view(v-if="authOk" main)
      main-page
    f7-login-screen(:opened="!authOk")
      f7-view
        login-page
</template>

<script>
import { mapGetters } from 'vuex'
import MainPage from './views/MainPage.vue'
import LoginPage from './views/LoginPage.vue'

export default {
  components: {
    MainPage,
    LoginPage,
  },
  computed: {
    ...mapGetters({
      authOk: 'auth/ok',
    }),
  },
}
</script>

<style lang="stylus">
</style>

<template lang="pug">
  f7-page(login-screen)
    f7-login-screen-title Вход в систему
    f7-list(form)
      f7-list-item
        f7-label(floating) Ваш email
        f7-input(type="text" :value="email" @input="email = $event.target.value")
      f7-list-item
        f7-label(floating) Пароль
        f7-input(type="password" :value="password" @input="password = $event.target.value")
    f7-list
      f7-list-button(@click="login({email, password})") Готово
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    ...mapActions({
      login: 'auth/login',
    }),
  },
}
</script>

<style scoped lang="stylus">
</style>

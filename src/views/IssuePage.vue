<template lang="pug">
  f7-page
    f7-navbar(:title="issue.title")
    f7-toolbar
      p(@click="selectIssue(null)") back
    f7-messages
      f7-message(v-for="m in messages" :key="m.id" :text="m.message")
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  props: {
    id: String,
  },
  computed: {
    ...mapGetters({
      byId: 'issues/byId',
      messages: 'messages/objects'
    }),
    issue() {
      return this.byId(this.id)
    },
  },
  methods: {
    ...mapMutations([
      'selectIssue',
    ]),
  }
}
</script>

<style scoped lang="stylus">
</style>

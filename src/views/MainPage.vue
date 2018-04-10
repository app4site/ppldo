<template lang="pug">
  f7-page(v-if="!selectedIssue")
    f7-navbar(title="Чаты")
    f7-list
      f7-list-item(v-for="issue in issues" v-if="issue.title" :key="issue.id" @click="selectIssue(issue.id)")
        list-issue(:id="issue.id")
  issue-page(v-else :id="selectedIssue")
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
import ListIssue from '../components/ListIssue.vue'
import IssuePage from './IssuePage.vue'

export default {
  components: {
    ListIssue,
    IssuePage
  },
  created() {
    this.loadIssues()
  },
  computed: {
    ...mapGetters({
      issues: 'issues/objects',
    }),
    ...mapState({
      selectedIssue: 'selected_issue',
    }),
  },
  methods: {
    ...mapActions({
      loadIssues: 'issues/loadInitial',
    }),
    ...mapMutations([
      'selectIssue',
    ]),
  },
}
</script>

<style scoped lang="stylus">
</style>

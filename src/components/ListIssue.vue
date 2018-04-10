<template lang="pug">
  p {{issue.title}}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    id: String,
  },
  computed: {
    ...mapGetters({
      byId: 'issues/byId',
    }),
    issue() {
      return this.byId(this.id)
    },
  },
}
</script>

<style scoped>

</style>

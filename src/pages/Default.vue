<template>
  <div>
    <pre>Default.vue</pre>
    <pre>{{ testGetter }}</pre>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Default',
  data() {
    return {}
  },
  computed: {
    ...mapState(['app']),
    ...mapGetters('app', ['testGetter']),
    debug() {
      return this.$debug
    }
  },
  watch: {},
  methods: {
    ...mapActions('app', {
      toggleTestValue: 'toggleTest'
    })
  },
  mounted() {
    setTimeout(this.toggleTestValue, 200)
  }
}
</script>

<style lang="scss" scoped>
</style>

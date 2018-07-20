<template>
  <div id="app">
    Debug: {{ $debug }}
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {}
  }
}
</script>

<style lang="scss">
body {
  color: red;
}
</style>

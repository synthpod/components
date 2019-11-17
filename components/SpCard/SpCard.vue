<template>
  <div :class="$style.container">
    <sp-title as="h2" v-if="heading">{{ heading }}</sp-title>
    <p v-if="text">{{ text }}</p>
  </div>
</template>

<script>
import SpTitle from '@synthpod/sp-title/SpTitle'

export default {
  name: 'SpCard',
  components: { SpTitle },
  props: {
    heading: String,
    text: String
  }
}
</script>

<style lang="scss" module>
.container {
  background: rgba(152, 255, 134, 0.25);
}
</style>

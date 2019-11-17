<template>
  <component :class="$style.title" :is="as">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'SpTitle',
  props: {
    as: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" module>
.title {
  text-transform: uppercase;
}
</style>

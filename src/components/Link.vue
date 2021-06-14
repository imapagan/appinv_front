<template>
  <a
    class="a-link"
    :class="{ active: isActive }"
    v-bind="$attrs"
    @click="$emit('click')"
    :href="href"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: "Link",
  props: ["href", "isActive"]
};
</script>

<style lang="sass" scoped>
@import "../assets/styles/vars"

.active
  color: $pink

.a-link
  color: $primary
  font-size: 18px
  transition: .3s
  &:hover
    color: $pink
</style>

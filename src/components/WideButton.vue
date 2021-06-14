<template>
  <v-btn
    @click="$emit('click')"
    v-bind="$attrs"
    outlined
    min-width="120"
    rounded
    class="a-btn"
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: "WideButton",
  mounted() {}
};
</script>

<style lang="sass" scoped>
@import "../assets/styles/vars"

.a-btn
  color: $primary !important
  border: 1px solid $primary
  text-transform: unset
  font-size: 16px
  transition: .3s
  &:hover
    background: $primary
    color: #ffffff !important
</style>

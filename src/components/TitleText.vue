<template>
  <div class="card">
    <h1 class="a-title headingH1">
      <slot name="title" />
    </h1>
    <p class="a-text pNormal">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "TitleText",
  props: ["text"]
};
</script>

<style lang="sass" scoped>
@import "../assets/styles/vars"

.card
  width: 500px

.a-title
  color: $primary

.a-text
  margin-top: 40px
  color: $gray
</style>

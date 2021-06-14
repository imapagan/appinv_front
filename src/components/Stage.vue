<template>
  <div class="a-wrapper">
    <v-img class="a-img" :src="image" />
    <h2 class="a-title headingH2">{{ title }}</h2>
    <p class="a-description pSmall">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "Stage",
  props: ["image", "title", "description"]
};
</script>

<style lang="sass" scoped>
@import "../assets/styles/vars"

.a-wrapper
  width: 334px
  background: #E8F6FF
  border-radius: 50px
  display: flex
  flex-direction: column
  text-align: center
  padding-bottom: 40px

.a-title
  margin-top: -1.19em
  z-index: 1

.a-description
  color: $gray
  width: 220px
  margin: 8px auto 0 auto
</style>

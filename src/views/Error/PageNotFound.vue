<template>
  <section class="pnf">
    <div class="img">
      <v-img :src="require('@/assets/img/404.svg')" width="30rem" />
    </div>
  </section>
</template>

<script>
export default {
  name: "PageNotFound"
};
</script>

<style lang="sass" scoped>
.pnf
  width: 100%
  height: 100vh
  overflow: hidden
  position: relative
  display: flex
  justify-content: center
  align-items: center
</style>

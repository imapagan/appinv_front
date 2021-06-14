<template>
  <a
    target="_blank"
    href="https://www.youtube.com/channel/UCIT2bmEhea9ckiJp2_wCRSQ"
  >
    <div class="buttonWrapper">
      <button class="button">
        <font-awesome-icon icon="play" class="buttonIcon"></font-awesome-icon>
      </button>
    </div>
  </a>
</template>

<script>
export default {
  name: "BouncedButton"
};
</script>

<style lang="sass" scoped>
@import "../assets/styles/vars"

.buttonWrapper
  width: 80px
  height: 80px
  border-radius: 50%
  outline: none
  border: none
  display: flex
  justify-content: center
  align-items: center
  background: $primary
  animation: pulse 1.5s infinite
  box-shadow: 0 0 0 0 rgba(#155195, .5)

.button
  border-radius: 50%
  outline: none
  border: 1px solid #ffffff
  display: flex
  justify-content: center
  align-items: center
  width: 50px
  height: 50px

.buttonIcon
  font-size: 25px
  color: #ffffff
  transform: translate(3px)


@keyframes pulse
  0%
    transform: scale(.9)
  70%
    transform: scale(1)
    box-shadow: 0 0 0 2.5rem rgba(#155195, 0)
  100%
    transform: scale(.9)
    box-shadow: 0 0 0 0 rgba(#155195, 0)
</style>

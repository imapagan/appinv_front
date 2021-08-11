<template>
  <div class="mt-15">
    <div class="intro a-container">
      <Blot class="blot blot1" />
      <Blot class="blot blot2" />
      <img
        class="introImg"
        :src="require('@/assets/img/main_section.svg')"
        alt=""
      />
      <TitleText class="introContent" :text="$t('mainText')">
        <template v-slot:title>
          {{ $t("mainTitle") }}
        </template>
      </TitleText>
    </div>
    <Mouse />
    <div class="stages a-container">
      <Stage
        v-for="stage in stages"
        :key="stage.id"
        :image="stage.img"
        :title="stage.title"
        :description="stage.description"
      />
    </div>
    <div class="beProgrammer a-container">
      <Blot class="blot blot3" />
      <BouncedButton class="beProgrammerBtn" />
      <TitleText class="beProgrammerContent" :text="$t('programmerText')">
        <template v-slot:title>
          {{ $t("programmerTitle") }}
        </template>
      </TitleText>
      <img
        class="beProgrammerImg"
        :src="require('@/assets/img/be-programmer.svg')"
        alt=""
      />
    </div>
    <Partners class="partners" />
  </div>
</template>

<script>
import TitleText from "@/components/TitleText";
import Mouse from "@/components/Mouse";
import Stage from "@/components/Stage";
import Blot from "@/components/Blot";
import Partners from "@/components/Partners";
import BouncedButton from "@/components/BouncedButton";

export default {
  name: "Home",
  components: { BouncedButton, Partners, Blot, Stage, Mouse, TitleText },
  computed: {
    stages() {
      return [
        {
          id: 1,
          img: require("@/assets/img/card_1.png"),
          ...this.$t("stages")[0]
        },
        {
          id: 2,
          img: require("@/assets/img/card_2.png"),
          ...this.$t("stages")[1]
        },
        {
          id: 3,
          img: require("@/assets/img/card_3.png"),
          ...this.$t("stages")[2]
        }
      ];
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="sass" scoped>
@import "../assets/styles/vars"

.blot
  position: absolute
  &1
    left: -180px
    top: -100px
    transform: rotate(-38deg)
  &2
    right: -100px
    top: 250px
    transform: rotate(-33deg)
  &3
    top: 180px
    left: -300px
    transform: rotate(-36deg)



.blueLight
  color: $blueLight

.intro
  display: flex
  justify-content: space-between
  align-items: center
  @include phoneMedia
    flex-direction: column-reverse

.introImg
  width: 600px
  z-index: 2
  @include phoneMedia
    width: 100%

.introContent
  z-index: 2

.stages
  margin-top: 80px
  display: flex
  justify-content: space-between
  @include phoneMedia
    width: 100%
    align-items: center
    flex-direction: column
    justify-content: center

    & > div
      &:not(last-child)
        margin-bottom: 40px

.beProgrammer
  margin-top: 120px
  display: flex
  justify-content: space-between
  align-items: center
  position: relative

  @include phoneMedia
    flex-direction: column
    margin-top: get-vw(40px)

.beProgrammerImg
  z-index: 2
  width: 600px
  @include phoneMedia
    width: 100%
    margin-top: 40px

.beProgrammerContent
  z-index: 2

.beProgrammerBtn
  z-index: 3
  position: absolute
  right: 540px
  bottom: 22px
  @include phoneMedia
    right: get-vw(10px)
    bottom: get-vw(-50px)

.partners
  margin-top: 110px
</style>

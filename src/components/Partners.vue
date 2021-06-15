<template>
  <div class="partners py-12">
    <div class="partners__header">
      <h1 class="header-text headingH1">{{ $t("partners") }}</h1>
      <p class="content-text pNormal pt-5 px-5">
        {{ $t("partnersTitle") }}
      </p>
      <p class="content-text pt-5 px-5">
        <a
          href="mailto:hayappinventor@gmail.com?subject=Партнерство с AppInventor Armenia"
          >{{ $t("partnersSubtitle") }}</a
        >
      </p>
    </div>
    <VueSlickCarousel class="partners__carousel" v-bind="settings">
      <div
        class="partners__carousel-item px-10 mb-5"
        v-for="(partner, index) in partners"
        :key="index"
      >
        <a target="_blank" :href="partner.url">
          <div
            class="partners__carousel-item-img d-flex align-center justify-center"
          >
            <v-img
              width="130px"
              height="130px"
              contain
              :src="partner.logo"
              draggable="false"
            />
          </div>
        </a>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "Partners",
  components: {
    VueSlickCarousel
  },
  data: () => ({
    partners: [
      {
        name: "Mara",
        url: "#",
        logo: require("@/assets/img/mara_partner.svg")
      },
      {
        name: "Space Shop",
        url: "https://www.facebook.com/SirovTiezerqic/",
        logo: require("@/assets/img/ss-partner.png")
      }
    ],
    settings: {
      arrows: true,
      autoplay: true,
      speed: 300,
      dots: true,
      infinite: true,
      slidesToShow: 3,
      centerMode: true,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
  })
};
</script>

<style lang="sass" scoped>
.partners
    background-color: #F3F3F3
    &__header
        width: 100%
        text-align: center
        color: #313768
        h1
            //font-size: 3.4rem
        p
            //font-size: 1.8rem
            a
                color: #155195 !important
    &__carousel
        width: 100% !important
        min-height: 9.7rem
        &-item
          height: 9.7rem
          text-align: center
          outline: none !important
          overflow: hidden !important
          &-img
            filter: grayscale(100%)
            opacity: .6
            cursor: pointer
            transition: all .2s
            &:hover
              filter: grayscale(0)
              opacity: 1
</style>

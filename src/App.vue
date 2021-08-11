<template>
  <v-app>
    <v-btn
      v-show="fab"
      v-scroll="onScroll"
      @click="toTop"
      fab
      dark
      fixed
      bottom
      right
      color="primary"
    >
      <font-awesome-icon
        style="font-size: 1.6rem;"
        icon="chevron-up"
        class=""
      ></font-awesome-icon>
    </v-btn>
    <Header :menu-items="menuItems" />

    <v-content>
      <router-view />
    </v-content>

    <v-footer class="footer py-16 px-10" padless>
      <v-row no-gutters>
        <v-col cols="12" class="col-sm-4">
          <div class="footer__line footer__line-short"></div>
          <div class="footer__line footer__line-long"></div>
        </v-col>

        <v-col cols="6" class="px-sm-10 col-sm-4">
          <div class="footer__line footer__line-short"></div>
          <div class="footer__line footer__line-long"></div>
          <ul class="footer__menu d-flex flex-column text-left my-3">
            <li>
              <router-link
                v-for="(item, index) in menuItems"
                :key="index"
                :to="item.url"
                tag="div"
                style="cursor: pointer"
                class="footer__menu-item"
              >
                {{ item.title }}
              </router-link>
            </li>
          </ul>
        </v-col>

        <v-col cols="6" class="col-sm-4">
          <div class="footer__line footer__line-short"></div>
          <div class="footer__line footer__line-long"></div>
          <div class="footer__mail my-3">
            hayappinventor@gmail.com
          </div>
          <div class="footer__social-media my-3">
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCIT2bmEhea9ckiJp2_wCRSQ"
            >
              <v-icon color="#7ABFF5" class="footer__social-media-item mx-1"
                >mdi-youtube</v-icon
              >
            </a>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <div class="footer__cr">
          © Apaga.org 2021
        </div>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "App",

  components: { Header },

  watch: {
    $route(to) {
      document.title = to.meta.title || "App Inventor Armenia";
    }
  },

  computed: {
    menuItems() {
      return [
        {
          name: this.$t("menuItems")[0],
          url: "/about"
        },
        {
          name: this.$t("menuItems")[1],
          url: "/team"
        },
        {
          name: this.$t("menuItems")[2],
          url: "/education"
        }
      ];
    }
  },

  data: () => ({
    drawer: false,
    fab: false
  }),
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>

<style lang="sass">
$mainColor: #155195
$secondColor: #7ABFF5
$textColor: #777777
$activeColor: #EA3D90

.main-color
  color: $mainColor
.sec-color
  color: $secondColor
.text-color
  color: $textColor

@media only screen and (min-width: 1891px)
  html
    font-size: 22px !important

@media only screen and (min-width: 1270px) and (max-width: 1890px)
  html
    font-size: 18px !important


@media only screen and (min-width: 960px) and (max-width: 1264px)
  html
    font-size: 14px !important

@media only screen and (min-width: 600px) and (max-width: 960px)
  html
    font-size: 12px !important
  br
    display: none

@media (max-width: 600px)
  html
    font-size: 14px !important

  br
    display: none

  .app
    background-color: white !important

html, body
  box-sizing: border-box !important
  overflow-x: hidden

body
  color: $textColor

a
  text-decoration: none

li
  list-style: none
  font-size: 1rem

//.blot
//  width: 17rem
//  height: 17rem
//  background-color: #E0F0FD
//  position: absolute
//  border-radius: 4.5rem
//  transform: rotate(-29deg)
//  z-index: 0 !important

.btn
  font-size: 1.2rem
  line-height: 1.4rem
  color: $mainColor
  border-radius: 35px
  transition: all .4s
  outline: none !important
  text-transform: capitalize !important
  &:hover
    background-color: $mainColor
    color: #ffffff !important
  &:disabled
    color: $textColor !important
    border-color: $textColor !important

.header-text
  font-size: 2.8rem
  line-height: 3.8rem
  color: $mainColor !important

.content-text
  font-size: 1.3rem
  line-height: 1.7rem
  font-weight: 300

.slick-dots
  position: absolute
  bottom: 0
  li button:before
    content: ''
    width: .6rem !important
    height: .6rem !important
    background-color: #155195
    border-radius: 50%
    display: block

.active
  color: $activeColor !important

.sticky-style
  z-index: 999 !important

.app
  background-color: #ffffff !important
  height: 100% !important
  //&__container
  &__navbar
    background-color: #ffffff
    transition: all .4s ease
    height: max-content !important
    display: table !important
    width: 100%
    &-brand
      font-size: 1.2rem
      color: $mainColor
      font-weight: 700
      cursor: pointer
      &-app
        font-size: 1rem
        text-transform: uppercase
        width: 2.8rem
        height: 2.8rem
        background-color: $mainColor
        color: #fff
        text-align: center
        display: flex
        justify-content: center
        align-items: center
        border-radius: 50%
        margin-right: 5px
    &-hamburger
      width: 2rem
      height: 2rem
      position: relative
      span
        display: block
        height: 3px !important
        width: 100%
        background-color: #155195
        position: absolute
        right: 0
      &-1
        width: 100% !important
      &-2
        width: 80% !important
        margin-top: 8px
      &-3
        width: 50% !important
        margin-top: 16px
    &-menu
      z-index: 2
      &-item
        margin: 0 1.2rem
        transition: all .3s ease
        color: $mainColor
        &:hover
          color: $activeColor
        a
          color: $mainColor
      &-btn
        margin-left: .5rem
  &__menu__drawer
    &-list
      position: absolute !important
      top: 50%
      left: 50%
      transform: translate(-75%, -60%)
    &-close
      position: absolute !important
      right: 5% !important
      top: 2%
    &-btn
      bottom: 3.8rem
      left: 50%
      transform: translate(-75%, 0)

.footer
  width: 100%
  background-color: #011D3D !important
  color: #ffffff !important
  font-size: 1rem !important
  font-weight: 300
  position: relative
  display: block !important
  &__menu
    padding: 0 !important
    &-item
      color: $secondColor
      transition: all .3s ease
      &:hover
        color: white
  &__social-media
    &-item
      color: $secondColor
      font-size: 2rem !important
      transition: all .3s ease
      &:hover
        color: white !important
  &__mail
    color: $secondColor
    transition: all .3s ease
    cursor: pointer
    &:hover
      color: white
  &__cr
    position: absolute
    left: 50%
    bottom: 10px
    transform: translateX(-50%)
    font-size: 1rem
  &__line
    height: 3px
    min-width: 1.4rem
    background-color: #ffffff
    border-radius: 25%
    margin-top: 1rem
    &-short
      width: 1.7rem
    &-long
      width: 3.5rem

.main
  background-color: white !important
</style>

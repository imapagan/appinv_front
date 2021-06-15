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
    <!--    &lt;!&ndash;    <v-app-bar&ndash;&gt;-->
    <!--    &lt;!&ndash;      app&ndash;&gt;-->
    <!--    &lt;!&ndash;      color="white"&ndash;&gt;-->
    <!--    &lt;!&ndash;      class="app__navbar rounded-b-xl py-2 px-5"&ndash;&gt;-->
    <!--    &lt;!&ndash;      elevate-on-scroll&ndash;&gt;-->
    <!--    &lt;!&ndash;    >&ndash;&gt;-->
    <!--    &lt;!&ndash;      <router-link&ndash;&gt;-->
    <!--    &lt;!&ndash;        to="/"&ndash;&gt;-->
    <!--    &lt;!&ndash;        tag="div"&ndash;&gt;-->
    <!--    &lt;!&ndash;        class="app__navbar-brand d-flex align-center"&ndash;&gt;-->
    <!--    &lt;!&ndash;      >&ndash;&gt;-->
    <!--    &lt;!&ndash;        <div class="app__navbar-brand-app">App</div>&ndash;&gt;-->
    <!--    &lt;!&ndash;        <div class="">Inventor</div>&ndash;&gt;-->
    <!--    &lt;!&ndash;      </router-link>&ndash;&gt;-->
    <!--    &lt;!&ndash;      <v-spacer></v-spacer>&ndash;&gt;-->
    <!--    &lt;!&ndash;      <ul class="app__navbar-menu d-none d-sm-flex align-center">&ndash;&gt;-->
    <!--    &lt;!&ndash;        <li&ndash;&gt;-->
    <!--    &lt;!&ndash;          :class="{ active: $route.path === item.url }"&ndash;&gt;-->
    <!--    &lt;!&ndash;          class="app__navbar-menu-item"&ndash;&gt;-->
    <!--    &lt;!&ndash;          v-for="(item, index) in menuItems"&ndash;&gt;-->
    <!--    &lt;!&ndash;          :key="index"&ndash;&gt;-->
    <!--    &lt;!&ndash;        >&ndash;&gt;-->
    <!--    &lt;!&ndash;          <router-link tag="a" :to="item.url">{{ item.title }}</router-link>&ndash;&gt;-->
    <!--    &lt;!&ndash;        </li>&ndash;&gt;-->
    <!--    &lt;!&ndash;        <v-btn class="btn" color="#155195" outlined rounded width="7rem">&ndash;&gt;-->
    <!--    &lt;!&ndash;          Начать&ndash;&gt;-->
    <!--    &lt;!&ndash;        </v-btn>&ndash;&gt;-->
    <!--    &lt;!&ndash;      </ul>&ndash;&gt;-->
    <!--    &lt;!&ndash;      <v-btn&ndash;&gt;-->
    <!--    &lt;!&ndash;        v-if="$router.currentRoute.name !== 'Login'"&ndash;&gt;-->
    <!--    &lt;!&ndash;        class="mx-2 d-flex d-sm-none"&ndash;&gt;-->
    <!--    &lt;!&ndash;        fab&ndash;&gt;-->
    <!--    &lt;!&ndash;        dark&ndash;&gt;-->
    <!--    &lt;!&ndash;        small&ndash;&gt;-->
    <!--    &lt;!&ndash;        icon&ndash;&gt;-->
    <!--    &lt;!&ndash;        @click="drawer = !drawer"&ndash;&gt;-->
    <!--    &lt;!&ndash;      >&ndash;&gt;-->
    <!--    &lt;!&ndash;        <div class="app__navbar-hamburger d-flex d-md-none flex-column">&ndash;&gt;-->
    <!--    &lt;!&ndash;          <span class="app__navbar-hamburger-1"></span>&ndash;&gt;-->
    <!--    &lt;!&ndash;          <span class="app__navbar-hamburger-2"></span>&ndash;&gt;-->
    <!--    &lt;!&ndash;          <span class="app__navbar-hamburger-3"></span>&ndash;&gt;-->
    <!--    &lt;!&ndash;        </div>&ndash;&gt;-->
    <!--    &lt;!&ndash;      </v-btn>&ndash;&gt;-->
    <!--    &lt;!&ndash;    </v-app-bar>&ndash;&gt;-->
    <!--    <v-content>-->
    <!--      <router-view />-->
    <!--    </v-content>-->
    <v-navigation-drawer
      class="d-sm-none app__menu__drawer rounded-l-xl "
      style="z-index: 10000"
      fixed
      v-model="drawer"
      temporary
      right
    >
      <v-btn
        @click="drawer = !drawer"
        icon
        x-large
        class="app__menu__drawer-close ma-2"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>

      <v-list class="app__menu__drawer-list mx-10">
        <v-list-item
          :to="item.url"
          class="app__menu__drawer-list-item my-5"
          v-for="(item, index) in menuItems"
          :key="index"
        >
          <v-list-item-content>
            <v-list-item-title
              class="app__navbar-menu-item"
              style="font-size: 1.5rem !important;"
              >{{ item.title }}</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-btn
        class="btn app__menu__drawer-btn"
        color="#155195"
        outlined
        rounded
        width="7rem"
        absolute
      >
        Начать
      </v-btn>
    </v-navigation-drawer>
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

  data: () => ({
    menuItems: [
      {
        name: "О нас",
        url: "/about"
      },
      {
        name: "Обучение",
        url: "/education"
      },
      {
        name: "Преподавание",
        url: "/teaching"
      }
    ],
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

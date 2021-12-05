<template>
  <div>
    <v-app-bar app color="white" class="header rounded-b-xl" elevate-on-scroll>
      <router-link to="/">
        <v-img :src="require('@/assets/logo.svg')" />
      </router-link>

      <div class="locale">
        <InlineLink @click="setLocale('ru')" :is-active="$i18n.locale === 'ru'"
          >Rus</InlineLink
        >
        /
        <InlineLink
          @click="setLocale('arm')"
          :is-active="$i18n.locale === 'arm'"
          >Arm</InlineLink
        >
      </div>
      <v-spacer />

      <ul class="menuItems">
        <li v-for="item in menuItems" :key="item.url">
          <router-link :to="item.url">
            <InlineLink>{{ item.name }}</InlineLink>
          </router-link>
        </li>
        <a
          class="d-none d-sm-block"
          target="_blank"
          href="http://ai2.appinventor.mit.edu/?locale=ru"
        >
          <WideButton>
            {{ $t("startButton") }}
          </WideButton>
        </a>
        <v-btn
          @click="draw = !draw"
          class="ml-2"
          color="primary"
          fab
          light
          small
          icon
        >
          <v-icon>
            mdi-menu
          </v-icon>
        </v-btn>
      </ul>
    </v-app-bar>
    <v-navigation-drawer
      class="navbar pl-4"
      v-model="draw"
      light
      app
      right
      fixed
    >
      <div class="locale-mobile">
        <InlineLink @click="setLocale('ru')" :is-active="$i18n.locale === 'ru'"
          >Rus</InlineLink
        >
        /
        <InlineLink
          @click="setLocale('arm')"
          :is-active="$i18n.locale === 'arm'"
          >Arm</InlineLink
        >
      </div>
      <v-list class="navbarMenu">
        <v-list-item
          v-for="item in menuItems"
          :key="item.url"
          link
          :to="item.url"
        >
          <v-list-item-content>
            <v-list-item-title class="pNormal mb-3">
              {{ item.name }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <a
        class="startMobile"
        target="_blank"
        href="http://ai2.appinventor.mit.edu/?locale=ru"
      >
        <WideButton>
          {{ $t("startButton") }}
        </WideButton>
      </a>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Link from "@/components/Link";
import WideButton from "@/components/WideButton";

export default {
  name: "Header",
  components: { WideButton, InlineLink: Link },
  props: ["menuItems"],
  created() {
    const locale = localStorage.getItem("locale");
    if (locale) this.$i18n.locale = locale;
  },
  data: () => ({
    draw: false
  }),
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
      localStorage.setItem("locale", locale);
    },

    changeLocale() {
      this.$i18n.locale === "ru" ? this.setLocale("arm") : this.setLocale("ru");
    }
  }
};
</script>

<style lang="sass" scoped>
@import "../assets/styles/vars"

.menuItems
  display: flex
  align-items: center
  @include phoneMedia
    li
      display: none
  li
    margin: 0 30px

.hamburger
  margin-left: auto

.locale
  margin-left: 50px
  color: $primary
  @include phoneMedia
    display: none

.locale-mobile
  display: none
  margin-top: get-vw(20px)
  @include phoneMedia
    display: block

.navbarMenu
  margin-top: get-vw(180px) !important

.startMobile
  position: absolute
  bottom: get-vw(80px)
</style>

<style lang="sass">
@import "../assets/styles/vars"

.header
  & > div
    width: $desktopContainerWidth
    margin: 0 auto
    @include tabletLargeMedia
      width: $tabletLargeContainerWidth
    @include tabletMedia
      width: $tabletContainerWidth
    @include phoneMedia
      width: $phoneContainerWidth
</style>

<template>
  <v-app-bar app color="white" class="header rounded-b-xl" elevate-on-scroll>
    <router-link to="/">
      <v-img :src="require('@/assets/logo.svg')" />
    </router-link>

    <div class="locale">
      <InlineLink @click="setLocale('ru')" :is-active="$i18n.locale === 'ru'"
        >Rus</InlineLink
      >
      /
      <InlineLink @click="setLocale('arm')" :is-active="$i18n.locale === 'arm'"
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
      <a target="_blank" href="http://ai2.appinventor.mit.edu/?locale=ru">
        <WideButton>
          Начать
        </WideButton>
      </a>
      <div class="locale-mobile ml-3">
        <InlineLink @click="changeLocale">{{
          $i18n.locale === "ru" ? "Rus" : "Arm"
        }}</InlineLink>
      </div>
    </ul>

    <v-btn
      v-if="$router.currentRoute.name !== 'Login'"
      class="mx-2 d-flex d-sm-none"
      fab
      dark
      small
      icon
      @click="drawer = !drawer"
    >
      <div class="hamburger d-flex d-md-none flex-column">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </v-btn>
  </v-app-bar>
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
  @include phoneMedia
    display: block
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

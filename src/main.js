import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { i18n } from "./plugins/i18n";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import VueYandexMetrika from "vue-yandex-metrika";

import "./assets/styles/global.sass";
import "./assets/styles/typography.sass";
import "./assets/styles/layout.sass";

library.add(faPlay, faChevronUp);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueYandexMetrika, {
  id: 80548672,
  router: router,
  env: process.env.NODE_ENV
});

setTimeout(() => {
  new Vue({
    i18n,
    router,
    vuetify,
    render: h => h(App)
  }).$mount("#app");
}, 600);

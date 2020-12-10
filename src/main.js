import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlay, faChevronUp);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

setTimeout(() => {
  new Vue({
    router,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
}, 600)

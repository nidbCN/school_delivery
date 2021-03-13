import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueCookie from 'vue-cookie'
import router from './route'

import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(VueCookie);

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')

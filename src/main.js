// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import VeeValidate from 'vee-validate'

// import {
//   ValidationObserver,
//   ValidationProvider,
//   extend,
//   localize
// } from "vee-validate";
// import en from "vee-validate/dist/locale/en.json";
// import * as rules from "vee-validate/dist/rules";

// Vue.use(VeeValidate, {
//   // This is the default
//   inject: true,
//   // Important to name this something other than 'fields'
//   fieldsBagName: 'veeFields',
//   // This is not required but avoids possible naming conflicts
//   errorBagName: 'veeErrors'
// })

// Object.keys(rules).forEach(rule => {
//   extend(rule, rules[rule]);
// });

// localize("en", en);

// // Install VeeValidate components globally
// Vue.component("ValidationObserver", ValidationObserver);
// Vue.component("ValidationProvider", ValidationProvider);


// Vue.use(VeeValidate);

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.use(BootstrapVue);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './../node_modules/bulma/css/bulma.css';
import VeeValidate, { Validator } from 'vee-validate';
import ru from 'vee-validate/dist/locale/ru';
// import VeeValidate from 'vee-validate';

Validator.localize('ru', ru);
Vue.use(VeeValidate, {
  locale: 'ru',
});
Vue.config.productionTip = false;
// Vue.use(VeeValidate);

new Vue({
   router,
  render: h => h(App),
}).$mount('#app')

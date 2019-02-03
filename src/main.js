import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import DemoElement from '@/modules/DemoElement.vue';


const CustomElement = wrap(Vue, DemoElement);

// Vue.use(vueCustomElement);
// Vue.customElement('demo-element', DemoElement);
window.customElements.define('demo-element', CustomElement);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

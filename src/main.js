import Vue from 'vue';

import 'normalize.css'; // A modern alternative to CSS resets

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/assets/css/index.scss'; // global css

import App from './App';
import router from './router';
import store from './store';

import '@/assets/font/iconfont.css';

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
Vue.use(ElementUI);

Vue.config.productionTip = false;
console.log(process.env);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

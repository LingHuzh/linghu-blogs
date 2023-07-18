import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'swiper/css/swiper.css'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'vant/lib/vant.js'


import { Popup } from 'vant';
import { Toast } from 'vant';

import axios from 'axios'
Vue.prototype.$axios = axios
import { VueJsonp } from 'vue-jsonp'  
 
Vue.use(ElementUI);
Vue.use(VueJsonp)
Vue.use(Vant);
Vue.use(Popup);
Vue.use(Toast);

Vue.config.productionTip = false

//动态设置title、关键词、描述

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  // if (to.meta.content) {
  //   const head = document.getElementsByTagName('head');
  //   const meta = document.createElement('meta');
  //   document.querySelector('meta[name="keywords"]').setAttribute('content', to.meta.content.keywords);
  //   document.querySelector('meta[name="description"]').setAttribute('content', to.meta.content.description);
  //   meta.content = to.meta.content;
  //   head[0].appendChild(meta)
  // }

  next()
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

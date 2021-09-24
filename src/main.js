import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUi from '../src/plugins/ElementUi.js'
import AppComponent from '../src/plugins/AppComponent'

import AnimateCss from 'animate.css'

import * as echarts from 'echarts';
import 'echarts-gl'



Vue.prototype.echarts = echarts;

Vue.use(AnimateCss)
Vue.use(ElementUi)
Vue.use(AppComponent)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 映入初始样式
import './assets/scss/index.scss'
// 引入 element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入 Mockjs
import './assets/js/mock'
// 引入图表
// import VeLine from 'v-charts/lib/line.common'
// Vue.component(VeLine)
import VCharts from 'v-charts'
Vue.use(VCharts)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

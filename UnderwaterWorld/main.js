import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.$Url = 'http://8.131.230.77/mall';

App.mpType = 'app'

// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView);

const app = new Vue({
    ...App
})
app.$mount()

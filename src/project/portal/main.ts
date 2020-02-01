//全局ajax拦截器
import Vue from 'vue'
import App from '@portal/App.vue'
import router from '@portal/router/router.ts'
import store from '@portal/store/store.ts'
import axios from 'axios'
import elementUi from '@portal/utils/element-ui.ts'
//使用element-ui并且把各插件挂载到Vue上
elementUi(Vue)
//把axios挂载到Vue原型链上
Vue.prototype.$http = axios
var vm = new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
});

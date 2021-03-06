
import Vue from 'vue'
import VueRouter from 'vue-router'
import {Routers} from '@portal/utils/mod-loader'
Vue.use(VueRouter);
import Root from '@portal/views/root/root.vue'
// import {Routers} from '@portal/utils/mod-loader'
// meta: {
//     keepAlive: false // 不需要被缓存
// },
export default new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/portal',
            redirect: function () {
                return '/portal/home'
            },
            name:'root',
            component: Root,
            children: [
                ...Routers,
                {
                    name: 'home',
                    path: 'home',
                    component: () => import('@portal/views/home/home.vue')
                },
                {
                    name: 'export1',
                    path: 'export1',
                    component: () => import('@portal/views/export/export1.vue')
                },
                {
                    name: 'global',
                    path: 'global',
                    component: () => import('@portal/views/global/global.vue')
                },
                {
                    name: 'vuex',
                    path: 'vuex',
                    component: () => import('@portal/views/vuex/vuex.vue')
                },
                {
                    name: 'decorator',
                    path: 'decorator',
                    component: () => import('@portal/views/decorator/index.vue')
                }
            ]
        }
    ]
});



















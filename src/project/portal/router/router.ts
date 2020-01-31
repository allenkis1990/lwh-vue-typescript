
import Vue from 'vue'
import VueRouter from 'vue-router'

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
                // ...Routers,
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
                }
            ]
        }
    ]
});



















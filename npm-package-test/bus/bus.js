import Vue from 'vue'
export default function(){
    Vue.prototype.$bus = new Vue()
    return Vue
}
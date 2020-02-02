import Vue from 'vue'
import Vuex from 'vuex'
import {state} from '@portal/store/state.ts'
import {mutations} from '@portal/store/mutations.ts'
import {getters} from '@portal/store/getters.ts'
import {actions} from '@portal/store/actions.ts'
import {modules} from '@portal/store/modules.ts'
// import {Stores} from '@portal/utils/mod-loader'
import {Stores} from '@portal/utils/mod-loader'
Vue.use(Vuex);
export default new Vuex.Store({
    // namespaced:true,
    strict:true,
    state,
    mutations,
    getters,
    actions,
    modules:{
        ...Stores,
        ...modules
    }
})






import {state} from '@portal/store/modules/moduleA/state.ts'
import {getters} from '@portal/store/modules/moduleA/getters.ts'
import {mutations} from '@portal/store/modules/moduleA/mutations.ts'
import {actions} from '@portal/store/modules/moduleA/actions.ts'

export default {
  namespaced:true,
  state,
  getters,
  mutations,
  actions
}

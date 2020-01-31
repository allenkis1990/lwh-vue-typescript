/**
 * Created by admin on 2019/3/11.
 */
import { Message,Loading  } from 'element-ui'
export default function(Vue:any){
    Vue.prototype.$message = Message
    Vue.prototype.$loading = Loading
}
/**
 * Created by admin on 2019/3/11.
 */
import {fuckOptions} from "../types/fuck.d.ts";
import {haha} from "../types/haha.ts";
export let fuck:fuckOptions = {
    name:'fuck',
    age:18,
    fn(name,age){
        return name+age
    }
}

export let shit:haha = {
    fn(name){
        console.log(name);
    }
}
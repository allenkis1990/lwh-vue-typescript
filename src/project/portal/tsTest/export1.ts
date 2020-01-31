import {test2Name, test2Fn,test2Obj} from 'test2'
import export2Obj from 'test2'
console.log(test2Name);
test2Fn('test2Fn')

test2Obj.say('test2Obj',18)

let str = export2Obj.say('web','fuck')
console.log(str);
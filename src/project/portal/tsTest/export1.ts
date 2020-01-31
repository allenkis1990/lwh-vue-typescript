import {test2Name, test2Fn,test2Obj,test2Obj2} from 'test2'
import export2Obj from 'test2'
import extentTest3Fn from '@portal/views/export/extendTest3.js'
console.log(test2Name);
test2Fn('test2Fn')
import json from '@portal/static/jsonData.json'

test2Obj.say('test2Obj',18)

let str = export2Obj.say('web','fuck')
console.log(str);

console.log(test2Obj2);
// test2Obj2.money = '1'//报错


import {test3Obj} from 'test3'
//在这里给test3Obj加了一个fuck属性 可是原来声明文件里没有 定义一个module合并
extentTest3Fn(test3Obj)
console.log(test3Obj.fuck);


console.log(json,'json');
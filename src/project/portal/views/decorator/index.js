/**
 * Created by Allen Liu on 2020/2/4.
 */

//装饰器只能装饰一整个类  和装饰类里的方法


//给类加一个静态属性
const addProp = (target)=> {
    target.job = 'web'
}
const addProp2 = (target)=> {
    target.userName = 'allen'
}

@addProp
@addProp2
class A{

}
console.log(A.job, '12121212');
console.log(A.userName, '12121212');



// const add = (params) => (target,keyName,des)=>{
//     console.log(params);
//     console.log(keyName);
// }

//给类的方法扩展内容
const add = function(params){
    return function(target,keyName,des){
        // console.log('装饰器参数：',params);
        // console.log('被装饰的属性的名字',keyName);
        let oldFn = des.value
        des.value = function(...arg){
            console.log('start')
            oldFn.call(this,...arg)
            console.log('end')
        }
        return des
    }
}

class B{
    //使用装饰器再方法最前面加了个start最后面加了个end
    @add('fuck')
    haha(name,age){
        console.log(name);
        console.log(age);
        // console.log(this.fuck);
    }
    constructor(){
        this.fuck = 'fuck'
    }
}

let b = new B()
b.haha('allen',18)


function readOnly(target,keyName,des){
    des.writable = false
    return des
}

class C{
    @readOnly
    fn(){
        console.log('c');
    }
}

let c = new C()
c.fn()
// c.fn = 1//报错




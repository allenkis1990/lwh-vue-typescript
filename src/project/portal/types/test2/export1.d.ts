
declare let test2Name:string
declare function test2Fn(name:string):void

interface test2ObjItf{
    name:string,
    age:number,
    say(name:string,age:number):void
}
declare let test2Obj:test2ObjItf


namespace test2Obj2{
    let money:number
    let love:string
    namespace obj{
        let name:string
    }
}


export {test2Fn,test2Name,test2Obj,test2Obj2}
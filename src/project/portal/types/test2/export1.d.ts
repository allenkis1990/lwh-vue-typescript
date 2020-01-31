
declare let test2Name:string
declare function test2Fn(name:string):void

interface test2ObjItf{
    name:string,
    age:number,
    say(name:string,age:number):void
}
declare let test2Obj:test2ObjItf

export {test2Fn,test2Name,test2Obj}
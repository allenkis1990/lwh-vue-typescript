//原来就存在test3的声明，但是通过插件扩展了一个字段fuck 需要用module来扩展
declare module 'test3' {
    namespace test3Obj{
        let fuck:string
    }
    export {test3Obj}
}

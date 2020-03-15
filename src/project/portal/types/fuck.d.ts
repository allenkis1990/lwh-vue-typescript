//这里也可以直接输出interface 给某个ts文件用 可以用.d.ts也可以用.ts
interface fuckOptions{
    name:string,
    age:number,
    fn:(name:string,age:number)=>string
}
export {fuckOptions}



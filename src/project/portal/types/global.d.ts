
type glType = {job:string,isGay:boolean}
interface glInterface{
    name:string,
    age:number
}

//声明一个文件引入
declare module '*.json'

//声明非NPM包 直接在declare module里
declare module '@portal/utils/getUserInfo'{
    interface userInfo{
        name:string,
        age:number
    }
    let getUserName:(userName:string)=>string
    let getUserAge:(userAge:number)=>number
    let getUserInfo:(userInfo:userInfo)=>userInfo

    export {getUserName,getUserAge,getUserInfo}
}
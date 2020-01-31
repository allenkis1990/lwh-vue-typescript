
let test2Name = 'test2Name'
function test2Fn(name){
    console.log(name);
}

let test2Obj = {
    name:'test2Obj',
    age:18,
    say(name,age){
        console.log(name, age);
    }
}

let test2Obj2 = {
    money:9999999999,
    love:'fuck',
    obj:{
        name:'hahahahhObj'
    }
}

let export2Obj = {
    job:'web',
    fav:'fuck',
    say(job,fav){
        let str = `i love ${job} and ${fav}`
        return str
    }
}

export default export2Obj

export {
    test2Name,
    test2Fn,
    test2Obj,
    test2Obj2
}

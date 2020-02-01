//actions的context相当于整个store可以调用state mutations getters调用的时候this.$store.dispatch('changeName')

export const actions = {
    changeName: function (context:any, name:string):void {
        context.commit('changeName', name);
    },
    alert({commit,dispatch,state,getters}:any,num:number):number{
        // console.log(arguments);
        console.log('state:',state)
        console.log('getters:',getters)
        console.log('commit:',commit)
        console.log('dispatch:',dispatch)
        // dispatch('asyncAlert','123').then(function(data){
        //     console.log(data);
        // })
        return num
        // alert(num);
    },
    asyncAlert(context:any,num:number):any{
        return new Promise(function(resolve:any){
            setTimeout(function(){
                resolve(num)
            },2000)
        })
    }
}

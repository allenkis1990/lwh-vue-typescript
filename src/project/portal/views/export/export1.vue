<template>
    <div>
        <div><a href="javascript:void(0)" @click="goBack">返回</a></div>
        {{tit}}
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import {getUserName, getUserAge, getUserInfo} from '@portal/utils/getUserInfo'
    import {fuck,shit} from '@portal/utils/fuck.ts'

    let fkFn = fuck.fn('fkFn',18)
    console.log(fkFn,333);

    shit.fn(66)
    require('@portal/tsTest/export1.ts')
    @Component({
        components: {

        }
    })
    export default class Export1 extends Vue {
        tit:string = 'export1'
        userInfo:{name:string,age:number} = {name:'allen',age:18}
        goBack():void {
            this.$router.go(-1);
        }

        mounted() {
            let userName = getUserName(this.userInfo.name)
            let userAge = getUserAge(this.userInfo.age)
            let userInfo = getUserInfo(this.userInfo)
            console.log(userName,userAge,userInfo,'userInfo');
        }
    }
</script>

<style scoped lang="less">

</style>
<template>
    <div>
        <div class="main">
            <h3>{{tit}}</h3>
            <a1 :data-source="a1Prop" @changeProp="fn"></a1>
            <a2></a2>
            {{watchData}} <br>
            {{watchData2}} <br>
            {{computedData1}} <br>
            {{$store.state.name}}
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component,Watch,Provide} from 'vue-property-decorator'
    import {mapState} from 'vuex'
    import a1 from '@portal/views/vuex/a1.vue'
    import a2 from '@portal/views/vuex/a2.vue'
    import eventBus from 'bus'
    //eventBus兄弟传值
    //@Emit无法兄弟传值
    eventBus()
    //组件
    @Component({
        components: {
            a1,
            a2
        }
    })
    export default class Vuex extends Vue {

        //data
        tit: string = 'vuex'
        watchData:string = 'watchData'
        watchData2:string = 'watchData2'
        a1Prop:{name:string,age:number} = {name:'allen',age:18}


        //computed计算属性
        get computedData1(){
            return 'computedData1'
        }

        //methods
        fn(str:string):void{
            console.log(str,'typescript @Emit');
        }
        mounted() {
//            this.$on('changeProp', function(n:string) {
//                console.log(n,333)
//            })

            setTimeout(()=>{
                this.watchData = '6666'
                this.watchData2 = '77777'
            },3000)

        }

        //提供和注入
        @Provide('a1Provide')
        a1Provide :{name:string} = {name:'a1Provide'}
        @Provide('a1Provide2')
        a1Provide2 :{name:string} = {name:'a1Provide2'}


        //监听
        @Watch('watchData', {immediate: true, deep: true})
        onChangeWatchData(newVal: string, oldVal: string){
            console.log(newVal);
        }
        @Watch('watchData2', {immediate: true, deep: true})
        onChangeWatchData2(newVal: string, oldVal: string){
            console.log(newVal);
        }
    }
</script>

<style scoped lang="less">
    /*如果在scoped的情况下引用的less里面带全局的标签例如body那么body就会变成body[data-1212]{}引用不到*/
    /*@import "~@portal/style/color.css";*/
    /*@import "~@portal/less/style1.less";*/
    .main {
        color: green;
        .lwh {
            color: red;
        }
        ul{
            li{
                margin-bottom:10px;
                list-style-type:none;
            }
        }
    }

    .bgImg {
        width: 850px;
        height: 700px;
        background: url('~@portal/images/皮卡22.jpg');
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>
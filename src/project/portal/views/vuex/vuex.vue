<template>
    <div>
        <div class="main">
            <h3>{{tit}}</h3>
            <a1 :data-source="a1Prop"
                ref="a1Component"
                @changeProp="fn"></a1>
            <a2></a2>
            {{watchData}} <br>
            {{watchData2}} <br>
            {{computedData1}} <br>

            <div>
                store数据：
                <p>state:{{userName}}</p>
                <p>getter:{{getName}}</p>
                <p>module state:{{moduleAName}}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Watch, Provide} from 'vue-property-decorator'
    import {
        State,
        Getter,
        Action,
        Mutation,
        namespace
    } from 'vuex-class'

    let moduleA = namespace('moduleA')
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
        watchData: string = 'watchData'
        watchData2: string = 'watchData2'
        a1Prop: { name: string, age: number } = {name: 'allen', age: 18}

        //state
        @State('name') userName: string
//        @State(state => state.name) userName:string
//        @State name:string

        //getter
        @Getter('initStateName') getName: string

        //mutation
        @Mutation('changeName') changeName: any

        //actions
        @Action('asyncAlert') asyncAlert: any
//        @Action('asyncAlert') asyncAlert:(num:number)=>any

        //module里的state
        @moduleA.State('moduleAName') moduleAName:string

        //computed计算属性
        get computedData1() {
            return 'computedData1'
        }

        //methods
        fn(str: string): void {
            console.log(str, 'typescript @Emit');
        }

        mounted() {
            let a1Component:any = this.$refs.a1Component;
            let arr = a1Component.a1InnerFn([1,2,3])
            console.log('调用组件内的a1InnerFn方法得到的',arr);


            setTimeout(() => {
                this.changeName('mutation')
            }, 3000)

            this.asyncAlert(9900).then((num: number) => {
                console.log(num, 11212121221);
            })


            setTimeout(() => {
                this.watchData = '6666'
                this.watchData2 = '77777'
            }, 3000)

        }

        //提供和注入
        @Provide('a1Provide')
        a1Provide: { name: string } = {name: 'a1Provide'}
        @Provide('a1Provide2')
        a1Provide2: { name: string } = {name: 'a1Provide2'}


        //监听
        @Watch('watchData', {immediate: true, deep: true})
        onChangeWatchData(newVal: string, oldVal: string) {
            console.log(newVal);
        }

        @Watch('watchData2', {immediate: true, deep: true})
        onChangeWatchData2(newVal: string, oldVal: string) {
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
        ul {
            li {
                margin-bottom: 10px;
                list-style-type: none;
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
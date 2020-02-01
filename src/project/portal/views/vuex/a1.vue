<template>
    <div>
        {{tit}}
        {{dataSource}}<br>
        {{a1Provide.name}}<br>
        {{a1Provide2.name}}
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop,Emit,Inject} from 'vue-property-decorator'
    @Component({
        components: {
        }
    })
    export default class A1Component extends Vue {
        mounted() {
            setTimeout(()=>{
                //调用$emit事件
                this.changeProp('emitData')
            },2000)



            this.$bus.$on('fuckA1',function(data:string){
                console.log(data);
            })

            console.log(this.a1Provide,this.a1Provide2,'我是父亲注入给我的');

        }
        tit: string = 'a1Vue'

        //注入
        @Inject('a1Provide') a1Provide:any;
        @Inject('a1Provide2') a1Provide2:any;

        //prop传参
        @Prop({default: {name: '1', age: 2}, type: Object}) dataSource: any;//dataSource!:!是一定要又?是不一定



        //$emit事件
        @Emit('changeProp')
        changeProp(str:string):void{}
    }
</script>
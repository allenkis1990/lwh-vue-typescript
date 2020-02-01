<template>
    <div>
        {{tit}}
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop,Emit} from 'vue-property-decorator'
    @Component({
        components: {
        }
    })
    export default class A2Component extends Vue {
        mounted() {
            setTimeout(()=>{
                this.$bus.$emit('fuckA1','兄弟组件传值')
            },3000)
        }
        tit: string = 'a2Vue'
    }
</script>
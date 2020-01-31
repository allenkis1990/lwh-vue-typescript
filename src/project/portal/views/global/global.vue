<template>
    <div>
        <div><a href="javascript:void(0)" @click="goBack">返回</a></div>
        {{tit}}
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    require('@portal/tsTest/global.ts')
    @Component({
        components: {

        }
    })
    export default class Export1 extends Vue {
        tit:string = '全局声明'
        goBack():void {
            this.$router.go(-1);
        }

        mounted() {

        }
    }
</script>

<style scoped lang="less">

</style>
<template>
    <div>
        {{tit}}
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    require('@portal/views/decorator/index.js')
    @Component({
        components: {

        }
    })
    export default class Export1 extends Vue {
        tit:string = 'decorator'
        mounted() {
        }
    }
</script>

<style scoped lang="less">

</style>
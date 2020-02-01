<template>
    <div>
        <div class="main">
            <h3>{{tit}}</h3>
        </div>
    </div>
</template>

<script lang="ts">
    
    import {Vue, Component} from 'vue-property-decorator'
    @Component({
        components: {
        }
    })
    export default class Vuex extends Vue {

        tit: string = 'vuex'
        mounted() {

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
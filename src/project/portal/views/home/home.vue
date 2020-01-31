<template>
    <div>
        <div class="main">
            <h3>{{tit}}</h3>
            <ul>
                <li>
                    <el-button type="success" @click="goState('export1')">export1</el-button>
                </li>
                <li>
                    <el-button type="success" @click="goState('global')">全局声明</el-button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import {Button, Radio, Message, Loading} from 'element-ui'
    @Component({
        components: {
            elButton: Button,
            elRadio: Radio
        }
    })
    export default class Home extends Vue {

        tit: string = 'ts test!!!'

        goState(stateName:string):void {
            this.$router.push({name: stateName});
        }

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
<!--要想全局的body能吃到样式就必须再开一个不带scope的style标签-->
<style lang="less">
    @import "~@portal/less/style1.less";
</style>
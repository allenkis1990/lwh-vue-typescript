<template>
  <div id="app">
    <transition name="fuck" appear>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive || $route.meta.keepAlive===undefined"></router-view>
      </keep-alive>
    </transition>
    <transition name="fuck" appear>
      <router-view v-if="$route.meta.keepAlive===false"></router-view>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default {
  data:function(){
    return {
    }
  },

  mounted:function(){

  },

  methods:{

  },
  components:{

  }
}
</script>

<!--lang="less"一定要加 否则less不生效-->
<style>
  /*css 和 less都可以引入*/
  .fuck-enter,.fuck-leave-active{margin-left:-200px;}
  .fuck-enter-active,.fuck-leave-active{transition:all 1s ease;}
</style>


<template>
  <div id="app">
    <router-view></router-view>
    <Tabbtn/>
  </div>
</template>
<script>
import Tabbtn from "./tabBar"
export default {
  components:{
    Tabbtn
  }
}
</script>
<style>
@import "./public/css/common.css";
  #app{
    width:100%
  }
</style>

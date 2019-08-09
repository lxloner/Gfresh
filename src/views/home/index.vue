<template>
  <div id="app">
    <Top/>
    <senter></senter>
    <Tabbtn/>
  </div>
</template>
<script>
import Top from "../../components/homepage/top"
import senter from "../../components/homepage/center"
import Tabbtn from "../../tabBar"
export default {
  components:{
    Top,
    senter,
    Tabbtn
  }
}
</script>
<style>
@import "../../public/css/common.css";

</style>

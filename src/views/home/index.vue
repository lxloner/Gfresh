<template>
  <div id="app">
    <Top/>
    <Center/> 
    <Tabbtn/>
  </div>
</template>
<script>
import Top from "../../components/homepage/top"
import Center from "../../components/homepage/center"
import Tabbtn from "../../tabBar"
export default {
  components:{
    Top,
    Center,
    Tabbtn
  }
}
</script>
<style>
@import "../../public/css/common.css";

</style>

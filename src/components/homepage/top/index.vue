<template>
  <div class="top">
    <div class="heard">
      <router-link to="/city" tag="li">
        <p>
          <b class="iconfont icon-dingwei"></b>
          <span>{{cityName}}</span>
        </p>
      </router-link>

      <router-link to="/search" tag="li">
        <p>
          <span id="Inp">
            <b class="iconfont icon-soushuo"></b>
            请搜索您感兴趣的商品
          </span>
        </p>
      </router-link>

      <p>
        <b class="fa fa-commenting-o"></b>
      </p>
    </div>
  </div>
</template>
<script>
import "../../../public/btn/iconfont.css";
import {mapState} from 'vuex'
export default {
created() {
  // console.log(this.$store.state.City.cityName)
},
  computed: {
    ...mapState({
      cityName:state=>state.City.cityName,
      citylistId:state=>state.City.cityId,
     
    })
  },

};
</script>
<style>
.top {
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
}
.heard {
  display: flex;
  justify-content: space-between;
  align-content: center;
  font-size: 16px;
  padding-left: 10px;
  padding-right: 10px;
}
.heard #Inp {
  margin-top: 0.1rem;
  display: block;
  width: 2.6rem;
  background: #eee;
  border: none;
  height: 0.35rem;
  line-height: 0.35rem;
}
.heard #Inp b {
  font-size: 14px;
  padding: 5px;
}
.heard b {
  font-size: 20px;
}
</style>
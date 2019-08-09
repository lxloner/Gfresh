<template>
  <div class="city_body" ref="scroll">
    <div>
      <!--热门城市-->
      <div class="hot_city">
        <div class="hot_title">
             <v-touch tag="b" @tap="haddleB()" style="font-size:.3rem">×</v-touch>
          <span>热门城市</span>
        </div>
        <div class="hot_city_list">
          <div class="hot_city_name" v-for="(item,index) in Hotcity">{{item.name}}</div>
        </div>
      </div>
      <!--城市列表-->
      <div class="city_list" ref="citylist">
        <div class="city_list_item" v-for="(list,index) in citydata" :key="index">
          <div class="city_title_letter">{{list.name}}</div>
          <div class="city_list_name">
            <v-touch
              class="city_list_name_item"
              v-for="(child,index) in list.value"
              tag="div"
              @tap="haddleBtn(child)"
            >{{child.name}}</v-touch>
          </div>
        </div>
      </div>
    </div>
    <!--城市列表下标-->
    <div class="city_list_index">
      <v-touch
        class="index_item"
        v-for="(item,index) in citydata"
        :key="index"
        tag="div"
        @tap="haddlecityindex(index)"
      >{{item.name}}</v-touch>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll"
import {Citylist} from 'api/city'
import {mapMutations} from "vuex"
export default {
  name: "CityList",
  data(){
    return{
        citydata:"", 
        Hotcity:""
    }
  },
    async created() {
        let data = await Citylist();
        // console.log(data.data.normalData)
        this.citydata = data.data.normalData
        // console.log(data)
        this.Hotcity = data.data.priorityData
    },
    methods: {
      ...mapMutations({
        haddleBtnMut:"City/haddleBtnMutations"
      }),

      haddlecityindex(index){
        // console.log(index)
        let citysome = this.$refs.citylist.querySelectorAll(".city_title_letter"); 
        this.$refs.scroll.scrollTop =citysome[index].offsetTop ;
      },
      haddleBtn(params){
        // console.log(params)
        this.haddleBtnMut(params);
        this.$router.push("/home")
      },
      haddleB(){
        this.$router.push("/home")
      }
    },
    mounted() {
      new Bscroll(this.$refs.scroll,{
        tap:true
      })
    },
}
</script>

<style>
.city_body {
  background: #ebebeb;
  height: 100%;
  overflow: auto;
}

/*热门城市*/
.hot_title,
.city_title_letter {
  line-height: 0.2rem;
  padding-left: 0.26rem;
  font-size: 0.14rem;
}

.hot_city_list,
.city_list_name {
  width: 96%;
  background: #f5f5f5;
  padding-bottom: 0.16rem;
  padding-right: 0.6rem;
  display: flex;
  flex-wrap: wrap;
}
.hot_city_name {
  margin-top: 0.3rem;
  margin-left: 0.26rem;
  width: 1.2rem;
  height: 0.4rem;
  background: #fff;
  text-align: center;
  line-height: 0.4rem;
  font-size: 0.16rem;
  border: 2px solid #e6e6e6;
}

.city_list > div {
  width: 100%;
}
.city_list_name_item {
  line-height: 0.4rem;
  margin-left: 0.26rem;
  width: 100%;
  border-bottom: 2px solid #e6e6e6;
  font-size: 0.16rem;
}

/*城市列表下标*/
.city_list_index {
  position: fixed;
  right: 0;
  top: 1rem;
}
.city_list_index > div {
  font-size: 0.14rem;
  padding: 0.02rem 0;
}
</style>
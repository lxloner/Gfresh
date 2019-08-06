<template>
  <div class="city_body" ref="scroll">
   
      <div>
        <!--热门城市-->
        <div class="hot_city">
          <div class="hot_title">热门城市</div>
          <div class="hot_city_list">
            <div class="hot_city_name" >sdfgh </div>
          </div>
        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                      
        <!--城市列表-->
        <div class="city_list">
          <div class="city_list_item" >
            <div class="city_title_letter"></div>
            <div class="city_list_name">
              <div class="city_list_name_item" ></div>
            </div>
          </div>
        </div>
      </div>
    <!--城市列表下标-->
    <div class="city_list_index">
      <div class="index_item" v-for="(item,index) in citydata" :key="index">{{item.name}}</div>
      
    </div>
  </div>
</template>

<script>

import {Citylist} from 'api/city'
export default {
  name: "CityList",
  data(){
    return{
        citydata:"",

    }
  },
    async created() {
        let data = await Citylist();
        console.log(data.data.normalData)
        this.citydata = data.data.normalData
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
  line-height: 0.6rem;
  padding-left: 0.26rem;
  font-size: 0.28rem;
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
  line-height: 0.9rem;
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
}
</style>
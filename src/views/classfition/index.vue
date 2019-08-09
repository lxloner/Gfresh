<template>
  <div id="box">
    <div id="header">
      <div id="title-action">
        <h1>分类专区</h1>
        <router-link tag="div" to="/search" class="category-header_action">
          <i class="iconfont icon-soushuo"></i>
          <h2>搜索</h2>
        </router-link >
      </div>
    </div>
    <div class="Conter">
      
       <v-touch tag="div"  id="scrollable" v-for="(item,index) in Sortlista" :key="index" @tap="handlelist(item)">
      {{item.name}}
    </v-touch>
    </div>
   
    <div id="Cates">
      <div class="catesbox">
        <div class="yg">
          <v-touch tag="div" class="catesboxlist" v-for="(item,index) in  sortlongxia" :key="index" @tap="handleImg(item)">
            <span>{{item.name}}</span>
          </v-touch>
        </div>
      </div>
      <div class="catesImg">
        <div class="catesImglist">
           <router-link tag="div" to="/ProductDetails" class="catesImgbox" v-for="(item,index) in sortImg" :key="index" >
             <img :src="item.picImg" alt="">
             <div class="catesImgzi">{{item.name}}</div>
           </router-link>
          
        </div>

      </div>
    </div>
  </div>


</template>
<script>
import {sorttitle} from "api/classfition";

export default {
  name:"SortList",
 
  async created(){
    let sortlist = await sorttitle();
    this.Sortlista = sortlist.data  
 
  },
   data(){
     return{
      Sortlista:[],
      sortlongxia:[],
      sortImg:[]
     }
  },
methods:{
  handlelist(item){  
    let sortlongxia = item.childList
    this.sortlongxia =  item.childList
  },
  handleImg(item){
    let sortImg = item.childList
    this.sortImg = item.childList
  }
},

};
</script>
<style >

#header {
  width: 100%;
  height: 1.22rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
#title-action {
  width: 3.35rem;
  height: 0.38rem;
  display: flex;
  justify-content: space-between;
}
#title-action > h1 {
  width: 0.96rem;
  height: 0.38rem;
  font-size: 24px;
}
.category-header_action {
  display: flex;
  height: 0.25rem;
  width: 0.51rem;
  justify-content: center;
  align-items: center;
}
#title-action > div > h2 {
  font-size: 16px;
}

/* vux-tab scrollable */
.Conter{
  width: 100%;
 display: flex;
  align-items: center;
  overflow: auto;
 flex-wrap: nowrap;
 height: 0.44rem;
}



#scrollable {
 font-size: 14px;
 flex-shrink: 0;
 padding-left:0.2rem
}




/* Cates */
#Cates {
   height: 4.55rem;
   width: 100%;
   display: flex
 }
 .catesbox {
   width: 0.94rem;
   height: 4.5rem;
   overflow: auto;
   background: rgb(250, 250, 250);
 }
 .catesboxlist {
   display: flex;
   width: 0.94rem;
   flex-direction: column;
   align-items: left;
   justify-content: center;
 }
 .yg {
   height: 4.55rem;
 }
 .catesboxlist > span {
   height: 0.52rem;
   width: 0.76rem;
   font-size: 12px;
   text-align: center;
   line-height: 0.52rem;
 }
 .catesImg{
   width: 2.82rem;
   height: 4.5rem;
  display: flex;
  justify-content: center
 }
 .catesImglist{
   width: 2.7rem;
   height: 4.5rem;
   overflow: auto;
   margin-top:.2rem;
   display: flex;
   flex-wrap: wrap;
   align-content:flex-start;

 }
 .catesImgbox{
   width: .87rem;
   height:1.14rem;

 }
 .catesImgbox>img{
   width:0.79rem;
   height: 0.79rem;
 }
 .catesImgzi{
   font-size: 12px;
   height:.19rem;
   width: .79rem;
   text-align: center;
   margin-top:.05rem
 }
</style>
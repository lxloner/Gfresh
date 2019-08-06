<template>
  <div class="foot">
    <div class="tab" v-for="(item,index) in str" :key="index">
      <router-link :to="item.path" tag="li">
          <b :class="item.icon"></b>
         <span>{{item.txt}}</span>
      </router-link>
    
    </div>
  </div>
</template>
<script>
import "../public/btn/iconfont.css"
export default {
  data() {
    return {
      str:[
        {
          icon:"iconfont icon-yemian-copy-copy-copy",
          txt:"首页",
          path:"/home"
        },
         {
          icon:"iconfont icon-leimupinleifenleileibie",
          txt:"分类",
           path:"/classfition"
        },
         {
          icon:"iconfont icon-yuding",
          txt:"我要预订",
           path:"/booking"
        },
         {
          icon:"iconfont icon-qicheqianlian-",
          txt:"购物车",
           path:"/shoppingcar"
        },
         {
          icon:"fa fa-user-o",
          txt:"我的",
           path:"/mine"
        },
      ]
    }
  },
};
</script>
<style>
.foot{
    width:100%;
    height:0.6rem;
    display: flex;
    justify-content: space-around;
    align-content: center;
    background:white;
    position: fixed;
    bottom:0;
    left:0;
}

.tab li{
    display: flex;
    font-size:16px;
    flex-direction: column;
    /* align-content: center; */
    text-align: center;
}
.tab b{
    font-size:23px;
    padding:5px;
   
}
.router-link-active{
  color:#0463de;
}


</style>
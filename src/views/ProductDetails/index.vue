<template>
  <div id="bbox">
    <div id="hheader">
      <router-link tag="div" to="/classfition" class="left-arrow">
        <span><</span>
      </router-link>
      <div id="title-actionx">
        <h1>分类专区</h1>
        <router-link tag="div" to="/search" class="category-header_actionx" >
          <h2>搜索</h2>
        </router-link tag="div">
      </div>
      <div class="descd">活鲜产品/龙虾类</div>
    </div>
    <div id="nav">
      <div class="vux-sticky-box  box_fixed" id="boxFixed" :class="{'is_fixed' : isFixed}">
        <ul class="tab-show">
          <li>自营</li>
          <li>发货日</li>
          <li>规格</li>
          <li>排序</li>
        </ul>
      </div>
      <div id="homeList-product-item-style" v-for="(item,index) in deatliNans" :key="index">
        <div class="detailsImg">
          <img :src="item.imgUrl" alt />
          <div class="detaiLsImgfixed">
            <span>{{item.sendDate}}</span>
          </div>
        </div>
        <div class="detailsList">
          <div class="detailsName">
            <h2>
              <span>{{item.name}}</span>

              <span>野生（上海市发货）</span>
            </h2>
          </div>
          <div class="detailsSales">
            <span>已售:</span>
            <span>{{item.saledQty}}</span>
            <span>箱</span>
            <span>{{item.specName}}</span>
            <span>{{item.grade}}</span>
          </div>
          <div class="price-style-no">
            <div class="detailsPrice">
              <span>￥</span>
              <span>{{item.unitPrice}}</span>
              <span>/{{item.unitName}}</span>
            </div>
            <div class="detailsOmg">
              <span>已售罄</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {deatilsNav} from "api/ProductDetails"
export default {
    name:"DeatilNan",
    async created(){
        let deatliNans = await deatilsNav()
        this.deatliNans = deatliNans.data.quoteList
    },
     data(){
      return{
          deatliNans:[],
          isFixed: false,
          offsetTop: 0
      }
    } ,
      mounted() {
            window.addEventListener('scroll', this.initHeight);
            this.$nextTick(() => {
                //获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置 
                this.offsetTop = document.querySelector('#boxFixed').offsetTop;
            })
        },
        methods: {
            initHeight() {
                // 设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离 (被卷曲的高度)
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                //如果被卷曲的高度大于吸顶元素到顶端位置 的距离
                this.isFixed = scrollTop > this.offsetTop ? true : false;
            },
        },
        //回调中移除监听
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll)
        }

}
</script>
<style>
#bbox {
  width: 100%;
  display: flex;
  flex-direction: column;
}

#hheader {
  display: flex;
  flex-direction: column;
  padding: 0 0 0.4rem 0;
}
.left-arrow {
  height: 0.42rem;
  font-size: 20px;
  line-height: 0.42rem;
  padding: 0.2rem 0 0 0.15rem;
}
.left-arrow > span {
  padding: 0.3rem 0 0 0.2rem;
}
#title-actionx {
  width: 100%;
  height: 0.38rem;
  display: flex;
  padding: 0.2rem 0.18rem 0 0.15rem;
  justify-content: space-between;
  line-height: 0.38rem;
}
#title-actionx > h1 {
  font-size: 24px;
  color: #333;
}
.category-header_actionx {
  font-size: 16px;
  color: #777;
}
.descd {
  height: 0.22rem;
  font-size: 14px;
  padding: 0.2rem 0 0 0.2rem;
  color: #777;
}

/* nav */
#nav {
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
}

.vux-sticky-box {
  width: 100%;
  display: flex;
  height: .6rem;
  margin-bottom: 0.1rem;
      margin: 0 auto;
    line-height: 40px;
    background: #fff;
    align-items: center
}

  

  
  .is_fixed{
    position: fixed;
    top: 0;
    z-index: 999;
  }
.tab-show {
  width: 2.38rem;
  height: 0.32rem;
  display: flex;
}
.tab-show > li {
  width: 0.58rem;
  height: 0.32rem;
  font-size: 14px;
  text-align: center;
  line-height: 0.32rem;
  color: #333;
  border: 1px solid #e4e4d5;
  margin-left: 0.1rem;
  border-radius: 2px;
}
#homeList-product-item-style {
  padding: 0.16rem;
  width: 100%;
  display: flex;
  height: 1.42rem;
  border-top: 1px solid #ccc;
}
.detailsImg{
   position: relative;
}
.detailsImg > img {
  width: 1.1rem;
  height: 1.1rem;
 
}
.detaiLsImgfixed{
  position: absolute;
  top:.06rem;
  width: .4rem;
  height: .2rem;
  background: linear-gradient(90deg,#66bdf8,#0091f3);
  display: flex;
  line-height:.2rem;
  justify-content: center;
  border-radius:0 .1rem .1rem 0 
 
}
.detaiLsImgfixed>span{
  font-size: 10px;
   color: #fff
}
.detailsList {
  width: 2.33rem;
  height: 1.1rem;
}
.detailsName {
  overflow: hidden;
  width: 2.25rem;
  height: 0.15rem;
  line-height: 0.15rem;
}
.detailsName > h2 {
  font-size: 12px;
  color: #333;
}
.detailsSales {
  width: 2.25rem;
  height: 0.27rem;
  display: flex;
  margin-top: 0.05rem;
}
.detailsSales > span {
  font-size: 12px;
  color: rgba(51, 51, 51, 0.6);
  margin-left: 0.01rem;
}
.price-style-no {
  height: 0.32rem;
  width: 2.25rem;
  display: flex;
  margin-top: 0.3rem;
  justify-content: space-between;
}
.detailsPrice {
  width: 1.2rem;
  height: 0.25rem;
  display: flex;
  align-items: center;
}
.detailsPrice > span {
  font-size: 16px;
  color: rgb(51, 51, 51);
}
.detailsOmg {
  width: 0.48rem;
  height: 0.32rem;
  background: rgba(51, 51, 51, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
}
.detailsOmg > span {
  font-size: 8px;
}
</style>

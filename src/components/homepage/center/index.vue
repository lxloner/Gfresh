<template>
  <div class="Cent">
    <div class="Center">
      <!-- 轮播 -->
      <div class="banner">
        <router-link to="/details">
          <div class="swiper-container" ref="swiperContainer">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
              <img :src="item.pcfilePath" alt />
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
        </router-link>
        
      </div>

      <!-- 通知信息 -->
      <div class="notice">
        <p class="p1">
          <b>极鲜</b>
          <br />
          <span>公告</span>
        </p>
        <p>紧急！关于会员积分清零通知</p>
        <p>
          <b>更多</b>
          <i class="fa fa-angle-right" style="font-size:20px;padding-left:5px;"></i>
        </p>
      </div>
  
      <div class="homelist">
        <div class="listNum" v-for="(item,index) in notice" :key="index">
           <router-link to="/goodstitle" tag="p">
               <div class="listimg">
                  <img
                    :src="item.iconPath"
                    alt
                  />
                </div>
                <p>{{item.name}}</p>
           </router-link>
        </div>
      </div>

      <div class="Con">
        <img src="https://m.gfresh.cn/static/img/bailing-in.ec962b7.png" alt />
      </div>

      <div class="goods">
        <router-link to="/details" tag="li">
              <div class="goodslist" v-for="(item,index) in goodslist" :key="index">
          <div class="goodstitle">
            <p class="plist">{{item.actName}}</p>
            <p></p>
            <p>
              <span>更多</span>
              <b class="fa fa-angle-right" style="font-size:20px;padding-left:5px;"></b>
            </p>
          </div>
          <div class="showgoodslist">
            <div class="goodsshow" v-for="(list,index) in item.products">
              <div class="showlist">
                <div class="showim">
                  <img
                    :src="list.imgUrl"
                    alt
                  />
                </div>
                <p>{{list.name}}<span>({{list.cityName}})</span></p>
                <p>
                  <span style="font-weight: bolder;">￥{{list.unitPrice}}</span>
                  <b>/{{list.unitName}}</b>
                </p>
                <div class="Now">{{list.sendDate}}</div>
                <div class="goodgoods">国内精品</div>
              </div>
            </div>
          </div>
        </div>
        </router-link>
    
        <router-link to="/details" tag="li">
          <div class="goodslist">
          <div class="goodstitle">
            <p class="plist">猜你喜欢</p>
            <p></p>
          </div>
          <div class="showgoodslist">
            <div class="goodsshow" v-for="(like,index) in goodslike" :key="index">
              <div class="showlist">
                <div class="showim">
                  <img
                    :src="like.imgUrl"
                    alt
                  />
                </div>
                <p>{{like.name}}<span>({{like.cityName}})</span></p>
                <p>
                  <span style="font-weight: bolder;">￥{{like.unitPrice}}</span>
                  <b>/{{like.unitName}}</b>
                </p>
                <div class="Now">{{like.sendDate}}</div>
                <div class="goodgoods">海外原包</div>
              </div>
            </div>
          </div>
        </div>
        </router-link>
          
      </div>
    <div class="zone">
       <div class="zonegoods" v-for="(item,index) in goodszone" :key="index">
      <div class="zonetop">
        <p class="zonep">{{item.areaName}}</p>
        <p></p>
        <p>
          <span>更多</span>
          <b class="fa fa-angle-right" style="font-size:20px;padding-left:5px;"></b>
        </p>
      </div>
      <div class="zonelist">
        <div class="zoneimg">
          <img
            src="https://file.gfresh.cn/product/2016/137/4ca32455-bda2-4c75-befb-4955c5cbff54/5173766.jpg?x-oss-process=image/resize,m_fixed,h_200,w_200"
            alt
          />
          <div class="Now">现货</div>
          <div class="goodgoods">国内精品</div>
        </div>
        <div class="zonetitle">
          <div class="zonetitletop">
            <p>极鲜仓配 加拿大 螯龙虾 野生（上海市发货）</p>
            <p>
              已售:6555箱
              <span>1.1-1.3斤/只</span>
              <b>国内现货标准</b>
            </p>
          </div>
          <div class="zonetitlebottom">
            <p>
              <span>￥83.00</span>
              <b>/500克</b>
            </p>
            <p>
              <i class="fa fa-cart-arrow-down"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
   <div class="homelast"></div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import {homebanner,homenotice,homegoodslist,homelike,homezone,homezoneOne} from "../../../api/home.js";
export default {
  data() {
    return {
      banner:"",
      notice:"",
      goodslist:"",
      goodslike:"",
      goodszone:"",
    };
  },
  async created() {
    let data = await  homebanner();
    this.banner = data.data.content;
    let noticedata = await homenotice();
    this.notice = noticedata.data;
    let goods = await homegoodslist();
    this.goodslist = goods.data;
    let likedata = await homelike();
    this.goodslike = likedata.data.quoteList;
    let zonedata = await homezone();
    this.goodszone = zonedata.data;
    // console.log(this.goodszone);
    let zoneone = await homezoneOne()
    // console.log(zoneone)

   
    
    // console.log(this.goodslist)
    // this.goodslistproduct = goods.data.products;
    // console.log(this.goodslistproduct);
  },
  watch: {
    banner() {
      this.$nextTick(() => {
        var mySwiper = new Swiper(this.$refs.swiperContainer, {
          loop: true, // 循环模式选项
          autoplay:{
            disableOnInteraction:false
          },
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
    }
  }
};
</script>
<style>
.Cent {
  flex: 1;
  overflow: auto;
}
.Center {
  display: flex;
  flex-direction: column;
}
.banner {
  width: 100%;
  height: 1.8rem;
  background: #ccc;
}
.banner img {
  width: 100%;
  height:1.8rem;
}

.notice {
  font-size: 16px;
  height: 0.57rem;
  display: flex;
  justify-content: space-between;
  align-content: center;
  line-height: 0.57rem;
  padding-right: 0.2rem;
  border-bottom: 1px solid #eee;
}
.notice .p1 {
  margin-top: 0.1rem;
  line-height: 0.2rem;
  padding: 0 0.1rem 0 0.1rem;
}
.notice .p1 span {
  background-image: linear-gradient(90deg, #ff4081, #ff9800);
}

.homelist {
  height: 1rem;
  display: flex;
  justify-content: space-around;
  align-content: center;
  padding-top: 10px;
}
.homelist p {
  font-size: 16px;
  margin-top: 10px;
}
.listimg {
  width: 0.4rem;
  height: 0.4rem;
  margin-left: 16px;
}
.listimg img {
  width: 100%;
  height: 100%;
}
.listNum {
  width: 0.83rem;
  /* height:0.7rem; */
  text-align: center;
}
.Con {
  height: 0.82rem;
  display: flex;
}
.Con img {
  width: 100%;
  height: 100%;
  padding: 0 0.1rem;
}
.goodstitle {
  display: flex;
  justify-content: space-between;
  align-content: center;
  font-size: 16px;
  padding: 0 10px;
  height: 0.56rem;
  line-height: 0.56rem;
}
.goodstitle .plist {
  font-size: 22px;
}
.showgoodslist {
  display: flex;
  
  overflow: auto;
}
.goodsshow {
  flex-shrink: 0;
  height: 1.92rem;
  width: 1.45rem;
  font-size: 12px;
  padding: 0.08rem;
  position: relative;
}
.goodsshow img {
  width: 100%;
}
.goodsshow .Now {
  background-image: linear-gradient(90deg, #66bdf8, #0091f3);
  position: absolute;
  top: 0.08rem;
  left: 0.08rem;
  padding: 0.05rem;
  color: #fff;
  border-radius: 0 0.09rem 0.09rem 0;
}

.goodsshow .goodgoods {
  position: absolute;
  left: 0.08rem;
  top: 1.16rem;
  background:#fff;
}

.zonetop {
  height: 0.48rem;
  display: flex;
  justify-content: space-between;
  align-content: center;
  font-size: 14px;
  line-height: 0.48rem;
  padding: 0 0.1rem;
}
.zonetop .zonep {
  font-size: 22px;
}
.zoneimg {
  width: 1.1rem;
  height: 1.1rem;
  position: relative;
}
.zoneimg img {
  width: 100%;
}
.zoneimg .Now {
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(90deg, #66bdf8, #0091f3);
  padding: 0.05rem;
  color: #fff;
  font-size: 12px;
  border-radius: 0 0.09rem 0.09rem 0;
}
.zoneimg .goodgoods {
  position: absolute;
  top: 0.9rem;
  left: 0;
}

.zonelist {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding: 0 0.1rem;
}
.zonetitle {
  white-space: nowrap;
  overflow: hidden;
}
.zonetitle p {
  line-height: 0.3rem;
}
.zonetitlebottom {
  display: flex;
  justify-content: space-between;
  margin-top: 0.13rem;
}
.zonetitlebottom p i {
  display: block;
  width: 0.5rem;
  height: 0.34rem;
  border: 1px solid rgb(4, 99, 222);
  border-radius: 0.17rem;
  line-height: 0.34rem;
  text-align: center;
  font-size: 20px;
  color: rgb(4, 99, 222);
}
.homelast{
  height:1rem;
}
</style>
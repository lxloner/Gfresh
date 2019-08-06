<template>
  <div class="goodstitles">
    <div :class="scroll > 0 ? 'titleactive' : 'titletop'">
      <router-link to="/home" tag="li">
        <b class="fa fa-angle-left"></b>
      </router-link>

      <p>极鲜仓配</p>
      <p></p>
    </div>

    <div class="Topcon">
      <div class="topCon">
        <router-link to="/home" tag="li">
          <p class="fa fa-angle-left"></p>
        </router-link>
      </div>
      <div class="Topbutton">
        <div class="Topconleft">
          <img src alt />
        </div>
        <div class="Toponright">
          <h2>极鲜仓配</h2>
          <b>一站式采购、仓储、配送服务商</b>
        </div>
      </div>
    </div>
    <div :class="scroll>160?'btnactive':'titleBtn'" ref="titleBtnscroll">
      <span>商品分类</span>
      <span>配送地区</span>
      <span>排序</span>
    </div>
    <div class="Concent">
     
      <div class="Con" v-for="(item,index) in titledata" :key="index">
         <router-link to="/details" tag="li">
             <div>
          <div class="zonelist">
          <div class="zoneimg">
            <img :src="item.imgUrl" alt />
            <div class="Now">{{item.sendDate}}</div>
            <div class="goodgoods">国内精品</div>
          </div>
          <div class="zonetitle">
            <div class="zonetitletop">
              <p>
                {{item.name}}
                <span>({{item.cityName}})</span>
              </p>
              <p>
                已售:6555箱
                <span>{{item.specName}}</span>
              </p>
            </div>
            <div class="zonetitlebottom">
              <p>
                <span>￥{{item.unitPrice}}</span>
                <b>/{{item.unitName}}</b>
              </p>
              <p>
                <i class="fa fa-cart-arrow-down"></i>
              </p>
            </div>
          </div>
        </div>
        <div class="titleselect">
          <p>规格选择：</p>
          <span class="spn">{{item.specName}}({{item.grade}})</span>
          <span>3.6-5.4斤/只</span>
          <span>更多...</span>
        </div>
      </div>
      
      </router-link>
   
      
      </div>
    </div>
  </div>
</template>
<script>
import { goodstitles } from "api/home";
export default {
  name: "goodstitle",
  data() {
    return {
      scroll: "",
      titledata: ""
    };
  },
  async created() {
    let data = await goodstitles();
    this.titledata = data.data.quoteList;
    //   console.log(this.titledata)
  },

  mounted() {
    window.addEventListener("scroll", this.scrollTop);
  },
  methods: {
    scrollTop() {
      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
    }
  }
};
</script>
<style scoped>
.goodstitles {
  height: 100%;
  position: relative;
}
.titleactive {
  width: 100%;
  height: 0.5rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.1rem;
  line-height: 0.5rem;
  font-size: 16px;
  border-bottom: 1px solid #eee;
  position: fixed;
  top: 0;
  left: 0;
  background: #ffffff;
  z-index: 2;
  opacity: 1;
}
.titletop {
  width: 100%;
  height: 0.5rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.1rem;
  line-height: 0.5rem;
  font-size: 16px;
  border-bottom: 1px solid #eee;
  position: fixed;
  top: 0;
  left: 0;
  background: #ffffff;
  z-index: 1;
  opacity: 0;
}
.titleactive b {
  font-size: 22px;
  padding-top: 0.15rem;
}
.titletop b {
  font-size: 22px;
  padding-top: 0.15rem;
}
.Topcon {
  height: 1.7rem;
  font-size: 16px;
}
.Topcon p {
  font-size: 22px;
  padding: 0.15rem;
}
.Topbutton {
  /* padding:1rem; */
  display: flex;
  padding: 0.5rem 0.2rem;
}
.Toponright h2 {
  font-size: 22px;
}
.Topconleft {
  width: 0.42rem;
  height: 0.42rem;
  background: pink;
  margin-right: 10px;
}
.titleBtn {
  width: 100%;
  height: 0.55rem;
  font-size: 16px;
  line-height: 0.55rem;
}
.btnactive {
  margin: 0;
  width: 100%;
  height: 0.55rem;
  font-size: 16px;
  line-height: 0.55rem;
  position: fixed;
  top: 0.5rem;
  left: 0;
  background: #fff;
  z-index: 1;
}
.titleBtn span {
  border: 1px solid #ccc;
  padding: 0.05rem;
  margin-left: 0.1rem;
}
.btnactive span {
  border: 1px solid #ccc;
  padding: 0.05rem;
  margin-left: 0.1rem;
}
.Con {
  width: 100%;
  height: 2rem;
  display: flex;
  flex-direction: column;
}

.zonelist {
  width: 100%;
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
  background: #fff;
}
.Conlists {
  width: 100%;
}
.titleselect {
  width: 100%;
  font-size: 16px;
}
.titleselect p {
  padding: 0.1rem;
}
.titleselect span {
  padding: 0.05rem 0.1rem;
  border: 1px solid #ccc;
  border-radius: 0.16rem;
  margin-left: 0.1rem;
  font-size: 12px;
}
.titleselect .spn {
  background: #0072ff;
  color: #fff;
}
</style>
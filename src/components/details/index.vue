<template>
  <div class="details">
    <div class="detop" :class="scroll>0?'detop':'deactive'">
        <router-link to="/home" tag="li">
        <b class="fa fa-angle-left"></b>
        </router-link>
      <p>商品详情</p>
      <p></p>
    </div>
    <div class="deimgtop">
      <div class="deimg">
        <img
         :src="likedetails.product.imgUrls[0]"
          alt
        />
      </div>
      <router-link to="/home" tag="li">
        <p id="dep" class="fa fa-angle-left"></p>
        </router-link>
     
      <p class="depp">国内精品</p>
      <p class="nump">1</p>
    </div>
    <div class="detxt">
      <h2>{{likedetails.product.name}}  
        (<span>{{likedetails.arrivedList[0].packList[0].skuList[0].cityName}}</span>
        <span>{{likedetails.arrivedList[0].date}}</span>)
        </h2>
      <div class="deCon">
        <p>
          <span>￥{{likedetails.arrivedList[0].packList[0].skuList[0].quoteUnitPrice[0].price}}</span>
          <b>/{{likedetails.arrivedList[0].packList[0].skuList[0].quoteUnitPrice[0].unitName}}</b>
        </p>
        <p class="txtp">￥{{likedetails.arrivedList[0].packList[0].skuList[0].quotePrice.salePrice}}/箱</p>
      </div>
      <div class="detxtimg">
        <img
          :src="likedetails.brand.logo"
          alt
        />
      </div>
    </div>
    <div class="deprompt">
      <p>温馨提示：【纯咸水】【当天下单，隔日送达】订桌，时间等需求请提前备注，【到店包活，死亡赔偿50%】</p>
      <p>
        <span>订单有特殊需求、需要自提或发物流车，请联系客服热线:400-628-1818，客服微信号：JXWKF01</span>
      </p>
      <p>
        <span>极鲜网提供验货服务</span>
      </p>
    </div>
    <div class="denumber">
      <p>总销量：{{likedetails.product.productStatistics.boxNum}}箱</p>
      <p>起发量：10箱</p>
      <p>
        到港日期：
        <span>{{likedetails.arrivedList[0].date}}</span>
      </p>
      <p>
        包装规格：
        <span>5千克/箱</span>
      </p>
      <div class="numbottom">
        <p>产品规格：</p>
        <div class="numspn">
          <div class="denumspan">
            <b>{{likedetails.arrivedList[0].packList[0].skuList[0].values[0].vale}}</b>
          </div>
        </div>
      </div>
    </div>
    <div class="desee">
      <div class="deseetop">
        <p class="seep">产品说明</p>
        <p v-for="(item,index) in likedetails.product.dynamicProperties">
         {{item.name}}：
          <span>{{item.propertieValue.value}}</span>
        </p>
        <p>
          退换货提示：
          <span>本产品不支持七点无理由退货</span>
        </p>
      </div>
      <div class="deseecon">
        <p>
          <b class="fa fa-institution" style="font-size:22px;padding-top:0.1rem"></b>
        </p>
        <div class="deseecenter">
          <b>极鲜仓库</b>
          <p>
            总销量：
            <span>16866箱</span> 总商品：
            <span>162种</span>
          </p>
        </div>
        <p>
          <i>进入店铺</i>
          <span class="fa fa-angle-right" style="font-size:20px;padding-left:0.1rem;"></span>
        </p>
      </div>
      <div class="deseefoot">
        <div class="deseefootovee">
          <span>图文详情</span>
          <p>
            <i>点击查看</i>
            <b class="fa fa-angle-right"></b>
          </p>
        </div>
        <div class="deseefootovee">
          <span>配送费用</span>
          <p>
            <i>上海运费单价￥0/箱 超运费￥100元</i>
            <b class="fa fa-angle-right"></b>
          </p>
        </div>
        <div class="deseefootovee">
          <span>总体评价</span>
          <p>
            <i>1条</i>
            <b class="fa fa-angle-right"></b>
          </p>
        </div>
        <div class="deseefootovee">
          <span>成交记录</span>
          <p>
            <i>1455条</i>
            <b class="fa fa-angle-right"></b>
          </p>
        </div>
      </div>
      <div class="free"></div>
    </div>

    <div class="Defoot">
      <div class="Defoottop">
        <div class="DefootLeft">
          <p>
            <b>死亡率：</b>
            <span>全赔</span>
            <b>失水率：</b>
            <span>全赔</span>
          </p>
          <p>
            库存：
            <span>有库存</span>
          </p>
        </div>
        <div class="DefootR">
          <v-touch tag="p" @tap="haddlesubtraction()">-</v-touch>
          <span>{{Num}}</span>
          <v-touch tag="p" @tap="haddleadd()">+</v-touch>
        </div>
      </div>
      <div class="DefootB">
        <p>
          <i class="fa fa-heart-o" style="font-size:25px;"></i>
          <b class="fa fa-commenting-o" style="font-size:25px; padding:0 0.15rem;"></b>
          <span class="fa fa-shopping-cart" style="font-size:25px;"></span>
        </p>
        <div class="DefootBR">
          <v-touch tag="p" @tap="haddletoshopcar(likedetails)">加入购物车</v-touch>
          <p class="DeBrp">立刻购买</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {detailsmMsg,detailstitle,detailsxinxi} from "../../api/details"
import {searchlistapi} from "../../api/search"
import {mapState,mapMutations } from "vuex"
export default {
  name:"detailsroute",
  props:["id","cityId"],

  async created() {
    let detailsdata = await detailsmMsg(this.id);
     this.datanumber = detailsdata.data;
     let fign = await detailsxinxi(this.id,this.cityId)
    this.likedetails = fign.data

  },
  data() {
    return {
      scroll: "",
      datanumber:"",
      likedetails:''
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollTop);
  },
  computed: {
    ...mapState({
      Num:state=>state.Details.num,
     
    })
  },
  methods: {
    scrollTop() {
      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
        // console.log(this.scroll)
    },
    ...mapMutations({
         haddlesubtraction:"Details/haddleSubMut",
         haddleadd:"Details/haddleaddMut"
    }),
    ...mapMutations({
         haddletoshopcar:"Shopcar/haddletoshopcarMut"
    })
    // haddletoshopcar(){
    //     sessionStorage.setItem("shopdata",JSON.stringify( this.likedetails))
    //     // console.log(111)
    // }
  }
};
</script>
<style scroped>
.detop {
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 0.44rem;
  line-height: 0.44rem;
  font-size: 16px;
  padding: 0 0.1rem;
  border-bottom: 1px solid #ccc;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  opacity: 1;
  z-index: 1;
}
.deactive{
   opacity: 0; 
}
.detop b {
  font-size: 22px;
  padding-top: 10px;
}
.deimg {
  width: 80%;
  height: 1.5rem;
  margin-left: 0.7rem;
}
.deimg img {
  width: 80%;
  height: 100%;
}
.deimgtop {
  position: relative;
  background: #eee;
}
.deimgtop p {
  position: absolute;
}
.deimgtop #dep {
  font-size: 22px;
  top: 0.1rem;
  left: 0.1rem;
}
.deimgtop .depp {
  font-size: 14px;
  top: 1.2rem;
  left: 0.1rem;
}
.deimgtop .nump {
  top: 1.2rem;
  left: 90%;
  font-size: 14px;
}
.detxt {
  display: flex;
  padding: 0.1rem;
  flex-direction: column;
  position: relative;
}
.detxt h2 {
  font-size: 20px;
  font-weight: bolder;
}
.detxt p {
  font-size: 16px;
}
.detxt p span {
  font-size: 20px;
  font-weight: bolder;
}
.detxt p b {
  font-weight: bolder;
}
.detxt .txtp {
  font-size: 14px;
}
.detxtimg {
  width: 0.48rem;
  height: 0.48rem;
  position: absolute;
  top: 0.5rem;
  right: 0.1rem;
}
.detxtimg img {
  width: 100%;
  height: 100%;
}
.deprompt {
  font-size: 14px;
  color: coral;
  display: flex;
  flex-direction: column;
  padding: 0.1rem;
  line-height: 0.2rem;
  font-weight: bold;
}
.denumber {
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  padding: 0.1rem;
}
.denumber p {
  margin-top: 0.35rem;
}
.denumber p span {
  padding: 0.1rem 0.2rem;
  border: 1px solid #ccc;
}
.denumber .numbottom {
  width: 100%;
  display: flex;
}
.denumber .numbottom p {
  width: 20%;
}
.numspn {
  /* display: flex; */
  width: 80%;
  margin-top: 12px;
}
.numspn .denumspan {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.numspn .denumspan b {
  width: 1.2rem;
  border: 1px solid #ccc;
  padding: 0.1rem 0.2rem;
  margin: 10px;
  flex-shrink: 0;
}
.desee {
  display: flex;
  padding: 0.1rem;
  flex-direction: column;
  font-size: 14px;
}
.deseetop {
  border-bottom: 1px solid #eee;
  padding-bottom: 0.1rem;
}
.deseetop p {
  font-size: 14px;
  margin-top: 15px;
}
.deseetop .seep {
  font-size: 18px;
}
.deseecon {
  display: flex;
  justify-content: space-between;
  padding: 0.1rem;
  align-content: center;
}
.deseefootovee {
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 0.15rem;
  border-top: 1px solid #eee;
}
.deseefootovee b {
  font-size: 20px;
  padding-left: 0.1rem;
}
.Defoot {
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  bottom: 0;
  background: #fff;
}
.Defoottop {
  display: flex;
  justify-content: space-between;
  padding: 0.1rem;
  font-size: 14px;
}
.DefootR {
  display: flex;
}
.DefootR p {
  width: 0.28rem;
  height: 0.28rem;
  border: 1px solid #ccc;
  border-radius: 0.14rem;
  line-height: 0.28rem;
  text-align: center;
}
.DefootR span {
  padding: 0.05rem 0.1rem;
}
.DefootB {
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  padding: 0.1rem;
}
.DefootB p {
  padding-top: 0.15rem;
}
.DefootBR {
  display: flex;
}
.DefootBR p {
  padding: 0.2rem;
}
.DefootBR .DeBrp {
  background: linear-gradient(270deg, #0091f3, #4334ab);
  color: #fff;
}
.free {
  height: 1.2rem;
}
</style>
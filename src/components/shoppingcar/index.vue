<template>
  <div class="shoppinghome">
    <div :class="scroll>0?'shopingactive':'shoppingtop'">
      <p></p>
      <p>购物车</p>
      <v-touch tag="p" @tap="haddleDetel()">删除</v-touch>
    </div>
    <div class="shoptopC">
      <p>购物车</p>
      <v-touch tag="b" @tap="haddleDetel()">删除</v-touch>
    </div>
    <div class="shoplist" ref="shoplist">
      <div class="shoptitle">
        <label>
          <!-- <input type="checkbox" :checked="selectAll" @change="haddleselscAll()" /> 全选 -->
        </label>
      </div>
      <div class="shoptitlelist" v-for="(item,index) in shoptitle">
        <label>
          <input type="radio" :checked="item.flag" @click="haddleselecAngOne(index)" />
        </label>
        <div class="shopimg">
          <img :src="item.product.imgUrls[0]" alt />
        </div>
        <div class="shopmesssage">
          <p>{{item.product.name}}</p>
          <p style="padding:0.05rem 0">
            <span>￥{{item.arrivedList[0].packList[0].skuList[0].quoteUnitPrice[0].price}}</span>
            <span>/{{item.arrivedList[0].packList[0].skuList[0].quoteUnitPrice[0].unitName}}</span>
          </p>
          <p style="color:#ccc;">
            <span>￥{{item.arrivedList[0].packList[0].skuList[0].quotePrice.salePrice}}</span>
            <span>/箱</span>
          </p>
        </div>
        <div class="DefootR">
          <v-touch tag="p" @tap="haddleStation(index)">-</v-touch>
          <span>{{item.product.status}}</span>
          <v-touch tag="p" @tap="haddleAdd(index)">+</v-touch>
        </div>
      </div>
    </div>
    <div class="shopfoot">
      <label>
        <input type="checkbox" :checked="selectAll" @change="haddleselscAll()"/> 全选
      </label>
      <div class="shopfootright">
        <p>￥{{shopNmP.showPrice}}</p>
        <p class="rightP">
          去结算
          <span>({{shopNmP.showNumber}})</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations,mapGetters} from "vuex";
export default {
  data() {
    return {
      scroll: ""
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollTop);
  },
  created() {
    if(this.shoptitle.length==0){
      
    }
  },
  computed: {
    ...mapState({
      selectAll: state => state.Shopcar.selectAll,
      listflag: state => state.Shopcar.listflag,
      shoptitle: state => state.Shopcar.shoplist
    }),
    ...mapGetters({
      shopNmP:"Shopcar/showlistGet"
    })
  },
  methods: {
    scrollTop() {
      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(this.scroll)
    },
    ...mapMutations({
      haddleselscAll: "Shopcar/haddleselscAllMut",
      haddleselecAngOne: "Shopcar/haddleselecAnyone",
       haddleStation:"Shopcar/haddleStationMut",
       haddleAdd:"Shopcar/haddleAddMut",
       haddleDetel:"Shopcar/haddleDetelMut"
    }),
  }
};
</script>
<style>
.shoppinghome {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.1rem;
  font-size: 16px;
}
.shoppingtop {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.1rem;
  opacity: 0;
  position: fixed;
  top:0;
  left:0;
}
.shopingactive{
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.1rem 0.2rem;
  opacity: 1;
   position: fixed;
  top:0;
  left:0;
  background:#fff;
}
.shoptopC {
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0.2rem;
  height: 1rem;
  border-bottom: 1px #ccc solid;
}
.shoptopC p {
  font-size: 24px;
}
.shopimg {
  width: 0.72rem;
  height: 0.72rem;
}
.shopimg img {
  width: 100%;
  height: 100%;
}
.shoplist {
  font-size: 16px;
  display: flex;
  flex-direction: column;
  padding-bottom:0.68rem;
}
.shoptitle {
  padding: 0.1rem 0;
}
.shoptitlelist {
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  border-bottom: 1px solid #eee;
  padding: 0.1rem 0;
}
.shoptitlelist input {
  margin-top: 22px;
}
.DefootR {
  display: flex;
}
.DefootR p {
  width: 0.28rem;
  height: 0.28rem;
  border: 1px solid #ccc;
  border-radius: 0.14rem;
  line-height: 0.21rem;
  text-align: center;
  font-size: 18px;
}
.DefootR span {
  padding: 0.05rem 0.1rem;
}
.shopfoot {
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  height: 0.64px;
  line-height: 0.64rem;
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 0.1rem;
  border-top: 1px solid #eee;
  background: #fff;
height: 0.68rem;
}
.shopfootright {
  display: flex;
  font-size: 20px;
  font-weight: bolder;
}
.shopfootright p {
  width: 1rem;
  height: 0.64rem;
  text-align: center;
}
.shopfootright .rightP {
  color: #fff;
  font-size: 16px;
  background: -webkit-linear-gradient(left, #4334ab, #0091f3);
}
</style>
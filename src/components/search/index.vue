<template>
  <div class="search">
    <div class="searchTop">
      <p>
        <router-link to="/home" tag="li">
          <b class="fa fa-angle-left"></b>
        </router-link>
      </p>
      <p>
        <input type="text" id placeholder="请输入搜索的商品" v-model="inpvalue" ref="inplisttitle" />
      </p>
      <v-touch tag="p" @tap="haddleseach()">搜索</v-touch>
    </div>
    <div class="searchlist">
      <p>最近搜索</p>
      <div class="searchlistp">
        <span>{{sarchmessage}}</span>
      </div>
    </div>
    <!-- <div class="zoneCenter" v-show="!Noflag">
      该商品未找到
    </div> -->
    <div class="footBtn">
      <div class="zonelist" v-for="(item,index) in searchobj">
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
              已售:{{item.saledQty}}箱
              <span>{{item.specName}}</span>
            </p>
          </div>
          <div class="zonetitlebottom">
            <p>
              <span>￥{{item.salePrice}}</span>
              <b>/{{item.unitName}}</b>
            </p>
            <p>
              <i class="fa fa-cart-arrow-down"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { searchlisttitle } from "../../api/home";
import { mapState } from "vuex";
export default {
  // props:["id"],
  computed: {
    ...mapState({
      citysId: state => state.City.cityId
    })
  },
  data() {
    return {
      inpvalue: "",
      sarchmessage: "",
      searchobj:"",
      // Noflag:true,
    };
  },
  created() {
    var txtvalue = localStorage.getItem("objlist");
       txtvalue = txtvalue.replace("\"","").replace('"', "");
       this.sarchmessage = txtvalue
  },
  watch: {
    async inpvalue(newVal, oldVal) {
      // let searchdata = await searchlisttitle(newVal);
      // this.sarchmessage = searchdata.data ? searchdata.data.quoteList : [];
      this.$axios.post('/api/product/product/searchKeyWord?keyWord='+newVal+'&type=1&productType=0&flag=1&arrivedDate=&pageNumber=1&pageSize=10&cityId=9c0c0fa5-aadc-4b5e-b247-1dc9500c2d92',{
      }).then(data=>{
        this.searchobj = data.data.data.quoteList;
        if(this.searchobj.length==0){
          // this.Noflag = false
            alert("没有搜到该商品")
        }
      })
    },

  },
  methods: {
    haddleseach() {
      var txt = this.$refs.inplisttitle.value;
       localStorage.setItem("objlist", JSON.stringify(txt));
      //  console.log(txt)
    }
  }
};
</script>
<style>
.searchTop {
  height: 0.44rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.1rem;
  line-height: 0.44rem;
  align-content: center;
  font-size: 16px;
  border-bottom: 1px solid #ccc;
}
.searchTop p b {
  font-size: 26px;
}
.searchTop input {
  width: 2.8rem;
  height: 0.35rem;
  border: none;
  font-size: 16px;
}
.searchlist {
  font-size: 16px;
  margin-top: 40px;
  padding-left: 0.1rem;
}
.searchlistp {
  margin-top: 15px;
  display: flex;
}
.searchlistp span {
  padding: 0 0.1rem;
}
.footBtn {
  display: flex;
  flex-direction: column;
  padding: 0.2rem 0.1rem;
}
.zonelist {
  padding: 0.2rem 0;
}
</style>
<template>
    <div>
        <div id="sub-title">
            <div class="title-action">
                <h1>购物车</h1>  
            </div>
       </div>
        <div id="shopping-cart_null">
            <i class="iconfont icon-qicheqianlian-"><span>购物车空空如也</span></i>
            
        <button>去逛逛</button>
        </div>
    </div>
</template>
<script>
import Shcar from "../../components/shoppingcar"
export default {
    components:{
        Shcar
    }
}
</script>
<style >
#sub-title{
    width:100%;
    height:1.23rem;
    display: flex;
    align-items: center;
    justify-content:center;
    border-bottom: 1px solid rgba(51, 51, 51, 0.1)
}
.title-action {
    width:3.35rem;
    height: .38rem; 
}
.title-action > h1 {
  font-size: 24px;
}
#shopping-cart_null{
    height:1.49rem;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
}
#shopping-cart_null i{
    margin-bottom:.25rem;
    font-size:.18rem;
    color: rgba(51,51,51,.6)
}
#shopping-cart_null>i>span{
    font-size: 16px;
    margin-left:.1rem;
    color: rgba(51,51,51,.6)
}
#shopping-cart_null>button{
    width: 1.87rem;
    height:.45rem;
    border: none;
    background: #0463de;
    font-size: 16px;
    color: #fff;
    border-radius: .05rem;
    position: relative;
}
</style>
<template>
    <div class="details"> 
       <div class="detop">
           <b class="fa fa-angle-left"></b>
           <p>商品详情</p>
           <p></p>
       </div>
       <div class="deimgtop">
           <div class="deimg">
               <img src="https://file.gfresh.cn/product/2016/0253c308-a51f-4c7f-b13a-0e6b73d52bc9/4ca32455-bda2-4c75-befb-4955c5cbff54/32910304.jpg" alt="">
           </div>
           <p id="dep" class="fa fa-angle-left"></p>
           <p class="depp">国内精品</p>
           <p class="nump">1</p>
       </div>
       <div class="detxt">
           <h2>极鲜仓配 中国 国产鲍鱼 养殖（上海市发货）</h2>
           <p>
               <span>￥40.00</span>
               <b>/500克</b>
           </p>
           <p>￥400.00/箱</p>
       </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scroped>
    .detop{
        width:100%;
        display: flex;
        justify-content: space-between;
        height:0.44rem;
        line-height: 0.44rem;
        font-size:16px;
        padding:0 0.1rem;
        border-bottom:1px solid #ccc;
        position:fixed;
        top:0;
        left:0;
        background:#fff;
        opacity: 0;
    }
    .detop b{
        font-size:22px;
        padding-top:10px;
    }
    .deimg{
        width:80%;
        height:1.5rem;
        margin-left:0.7rem;
    }
    .deimg img{
        width:80%;
        height:100%;
    }
    .deimgtop{
        position: relative;
        background:#eee;

    }
    .deimgtop p{
        position: absolute;
    }
    .deimgtop #dep{
        font-size: 22px;
        top:0.1rem;
        left:0.1rem;
    }
    .deimgtop .depp{
        font-size: 14px;
        top:1.2rem;
        left:0.1rem;
    }
    .deimgtop .nump{
        top:1.2rem;
        left:90%;
        font-size:14px;
    }
    .detxt{
        display: flex;
        padding:0.1rem;
        flex-direction: column; 
    }
    .detxt h2{
        font-size:20px;
        font-weight: bolder;
    }
    .detxt p{
        font-size:16px;
       
    }
    .detxt p span{
        font-size:20px; 
         font-weight: bolder;
    }
    .detxt p b{
         font-weight: bolder;
    }
</style>
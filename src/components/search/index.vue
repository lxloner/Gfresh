<template>
    <div class="search">
        <div class="searchTop">
            <p>
                <b class="fa fa-angle-left"></b>
            </p>
            <p>
                <input type="text" id="" placeholder="请输入搜索的商品">
            </p>
            <p>搜索</p>
        </div>
        <div class="searchlist">
            <p>最近搜索</p>
            <div class="searchlistp">
                <span>大闸蟹</span>
                 <span>小龙虾</span>
                  <span>象拔蚌</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .searchTop{
        height:0.44rem;
        display: flex;
        justify-content: space-between;
        padding:0 0.1rem;
        line-height: 0.44rem;
        align-content: center;
        font-size:16px;
        border-bottom:1px solid #ccc;
    }
    .searchTop p b{
        font-size:26px;
    }
    .searchTop input{
        width:2.8rem;
        height:0.35rem;
        border:none;
        font-size:16px;
    }
    .searchlist{
        font-size:16px;
        margin-top:40px;
        padding-left:0.1rem;
    }
    .searchlistp{
        margin-top:15px;
        display:flex;
    }
    .searchlistp span{
        padding:0 0.1rem;
    }
</style>
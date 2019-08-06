<template>
    <div class="mine">
        <div class="user_header">
            <ul>
                <li><img src="data:image/jpeg;base64,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" alt=""></li>
                <li>
                    <h3>18234115020</h3>
                    <h2>个人设置</h2>
                </li>
            </ul>
            <div class="deposit headBox">
                <i class="nicon-getMoney"></i>
                <span>提现</span>
            </div>
            <div class="recharge headBox">
                <i class="nicon-sendMoney"></i>
                <span>充值</span>
                <em>专属号极速充值</em>
            </div>
        </div>
        <div class="user_main">
            <ul class="user_ul">
                <li>
                    <i>0.00</i>
                    <span>我的余额</span>
                </li>
                <li>
                    <i>0.00</i>
                    <span>保证金</span>
                </li>
                <li>
                    <i>0</i>
                    <span>我的积分</span>
                </li>
            </ul>
            <div class="user_control">
                <div class="">
                    <img src="../../assets/payment.png" alt="">
                    <p>待付款</p>
                </div>
                <div class="">
                    <img src="../../assets/shipments.png" alt="">
                    <p>待发货</p>
                </div>
                <div class="">
                    <img src="../../assets/deliver.png" alt="">
                    <p>已发货</p>
                </div>
                <div class="">
                    <img src="../../assets/finish.png" alt="">
                    <p>已结束</p>
                </div>
            </div>
            <div class="user_cell">
                <p>发票管理</p>
                <div class="user_cell_ft"></div>
            </div>
            <div class="user_cell">
                <p>发票管理</p>
                <div class="user_cell_ft"></div>
            </div>
            <div class="user_cell">
                <p>发票管理</p>
                <div class="user_cell_ft"></div>
            </div>
            <div class="user_cell">
                <p>发票管理</p>
                <div class="user_cell_ft"></div>
            </div>
            <div class="user_cell">
                <p>发票管理</p>
                <div class="user_cell_ft"></div>
            </div>
            <div class="user_cell">
                <p>发票管理</p>
                <div class="user_cell_ft"></div>
            </div>
            <div class="user_cell">
                <p>发票管理</p>
                <div class="user_cell_ft"></div>
            </div>
            <div class="user_cell">
                <p>发票管理</p>
                <div class="user_cell_ft"></div>
            </div>
            <div class="user_cell">
                <p>发票管理</p>
                <div class="user_cell_ft"></div>
            </div>

        </div>

    </div>
</template>
<script>
    export default {}
</script>
<style scoped>
    .mine{
        display:flex;
        flex-direction: column;
    }
    *{
        margin:0;
        padding:0;
    }
    ul li {
        line-height:1;
    }
    .user_header{
        margin:0.5rem 0.16rem 0.24rem;
        display: flex;
    }
    .user_header>ul>li>img{
        border-radius: 50%;
        width: 0.67rem;
        height: 0.67rem;
        vertical-align: bottom;
        margin-right: 16px;
    }
    .user_header>ul{
        display: flex;
        flex: 1;
        align-items: center;
    }
    .user_header>ul>li>h3{
        color: #333;
        font-size: 0.24rem;
        line-height: 0.33rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight:700;
        width: 1.3rem;
    }
    .user_header>ul>li>h2{
        font-weight: normal;
        line-height: 0.2rem;
        color: #777;
        font-size: 0.14rem;
    }
    .headBox{
        color:#333;
        padding-top:0.2rem;
        font-size:0.15rem;
        position: relative;
    }
    .deposit{
        padding-right:0.16rem;
        margin-right:0.16rem;
    }
     .headBox:before {
        position: absolute;
        content: "";
        width: 1px;
        height: 15px;
        background-color: #eaeaea;
        right: 0;
        top: 42px;
    }
    .headBox i {
        display: block;
        text-align: center;
        font-size: 15px;
        margin-bottom: 6px;
    }
    .nicon-getMoney:before {
        content: "\E90A";
    }
    [class*=" nicon-"], [class^=nicon-] {
        font-family: nicons!important;
        speak: none;
        font-style: normal;
        font-weight: 400;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .nicon-sendMoney:before {
        content: "\E90B";
    }
    .recharge>em{
        position: absolute;
        height: 0.13rem;
        line-height: 0.13rem;
        right:-0.16rem;
        bottom: -0.12rem;
        font-style: normal;
        font-size: 0.08rem;
        color: #fff;
        width: 0.92rem;
        padding: 0 0.02rem;
        text-align: center;
        border-bottom-left-radius: 0.02rem;
        border-top-left-radius: 0.02rem;
        background: -webkit-linear-gradient(right,#ff4081,#ff9800);
        background: linear-gradient(270deg,#ff4081,#ff9800);
    }
    .user_main{
        margin:0 0.16rem;
        padding-bottom:0.6rem;
    }
    .user_main .user_ul{
        width: 100%;
        background-color: #fff;
        margin: 0.1rem 0;
        padding: 0.15rem 0;
        border-top: 1px solid #ebebeb;
        display: flex;
        justify-content:space-around;
    }
    .user_main .user_ul li{
        text-align: center;
        display: flex;
        flex-direction: column;
    }
    .user_main .user_ul li i{
        font-style: normal;
        color: #333;
        margin-bottom: 0.1rem;
        font-size:0.16rem;
    }
    .user_main .user_ul li span{
        border: 1px solid #858585;
        padding: 0.03rem 0.06rem;
        color: #858585;
        border-radius: 0.3rem;
        font-size: 0.12rem;
    }
    .user_control{
        display: flex;
        align-items: center;
        border-top:1px solid #ebebeb;
        justify-content:space-around;
    }
    .user_control>div{
        font-size:0.14rem;
        display: flex;
        flex-direction: column;
        line-height:0.2rem;
        position: relative;
        color:#858585;
        margin:0.2rem 0 0.1rem;
        align-items: center;
    }
    .user_control>div>img{

        text-align: center;
        width:0.21rem;
        height:0.25rem;
        padding-bottom:0.05rem;
        vertical-align: bottom;
    }
    .user_cell{
        padding:0.16rem 0;
        border-top:1px solid #d9d9d9;
        position: relative;
        display: flex;
        align-items: center;
    }
    .user_cell>p{
        font-size:0.14rem;
        color:#1b2d3e;

    }
    .user_cell .user_cell_ft{
        border-width: 1px 1px 0 0!important;
        width: 0.08rem!important;
        height: 0.08rem!important;
        border-color: #a5aab4!important;
        border-width:0.02rem 0.02rem 0 0;
        border-style:solid;
        border-color:#c8c8cd;
        position: absolute;
        top:44%;
        right:0.02rem;
        transform: matrix(.71,.71,-.71,.71,0,0);
    }
</style>
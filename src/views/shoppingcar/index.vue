<template>
    <div>
        <div class="g-header">
            <div class="sub-title" style="border-bottom: 1px solid rgba(51, 51, 51, 0.1);"><!---->
                <div class="c-box">
                    <div class="title-action">
                        <h3 class="title">购物车</h3>
                        <span class="desc"></span>
                    </div>
                    <p class="desc"></p>
                </div>
            </div>
        </div>
        <div style="padding-bottom: 114px;"><!---->
            <div class="shopping-cart_null">
                <div class="g-null-tip">
                    <div class="null">
                        <i class="fa fa-apple"></i>
                        <p>购物车空空如也</p>
                    </div>
                </div>
                <div class="button">
                    <router-link tag="span" to="/home" style="color: rgb(255, 255, 255);">去逛逛</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {}
</script>
<style>
    .g-header {
        background: #fff;
        padding-top: 0.44rem;
        margin-top: -44px;
    }
    .g-header .sub-title {
        background: #fff;
        padding: 52px 16px 32px;
        display: flex;
        align-items: center;
    }
    .g-header .sub-title .c-box {
        -webkit-box-flex: 1;
        -webkit-flex: auto;
        flex: auto;
        margin-left: 8px;
    }
    .g-header .sub-title .title-action {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .g-header .sub-title .desc {
        color: #777;
        font-size: 14px;
    }
    .g-header .sub-title .title {
        font-size: 24px;
        color: #333;
        font-weight: 400;
    }
    .g-null-tip {
        color: rgba(51,51,51,.6);
        font-size: 14px;
    }
    .g-null-tip .null {
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        padding: 50px 0;
    }
    .g-null-tip .null i {
        font-size: 24px;
        margin-right: 5px;
    }
    .shopping-cart_null .button {
        margin-top: -20px;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
        background-color: #0463de;
        height: 45px;
        border-radius: 3px;
        text-align: center;
        line-height: 45px;
        font-size: 16px;
    }
</style>
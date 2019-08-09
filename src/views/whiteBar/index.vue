<template>
    <div class="noemop">
        <router-link tag="div" to="/home" class="shop"><</router-link>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide foutone">
                    <img src="https://m.gfresh.cn/static/img/page1-1.c2c2b5d.png" alt="">
                    <div class="more-question">
                        <span class="to-up">
                            <i class="icon-right-arrows"></i>
                        </span>
                        <span class="to-up" style="margin-top: -17px;">
                            <i class="icon-right-arrows"></i>
                        </span>
                        <span class="more-question-font">上划查看更多详情</span></div>
                </div>
                <div class="swiper-slide fouttwo">
                    <img src="https://m.gfresh.cn/static/img/page2-1.284b7b3.jpg" alt="">
                    <div class="content">
                        <h2>
                            <i class="nicon-loan-dot dot-left"></i>
                            <span>极鲜白条简介</span>
                            <i class="nicon-loan-dot dot-right"></i>
                        </h2>
                        <h3>Tips 01</h3>
                        <p>是百凌与极鲜网联合推出，开放给极鲜网用户的专属白条金融产品服务；</p>
                        <h3>Tips 02</h3>
                        <p>用户可在采购时的付款页面中，选择使用百凌白条支付，最高20万额度（实际额度以最终认证结果为准）；</p>
                        <h3>Tips 03</h3>
                        <p>使用白条支付后，在还款日还款即可，可提前还款（首笔借款起始日期在每月的对应日为约定还款日，后续若白条使用时间距离最近的还款日不足10天，则该笔借款还款时间顺延到下月还款日）。</p>
                    </div>
                </div>
                <div class="swiper-slide foutthree">
                    <div class="content">
                        <h2>
                            <i class="nicon-loan-dot dot-left"></i>
                            <span>极鲜白条入口</span>
                            <i class="nicon-loan-dot dot-right"></i>
                        </h2>
                        <h3>进入「极鲜网APP」,点击右下角的“我的”<br>找到“极鲜白条”，点击进入</h3>
                        <img src="https://m.gfresh.cn/static/img/page3-1.64b04ad.jpg" alt="">
                    </div>
                </div>
                <div class="swiper-slide foutfour">
                    <div class="content" style="padding-top: 48px;">
                        <h2 style="margin-bottom: 64px;">
                            <i class="nicon-loan-dot dot-left"></i>
                            <span>如何使用</span>
                            <i class="nicon-loan-dot dot-right"></i>
                        </h2>
                        <h3>第一步</h3>
                        <p>在极鲜网APP中通过白条入口进入白条页面。</p>
                        <h3>第二步</h3>
                        <p>根据白条页面提示填写相关资料，完成认证流程。</p>
                        <h3>第三步</h3>
                        <p>完成认证出来额度之后即可在采购支付页面使用白条支付。</p>
                        <h3>第四步</h3>
                        <p>支付完成后在固定还款日还款即可，可提前还款。</p>
                        <h3>第五步</h3>
                        <p>有任何疑问均可联系白条页面客服或直接拨打极鲜网客服电话：400-628-1818</p>
                        <div class="bg4-1"><img src="https://m.gfresh.cn/static/img/page4-1.d7f9fa0.png"></div>
                        <div class="apply-btn">立即试用</div>
                    </div>
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
    import Swiper from "swiper";
    import "swiper/dist/css/swiper.css";

    export default {
        name: "whiteBar",
        data() {
            return {
                current: 0,
                vertical: true
            }
        },
        methods: {
            onChange(index) {
                this.current = index;
            }
        },
        created() {
            this.$nextTick(() => {
                var mySwiper = new Swiper('.swiper-container', {
                    direction: 'vertical', // 垂直切换选项
                    loop: false, // 循环模式选项
                })
            })
        }
    }
</script>

<style scoped>
    .noemop {
        height: 100%;
        width: 100%;
        display: flex;
        overflow: auto;
    }

    .noemop > .van-swipe {
        height: 100%;
    }

    img {
        height: 100%;
    }

    .swiper-container {
        width: 100%;
        height: 100%;
    }

    .shop {
        position: absolute;
        top: 0;
        left: 0.1rem;
        color: #fff;
        z-index: 11;
        font-size: 0.3rem;
        font-weight:normal;
    }

    .foutone {
        background: linear-gradient(#479ae9, #2261ce);
    }

    .foutone img {
        width: 100%;
        height: auto;
    }

    .fouttwo {
        display: flex;
        position: relative;
    }

    .fouttwo img {
        height: auto;
        width: 100%;
        position: absolute;
        bottom: 0;
    }

    .foutthree {

    }

    .foutthree img {
        height: auto;
        width: 100%;
    }

    .foutfour {
        background: -webkit-linear-gradient(#0a9cf1,#0463de);
        background: linear-gradient(#0a9cf1,#0463de);
    }

    .more-question {
        text-align: center;
        margin: 20px auto;
        font-size: 15px;
        color: #fff;
        width: 100%;
        cursor: pointer;
        position: absolute;
        bottom: 0;
        letter-spacing: 2px;
        opacity: .8;
    }

    .more-question .to-up {
        transform: rotate(270deg);
        -ms-transform: rotate(270deg);
        -moz-transform: rotate(270deg);
        -webkit-transform: rotate(270deg);
        -o-transform: rotate(270deg);
        display: block;
    }

    [class*=" icon-"], [class^=icon-] {
        font-family: icomoon !important;
        speak: none;
        font-style: normal;
        font-weight: 400;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .icon-right-arrows:before {
        content: "\E97B";
    }

    .more-question .more-question-font {
        display: block;
    }

    .more-question .to-up {
        transform: rotate(270deg);
        -ms-transform: rotate(270deg);
        -moz-transform: rotate(270deg);
        -webkit-transform: rotate(270deg);
        -o-transform: rotate(270deg);
        display: block;
    }

    .fouttwo .content {
        z-index: 11;
        display: flex;
        flex-direction: column;
        padding: 0.32rem 0.16rem 0;
    }

    .fouttwo .content h2 {
        argin-bottom: 0.32rem;
        color: #ffb80d;
        text-align: center;
        font-size: 0.2rem;
        font-weight: 600;
        letter-spacing: 2px;
        line-height: 1;
    }

    .fouttwo .content h2 .dot-left {
        background-image: -webkit-linear-gradient(right, #fff, #ffb80d);
        background-image: -webkit-linear-gradient(left, #fff, #ffb80d);
        background-image: linear-gradient(90deg, #fff, #ffb80d);
        margin-right: 5px;
        display: inline-block;
        font-size: 0.16rem;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .fouttwo .content h2 .dot-right {
        background-image: -webkit-linear-gradient(left, #fff, #ffb80d);
        background-image: -webkit-linear-gradient(right, #fff, #ffb80d);
        background-image: linear-gradient(270deg, #fff, #ffb80d);
        margin-left: 5px;
        display: inline-block;
        font-size: 0.16rem;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .fouttwo .nicon-loan-dot:before {
        content: "\E900";
    }

    .fouttwo .content h3 {
        margin-top: 24px;
        font-size: 20px;
        color: #ffcc57;
        line-height: 1;
    }

    .fouttwo .content p {
        margin-top: 8px;
        font-size: 14px;
        color: #555;
        line-height: 22px;
        letter-spacing: 1px;
    }

    .foutthree .content {
        padding: 0.32rem 0 0;
    }

    .foutthree .content h2 {
        margin-bottom: 24px;
        color: #0463de;
        text-align: center;
        font-size: 20px;
        font-weight: 600;
        letter-spacing: 2px;
        line-height: 1;
    }

    .foutthree .content h2 .dot-left {
        background-image: -webkit-linear-gradient(right, #fff, #0463de);
        background-image: -webkit-linear-gradient(left, #fff, #0463de);
        background-image: linear-gradient(90deg, #fff, #0463de);
        margin-right: 5px;
        display: inline-block;
        font-size: 0.16rem;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .foutthree .content h2 .dot-right {
        background-image: -webkit-linear-gradient(right, #fff, #0463de);
        background-image: -webkit-linear-gradient(left, #fff, #0463de);
        background-image: linear-gradient(90deg, #fff, #0463de);
        margin-left: 5px;
        display: inline-block;
        font-size: 0.16rem;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .foutthree .nicon-loan-dot:before {
        content: "\E900";
    }

    .foutthree .content h3 {
        font-size: 14px;
        color: #a5aab4;
        text-align: center;
        font-weight: 400;
    }
    .foutfour .content {
        padding: 32px 16px 0;
    }
    .foutfour .content h2 {
        color: #fff;
        text-align: center;
        font-size: 20px;
        font-weight: 600;
        letter-spacing: 2px;
        line-height: 1;
    }
    .foutfour .content h3 {
        margin-top: 16px;
        font-size: 14px;
        color: #fff;
        opacity: .6;
        letter-spacing: 1px;
        line-height: 1;
    }
    .foutfour .content p {
        margin-top: 8px;
        font-size: 14px;
        color: #fff;
        line-height: 25px;
        letter-spacing: 1px;
    }
    .foutfour .content .bg4-1 {
        width: 60%;
        top: 15%;
        right: 0;
        position: absolute;
        z-index: 5;
    }
    .content .bg4-1 img {
        width: 100%;
        height: auto;
        display: block;
    }
    .foutfour .content .apply-btn {
        width: 100%;
        background: #fff;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 16px;
        font-weight: 700;
        color: #0463de;
        letter-spacing: 3px;
        bottom: 0;
        left: 0;
        position: absolute;
    }
</style>
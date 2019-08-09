<template>
    <div class="reservation">
        <router-link to="/reserve" class="di">
            <i class="left-icon-arrow"></i>
        </router-link>
        <div class="sub-title" style="border-bottom: 1px solid rgba(51, 51, 51, 0.1);">
            <div class="c-box">
                <div class="title-action">
                    <h3 class="title">我要预订</h3>
                    <span class="desc">我的预订</span>
                </div>
                <p class="desc">螯龙虾(活鲜产品)</p>
            </div>
        </div>
        <div class="fill-info">
            <!---->
            <div class="row-info" style="border-bottom: none;">
                <label>备注：</label>
                <p></p>
            </div>
        </div>
        <div class="reserve-info" style="height: 382px;">
            <div class="date-list">
                <h6 class="month">8月</h6>
                <p class="date" style="background: rgb(255, 255, 255); font-weight: bold;">08日（周四）</p>
                <p class="date" style="background: none; font-weight: normal;">09日（周五）</p>
                <p class="date" style="background: none; font-weight: normal;">10日（周六）</p>
                <p class="date" style="background: none; font-weight: normal;">11日（周日）</p>
                <p class="date" style="background: none; font-weight: normal;">12日（周一）</p>
                <p class="date" style="background: none; font-weight: normal;">13日（周二）</p>
                <p class="date" style="background: none; font-weight: normal;">14日（周三）</p>
                <p class="date" style="background: none; font-weight: normal;">15日（周四）</p>
                <p class="date" style="background: none; font-weight: normal;">16日（周五）</p>
                <p class="date" style="background: none; font-weight: normal;">17日（周六）</p>
                <p class="date" style="background: none; font-weight: normal;">18日（周日）</p>
                <p class="date" style="background: none; font-weight: normal;">19日（周一）</p>
                <p class="date" style="background: none; font-weight: normal;">20日（周二）</p>
                <p class="date" style="background: none; font-weight: normal;">21日（周三）</p>
                <p class="date" style="background: none; font-weight: normal;">22日（周四）</p>
                <p class="date" style="background: none; font-weight: normal;">23日（周五）</p>
                <p class="date" style="background: none; font-weight: normal;">24日（周六）</p>
                <p class="date" style="background: none; font-weight: normal;">25日（周日）</p>
                <p class="date" style="background: none; font-weight: normal;">26日（周一）</p>
                <p class="date" style="background: none; font-weight: normal;">27日（周二）</p>
                <p class="date" style="background: none; font-weight: normal;">28日（周三）</p>
                <p class="date" style="background: none; font-weight: normal;">29日（周四）</p>
                <p class="date" style="background: none; font-weight: normal;">30日（周五）</p>
                <p class="date" style="background: none; font-weight: normal;">31日（周六）</p>
                <h6 class="month">9月</h6>
                <p class="date" style="background: none; font-weight: normal;">01日（周日）</p>
                <p class="date" style="background: none; font-weight: normal;">02日（周一）</p>
                <p class="date" style="background: none; font-weight: normal;">03日（周二）</p>
                <p class="date" style="background: none; font-weight: normal;">04日（周三）</p>
                <p class="date" style="background: none; font-weight: normal;">05日（周四）</p>
                <p class="date" style="background: none; font-weight: normal;">06日（周五）</p>
            </div>
            <ul class="reserve-list">
                <li>
                    <div class="spec-number">
                        <span class="spec">1.00~1.25磅(标准)</span>
                        <div class="g-ui-number">
                            <input type="number" min="0" max="999" style="display: none;">
                            <i class="nicon-plus"></i>
                        </div>
                    </div>
                    <div class="circle">
                        <p>
                            <span class="tag">循环预订</span>
                            <span class="circle-text" style="display: none;">连续1周,总计0箱</span>
                        </p>
                        <div style="position: relative; display: flex">
                            <div class="g-ui-switch">
                                <input type="checkbox">
                                <div class="switch-ft">
                                    <span class="cicrle" style="transform: translateX(0px);"></span>
                                </div>
                            </div>
                            <span class="click-switch"></span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="spec-number">
                        <span class="spec">1.25~1.50磅(标准)</span>
                        <div class="g-ui-number">
                            <input type="number" min="0" max="999" style="display: none;">
                            <i class="nicon-plus"></i>
                        </div>
                    </div>
                    <div class="circle">
                        <p>
                            <span class="tag">循环预订</span>
                            <span class="circle-text" style="display: none;">连续1周,总计0箱</span>
                        </p>
                        <div style="position: relative; display: flex">
                            <div class="g-ui-switch">
                                <input type="checkbox">
                                <div class="switch-ft">
                                    <span class="cicrle" style="transform: translateX(0px);"></span>
                                </div>
                            </div>
                            <span class="click-switch"></span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="spec-number">
                        <span class="spec">1.50~1.75磅(标准)</span>
                        <div class="g-ui-number">
                            <input type="number" min="0" max="999" style="display: none;">
                            <i class="nicon-plus"></i>
                        </div>
                    </div>
                    <div class="circle">
                        <p>
                            <span class="tag">循环预订</span>
                            <span class="circle-text" style="display: none;">连续1周,总计0箱</span>
                        </p>
                        <div style="position: relative; display: flex">
                            <div class="g-ui-switch">
                                <input type="checkbox">
                                <div class="switch-ft">
                                    <span class="cicrle" style="transform: translateX(0px);"></span>
                                </div>
                            </div>
                            <span class="click-switch"></span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="spec-number">
                        <span class="spec">1.75~2.00磅(标准)</span>
                        <div class="g-ui-number">
                            <input type="number" min="0" max="999" style="display: none;">
                            <i class="nicon-plus"></i>
                        </div>
                    </div>
                    <div class="circle">
                        <p>
                            <span class="tag">循环预订</span>
                            <span class="circle-text" style="display: none;">连续1周,总计0箱</span>
                        </p>
                        <div style="position: relative; display: flex">
                            <div class="g-ui-switch">
                                <input type="checkbox">
                                <div class="switch-ft">
                                    <span class="cicrle" style="transform: translateX(0px);"></span>
                                </div>
                            </div>
                            <span class="click-switch"></span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="spec-number">
                        <span class="spec">2.00~2.50磅(标准)</span>
                        <div class="g-ui-number">
                            <input type="number" min="0" max="999" style="display: none;">
                            <i class="nicon-plus"></i>
                        </div>
                    </div>
                    <div class="circle">
                        <p>
                            <span class="tag">循环预订</span>
                            <span class="circle-text" style="display: none;">连续1周,总计0箱</span>
                        </p>
                        <div style="position: relative; display: flex">
                            <div class="g-ui-switch">
                                <input type="checkbox">
                                <div class="switch-ft">
                                    <span class="cicrle" style="transform: translateX(0px);"></span>
                                </div>
                            </div>
                            <span class="click-switch"></span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="spec-number">
                        <span class="spec">2.50~3.00磅(标准)</span>
                        <div class="g-ui-number">
                            <input type="number" min="0" max="999" style="display: none;">
                            <i class="nicon-plus"></i>
                        </div>
                    </div>
                    <div class="circle">
                        <p>
                            <span class="tag">循环预订</span>
                            <span class="circle-text" style="display: none;">连续1周,总计0箱</span>
                        </p>
                        <div style="position: relative; display: flex">
                            <div class="g-ui-switch">
                                <input type="checkbox">
                                <div class="switch-ft">
                                    <span class="cicrle" style="transform: translateX(0px);"></span>
                                </div>
                            </div>
                            <span class="click-switch"></span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="spec-number">
                        <span class="spec">3.00~4.00磅(标准)</span>
                        <div class="g-ui-number"></div>
                        <input type="number" min="0" max="999" style="display: none;">
                        <i class="nicon-plus"></i>
                    </div>

                    <div class="circle">
                        <p>
                            <span class="tag">循环预订</span>
                            <span class="circle-text" style="display: none;">连续1周,总计0箱</span>
                        </p>
                        <div style="position: relative; display: flex">
                            <div class="g-ui-switch">
                                <input type="checkbox">
                                <div class="switch-ft">
                                    <span class="cicrle" style="transform: translateX(0px);"></span>
                                </div>
                            </div>
                            <span class="click-switch"></span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="spec-number">
                        <span class="spec">4.00~6.00磅(标准)</span>
                        <div class="g-ui-number">
                            <input type="number" min="0" max="999" style="display: none;">
                            <i class="nicon-plus"></i>
                        </div>
                    </div>
                    <div class="circle">
                        <p>
                            <span class="tag">循环预订</span>
                            <span class="circle-text" style="display: none;">连续1周,总计0箱</span>
                        </p>
                        <div style="position: relative; display: flex">
                            <div class="g-ui-switch">
                                <input type="checkbox">
                                <div class="switch-ft">
                                    <span class="cicrle" style="transform: translateX(0px);"></span>
                                </div>
                            </div>
                            <span class="click-switch"></span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <div class="g-reservation_inline">
            <div class="g-reservation_cart">
                <div class="g-reservation-cart_block">
                    <div class="g-reservation-cart_icon"><i class="fa fa-shopping-bag"></i> <sup>0</sup></div>
                    <p>已选商品</p></div>
            </div>
            <div class="g-reservation_money">
                <div class="g-reservation-money_h"><font>订金:</font>¥0.00
                </div>
            </div>
            <div class="g-reservation_pay">快速预订</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "reservation",
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    .reservation > .di > i {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        border: 1px solid #333;
        border-width: 1px 0 0 1px;
        -webkit-transform: rotate(315deg);
        transform: rotate(315deg);
        top: 8px;
        left: 7px;
    }

    .reservation {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 43px;
        background: #fff;
        z-index: 99;
        height: 100%;

    }

    .reservation > .di {
        position: absolute;
        width: 30px;
        height: 30px;
        top: 8px;
        left: 16px;
        z-index: 101;
    }

    .sub-title {
        background: #fff;
        padding: 52px 16px 32px;
    }

    .sub-title .c-box {
        flex: auto;
        margin-left: 0.08rem;
    }

    .sub-title .title-action {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 0.06rem;
    }

    .sub-title .desc {
        color: #777;
        font-size: 14px;
        padding-top: 0.04rem;
    }

    .sub-title .title {
        font-size: 24px;
        color: #333;

    }

    .sub-title .title-action .desc {
        font-size: 16px;
    }

    .fill-info {
        padding: 0 16px;
        background: #fff;
    }

    .row-info {
        color: #333;
        font-size: 12px;
        display: flex;
        position: relative;
        padding: 15px 0;
        border-bottom: 1px solid rgba(51, 51, 51, .05);
    }

    .row-info p:after {
        content: " ";
        display: inline-block;
        height: 5px;
        width: 5px;
        border-width: 1px 1px 0 0;
        border-color: #a5aab4;
        border-style: solid;
        -webkit-transform: matrix(.71, .71, -.71, .71, 0, 0);
        transform: matrix(.71, .71, -.71, .71, 0, 0);
        position: relative;
        top: -2px;
        position: absolute;
        top: 50%;
        margin-top: -4px;
        right: 0;
    }

    .row-info p {
        flex: 1;
    }

    .reserve-info {
        border-top: 1px solid rgba(51, 51, 51, .1);
        display: flex;
    }

    .date-list {
        box-sizing: border-box;
        width: 120px;
        font-size: 12px;
        background: #fafafa;
        border-right: 1px solid rgba(51, 51, 51, .1);
        height: 100%;
        overflow: auto;
    }

    .date-list h6 {
        color: rgba(51, 51, 51, .4);
        line-height: 25px;
        padding: 0 16px;
        font-size: 0.67em;
        font-weight: bold;
    }

    .date-list p {
        position: relative;
        color: rgba(51, 51, 51, .8);
        line-height: 40px;
        padding: 0 16px;
    }

    .reserve-list {
        height: 100%;
        overflow: auto;
        flex: 1;
    }

    .reserve-list li {
        padding-left: 15px;
        border-bottom: 1px solid #e5e5e5;
    }

    .reserve-list li .spec-number {
        justify-content: space-between;
        align-items: center;
        display: flex;
        border-bottom: 1px solid rgba(51, 51, 51, .05);
        padding: 10px 15px 10px 0;
    }

    .reserve-list li .circle {
        display: flex;
        justify-content: space-between;
        padding: 8px 15px 10px 0;
    }

    .reserve-list li .spec {
        font-size: 0.12rem;
        color: #333;
        flex: 1;
        display: block;
    }

    .g-ui-number input {
        width: 0.22rem;
        text-align: center;
        vertical-align: middle;
        font-size: 0.14rem;
    }

    .reserve-list li .tag {
        display: flex;
        background: rgba(51, 51, 51, .3);
        border-radius: 2px;
        color: #fff;
        font-size: 10px;
        padding: 2px 3px;
    }

    .g-ui-switch {
        display: flex;
        position: relative;
        width: 35px;
        height: 20px;
        display: inline-block;
    }

    .reserve-list li .click-switch {

        position: absolute;
        top: 0;
        left: 0;
        width: 35px;
        height: 20px;
    }

    .g-ui-switch {
    }
    .g-reservation_inline {
        display: flex;
        align-items: center;
        position: absolute;
        z-index: 502;
        bottom: 0;
        left: 0;
        right: 0;
        height: 64px;
        background: #fff;
    }
    .g-reservation_inline:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        border-top: 1px solid #eaeaea;
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
    }
    .g-reservation_inline .g-reservation_cart {
        width: 70px;
        position: relative;
        box-sizing: border-box;
    }
    .g-reservation_inline .g-reservation_cart .g-reservation-cart_block {
        height: 64px;
        padding: 5px;
        width: 100%;
        position: relative;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .g-reservation_inline .g-reservation_cart:after {
        content: "";
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        border-right: 1px solid #eaeaea;
        -webkit-transform: scaleX(.5);
        transform: scaleX(.5);
    }
    .g-reservation_inline .g-reservation_cart .g-reservation-cart_block .g-reservation-cart_icon {
        position: relative;
    }
    .g-reservation_inline .g-reservation_cart .g-reservation-cart_block p {
        font-size: 10px;
        color: rgba(51,51,51,.6);
        position: absolute;
        bottom:4px;
    }
    .g-reservation_inline .g-reservation_cart .g-reservation-cart_block .g-reservation-cart_icon i {
        font-size: 20px;
        color: rgba(0,0,0,.6);
        position: absolute;
        bottom:-6px;
        left:-8px;
    }
    .g-reservation_inline .g-reservation_cart .g-reservation-cart_block .g-reservation-cart_icon sup {
        position: absolute;
        top: -20px;
        right: -18px;
        width: 12px;
        height: 12px;
        line-height: 12px;
        color: #fff;
        font-size: 8px;
        border-radius: 50%;
        background: #ff4081;
        text-align: center;
    }
    .g-reservation_inline .g-reservation_money {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        padding: 5px 10px;
        box-sizing: border-box;
    }
    .g-reservation_inline .g-reservation_money .g-reservation-money_h {
        font-size: 22px;
        font-weight: 700;
        color: #333;
        white-space: nowrap;
    }
    .g-reservation_inline .g-reservation_money .g-reservation-money_h font {
        font-size: 10px;
        margin-right: 5px;
    }
    .g-reservation_inline .g-reservation_pay {
        width: 120px;
        text-align: center;
        color: #fff;
        background: -webkit-linear-gradient(right,#0091f3,#4334ab);
        background: linear-gradient(270deg,#0091f3,#4334ab);
        filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#4334AB,endcolorstr=#0091F3,gradientType=1);
        height: 64px;
        line-height: 64px;
        font-size: 16px;
        z-index: 1;
    }
</style>
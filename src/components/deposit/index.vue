<template>
    <div style="height: 100%; box-sizing: border-box; overflow: hidden;" class="withdrawn router-view">
        <div class="weui-tab">
            <div id="vux_view_box_body" class="weui-tab__panel vux-fix-safari-overflow-scrolling" style="padding-top: 0px; padding-bottom: 0px;"><!----> <!---->
                <div>
                    <div class="g-header">
                        <div class="sub-title" style="border-bottom: none;"><!---->
                            <div class="c-box">
                                <div class="title-action">
                                    <h3 class="title">提现</h3>
                                    <span class="desc"></span>
                                </div>
                                <p class="desc"></p>
                            </div>
                        </div>
                    </div>
                    <header>
                        <div><!---->
                            <div class="weui-cells vux-no-group-title">
                                <div class="weui-cell vux-tap-active weui-cell_access">
                                    <div class="weui-cell__hd"></div>
                                    <div class="vux-cell-bd">
                                        <p>
                                            <label class="vux-label">添加常用银行卡</label>
                                        </p>
                                        <span class="vux-label-desc"></span>
                                    </div>
                                    <div class="weui-cell__ft vux-cell-primary vux-cell-align-left">  <!----></div>
                                </div>
                            </div> <!---->
                        </div>
                    </header>
                    <div class="withdrawn_money">
                        <span style="font-size: 14px; color: rgb(165, 170, 180);">提现金额</span>
                        <div class="money_keyboard">
                            <div>
                                <div class="input-box" style="height: 40px; font-size: 32px;">
                                    <div>￥</div>
                                    <div class="content">
                                        <p class="input"></p>
                                        <p class="placeholder">0.00</p>
                                        <p class="cursor" style="visibility: hidden; height: 32px;"></p></div>
                                </div>
                            </div>
                            <div>
                                <div class="vux-popup-dialog vux-popup-bottom vux-popup-dialog vux-popup-dialog-jc4n6" style="height: 200px; display: none;">
                                    <div class="keyboard">
                                        <div class="list">
                                            <div class="key">1</div>
                                            <div class="key">2</div>
                                            <div class="key">3</div>
                                            <div class="key">4</div>
                                            <div class="key">5</div>
                                            <div class="key">6</div>
                                            <div class="key">7</div>
                                            <div class="key">8</div>
                                            <div class="key">9</div>
                                            <div class="key">.</div>
                                            <div class="key">0</div>
                                            <div class="key ">-</div>
                                        </div>
                                        <div class="list_fun">
                                            <div class="del">x</div>
                                            <div class="confirm">确定</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="withdrawn_balance">
                            <span>当前余额  0.00</span>
                            <span style="color: rgb(4, 99, 222);">全部提取</span>
                        </div>
                    </div>
                    <div class="withdrawn_money_notice">
                        备注：每天可申请提现3次，每次超过5000需要人工审核，每天可提现总金额50000
                    </div>
                    <div class="button">
                        <div class="weui-tabbar">
                            <a href="javascript:;" class="weui-tabbar__item vux-tabbar-simple">
                            <!---->
                                <p class="weui-tabbar__label">
                                    <span>确定</span>
                                </p>
                            </a>
                        </div>
                    </div>
                    <div data-v-c32b90f2=""><!----></div>
                </div>
            </div>
            <div>
                <div class="weui-tabbar b-footer" style="display: none;">
                    <a href="javascript:;" class="weui-tabbar__item">
                        <div class="weui-tabbar__icon">
                            <i class="nicon-home"></i> <!----> <!---->
                        </div>
                        <p class="weui-tabbar__label">
                            <span>首页</span>
                        </p>
                    </a>
                    <a href="javascript:;" class="weui-tabbar__item">
                        <div class="weui-tabbar__icon">
                            <i class="nicon-classfiy"></i> <!----> <!---->
                        </div>
                        <p class="weui-tabbar__label">
                            <span>分类</span>
                        </p>
                    </a>
                    <a href="javascript:;"class="weui-tabbar__item">
                        <div class="weui-tabbar__icon">
                            <i class="nicon-destine"></i> <!----> <!---->
                        </div>
                        <p class="weui-tabbar__label">
                            <span>我要预订</span>
                        </p>
                    </a>
                    <a href="javascript:;" class="weui-tabbar__item">
                        <div class="weui-tabbar__icon">
                            <i class="nicon-shopping-cart"></i> <!----> <!---->
                        </div>
                        <p class="weui-tabbar__label">
                            <span>购物车</span>
                        </p>
                    </a>
                    <a href="javascript:;" class="weui-tabbar__item">
                        <div class="weui-tabbar__icon">
                            <i class="nicon-my-center"></i> <!----> <!---->
                        </div>
                        <p class="weui-tabbar__label">
                            <span>我的</span>
                        </p>
                    </a>
                </div> <!---->
            </div>
            <div class="header-main-title"><!---->
                <div class="left-arrow">
                    <i class="left-icon-arrow"></i>
                </div>
                <div class="title-cont">
                    <div>
                        <h3 class="title">提现</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
    .weui-tab {
        position: relative;
        height: 100%;
        overflow:hidden;
    }
    .weui-tab__panel {
        box-sizing: border-box;
        height: 100%;
        padding-bottom: 50px;
        overflow: auto;
    }
    .g-header {
        background: #fff;
        padding-top: 44px;
        margin-top: -44px;
    }
    .g-header .sub-title {
        background: #fff;
        padding: 52px 16px 32px;
        display: flex;
        align-items: center;
    }
    .g-header .sub-title .c-box {
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
    .withdrawn header .weui-cells {
        display: flex;
        margin-top: 0;
        background-color: #fff;
        line-height: 1.71428571;
        font-size: 14px;
        overflow: hidden;
        position: relative;
        border-bottom: 1px solid #d9d9d9;

    }
    .weui-cells:before{
        z-index: 1;
        content: " ";
        position: absolute;
        left: 0;
        right: 0;
        height: 1px;
        color: #d9d9d9;
        top: 0;
        border-top: 1px solid #d9d9d9;
    }
    .withdrawn header .weui-cells .weui-cell {
        margin: 10px;
        height: 40px;
        width: 100%;
        line-height: 1;
        display: flex;
        align-items: center;
    }
    .weui-cell_access {
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        color: inherit;
    }
    .app .vux-cell-bd {
        padding-right: 15px;
    }
    .weui-cell_access .weui-cell__ft {
        padding-right: 13px;
        position: relative;
        text-align: left;
    }
    .app .weui-cell__ft, .app .weui-select {
        color: #a5aab4;
        font-size: 14px;
    }
    .app .weui-cell_access.vux-cell-box:after, .app .weui-cell_access .weui-cell__ft:after {
        border-width: 1px 1px 0 0;
        width: 8px!important;
        height: 8px!important;
        border-color: #a5aab4;
        border-style: solid;
    }
    .withdrawn .withdrawn_money {
        margin-top: 10px;
        padding: 15px 10px;
        background-color: #fff;
        position: relative;
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #c0ccda;
        border-top: 1px solid #c0ccda;
        transform-origin: 0 100%;
    }
    .withdrawn .withdrawn_money:after, .withdrawn .withdrawn_money:before {
        content: " ";
        position: absolute;
        left: 0;
        right: 0;
        height: 1px;
        color: #c0ccda;
    }
    .input-box {
        display: flex;
        align-items: center;
    }
    .input-box .content {
        display: flex;
    }
    .input-box .content .input {
        color: #313131;
        align-self: center;
    }
    .input-box .content .placeholder {
        color: #ccc;
        font-size: 16px;
    }
    .input-box .content .cursor {
        background-color: #4788c5;
        width: 2px;
        align-self: center;
        margin-left: 2px;
    }
    .withdrawn .withdrawn_money .withdrawn_balance {
        font-size: 14px;
        color: #a5aab4;
        display: flex;
        justify-content: space-between;
    }

    .withdrawn .withdrawn_money_notice {
        font-size: 12px;
        color: #777;
        line-height: 17px;
        margin: 5px 10px;
    }
    .header-main-title {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 43px;
        line-height: 43px;
        background: hsla(0,0%,100%,0);
        z-index: 99;
    }
    .weui-tabbar {
        display: flex;
        position: absolute;
        z-index: 500;
        bottom: 0;
        width: 100%;
        background-color: #f7f7fa;
    }
    .weui-tabbar:before {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 1px;
        border-top: 1px solid #c0bfc4;
        color: #c0bfc4;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
    }
    .withdrawn .button .weui-tabbar__item.vux-tabbar-simple {
        height: 60px;
        background-color: #0463de;
        padding: 0;
        flex:1;
    }
    .withdrawn .button .weui-tabbar__label {
        background-color: #0463de;
        font-size: 18px;
        line-height: 60px;
        color: #fff;
        text-align: center;
    }
</style>
<template>
    <div>
        <div class="product-turnover router-view" style="height: 100%; box-sizing: border-box; overflow: hidden;">
            <div class="weui-tab">
                <div id="vux_view_box_body" class="weui-tab__panel vux-fix-safari-overflow-scrolling" style="padding-top: 0px; padding-bottom: 0px;">
                    <div>
                        <div class="g-header">
                            <div class="sub-title" style="border-bottom: 1px solid rgba(51, 51, 51, 0.1);">
                                <div class="c-box">
                                    <div class="title-action">
                                        <h3 class="title">成交记录</h3>
                                        <span class="desc"></span>
                                    </div>
                                    <p class="desc">1476条成交记录</p>
                                </div>
                            </div>
                        </div>
                        <div class="g-scroller" >
                            <div class="trunover-card" v-for="(item,index) in RecordList">
                                <div class="card-header">
                                    <h4>普通订单</h4>
                                    <span class="date">{{item.arriveDate}}</span>
                                </div>
                                <div class="card-content">
                                    <div class="card-row price-row">
                                        <div class="price">
                                            <label>规格：</label>
                                            <span>咸水~8头</span>
                                        </div>
                                        <b class="num">{{item.type}}箱</b>
                                    </div>
                                    <div class="card-row">
                                        <label>质量：</label>
                                        <div class="rates">
                                            <span>全赔(死亡率)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="down-load" style="opacity: 1;">上拉加载...</div>
                        </div>
                    </div>
                </div>
                <div class="header-main-title"><!---->
                    <div class="left-arrow">
                        <i class="left-icon-arrow"></i>
                    </div>
                    <div class="title-cont">
                        <div>
                            <h3 class="title"></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "record",
        data() {
            return {
                RecordList: ""
            }
        },
        async created() {
            // let record = await  RecordList()
            // console.log(record)
            await this.$axios.post("/api/order/order/findListByProduct", {
                pageNo: 1,
                pageSize: 10,
                productId: "ca663f78-f9f6-4063-8f9a-ecd4ec251d3a"
            }).then(data => {
                this.RecordList = data.data.data.content;
            })
        }
    }
</script>

<style scoped>
    .header-main-title[data-v-73d17fa4] {
        position: absolute;
        left: 10px;
        top: 8px;
        right: 0;
        height: 43px;
        line-height: 43px;
        background: hsla(0,0%,100%,0);
        z-index: 99;
    }
    .header-main-title .left-arrow .left-icon-arrow {
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
    .product-turnover {
        font-size: 12px;
        color: #333;
    }
    .weui-tab {
        position: relative;
        height: 100%;
    }
    .weui-tab__panel {
        box-sizing: border-box;
        height: 100%;
        padding-bottom: 50px;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
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
    .g-header .sub-title .title {
        font-size: 24px;
        color: #333;
    }
    .g-header .sub-title .title-action .desc {
        font-size: 16px;
    }
    .g-header .sub-title .desc {
        color: #777;
        font-size: 14px;
    }
    .product-turnover .trunover-card {
        padding: 16px 0;
        margin: 0 16px;
        border-bottom: 1px solid rgba(51,51,51,.05);
    }
    .product-turnover .card-header {
        padding-bottom: 8px;
        display: flex;
        justify-content: space-between;
        line-height: 20px;
    }
    .product-turnover .card-header h4 {
        font-size: 14px;
        font-weight: 400;
    }
    .product-turnover .card-header .date {
        color: rgba(51,51,51,.6);
    }
    .product-turnover .card-row.price-row {
        justify-content: space-between;
    }
    .product-turnover .card-row .price, .product-turnover .card-row .price .member-price {
        display: flex;
        align-items: center;
    }
    .product-turnover .card-row {
        font-size: 12px;
        display: flex;
        padding-top: 8px;
        line-height: 17px;
    }
</style>
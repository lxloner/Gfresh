<template>
    <div class="login">
        <div class="pullbol">
            <img src="https://m.gfresh.cn/static/img/logo-bg.4d7eaf1.png" alt="">
            <div class="title">
                <span>极鲜网</span>
                <span>Gfresh</span>
            </div>
            <div class="tab">
                <span class="regsl loner">登陆</span>
                <span class="loging loner">注册</span>
            </div>
        </div>
        <section>
            <form action="">
                <div class="loders">
                    <div class="xlplut">
                        <input id="vux-x-input-jj6k1" autocomplete="off" autocapitalize="off" autocorrect="off"
                               spellcheck="false" type="text" placeholder="手机号/邮箱/用户名" class="weui-input">
                    </div>
                    <div class="ylplut">
                        <input id="vux-x-input-0ph7b" autocomplete="off" autocapitalize="off" autocorrect="off"
                               spellcheck="false" type="password" placeholder="请输入密码" class="weui-input">
                    </div>
                    <div class="wh_bottom" style="margin-top: 10px;">
                        <span style="font-size: 12px;">
                            <i class="icon-square-checkbox" style="margin-right: 5px;"></i>
                            登录后始终自动登录
                        </span>
                        <span style=" font-size: 12px;" class="password">找回密码</span></div>
                </div>
            </form>
        </section>
        <div class="resgin">
            <span>登陆</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{

            }
        },
    }
</script>

<style scoped>
    .login {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }

    .login > .pullbol {
        width: 100%;
        position: relative;
    }

    .login > .pullbol > img {
        width: 100%;
    }

    .pullbol .title {
        width: 100%;
        text-align: center;
        color: #fff;
        display: flex;
        justify-content: center;
        flex-direction: column;
        position: absolute;
        top: 18%;
    }

    .pullbol .title > span {
        font-size: 0.24rem;
    }

    .pullbol .title > span:nth-child(2) {
        font-size: 0.28rem;
    }

    .pullbol .tab {
        width: 100%;
        height: 0.521rem;
        line-height: 0.521rem;
        position: absolute;
        bottom: 0;
        display: flex;
        background: rgba(0, 0%, 100% .2);
        justify-content: space-around;
    }

    .pullbol .tab .regsl {
        border-right: 1px solid #fff;
    }

    .pullbol .tab .loner {
        display: block;
        font-weight: bold;
        font-size: 0.18rem;
        display: flex;
        flex: 1;
        position: relative;
        text-align: center;
    }
    section{
        width:90%;
        margin:0 auto;
    }
    section form{
        display: flex;
        width:100%;
    }
    .loders{
        width:100%;
    }
    .loders>div{
        display: flex;
    }
    .xlplut,.ylplut{
        width:100%;
        border-bottom:1px solid #eaebea;
        font-size:0.14rem;
        padding:0.14rem 0;
        height:0.6rem;
    }
    .xlplut input,.ylplut input{
        color:#eaebea;
        border:none;
        width:100%;
    }
    [class*=" icon-"], [class^=icon-] {
        font-family: icomoon!important;
        speak: none;
        font-style: normal;
        font-weight: 400;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .wh_bottom{
        display: flex;
        justify-content: space-between;
    }
    .icon-square-checkbox:before {
        content: "\E960";
    }
    .password{
        display: flex;
    }
    .resgin{
        display: flex;
        justify-content: center;
        margin:20% auto 0;
        width:90%;
        text-align: center;
        height:0.46rem;
        line-height:0.46rem;
        border-radius:1rem;
        background:linear-gradient(90deg,#4334ab,#0091f3);
    }
    .resgin span{
        font-size:0.2rem;
        color:#fff;
    }
</style>
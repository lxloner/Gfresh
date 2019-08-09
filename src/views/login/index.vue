<template>
    <div class="login">
        <div class="pullbol">
            <img src="https://m.gfresh.cn/static/img/logo-bg.4d7eaf1.png" alt="">
            <div class="title">
                <span>极鲜网</span>
                <span>Gfresh</span>
            </div>
            <div class="tab">
                <div class="regsl loner" >
                    <v-touch @tap="handleToggle(1,'/login/loging')" :class="{'lo':num === 1}" tag="div">登陆</v-touch>
                </div>
                <div class="loging loner">
                    <v-touch @tap="handleToggle(2,'/login/packlogin')" :class="{'lo':num === 2}" tag="div">注册</v-touch>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                num : 1
            }
        },
        methods:{
            handleToggle(num,url){
                this.$router.push(url);
                this.num = num;
            }
        }
    }
</script>

<style scoped>
    .lo{
        border-bottom:2px solid #222;
        font-weight: bold;
    }
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
    }

    .pullbol .tab .regsl {
        border-right: 1px solid #fff;
        width:50%;
        justify-content: space-around;
    }
    .loging{
        width:50%;
        justify-content: space-around;
    }
    .pullbol .tab .loner {

        font-size: 0.18rem;
        display: flex;
    }

</style>
<template>
    <div class="switch">
        <el-form :model="ruleForm" ref="adminForm" :rules="rules" class="container">
            <el-form-item prop="adminName">
                <el-input v-model="ruleForm.adminName" placeholder="请输入管理员账号"></el-input>
            </el-form-item>
            <el-form-item prop = "passWord">
                <el-input v-model="ruleForm.passWord" type="password" placeholder="请输入管理员密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button :loading="$store.state.isLoading" type="primary" @click="submitForm" style="width:100%">登陆</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import jwt from "jsonwebtoken"
    export default {
        name: "index",
        data(){
            return {
                // isLoading:false,
                ruleForm:{
                    adminName:"",
                    passWord:""
                },
                rules:{
                    adminName: [
                        { required: true, message: '请输入账号名称', trigger: 'blur' },
                        { min: 11, max: 11, message: '请输入正确的手机号', trigger: 'blur' }
                    ],
                    passWord: [
                        { required: true, message: '请输入您的密码', trigger: 'blur' },
                        { min: 6, max: 16, message: '密码错误请重新输入', trigger: 'blur' }
                    ]
                }
            }
        },
        methods:{
            submitForm(){
                this.$refs.adminForm.validate((isVali)=>{
                    if(isVali){// 如果验证成功
                        this.isLoading = true;// 开始进行登陆
                        this.$router.go(-1)
                        console.log('登陆成功');
                        // location.href="http://localhost:8080/home"
                        // let token = jwt.sign({username}, 'bk1910', { expiresIn: '1h' });
                        sessionStorage.setItem('token',"998564546121235649748686452");
                    }else{
                        console.log(isVali);
                    }
                })
            }
        }
    }
</script>

<style scoped>
    section{
        width:90%;
        margin:0 auto;
    }
    section form{
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
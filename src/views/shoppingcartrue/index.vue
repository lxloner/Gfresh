<template>
    <div>
         <div id="sub-title">
            <div class="title-action">
                <h1>购物车</h1>  
                <span>删除</span>
            </div>
       </div>
       <div>
           <i class="nicon-radio-unchecked"></i>
       </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
#sub-title{
    width:100%;
    height:1.23rem;
    display: flex;
    align-items: center;
    justify-content:center;
    border-bottom: 1px solid rgba(51, 51, 51, 0.1)
}
.title-action {
    width:3.35rem;
    height: .38rem; 
    display: flex;
    justify-content: space-between
}
.title-action > h1 {
  font-size: 24px;
}
.title-action>span{
    font-size: 16px;
    color: #777;
    line-height: .38rem
}
</style>

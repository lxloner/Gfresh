<template>
  <div>
    <div id="Noticetitle">
      <router-link tag="div" to="/home" class="left-home">
        <span><</span>
      </router-link>
      <div class="title-notice box_fixed" id="boxFixed" :class="{'is_fixed' : isFixed}">
        <h1>极鲜公告</h1>
      </div>
    </div>
    <div id="noticeNav">
        <div id="noticeMessage"  v-for="(item,index) in noticecontent" :key="index">
            <div class="nm-title" >
                {{item.title}}
            </div>
            <div class="nm-content">
               {{item.digest}}
            </div>
        </div>
    </div>
  </div>
</template>


<script>
import {noticeNav} from "api/notice"
export default {
    name:"noticeContent",
    data(){
        return{
            noticecontent:[],
            isFixed: false,
             offsetTop: 0
        }
    },
    async created(){
            let noticecontent = await noticeNav()
           this.noticecontent = noticecontent.data.content
           console.log(noticecontent)
    },
      mounted() {
            window.addEventListener('scroll', this.initHeight);
            this.$nextTick(() => {
                //获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置 
                this.offsetTop = document.querySelector('#boxFixed').offsetTop;
            })
        },
        methods: {
            initHeight() {
                // 设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离 (被卷曲的高度)
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                //如果被卷曲的高度大于吸顶元素到顶端位置 的距离
                this.isFixed = scrollTop > this.offsetTop ? true : false;
            },
        },
        //回调中移除监听
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll)
        }

};
</script>
<style>
#Noticetitle{
    height:1.24rem;
    width:100%;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #ccc

}
.left-home{
 height: .42rem;
 width: 100% ;
 display: flex
}
.left-home>span{
    font-size: 30px;
    padding:.1rem  0  0  .2rem
}
.title-notice{
    width: 100%;
    line-height: .4rem;
  display: flex;
  height: .6rem;
  margin-bottom: 0.1rem;
    background: #fff;
    align-items: center 
}
.is_fixed{
    position: fixed;
    top: 0;
    z-index: 999;
  }
.title-notice>h1{
    font-size: 24px;
    padding:.2rem 0 0 .3rem
}

/* noticeNav */
#noticeNav{
    display: flex;
    width: 100%;
    height:100%;
    flex-direction: column;
    overflow: auto;

    align-items: center
}
#noticeMessage{
    width: 3.43rem;
    height: .84rem;
    border-bottom: #ccc solid 1px;
   
}
.nm-title{
    width:100%;
    height:.25rem;
     
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: .2rem;
    font-size: 14px;
    color: #333
}

.nm-content{
    width: 100%;
    height:.2rem;
     /* display: flex; */
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
     margin:.1rem 0 0 .1rem;
     font-size: 14px;
    color: #ccc
}

</style>

<template data-dpr>
  <div class="reserve">
    <div class="headers">
      <h2>我要预订</h2>
      <p>选择你想预订的商品品类</p>
    </div>
    <div class="product">
      <div @click="$router.push('/reserve/reservation')">
          <div>
            <img src="https://file.gfresh.cn/product/category/2018/5/4/15265309777791.767633137410296%E8%9E%AF%E9%BE%99%E8%99%BE.png?x-oss-process=image/resize,m_fixed,h_200,w_200" alt="">
          </div>
          <span>螯龙虾</span>
          <span>(活鲜产品)</span>
      </div>

      <div>
          <div>
            <img src="https://file.gfresh.cn/product/category/2018/5/4/15265309777791.767633137410296%E8%9E%AF%E9%BE%99%E8%99%BE.png?x-oss-process=image/resize,m_fixed,h_200,w_200" alt="">
          </div>
          <span>螯龙虾</span>
          <span>(活鲜产品)</span>
      </div>

      <div>
          <div>
            <img src="https://file.gfresh.cn/product/category/2018/5/4/15265309777791.767633137410296%E8%9E%AF%E9%BE%99%E8%99%BE.png?x-oss-process=image/resize,m_fixed,h_200,w_200" alt="">
          </div>
          <span>螯龙虾</span>
          <span>(活鲜产品)</span>
      </div>

      <div>
          <div>
            <img src="https://file.gfresh.cn/product/category/2018/5/4/15265309777791.767633137410296%E8%9E%AF%E9%BE%99%E8%99%BE.png?x-oss-process=image/resize,m_fixed,h_200,w_200" alt="">
          </div>
          <span>螯龙虾</span>
          <span>(活鲜产品)</span>
      </div>

      <div>
          <div>
            <img src="https://file.gfresh.cn/product/category/2018/5/4/15265309777791.767633137410296%E8%9E%AF%E9%BE%99%E8%99%BE.png?x-oss-process=image/resize,m_fixed,h_200,w_200" alt="">
          </div>
          <span>螯龙虾</span>
          <span>(活鲜产品)</span>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'reserve',
  components: {

  }
}
</script>
<style>
  *{
    margin:0;
    padding:0;
  }
  .headers{
    display: flex;
    flex-direction:column;
    align-items:flex-start;
    padding:52px 16px 32px;
  }
  .headers h2{
    margin-left:0.08rem;
    font-size:24px;
    font-weight: normal;
    color:#333;
  }
  .headers p{
    margin-left:0.08rem;
    font-size:14px;
    color:#777;
  }
  .product{
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    padding-left: 10px;
    overflow: hidden;
  }
  .product>div>span{
    display: block;
    width: 100%;
    font-size: 12px;
    margin-top: 5px;
  }
  .product>div{
    float: left;
    width: 33.333%;
    box-sizing: border-box;
    padding-right: 10px;
    text-align: center;
    margin-bottom: 15px;
  }
  .product>div>div{
    max-width: 100%;
    padding-top: 100%;
    position: relative;
    background-size: 100% 100%;
  }
  .product>div>div>img{
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
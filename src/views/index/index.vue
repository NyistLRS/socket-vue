<template>
  <div class="home">
    <header class="page-title">生活一家</header>
    <div class="banner"></div>
    <div class="category-list">
      <div class="jcsh">
        精彩生活会员专享
      </div>
      <div class="right">
        <div class="shsp"></div>
        <div class="shyp"></div>
        <div class="shjj"></div>
        <div class="yjkf"></div>
      </div>
    </div>
    <section class="navigator-warp">
      <header><span><i class="before"></i>特卖专区 Sales<i class="after"></i></span></header>
      <section class="navigator-content">
        <div class="img">
          <img src="../../assets/images/navigator1.png" alt="">
        </div>
        <div class="summry">
          【10月抢购预告】 荣耀乐檬大神爆款 惊爆价
        </div>
      </section>
      <section class="navigator-content">
        <div class="img">
          <img src="../../assets/images/navigator2.png" alt="">
        </div>
        <div class="summry">
          【劲爆开抢】 保洁大礼包优惠前所未有
        </div>
      </section>
      <section class="navigator-content">
        <div class="img">
          <img src="../../assets/images/navigator3.png" alt="">
        </div>
        <div class="summry">
          【神价再现】 GOD PRICE 华丽上市
        </div>
      </section>
    </section>
  </div>
</template>

<script>
export default {
}
</script>

<style>
  .home {
    background-color: #fff;
    margin-bottom: 10px;
  }
  .home header.page-title {
    height: 43px;
    line-height: 43px;
    color: #fff;
    text-align: center;
    background-color: #f29004;
  }
  .home .banner {
    height: 150px;
    background: url(../../assets/images/banner.png) no-repeat;
    background-size: 100% 100%;
  }
  .home .category-list {
    height: 168px;
    margin: 7px 0;
    padding: 0 10px;
    display: flex;
  }
  .jcsh {
    flex-shrink: 0;
    width: 112px;
    background-color: #FAEEC4;
    border-radius: 5px;
    margin-right: 7px;
  }
  .right {
    flex-shrink: 0;
    flex: auto;
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-flow: row wrap;
    flex-flow: row wrap;
    align-items: center;
    justify-content: left;
  }
  .right div {
    width: calc(50% - 4px);
    height: 80px;
  }
  .right div:nth-of-type(odd) {
    margin-right: 7px;
  }
  .right div{
    margin-top: 7px;
  }
  .right div:nth-of-type(2) ,.right div:nth-of-type(1){
    margin-top: 0;
  }
  .shsp {
    background-color: #D9F6E5;
  }
  .shyp {
    background-color: #DEF2FB;
  }
  .shjj {
    background-color: #F9E0E7;
  }
  .yjkf {
    background-color: #FBECDD;
  }
  .navigator-warp {
    padding: 0 10px;
  }
  .navigator-warp header {
    text-align: center;
    font-size: 14px;
    color: #808080;
    margin-bottom: 7px;
  }
  .navigator-warp header span {
    position: relative;
  }
  .navigator-warp header span i.before {
    position: absolute;
    height: 1px;
    width: 122px;
    top: 50%;
    transform: translate(-105%,-50%);
    border-top:1px dashed #dbdbdb;
  }
  .navigator-warp header span i.after {
    position: absolute;
    height: 1px;
    width: 122px;
    top: 50%;
    right:0;
    transform: translate(105%,-50%);
    border-top:1px dashed #dbdbdb;
  }
  .navigator-content {
    height: 184px;
  }
  .img {
    height: 150px;
  }
  .img img {
    height: 100%;
    width: 100%;
  }
  .summry {
    height: 34px;
    line-height: 34px;
    font-size: 14px;
  }
</style>

<template>
  <div class="knowledge">
    <HeaderBar />
    <SwiperBanner />
    <SwiperMallNav />
    <!--知识体系-->
    <div class="bt20 zhishitixi">
      <div class="title"><span>知识体系</span></div>
      <ImgDesList />
    </div>
    <!--独家策划-->
    <div class="bt20 dujiacehua">
      <div class="title"><span>独家策划</span></div>
      <van-tabs v-model:active="active" :before-change="beforeChange">
        <van-tab v-for="index in 8" :title="'知识图解 ' + index" :key="index">
          <ImgDesList />
        </van-tab>
      </van-tabs>
    </div>

    <!--装修知识-->
    <div class="bt20 zhuangxiuzhishi">
      <div class="title"><span>装修知识</span></div>
      <DesList />
    </div>

    <!--生活知识-->
    <div class="bt20 zhuangxiuzhishi">
      <div class="title"><span>生活知识</span></div>
      <DesList />
    </div>
    <!--购物知识-->
    <div class="bt20 gouwuzhishi">
      <div class="title"><span>购物知识</span></div>
      <DesList />
    </div>
    <!--知识榜-->
    <div class="bt20 hangyebang">
      <div class="title"><span>知识榜</span></div>
      <List1 />
    </div>
    <!--行业榜-->
    <div class="bt20 hangyebang">
      <div class="title"><span>行业榜</span></div>
      <van-tabs v-model:active="active" :before-change="beforeChange">
        <van-tab v-for="index in 8" :title="'健康保健 ' + index" :key="index">
          <ImgDesList />
        </van-tab>
      </van-tabs>
    </div>
    <div class="bt20 clearf">
      <List2 />
      <List2 />
    </div>
    <div class="bt20 clearf">
      <List2 />
      <List2 />
    </div>
  </div>
</template> 
<script>
import HeaderBar from "@/components/HeaderBar.vue";
import SwiperBanner from "@/components/SwiperBanner.vue";
import SwiperMallNav from "@/components/SwiperMallNav.vue";
import { Tab, Tabs } from "vant";
import ImgDesList from "@/components/ImgDesList.vue";
import DesList from "@/components/DesList.vue";
import List1 from "./List1.vue";
import List2 from "./List2.vue";
export default {
  components: {
    HeaderBar,
    SwiperBanner,
    SwiperMallNav,
    ImgDesList,
    DesList,
    List1,
    List2,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.bt20 {
  border-top: 20px solid #f4f4f4;
  .title {
    text-align: center;
    font-size: 48px;
    color: #cbcbcb;
    line-height: 100px;
    padding-top: 20px;
    position: relative;
    span {
      background: #fff;
      padding: 0 20px;
      position: relative;
      z-index: 1;
    }
    &::after {
      content: "";
      height: 10px;
      width: 375px;
      background: #f4f4f4;
      bottom: 50px;
      position: absolute;
      left: 190px;
    }
  }
}
</style>

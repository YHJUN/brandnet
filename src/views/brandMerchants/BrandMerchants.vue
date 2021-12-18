<template>
  <div class="brandMerchants">
    <HeaderBar
      :header-data="{
        title: '品牌招商',
        active: 4,
      }"
    />
    <SwiperBanner
      :swiperBanner-data="{
        data: {},
        textTrue: false,
      }"
    />
    <SwiperMallNav />
    <div class="bt20bg">
      <div class="jiamengruzhu">
        <div class="item">发布品牌招商</div>
        <div class="item">我要代理加盟</div>
        <div class="item">发布项目招商</div>
        <div class="item">企业入驻流程</div>
      </div>
      <div class="jiamengdongtai flex-fs">
        <div class="left">
          <div>加盟</div>
          <div class="orange">动态</div>
        </div>
        <div class="right">
          <van-swipe
            class="my-swipe dynamic-list"
            :autoplay="1000"
            vertical

          >
            <van-swipe-item
            style="height:80px"
              class="dynamic-item flex-fs"
              v-for="index in 10"
              :key="index"
            >
              <div class="img">
                <img src="@assets/images/icon.png" alt="" />
              </div>
              <div class="text">
                想了解伟业板材品牌资料请点击访问跳转到相对也没
              </div>
              <div class="name">伟业板材有限公司</div>
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
import SwiperBanner from "@/components/SwiperBanner.vue";
import SwiperMallNav from "@/components/SwiperMallNav.vue";
import { Tab, Tabs, Swipe, SwipeItem } from "vant";
import ImgDesList from "@/components/ImgDesList.vue";
import DesList from "@/components/DesList.vue";

export default {
  components: {
    HeaderBar,
    SwiperBanner,
    SwiperMallNav,
    ImgDesList,
    DesList,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  setup() {},
};
</script>
<style lang="scss" scoped>
.jiamengruzhu {
  margin: 30px 15px;
  overflow: hidden;
  .item {
    margin-bottom: 10px;
    margin-left: 10px;
    width: 345px;

    height: 125px;
    float: left;
    font-size: 42px;
    line-height: 125px;
    &:nth-child(1) {
      background: #ffe5dc;
      color: #db251c;
    }
    &:nth-child(2) {
      background: #d8d8fe;
      color: #65499f;
    }
    &:nth-child(3) {
      color: #db251c;
      background: #ffc96f;
    }
    &:nth-child(4) {
      background: #ace0ff;
      color: #2e76b5;
    }
  }
}
.jiamengdongtai {
  overflow: hidden;
  .left {
    width: 120px;
    font-size: 32px;
  }
  .right {
    height: 400px;
    width: 610px;
    border-left: 1px solid #eee;
    .dynamic-item {
      height: 80px;
      
      .img {
        img {
          width: 65px;
          height: 65px;
          border-radius: 50%;
          border:1px solid #eee
        }
      }
      .text{
          font-size: 32px;
          color: #666;
      }
      .name{
          color: #999;
          font-size: 28px;
      }
    }
  }
}
</style>
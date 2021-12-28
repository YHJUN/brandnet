<template>
  <div class="network">
    <HeaderBar
      :header-data="{
        title: '网点',
        active: 10,
      }"
    />
    <Navlist :data="{ col: 4, list: 8 }" />
    <!--网点品牌-->
    <div class="bt20">
      <SectionTitle :data="{ title: '网点品牌' }" />

      <div class="tabmenubox-more tabmenubox">
        <div class="current">热门品牌</div>
        <div v-for="index in 10" :key="index">国内品牌</div>
      </div>
      <SwiperMallNav :data="{ row: 3, col: 4, list: 16 }" />
    </div>
    <!--热门城市-->
    <div class="bt20">
      <SectionTitle :data="{ title: '热门城市' }" />

      <SwiperMallNav :data="{ row: 2, col: 5, list: 16 }" />
    </div>
    <!--网点排行-->
    <div class="network-rank">
      <SectionTitle :data="{ title: '网点排行' }" />
      <div class="tabmenubox-more tabmenubox">
        <div class="current">综合排行</div>
        <div v-for="index in 10" :key="index">关注度排行</div>
      </div>
      <div>
        <ul>
          <li v-for="index in 5" :key="index">
            <div class="title">
              <span :class="'num' + index">{{ index }}</span
              >美的售后服务电话 美的电器销售服务网点
            </div>
            <div class="img">
              <img
                src="@assets/images/18185920289_940x580.jpg_285_176.jpg"
                alt=""
              />
            </div>
            <div class="info">
              <div>类型: 外链官方服务点</div>
              <div>网址：<span class="be0f1b">http://xxx.com</span></div>
              <div>电话: 400-830-211</div>
              <div><span class="orangin">官方授权信息</span>(来自官网)</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!---->
  </div>
</template>

<script>
import SectionTitle from "@/components/SectionTitle.vue";
import HeaderBar from "@/components/HeaderBar.vue";
import SwiperMallNav from "@/components/SwiperMallNav.vue";
import ImgDesList from "@/components/ImgDesList.vue";
import { Icon, Tab, Tabs } from "vant";
import Navlist from "@/components/Navlist.vue";
export default {
  components: {
    SectionTitle,
    HeaderBar,
    Navlist,
    SwiperMallNav,
    ImgDesList,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Icon.name]: Icon,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.network-rank {
  ul {
    padding: 0 30px;
    li {
      overflow: hidden;
      padding: 12px 0px 20px 0px;
      border-bottom: 1px solid #ddd;
      .title {
        font-size: 28px;
        margin-bottom: 15px;
        text-align: left;
        color: #be0f1b;
        span {
          display: inline-block;
          min-width: 36px;
          height: 36px;

          line-height: 36px;
          border-radius: 5px;
          background: #ccc;
          text-align: center;
          margin-right: 10px;
          margin-top: -2px;
          color: #fff;
          vertical-align: middle;
          &.num1 {
            background: #fe741c;
          }
          &.num2 {
            background: #fdb80c;
          }
          &.num3 {
            background: #ffdc00;
          }
        }
      }
      .img {
        width: 240px;
        float: left;
        height: 155px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .info {
        text-align: left;
        color: #999;
        width: 400px;
        margin-left: 20px;
        float: left;
        div {
          font-size: 24px;
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>
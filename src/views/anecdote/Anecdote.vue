<template>
  <div class="focus">
    <HeaderBar
      :header-data="{
        title: '趣闻',
        active: 9,
      }"
    />
    <SwiperMallNav :data="{ row: 2, col: 5, list: 16 }" />
    <!--人气排行榜-->
    <div class="bt20">
      <SectionTitle :data="{ title: '人气排行榜' }" />
      <div class="popularity-chart">
        <ul>
          <li v-for="index in 9" :key="index">冬季排行榜</li>
        </ul>
      </div>
    </div>
    <!--精英名人-->
    <div class="bt20">
      <SectionTitle :data="{ title: '精选生活排行榜' }" />
      <van-tabs v-model:active="active" :before-change="beforeChange">
        <van-tab title="小编精选">
          <ImgDesList />
        </van-tab>
        <van-tab title="关注top">
          <ImgDesList />
        </van-tab>
        <van-tab title="热评文章">
          <ImgDesList />
        </van-tab>
      </van-tabs>
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
.popularity-chart {
  background: #232a88;
  overflow: hidden;
  margin: 20px;
  border-radius: 10px;
  padding: 20px 0;
  ul {
      padding-left: 10px;
    li {
      border: 1px solid #ddd;
      line-height: 66px;
      border-radius: 10px;
      float: left;
      background: #fff;
      margin: 10px 15px;
      color: #333;
      padding: 0 10px;
      width: 200px;
      box-sizing: border-box;
    }
  }
}
</style>
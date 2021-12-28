<template>
  <div class="focus">
    <HeaderBar
      :header-data="{
        title: '聚焦',
        active: 6,
      }"
    />
    <SwiperMallNav :data="{row:2,col:5,list:16}" /> 
    <!--热门行业-->
    <div class="bt20">
      <SectionTitle :data="{ title: '热门行业' }" />
      <Navlist :data="{ col: 5, list: 10, iconSize: 60 }" />
    </div>
    <!--相关推荐-->
    <div>
      <SectionTitle :data="{ title: '相关推荐' }" />
      <van-tabs v-model:active="active" :before-change="beforeChange">
        <van-tab v-for="index in 2" :title="'小编精选 ' + index" :key="index">
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
</style>
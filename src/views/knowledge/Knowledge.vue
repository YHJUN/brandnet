<template>
  <div class="knowledge">
    <HeaderBar
      :header-data="{
        title: '知识',
        active: 1,
      }"
    />
    <SwiperBanner
      :swiperBanner-data="{
        data: {},
        textTrue: true,
      }"
    />  
    <SwiperMallNav :data="{row:2,col:5,list:16}" /> 
    <!--知识体系-->
    <div class="bt20 zhishitixi">
      <SectionTitle :data="{ title: '知识体系' }" />

      <ImgDesList />
    </div>
    <!--独家策划-->
    <div class="bt20 dujiacehua">
      <SectionTitle :data="{ title: '独家策划' }" />
      <van-tabs v-model:active="active" :before-change="beforeChange">
        <van-tab v-for="index in 8" :title="'知识图解 ' + index" :key="index">
          <ImgDesList />
        </van-tab>
      </van-tabs>
    </div>

    <!--装修知识-->
    <div class="bt20 zhuangxiuzhishi">
      <SectionTitle :data="{ title: '装修知识' }" />
      <DesList />
    </div>

    <!--生活知识-->
    <div class="bt20 zhuangxiuzhishi">
      <SectionTitle :data="{ title: '生活知识' }" />
      <DesList />
    </div>
    <!--购物知识-->
    <div class="bt20 gouwuzhishi">
      <SectionTitle :data="{ title: '购物知识' }" />
      <DesList />
    </div>
    <!--知识榜-->
    <div class="bt20 hangyebang">
      <SectionTitle :data="{ title: '知识榜' }" />
      <List1 />
    </div>
    <!--行业榜-->
    <div class="bt20 hangyebang">
      <SectionTitle :data="{ title: '行业榜' }" />
      <van-tabs v-model:active="active" :before-change="beforeChange">
        <van-tab v-for="index in 8" :title="'健康保健 ' + index" :key="index">
          <ImgDesList />
        </van-tab>
      </van-tabs>
    </div>
    <div class="bt20 clearf">
      <List2 />
      <List2 />
      <List2 />
      <List2 />
    </div>
  </div>
</template> 
<script>
import HeaderBar from "@/components/HeaderBar.vue";
import SwiperBanner from "@/components/SwiperBanner.vue";
import SwiperMallNav from "@/components/SwiperMallNav.vue";
import SectionTitle from "@/components/SectionTitle.vue";
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
    SectionTitle,
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
</style>

<template>
  <div class="knowledge">
    <HeaderBar
      :header-data="{
        title: '展会',
        active: 7,
      }"
    />
    <div class="banner">
      <img src="@assets/images/nimg.png" alt="" />
    </div>
    <SwiperMallNav :data="{ row: 2, col: 5, list: 16 }" />
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

    <!--行业榜-->
    <div class="bt20 hangyebang">
      <SectionTitle :data="{ title: '行业榜' }" />
      <van-tabs v-model:active="active" :before-change="beforeChange">
        <van-tab v-for="index in 8" :title="'健康保健 ' + index" :key="index">
          <ImgDesList />
        </van-tab>
      </van-tabs>
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

export default {
  components: {
    HeaderBar,
    SwiperBanner,
    SwiperMallNav,
    SectionTitle,
    ImgDesList,
    DesList,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.banner {
  padding: 20px 30px;
  height: 260px;

  img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }
}
</style>

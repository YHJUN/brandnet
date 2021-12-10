<template>
  <div>
    <section class="top">
      <!--顶部-->
      <div class="topbar flex-sb">
        <div>排行榜</div>
        <div class="search"><van-icon name="search" /></div>
      </div>
      <!--导航-->
      <div class="tabs flex-sa">
        <div class="current">排行榜</div>
        <div>品牌分类</div>
        <div >知识分类</div>
      </div>
    </section>
    <!--知识榜--> 
    <section class=""></section>
    <!--品牌榜-->
    <section class=""></section>
    <!--网购榜-->
    <section class=""></section>
    <!--招商榜-->
    <section class=""></section>
    <!--趣闻榜-->
    <section class=""></section>
    <RankList />
  </div>
</template>

<script>
import RankList from "@/components/RankList.vue";
import { Icon } from "vant";
export default {
  components: {
    [Icon.name]: Icon,
    RankList,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.top {
  background: #594dae;
  .topbar {
    height: 75px;
    padding: 0 20px;
    color: #fff;
    font-size: 32px;
    .search {
      font-size: 50px;
    }
  }
}
.tabs {
  color: #e5e03e;
  font-size: 28px;
  line-height: 65px;
  .current {
    color: #fff;
    font-size: 32px;
    font-weight: bold;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: 5px;
      height: 5px;
      background: #fff;
      width: 40px;
      left: 50%;
      transform: translateX(-20px);
    }
  }
}
</style>
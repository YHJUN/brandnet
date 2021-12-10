<template>
  <section class="top">
    <!--顶部-->
    <div class="topbar flex-sb">
      <div>知识分类</div>
      <div class="search"><van-icon name="search" /></div>
    </div>
    <!--导航-->
    <div class="tabs flex-sa">
      <div>排行榜</div>
      <div>品牌分类</div>
      <div class="current">知识分类</div>
    </div>
  </section>
</template>

<script>
import { Icon } from "vant";
export default {
  components: {
    [Icon.name]: Icon,
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
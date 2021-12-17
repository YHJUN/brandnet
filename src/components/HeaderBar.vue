<template>
  <div class="header-bar">
    <div class="topbar flex-sb">
      <div class="flex-fs">
        <van-icon class="icon" name="arrow-left" />
        <div class="htitle">知识大学堂</div>
      </div>
      <div class="flex-fs">
        <van-icon class="icon" name="search" />
        <van-icon class="icon" name="apps-o" />
        <van-icon class="icon" name="bars" />
      </div>
    </div>
    <!--顶部logo-->
    <div class="navbar">
      <van-tabs class="home-navbar-tabs">
        <van-tab
          v-for="(item, index) in navbar"
          :title="item.name"
          :key="index"
        >
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { Tab, Tabs, Icon } from "vant";
export default {
  data() {
    return {
      navbar: [
        {
          name: "首页",
          url: "",
        },
        {
          name: "知识",
          url: "",
        },
        {
          name: "网店",
          url: "",
        },
        {
          name: "产品",
          url: "",
        },
        {
          name: "品牌招商",
          url: "",
        },
        {
          name: "投票",
          url: "",
        },
        {
          name: "聚焦",
          url: "",
        },
        {
          name: "展会",
          url: "",
        },
        {
          name: "名人",
          url: "",
        },
        {
          name: "趣闻",
          url: "",
        },
        {
          name: "网点",
          url: "",
        },
        {
          name: "美图",
          url: "",
        },
        {
          name: "百科",
          url: "",
        },
      ],
    };
  },
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Icon.name]: Icon,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.header-bar {
  padding-bottom: 10px;
  background: linear-gradient(to bottom, rgba(65,58,161,1),rgba(65,58,161,0.8),rgba(65,58,161,0.5) , rgba(65,58,161,0));
  .topbar {
    padding-left: 30px;
    padding-right: 20px;
    height: 85px;
    .icon {
      color: #fff;
      margin-right: 10px;
      font-size: 50px;
    }
    .htitle {
      color: #fff;
      font-size: 36px;
    }
  }
}
</style>
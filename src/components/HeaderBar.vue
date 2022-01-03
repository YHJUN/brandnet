<template>
  <div class="header-bar">
    <div class="topbar flex-sb">
      <div class="flex-fs">
        <van-icon class="icon" name="arrow-left" /> 
        <div class="htitle">{{headerData.title}}</div>
      </div>
      <div class="flex-fs">
        <van-icon class="icon" name="search" />
        <van-icon class="icon" name="apps-o" />
        <van-icon class="icon" name="bars" />
      </div>
    </div>
    <!--顶部logo--> 
    <div class="navbar">
      <van-tabs class="home-navbar-tabs" :active="headerData.active">
        <van-tab
          v-for="(item, index) in navbar"
          :title="item.name"
          :key="index"
          :url="item.url"
        >
        </van-tab>
      </van-tabs>
    </div> 
  </div>
</template>

<script>
import { Tab, Tabs, Icon } from "vant";
export default {
  props: ['headerData'],
  data() {
    return {
      navbar: [
        {
          name: "首页",
          url: "/",
        },
        {
          name: "知识",
          url: "/knowledge",
        },
        {
          name: "网店",
          url: "/onlineStore",
        },
        {
          name: "产品", 
          url: "/product",
        },
        {
          name: "品牌招商",
          url: "/brandMerchants",
        },
        {
          name: "投票",
          url: "/vote",
        },
        {
          name: "聚焦",
          url: "/focus",
        },
        {
          name: "展会",
          url: "/exhibition",
        },
        {
          name: "名人",
          url: "/celebrity",
        },
        {
          name: "趣闻",
          url: "/anecdote",
        },
        {
          name: "网点",
          url: "/network",
        },
        {
          name: "美图",
          url: "/gallery",
        },
        {
          name: "百科",
          url: "/encyclopedias",
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
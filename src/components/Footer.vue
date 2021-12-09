<template>
  <footer>
    <van-tabbar v-model="active" active-color="#37408d" inactive-color="#666">
      <van-tabbar-item replace to="/" icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item replace to="/knowledgeClassification" icon="column"
        >知识分类</van-tabbar-item
      >
      <van-tabbar-item replace to="/brandClassification" icon="gem"
        >品牌分类</van-tabbar-item
      >
      <van-tabbar-item replace to="/rankList" icon="bar-chart-o"
        >排行榜</van-tabbar-item
      >
      <van-tabbar-item replace to="/user" icon="manager">我的</van-tabbar-item>
    </van-tabbar>
  </footer>
</template> 
<script>
import { Tabbar, TabbarItem } from "vant";
import { ref } from "vue";
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  setup() {
    const active = ref(0);
    return { active };
  },
};
</script>


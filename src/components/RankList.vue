<template>
    <div class="rank-list">
      <ul>
        <li v-for="index in 8" :key="index">
          <div class="name">网购榜</div>
          <div class="sub-name">网店排名</div>
          <div class="icon"><van-icon name="bag" /></div>
        </li>
      </ul>
    </div>
</template> 
<script>
import RankList from "@/components/RankList.vue";
import { Icon } from "vant";
export default {

  components: {
    [Icon.name]: Icon,
    RankList
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.rank-list {
  padding-top: 20px;
  ul {
    overflow: hidden;
    li {
      background: lightblue;
      float: left;
      width: 160px;
      border-radius: 15px;
      height: 220px;
      color: #fff;
      margin: 10px 0;
      margin-left: 22px;
      .name {
        padding-top: 20px;
        padding-bottom: 10px;
        font-weight: bold;
        font-size: 36px;
      }
      .sub-name {
        font-size: 32px;
      }
      .icon {
        font-size: 80px;
      }
    }
  }
}

</style>

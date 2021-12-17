<template>
  <div class="list2">
    <div class="top-bar flex-sb">
      热点聚焦
      <span>更多&gt;</span>
    </div>
    <div class="img"><img src="@assets/images/nimg.png" alt="" /></div>
    <ul>
      <li v-for="index in 5" :key="index">
        中国十大排名 中国最著名盘点 那种可能成为中国国画
      </li>
    </ul>
  </div>
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
.list2 {
  box-sizing: border-box;
  float: left;
  width: 365px;
  padding-left: 25px;
  margin-top: 40px;
  color: #535ca7;
  .top-bar {
    font-size: 48px;

    span {
      font-size: 28px;
    }
  }
  .img {
    margin-top: 20px;
    margin-bottom: 10px;
    img {
      height: 215px;
      width: 340px;
      border-radius: 15px;
    }
  }
  li {
    font-size: 32px;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    border-bottom: 1px solid #eee;
    line-height: 60px;
    padding: 10px 0;
  }
}
</style>
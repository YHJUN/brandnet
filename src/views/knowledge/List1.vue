<template>
  <div class="list1">
    <ul>
      <li class="flex-fs" v-for="index in 5" :key="index">
        <div class="img"><img src="@assets/images/nimg.png" alt="" /></div>
        <div class="des">
          <div class="title">中国十大排名 中国最著名盘点</div>
          <div class="sub-title">
            中国十大排名 中国最著名盘点 那种可能成为中国国画
          </div>
        </div>
        <div class="arrow"><van-icon name="arrow" /></div>
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
.list1 {
  padding: 0 25px;
  li {
    border-bottom: 1px solid #eee;
    padding: 20px 0;
    .img {
      margin-right: 15px;
      img {
        width: 200px;
        height: 125px;
        border-radius: 15px;
      }
    }
    .des {
      line-height: 50px;
      .title {
        font-size: 32px;
        color: #42489a;
      }
      .sub-title {
        font-size: 28px;
        color: #999;
        text-align: left;
      }
    }
    .arrow {
      color: #999;
      font-size: 40px;
    }
  }
}
</style>
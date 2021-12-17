<template>
  <div class="des-list">
    <ul>
      <li v-for="index in 5" :key="index" class="flex-sb">
        <div class="title flex-fs">
          <div class="num">{{ index }}</div>
          中国十大排名 中国最著名盘点 那种可能成为中国国画
        </div>
        <div class="view flex-fs">
          <van-icon class="icon" name="eye-o" /> {{ index }}w
        </div>
      </li>
      <li class="flex-sb">
        <div class="title flex-fs">
          <div class="num">6</div>
          中国十大排名 中国最著名盘点
        </div>
        <div class="view flex-fs">
          <van-icon class="icon" name="eye-o" /> 5w
        </div>
      </li>
    </ul>
    <div class="more-btn"><van-icon name="more-o" /> 更多</div>
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
.des-list {
  ul {
    li {
        border-bottom: 1px solid #eee;
        padding: 15px 0;
      .title {
        font-size: 32px;
        text-align: left;
        line-height: 60px;
        color: #434871;
        padding-right: 20px;
        .num {
          text-align: center;
          padding-left: 25px;
          padding-right: 25px;
          font-weight: bold;
          font-size: 40px;
          font-style: italic;
          color: #e6e6e6;
        }
      }
      &:nth-child(1) .title .num {
        color: #ff6b0a;
      }
      &:nth-child(2) .title .num {
        color: #f3b618;
      }
      &:nth-child(3) .title .num {
        color: #fbda10;
      }
      .view {
        padding-right: 15px;
        font-size: 28px;
        color: #666;
        .icon {
          font-size: 40px;
        }
      }
    }
  }
  .more-btn {
    margin: 20px auto;
    color: #333;
    font-size: 28px;
    height: 65px;
    width: 300px;
    border-radius: 50px;
    text-align: center;
    line-height: 65px;
    background: #fedc00;
  }
}
</style>
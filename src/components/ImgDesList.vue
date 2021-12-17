<template>
  <div class="img-des-list">
    <ul>
      <li v-for="index in 5" :key="index">
        <div class="content">
          <div class="title">
            中国十大排名 中国最著名盘点 那种可能成为中国国画
          </div>
          <div class="info flex-sb">
            <div class="label">
              <span class="original">原创</span>
              <span>财务</span>
            </div>
            <div class="view"><van-icon name="eye-o" /> 5w</div>
          </div>
        </div>
        <div class="img flex-m">
          <img src="@images/nimg.png" alt="" />
        </div>
      </li>
    </ul>
    <div class="more-btn"> <van-icon name="more-o" /> 加载更多</div>
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
.img-des-list {
  ul {
    li {
      overflow: hidden;
      padding: 20px;
      border-bottom: 1px solid #eee;
      .content {
        float: left;
        width: 440px;
        .title {
          font-size: 32px;
          text-align: left;
          margin-bottom: 20px;
          padding-top: 5px;
          word-break: break-all;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .info {
          span {
            display: inline-block;
            margin-right: 10px;
            border: 1px solid #eee;
            padding: 5px;
            color: #999;
            font-size: 24px;
          }
          .original {
            border: 0;
            color: #484b9b;
            background: #e7e7f3;
          }
        }
        .view {
          font-size: 24px;
          color: #999;
        }
      }
      .img {
        float: right;
        width: 255px;
        overflow: hidden;
        height: 160px;
        img {
          width: 100%;
        }
      }
    }
  }
  .more-btn{
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
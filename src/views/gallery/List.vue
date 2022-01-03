<template>
  <div class="section">
      <div class="tabmenu">
          <div class="item current">菜系/中餐</div>
          <div class="item" v-for="index in 7" :key="index">家常菜{{index}}</div>
      </div>
    <div class="img-list">
      <div class="item" v-for="index in 6" :key="index">
        <div class="img">
          <img src="@assets/images/16291949020_320x240.jpg" alt="" />
        </div>
        <div class="text">顶上集成吊顶效果图 健康自然家 邂逅意外惊喜</div>
        <div class="flex-sb text-b">
          集成吊咀
          <div class="flex-sb"><van-icon size="20" name="eye-o" /> 5100</div>
        </div>
      </div>
    </div>
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
.section{
    padding-bottom: 30px;
}
.tabmenu{
    overflow: hidden;
    text-align: center;
    padding:20px 0;
    .item{
    padding:0 20px;
    display: inline-block;
    text-align: center;
    margin: 10px;
    line-height: 60px;
    border: 1px solid rgba(85, 91, 167, 0.2);
    border-radius: 30px;
    &.current{
        color: #fff;
        background: #555ba6;
    }
    }
}
.img-list {
  overflow: hidden;
  padding: 0 10px 30px;
  .item {
    width: calc(50% - 20px);
    float: left;
    margin: 10px;
    border-radius: 10px;
    padding-bottom: 10px;
    box-shadow: 0 0 20px #eee;
    overflow: hidden;
    .img {
      height: 340px;
      width: 100%;
      overflow: hidden;
      img {
        width: 100%;
        min-height: 340px;
      }
    }
    .text {
      color: #555ba6;
      text-align: left;
      padding: 0 10px;
      margin-top: 20px;
    }
    .text-b {
      div {
        font-size: 20px;
      }
      margin-top: 10px;
      color: #ccc;
      padding: 0 10px 10px;
      font-size: 20px;
    }
  }
}
</style>
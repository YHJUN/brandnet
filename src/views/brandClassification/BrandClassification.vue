<template>
  <div>
    <section>
      <section class="top">
        <!--顶部-->
        <div class="topbar flex-sb">
          <div>品牌分类</div>
          <div class="search"><van-icon name="search" /></div>
        </div>
        <!--导航-->
        <div class="tabs flex-sa">
          <div>排行榜</div>
          <div class="current">品牌分类</div>
          <div>知识分类</div>
        </div>
      </section>
      <section>
        <!--左侧-->
        <div class="left-bar">
          <ul>
            <li class="current">
              <div class="icon flex-m">
                <van-icon name="photo" />
              </div>
              <div class="text">知识百科</div>
            </li>
            <li v-for="index in 15" :key="index">
              <div class="icon flex-m">
                <van-icon name="photo" />
              </div>
              <div class="text">知识百科</div>
            </li>
          </ul>
        </div>
        <!--右侧-->
        <div class="right-content">
          <div v-for="ind in 5" :key="ind">
            <div class="title">品牌分类</div>
            <ul>
              <li v-for="index in 20" :key="index">
                <div class="icon"><van-icon name="photo" /></div>
                <div class="text">美食/饮食</div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
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
.left-bar {
  width: 190px;
  float: left;
  background: #f8f8f8;
  ul {
    height: calc(100vh - 140px);
    padding-bottom: 100px;
    overflow: auto;
    box-sizing: border-box;
    li {
      padding-top: 30px;
      height: 200px;
      text-align: center;
      color: #333;
      font-size: 28px;
      border-bottom: 1px solid #eee;
      box-sizing: border-box;
      .icon {
        margin: 0 auto 10px;

        font-size: 50px;
        color: #fff;
        width: 100px;
        height: 100px;
        background: cornflowerblue;
        border-radius: 50%;
      }
    }
    .current {
      background: #fbec79;
      .icon {
        margin: 0 auto 10px;
        color: #e48c33;
      }
    }
  }
}
.right-content {
  overflow: auto;
  height: calc(100vh - 140px);
  width: 550px;
  float: right;
  padding-bottom: 100px;
  box-sizing: border-box;
  .title {
    padding-top: 30px;
    text-align: center;
    font-size: 32px;
    color: #666;
  }
  ul {
    overflow: hidden;
    li {
      float: left;
      margin-top: 20px;
      text-align: center;
      width: 33.33%;
      .icon {
        font-size: 60px;
        width: 85px;
        margin: 0 auto;
      }
      .text {
        font-size: 28px;
      }
    }
  }
}
</style>
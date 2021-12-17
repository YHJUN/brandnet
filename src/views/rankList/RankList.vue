<template>
  <div>
    <section class="top">
      <!--顶部-->
      <div class="topbar flex-sb">
        <div>排行榜</div>
        <div class="search"><van-icon name="search" /></div>
      </div>
      <!--导航-->
      <div class="tabs flex-sa">
        <div class="current">排行榜</div>
        <div>品牌分类</div>
        <div>知识分类</div>
      </div>
    </section>
    <!--知识榜-->
    <section class="section section1 zhishi flex-sb">
      <div class="left">
        <div class="title">知识榜</div>
        <div class="sub-title">知识课堂</div>
        <div class="icon">
          <van-icon name="invitation" />
        </div>
      </div>
      <div class="right">
        <ul class="text-list">
          <li>1.[石英石知识体系] 石英石十大主题</li>
          <li>2.[石英石知识体系] 石英石十大主题</li>
          <li>3.[石英石知识体系] 石英石十大主题</li>
        </ul>
      </div>
    </section>
    <!--品牌榜-->
    <section class="section brand flex-sb">
      <div class="left">
        <div class="title">品牌榜</div>
        <div class="sub-title">十大品牌</div>
        <div class="icon">
          <van-icon name="invitation" />
        </div>
      </div>
      <div class="right">
        <ul class="brand-list flex-sa">
          <li class="flex-m">
            <img src="@assets/images/brand_logo.png" alt="" />
          </li>
          <li class="flex-m">
            <img src="@assets/images/brand_logo.png" alt="" />
          </li>
          <li class="flex-m">
            <img src="@assets/images/brand_logo.png" alt="" />
          </li>
          
        </ul>
      </div>
    </section>
    <!--网购榜-->
    <section class="section wanggou flex-sb">
      <div class="left">
        <div class="title">网购榜</div>
        <div class="sub-title">网店排行</div>
        <div class="icon">
          <van-icon name="invitation" />
        </div>
      </div>
      <div class="right">
        <ul class="wanggou-list">
          <li v-for="index in 12" :key="index">
            <img src="@assets/images/brand_logo.png" alt="" />
          </li>
        </ul>
      </div>
    </section>
    <!--招商榜-->
    <section class="section zhaoshang flex-sb">
      <div class="left">
        <div class="title">招商榜</div>
        <div class="sub-title">品牌招商</div>
        <div class="icon">
          <van-icon name="invitation" />
        </div>
      </div>

      <div class="right">
        <ul class="list flex-fs">
          <li v-for="index in 3" :key="index">
            <div v-if="index == 2" class="grade">
              <img src="@images/icon/king.png" alt="" />
            </div>
            <div v-if="index == 3" class="grade num">3</div>
            <div v-if="index == 1" class="grade num">2</div>
            <div class="brand-logo">
              <img src="@images/brand_logo.png" alt="" />
            </div>
            <div class="name">韩都衣舍</div>
          </li>
        </ul>
      </div>
    </section>
    <!--趣闻榜-->
    <section class="section section1 quwen flex-sb">
      <div class="left">
        <div class="title">趣闻榜</div>
        <div class="sub-title">生活排行</div>
        <div class="icon">
          <van-icon name="invitation" />
        </div>
      </div>
      <div class="right">
        <ul class="text-list">
          <li>1.[石英石知识体系] 石英石十大主题</li>
          <li>2.[石英石知识体系] 石英石十大主题</li>
          <li>3.[石英石知识体系] 石英石十大主题</li>
        </ul>
      </div>
    </section>
    <RankList />
  </div>
</template>

<script>
import RankList from "@/components/RankList.vue";
import { Icon } from "vant";
export default {
  components: {
    [Icon.name]: Icon,
    RankList,
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

.section {
  margin: 20px 20px 0;
  padding: 0 20px;
  border-radius: 10px;
  height: 250px;
  background: linear-gradient(to right, #287cd6, #57b9ea);

  .left {
    width: 120px;
    color: #fff;
    text-align: center;
    .title {
      font-size: 36px;
    }
    .sub-title {
      font-size: 24px;
    }
    .icon {
      font-size: 100px;
    }
  }
  .right {
    width: 520px;
    .text-list {
      li {
        font-size: 28px;
        background: rgba(255, 255, 255, 0.4);
        color: #fff;
        border-radius: 30px;
        height: 58px;
        line-height: 58px;
        overflow: hidden;
        margin-bottom: 15px;
        &:nth-last-child(1) {
          margin: 0;
        }
      }
    }
  }

  &.brand {
    background: linear-gradient(to right, #f28f4b, #f9c287);
    .brand-list{
      li{
        width: 145px;
        height: 145px;
        text-align: center;
        border-radius: 100px;
        background: #fff;
        img{
          width: 90%;
        }
      }
    }
  }
  &.wanggou {
    background: linear-gradient(to right, #2b557f, #64a3bd);
    .wanggou-list{
      li{
        float: left;
        width: 130px;
        height: 50px;
        overflow: hidden;
        img{
          width: 100%;
        }
      }
    }
  }
  &.zhaoshang {
    background: linear-gradient(to right, #ffaa4f, #ffd18d);
    ul.list {
      font-size: 28px;
      color: #666;
      background: #fff;
      margin-top: 100px;
      padding-bottom: 25px;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      li {
        position: relative;

        &:nth-child(1) {
          img {
            border-top-left-radius: 15px;
          }
        }
        &:nth-child(3) {
          img {
            border-top-right-radius: 15px;
          }
        }
        &:nth-child(2) {
          position: relative;
          top: -30px;
          border: 1px solid #eee;
          border-bottom: 0;
          border-top-left-radius: 15px;
          border-top-right-radius: 15px;
          img {
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
          }
        }
        .grade {
          position: absolute;
          width: 60px;
          top: -55px;
          left: 50%;
          transform: translateX(-25px);
          color: #fff;

          text-align: center;
          &.num {
            top: -30px;
            font-size: 28px;
            height: 40px;
            width: 40px;
            line-height: 40px;
            background: #fdb815;
            border-radius: 50%;
            border: 3px solid #ffd686;
          }
        }
        img {
          width: 100%;
        }

        width: 33.33%;
      }
    }
  }
  &.quwen {
    background: linear-gradient(to right, #fe9494, #ffc5c4);
  }
}
</style>
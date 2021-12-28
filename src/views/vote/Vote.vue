<template>
  <div>
    <section>
      <HeaderBar
        :header-data="{
          title: '投票',
          active: 5,
        }"
      />
      <section class="vote-content">
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
          <div class="tabmenubox flex-sa">
            <div class="item">得票最多</div>
            <div class="item">得票上升</div>
            <div class="item">得票下降</div>
          </div>
          <div class="votebang">
            <ul>
              <li class="flex-sa" v-for="index in 20" :key="index">
                <div class="img">
                  <img src="@assets/images/DM_20211226115746_003.png" alt="" />
                </div>
                <div>
                  <div class="title .be0f1b">xx投票榜</div>
                  <div class="vote">12454票</div>
                </div>
                <div class="btn">投票</div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
import { Icon } from "vant";
export default {
  components: {
    [Icon.name]: Icon,
    HeaderBar,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.vote-content{
  height: calc(100vh - 300px);
      overflow: hidden;
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

  padding-bottom: 100px;
  box-sizing: border-box;
  width: 550px;
  float: right;
  .tabmenubox {
    margin-top: 30px;
    .item {
      width: 165px;
    }
  }
  .votebang {
      height: calc(100vh - 400px);
      overflow-y: auto;
    ul {
      li {
        padding: 30px 0px;
        border-bottom: 1px solid #ddd;
        .img {
          width: 140px;
          height: 140px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .vote {
          color: #999;
        }
        .btn {
          border-radius: 5px;
          width: 105px;
          text-align: center;
          color: #fff;
          background: #be0f1b;
          line-height: 55px;
        }
      }
    }
  }
}
}

</style>
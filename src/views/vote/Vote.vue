<template>
  <div>
    <section>
    <HeaderBar
      :header-data="{
        title: '投票',
        active: 5,
      }"
    />
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
    HeaderBar
  },
  setup() {},
};
</script>

<style lang="scss" scoped>


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
  padding-bottom: 100px;
  box-sizing: border-box;
  width: 550px;
  float: right;

}
</style>
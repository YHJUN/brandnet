<template>
  <section class="swiper-mall-nav">
    <van-swipe class="my-swipe" :show-indicators="false">
      <van-swipe-item v-for="index in 2" :key="index">
        <div class="mall-nav">
          <div
            class="mall-nav-item"
            :class="'col' + data.col"
            v-for="ind in 10"
            :key="ind"
          >
            <div class="icon">
              <img src="@assets/images/icon.png" alt="" />
            </div>
            <div class="text">知识分类 </div>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
  </section>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
export default {
  props: ["data"],
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  setup() {},
};
</script>


<style lang="scss" scoped>
.swiper-mall-nav {
  .mall-nav {
    margin-top: 20px;
    margin-bottom: 40px;
    overflow: hidden;
    .mall-nav-item {
      margin-top: 20px;
      float: left;

      text-align: center;
      &.col5 {
        width: 20%;
      }
      &.col4 {
        width: 25%;
      }
      .icon {
        margin-bottom: 10px;
        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }
      }
      .text {
        font-size: 30px;
      }
    }
  }
}
</style>
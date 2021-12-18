<template>
  <section class="swiper-banner">
    <van-swipe class="my-swipe" :show-indicators="false">
      <van-swipe-item v-for="index in 2" :key="index">
        <div class="img">
          <img src="@assets/images/nimg.png" alt="" />
        </div>
        <div class="text" v-if="swiperBannerData.textTrue">
          各地贯彻十九届六中全会精神纪实各地贯彻十九届六中全会精神纪实各地贯彻十九届六中全会精神纪实
        </div>
      </van-swipe-item>
      \
    </van-swipe>
  </section>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
export default {
  props: ["swiperBannerData"],
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  setup() {},
};
</script>


<style lang="scss" scoped>
.swiper-banner {
  margin: 0 20px;
  height: 210px;
  border-radius: 20px;
  overflow: hidden;
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 210px;
    text-align: center;
    background-color: #39a9ed;
    position: relative;
    .img {
      img {
        width: 100%;
        height: 210px;
      }
    }
    .text {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 60px;
      line-height: 60px;
      background: rgba($color: #000000, $alpha: 0.5);
      overflow: hidden;
      width: 100%;
      text-overflow: ellipsis;
    }
  }
}
</style>
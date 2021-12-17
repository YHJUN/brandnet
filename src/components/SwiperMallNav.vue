<template>
  <section class="swiper-mall-nav">
    <van-swipe class="my-swipe" :show-indicators=false  >
      <van-swipe-item>
          <div class="mall-nav">
              <div class="mall-nav-item" v-for="index in 10" :key="index">
                  <div class="icon"><img src="@assets/images/icon.png" alt=""></div>
                  <div class="text">知识分类</div>
              </div>
          </div>
      </van-swipe-item>
      <van-swipe-item>
          <div class="mall-nav">
              <div class="mall-nav-item" v-for="index in 7" :key="index">
                  <div class="icon"><img src="@assets/images/icon.png" alt=""></div>
                  <div class="text">知识分类</div>
              </div>
          </div> 
      </van-swipe-item>

    </van-swipe>
  </section>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem, 
  },
  setup() {},
};
</script>


<style lang="scss" scoped>
.swiper-mall-nav {
    .mall-nav{
        margin-top: 20px;
        margin-bottom: 40px;
        overflow: hidden;
        .mall-nav-item{
            margin-top: 20px;
            float: left;
            width: 20%;
            text-align: center;
            .icon{
                margin-bottom: 10px;
                img{
                    width: 90px;
                    height: 90px;
                    border-radius: 50%;
                }
            }
            .text{
                font-size: 30px;
            }
        }
    }
}
</style>
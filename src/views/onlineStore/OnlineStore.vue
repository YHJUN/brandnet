<template>
  <div class="onlineStore">
    <HeaderBar
      :header-data="{
        title: '网店',
        active: 2,
      }"
    />
    <div class="navlist">
      <ul>
        <li>
          <div class="icon"><img src="@assets/images/icon.png" alt="" /></div>
          <div class="text">大牌风暴</div>
        </li>
        <li>
          <div class="icon"><img src="@assets/images/icon.png" alt="" /></div>
          <div class="text">特色主题</div>
        </li>
        <li>
          <div class="icon"><img src="@assets/images/icon.png" alt="" /></div>
          <div class="text">全球名店</div>
        </li>
        <li>
          <div class="icon"><img src="@assets/images/icon.png" alt="" /></div>
          <div class="text">网店排行榜</div>
        </li>
      </ul>
    </div>
    <div class="articlescroll flex-sa">
      <div class="left">
        <img src="@assets/images/xuangoubg.png" alt="" />
      </div>
      <div class="itemscroll">
        <ul>
          <li v-for="index in 10" :key="index">
            好看不贵的女包网店排行榜 不剁手也能很时髦【发现好店】
          </li>
        </ul>
      </div>
      <div class="right">更多</div>
    </div>
    <!--大牌活动-->
    <div class="bt20">
      <SectionTitle :data="{ title: '大牌活动' }" />
      <div class="webshoptemai-big">
        <ul>
          <li v-for="index in 2" :key="index">
            <div class="img">
              <img
                src="@assets/images/18185920289_940x580.jpg_285_176.jpg"
                alt=""
              />
            </div>
            <div class="title">SK-II自营旗舰店</div>
            <div class="tips">SK-II年终盛典 高享652元8件礼</div>
          </li>
        </ul>
      </div>
      <div class="webshoptemai">
        <ul>
          <li v-for="index in 4" :key="index">
            <div class="img">
              <img
                src="@assets/images/18185920289_940x580.jpg_285_176.jpg"
                alt=""
              />
            </div>
            <div class="title">母婴奶粉专场 部分低至54元</div>
            <div class="tips">母婴奶粉专场 部分低至54元</div>
          </li>
        </ul>
      </div>
      <div class="more-btn"><van-icon name="more-o" /> 更多</div>
    </div>

    <!--主题推荐-->
    <div class="bt20 recommend">
      <div class="title-1">
        <div class="title flex-sb">
          主题推荐
          <div class="more">更多 <van-icon name="arrow" /></div>
        </div>
      </div>
      <div class="category1">
        <ul>
          <li v-for="index in 10" :key="index">
            <div class="icon"><img src="@assets/images/icon.png" alt="" /></div>
            <div class="text">当季热销</div>
          </li>
        </ul>
      </div>
      <div class="category2">
        <ul>
          <li v-for="index in 6" :key="index">
            <div class="text">当季热销</div>
            <div class="icon">
              <img src="@assets/images/phone.jpg" alt="" />
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!--全球名店-->
    <div class="bt20 world-famous">
      <SectionTitle :data="{ title: '全球名店' }" />
      <div class="nav">
        <ul>
          <li v-for="index in 10" :key="index">
            <div class="icon">
              <img src="@assets/images/phone.jpg" alt="" />
            </div>
            <div class="text">美国</div>
          </li>
        </ul>
      </div>
    </div>
    <!--网购品牌-->
    <div class="bt20 online-brand">
      <div class="title-1">
        <div class="title flex-sb">
          主题推荐
          <div class="more">更多 <van-icon name="arrow" /></div>
        </div>
      </div>
      <div class="tabmenubox-more tabmenubox">
        <div class="current">购物中心</div>
        <div v-for="index in 10" :key="index">百货超市</div>
      </div>
      <div class="swipecont">
        <ul>
          <li v-for="index in 12" :key="index">
            <div class="img">
              <img src="@assets/images/brand_logo.png" alt="" />
            </div>
            <div class="text">海尔</div>
          </li>
        </ul>
      </div>
    </div>
    <!--热门网店排行榜-->
    <div class="bt20 hangyebang">
      <SectionTitle :data="{ title: '热门网店排行榜' }" />
      <div class="tabmenubox-more tabmenubox">
        <div class="current">网店TOP榜</div>
        <div>京东自营榜</div>
        <div>网店关注榜</div>
      </div>
      <div class="webshopcol">
        <ul>
          <li v-for="index in 5" :key="index">
            <div class="img">
              <img
                src="@assets/images/18185920289_940x580.jpg_285_176.jpg"
                alt=""
              />
            </div>
            <div class="right">
              <div class="title">美的旗舰店</div>
              <div class="info">网店类型 <span>品牌旗航店</span></div>
              <div class="info">关注指数 24511</div>
              <div class="href">进店逛一逛&gt;</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="more-btn"><van-icon name="more-o" /> 换一批</div>
    </div>
    <!--行业榜-->
    <div class="bt20 hangyebang">
      <SectionTitle :data="{ title: '精选网店主题榜' }" />
      <van-tabs v-model:active="active" :before-change="beforeChange">
        <van-tab title="精彩推荐">
          <ImgDesList />
        </van-tab>
        <van-tab title="网购榜">
          <ImgDesList />
        </van-tab>
      </van-tabs>
    </div>
    <div class="bt20 clearf"></div>
  </div>
</template> 
<script>
import HeaderBar from "@/components/HeaderBar.vue";
import SwiperBanner from "@/components/SwiperBanner.vue";
import SwiperMallNav from "@/components/SwiperMallNav.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import { Tab, Tabs, Icon } from "vant";
import ImgDesList from "@/components/ImgDesList.vue";

export default {
  components: {
    HeaderBar,
    SwiperBanner,
    SwiperMallNav,
    SectionTitle,
    ImgDesList,

    [Tab.name]: Tab,
    [Icon.name]: Icon,
    [Tabs.name]: Tabs,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.onlineStore {
  .navlist {
    ul {
      overflow: hidden;
      li {
        float: left;
        width: 25%;
        .icon {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin: 5px auto;
          img {
            width: 100%;
          }
        }
      }
    }
  }

  .webshoptemai-big {
    ul {
      overflow: hidden;
      padding: 0 10px;
      li {
        float: left;
        border: 1px solid #eee;
        width: 47%;
        text-align: center;
        margin: 0 1%;
        padding-bottom: 30px;
        .img {
          height: 215px;
          img {
            width: 100%;
            height: 215px;
          }
        }
        .title {
          font-size: 28px;
          margin: 10px 0;
        }
        .tips {
          font-size: 24px;
          color: #f3344c;
        }
      }
    }
  }
  .webshoptemai {
    margin: 20px 0 40px;
    padding: 0 15px;
    ul {
      overflow: hidden;
      li {
        float: left;
        width: 23%;
        margin: 0 1%;
        text-align: center;

        .img {
          margin-bottom: 5px;
          img {
            width: 100%;
          }
        }
        .title {
          color: #be0f1b;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          padding: 0 10px;
          font-size: 24px;
        }
        .tips {
          color: #f3344c;
          word-break: break-all;
          display: -webkit-box;
          font-size: 24px;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;

          padding: 0 10px;
        }
      }
    }
  }

  .recommend {
    .category1 {
      ul {
        margin-left: 20px;
        overflow: hidden;
        li {
          text-align: center;
          width: 142px;
          float: left;
          margin-bottom: 10px;
          .icon {
            margin: 0 auto;
            width: 100px;
            height: 100px;
            margin-bottom: 5px;
            img {
              width: 100%;
            }
          }
        }
      }
    }
    .category2 {
      padding: 20px 0;
      ul {
        overflow: hidden;
        li {
          float: left;
          width: 220px;
          border-radius: 5px;
          background: #f8e7e8;
          color: #333;
          margin: 15px;
          .text {
            padding-top: 10px;
          }
          .icon {
            width: 150px;
            height: 150px;
            margin: 0 auto;
            img {
              width: 100%;
            }
          }
        }
      }
    }
  }
  .world-famous {
    .nav {
      padding-left: 20px;
      padding-bottom: 20px;
      ul {
        overflow: hidden;
        li {
          width: 122px;
          height: 120px;
          border-radius: 10px;
          float: left;
          background: #eee;
          text-align: center;
          color: #fff;
          margin: 10px;
          .icon {
            width: 50px;
            height: 50px;
            margin: 0 auto;
            background: #ccc;
            border-radius: 50%;
            overflow: hidden;
            margin-top: 20px;
            img {
              width: 100%;
            }
          }
        }
      }
    }
  }
  .online-brand {
    .swipecont {
      padding-bottom: 40px;

      ul {
        overflow: hidden;
        padding-top: 10px;
        li {
          text-align: center;
          width: 25%;
          margin-bottom: 10px;
          float: left;
          .img {
            margin: 0 auto;
            width: 160px;
            height: 70px;
            margin-bottom: 5px;
            img {
              width: 100%;
            }
          }
          .text {
            font-size: 24px;
            color: #be0f1b;
          }
        }
      }
    }
  }
  .webshopcol {
    padding: 0 30px;
    ul {
      li {
        padding: 20px 0;
        border-bottom: solid 1px #ddd;
        overflow: hidden;
        .img {
          float: left;
          height: 186px;
          margin-right: 15px;
          width: 290px;
          img {
            width: 100%;
            height: 186px;
          }
        }
        .right {
          text-align: left;
          float: left;
          .title {
            font-size: 32px;
            color: #000;
            margin-bottom: 5px;
          }
          .info {
            color: #999;
            margin-bottom: 5px;
            span {
              color: #f23030;
            }
          }
          .href {
            font-size: 24px;
            margin-top: 5px;
            display: inline-block;
            padding: 3px 20px 5px;
            border: solid 1px #f23030;
            border-radius: 30px;
            color: #f23030;
          }
        }
      }
    }
  }
}
</style>

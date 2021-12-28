<template>
  <div class="product">
    <HeaderBar
      :header-data="{
        title: '产品',
        active: 3,
      }"
    />
    <Navlist :data="{ col: 4, list: 8 }" />

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
    <!--产品活动-->
    <div class="bt20 product-active blockinfo">
      <div class="title-1">
        <div class="title flex-sb">
          产品活动
          <div class="more">更多 <van-icon name="arrow" /></div>
        </div>
      </div>

      <ul>
        <li v-for="index in 4" :key="index">
          <div class="img">
            <img
              src="@assets/images/18185920289_940x580.jpg_285_176.jpg"
              alt=""
            />
          </div>
          <div class="price orange">￥369</div>
          <div class="discount">￥999</div>
        </li>
      </ul>
    </div>

    <!--店铺活动-->
    <div class="bt20">
      <SectionTitle :data="{ title: '店铺活动' }" />

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
    </div>

    <!--特色专区-->
    <div class="bt20 special-zone">
      <SectionTitle :data="{ title: '特色专区' }" />
      <div class="category">
        <ul>
          <li v-for="index in 8" :key="index">
            <div class="icon"><img src="@assets/images/icon.png" alt="" /></div>
            <div class="text">女生馆</div>
          </li>
        </ul>
      </div>
    </div>

    <!--品牌馆-->
    <div class="bt20 online-brand">
      <SectionTitle :data="{ title: '品牌馆' }" />

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
      <div class="more-btn"><van-icon name="more-o" /> 更多</div>
    </div>
    <!--热门产品排行榜-->
    <div class="bt20 product-ranking">
      <SectionTitle :data="{ title: '热门产品排行榜' }" />
      <div class="tabmenubox-more tabmenubox">
        <div class="current">购物中心</div>
        <div v-for="index in 10" :key="index">百货超市</div>
      </div>
      <div class="tabcont">
        <ul>
          <li v-for="index in 4" :key="index">
            <div class="img">
              <img
                src="@assets/images/18185920289_940x580.jpg_285_176.jpg"
                alt=""
              />
            </div>
            <div class="right">
              <div class="title">
                <span :class="'num' + index">{{ index }}</span>
                HLA/海澜之家侯明昊/许魏洲同款极光鹅绒羽绒服连帽加厚外套男冬
              </div>
              <div class="flex-sb">
                <div class="price">￥688</div>
                <div class="store">
                  <van-icon class="cart" name="cart" />
                  太平鸟旗航店
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="more-btn"><van-icon name="more-o" /> 换一批</div>
    </div>
    <!--选购栏目-->
    <div class="bt20 hangyebang">
      <SectionTitle :data="{ title: '选购栏目' }" />
      <ImgDesList />
    </div>
    <!---->
    <div class="bt20 procatlist" v-for="index in 5" :key="index">
      <div class="title-1">
        <div class="title flex-sb">
          家装成
          <div class="more">更多 <van-icon name="arrow" /></div>
        </div>
      </div>
      <div class="img-item-list">
        <div class="item" v-for="index in 3" :key="index">
          <div class="title">地面材料</div>
          <div class="stitle">家装必备</div>
          <div class="icon"><van-icon color="#be0f1b" name="arrow" /></div>
          <div class="img"><img src="@assets/images/phone.jpg" alt="" /></div>
        </div>
      </div>
      <div class="text-item-list flex-sa">
        <div class="item" v-for="index in 4" :key="index">门窗/楼梯</div>
      </div>
    </div>
    <!--产品推荐-->
    <div class="bt20 product-recommendation">
      <SectionTitle :data="{ title: '产品推荐' }" />
      <div class="tabmenubox-more tabmenubox">
        <div class="current">综合榜</div>
        <div v-for="index in 10" :key="index">热销榜</div>
      </div>
      <div class="item-list">
        <ul>
          <li v-for="index in 4" :key="index">
            <div class="img">
              <img
                src="@assets/images/18185920289_940x580.jpg_285_176.jpg"
                alt=""
              />
            </div>
            <div class="right">
              <div class="title">
                <span :class="'num' + index">{{ index }}</span>
                HLA/海澜之家侯明昊/许魏洲同款极光鹅绒羽绒服连帽加厚外套男冬
              </div>
              <div class="flex-sb">
                <div class="price">￥688</div>
                <div class="sale">月销:200+</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
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
import Navlist from "@/components/Navlist.vue";

export default {
  components: {
    HeaderBar,
    SwiperBanner,
    SwiperMallNav,
    SectionTitle,
    ImgDesList,
    Navlist,

    [Tab.name]: Tab,
    [Icon.name]: Icon,
    [Tabs.name]: Tabs,
  },
  data() {
    return {
      navlist: [
        {
          name: "网购榜",
          url: "/",
        },
        {
          name: "好货榜",
          url: "/knowledge",
        },
        {
          name: "好店榜",
          url: "/",
        },
        {
          name: "海淘榜",
          url: "/",
        },
        {
          name: "网购行业",
          url: "/",
        },
        {
          name: "购物百科",
          url: "/knowledge",
        },
        {
          name: "售后网点",
          url: "/",
        },
        {
          name: "美图美库",
          url: "/",
        },
      ],
    };
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.product {
  .product-active {
    ul {
      padding-bottom: 20px;
      overflow: hidden;
      li {
        width: 25%;
        float: left;
        text-align: center;
        .img {
          width: 150px;
          margin: 0 auto;
          height: 150px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .price {
          font-size: 32px;
          font-weight: bold;
        }
        .discount {
          text-decoration: line-through;
          color: #999;
          font-size: 24px;
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

  .special-zone {
    .category {
      padding-bottom: 20px;
      ul {
        overflow: hidden;
        li {
          text-align: center;
          width: 25%;
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
  }
  .online-brand {
    .swipecont {
      padding-bottom: 20px;

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
  .product-ranking {
    .tabcont {
      padding: 20px 30px;
      li {
        border-bottom: 1px solid #eee;
        padding-bottom: 30px;
        margin-bottom: 30px;
        overflow: hidden;
        .img {
          float: left;
          width: 200px;
          height: 200px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .right {
          text-align: left;
          width: 460px;
          float: right;
          .title {
            margin-bottom: 15px;
            font-size: 32px;
            span {
              display: inline-block;
              min-width: 36px;
              text-align: center;
              font-size: 28px;
              height: 36px;
              line-height: 36px;
              background: #ccc;
              border-radius: 5px;
              color: #fff;
              &.num1 {
                background: #fe741c;
              }
              &.num2 {
                background: #fdb80c;
              }
              &.num3 {
                background: #ffdc00;
              }
            }
          }
          .price {
            color: #f12828;
            font-size: 32px;
            font-weight: bold;
          }
          .store {
            .cart {
              font-size: 35px;
            }
            color: #be0f1b;
            font-size: 28px;
          }
        }
      }
    }
  }
  .procatlist {
    overflow: hidden;
    .img-item-list {
      overflow: hidden;
      .item {
        margin-left: 22px;
        position: relative;
        width: 220px;
        height: 220px;
        text-align: left;
        float: left;
        padding: 15px 10px 10px 20px;
        background-color: #eff4fa;
        border-radius: 10px;
        box-sizing: border-box;
        .title {
          color: #be0f1b;
          font-size: 32px;
          margin-bottom: 5px;
        }
        .stitle {
          font-size: 28px;
          color: #999;
        }
        .img {
          position: absolute;
          bottom: 10px;
          right: 10px;
          img {
            width: 100px;
            height: 100px;
          }
        }
      }
    }
    .text-item-list {
      margin: 20px 0;
      overflow: hidden;
      text-align: center;
      .item {
        font-size: 28px;
        float: left;
        border-radius: 30px;
        padding: 5px 15px;
        border: solid 1px #ddd;
        text-align: center;
      }
    }
  }
  .product-recommendation {
    .item-list {
      overflow: hidden;
      li {
        float: left;
        width: 332px;
        border: 1px solid #eee;
        padding: 20px;
        overflow: hidden;

        margin-bottom: 20px;
        margin-left: 28px;

        box-sizing: border-box;
        .img {
          width: 292px;
          height: 292px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .title {
          color: #333;
          margin: 10px 0;
          font-size: 28px;
          word-break: break-all;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          span {
            display: inline-block;
            min-width: 36px;
            text-align: center;
            font-size: 28px;
            height: 36px;
            line-height: 36px;
            background: #ccc;
            border-radius: 5px;
            color: #fff;
            &.num1 {
              background: #fe741c;
            }
            &.num2 {
              background: #fdb80c;
            }
            &.num3 {
              background: #ffdc00;
            }
          }
        }
        .price {
          color: #be0f1b;
          font-weight: bold;
          font-size: 36px;
        }
        .sale {
          color: #999;
          font-size: 28px;
        }
      }
    }
  }
}
</style>

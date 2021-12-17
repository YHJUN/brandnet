<template>
  <div>
    <section class="section-bg">
      <!--顶部logo-->
      <div class="topbar flex-sb">
        <div class="logo"><img src="@images/logo.jpg" alt="" /></div>
        <div class="menu">
          <van-icon color="#fff" class="icon" name="bars" />
        </div>
      </div>
      <!--顶部logo-->
      <div class="navbar">
        <van-tabs class="home-navbar-tabs">
          <van-tab
            v-for="(item, index) in navbar"
            :title="item.name"
            :key="index"
          >
          </van-tab>
        </van-tabs>
      </div>
      <!--搜索条-->

      <router-link to="/search" class="search flex-fs">
        <div class="icon"><van-icon color="#666" name="search" /></div>
        搜品牌 搜行业 搜企业 搜知识 搜省市
      </router-link>

      <!--banner-->
      <div class="banner">
        <img src="@images/h_banner.png" alt="" />
      </div>
      <!--品牌分类-->
      <div class="brand-classification">
        <ul>
          <li v-for="index in 11" :key="index">
            <div class="icon flex-m">
              <van-icon name="cluster-o" />
            </div>
            <div class="text">建筑/家具</div>
          </li>
          <li>
            <div class="icon flex-m">
              <van-icon name="cluster-o" />
            </div>
            <div class="text">品牌分类></div>
          </li>
        </ul>
      </div>
      <!--榜单-->
      <div class="bangdan">
        <van-tabs class="navbar-tabs" v-model:active="activeName">
          <van-tab title="投票榜" name="a">
            <div>
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
                  <div class="info"><span>22万</span>票</div>
                  <div class="btn">投票</div>
                </li>
              </ul>
              <div class="other flex-fs" v-for="index in 2" :key="index">
                <div class="num">{{ index + 2 }}</div>
                <div class="brand-logo">
                  <img src="@images/brand_logo.png" alt="" />
                </div>
                <div class="name">韩都衣舍</div>
                <div class="left flex-fs">
                  <div class="info"><span>22万</span>票</div>
                  <div class="icon"><van-icon name="add-o" /></div>
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab title="招商榜" name="b">
            <div>
              <ul class="list flex-fs">
                <li v-for="index in 3" :key="index">
                  <div class="brand-logo">
                    <img src="@images/brand_logo.png" alt="" />
                  </div>
                  <div class="name">招商榜</div>
                  <div class="info"><span>22万</span>票</div>
                  <div class="btn">投票</div>
                </li>
              </ul>
              <div class="other flex-fs" v-for="index in 2" :key="index">
                <div class="num">{{ index + 2 }}</div>
                <div class="brand-logo">
                  <img src="@images/brand_logo.png" alt="" />
                </div>
                <div class="name">招商榜</div>
                <div class="left flex-fs">
                  <div class="info"><span>22万</span>票</div>
                  <div class="icon"><van-icon name="add-o" /></div>
                </div>
              </div></div
          ></van-tab>
          <van-tab title="网购榜" name="c">
            <div>
              <ul class="list flex-fs">
                <li v-for="index in 3" :key="index">
                  <div class="brand-logo">
                    <img src="@images/brand_logo.png" alt="" />
                  </div>
                  <div class="name">网购榜</div>
                  <div class="info"><span>22万</span>票</div>
                  <div class="btn">投票</div>
                </li>
              </ul>
              <div class="other flex-fs" v-for="index in 2" :key="index">
                <div class="num">{{ index + 2 }}</div>
                <div class="brand-logo">
                  <img src="@images/brand_logo.png" alt="" />
                </div>
                <div class="name">网购榜</div>
                <div class="left flex-fs">
                  <div class="info"><span>22万</span>票</div>
                  <div class="icon"><van-icon name="add-o" /></div>
                </div>
              </div></div
          ></van-tab>
        </van-tabs>
        <div class="more"><van-icon name="more-o" /> 更多</div>
      </div>
    </section>
    <!--其他类别-->
    <!-- <div class="other-section">
      <div>
        <ul>
          <li>
            <div class="icon">
              <img src="" alt="" />
            </div>
            <div class="text">建筑/家具</div>
          </li>
        </ul>
      </div>
      <div class="swiper"></div>
    </div> -->
    <!--知识分类-->
    <div class="knowledge-classification">
      <ul>
        <li v-for="index in 19" :key="index">
          <div class="icon">
            <van-icon name="logistics" />
          </div>
          <div class="text">装修/居住</div>
        </li>
        <li>
          <div class="icon">
            <van-icon name="logistics" />
          </div>
          <div class="text">知识分类></div>
        </li>
      </ul>
    </div>
    <!--排行榜-->
    <RankList />
    <!--我的推荐-->
    <div class="recommend">
      <div class="top flex-sb">
        <div class="left">
          <van-icon class="icon" name="bookmark" /> 我的推荐
        </div>
        <div class="more">
          <van-icon class="icon" name="chart-trending-o" /> 更多排行榜
        </div>
      </div>
      <ImgDesList />
    </div>
  </div> 
</template>


<script>
import RankList from "@/components/RankList.vue";
import ImgDesList from "@/components/ImgDesList.vue";
import { Tab, Tabs, Icon } from "vant";
export default {
  data() {
    return {
      navbar: [
        {
          name: "首页",
          url: "",
        },
        {
          name: "知识",
          url: "",
        },
        {
          name: "网店",
          url: "",
        },
        {
          name: "产品",
          url: "",
        },
        {
          name: "品牌招商",
          url: "",
        },
        {
          name: "投票",
          url: "",
        },
        {
          name: "聚焦",
          url: "",
        },
        {
          name: "展会",
          url: "",
        },
        {
          name: "名人",
          url: "",
        },
        {
          name: "趣闻",
          url: "",
        },
        {
          name: "网点",
          url: "",
        },
        {
          name: "美图",
          url: "",
        },
        {
          name: "百科",
          url: "",
        },
      ],
    };
  },
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Icon.name]: Icon,
    RankList,
    ImgDesList,
  },
  setup() {},
};
</script>
 
<style lang="scss" scoped>
.section-bg {
  padding-bottom: 20px;
  background: linear-gradient(to bottom, #514ab1 80%, #fff);
}
.topbar {
  height: 70px;
  .logo {
    img {
      width: 600px;
    }
  }
  .menu {
    font-size: 50px;
  }
}
.search {
  height: 75px;
  margin: 10px 30px;
  border-radius: 50px;
  background: #fff;
  color: #666;
  font-size: 32px;
  .icon {
    font-size: 45px;
    padding-left: 30px;
    padding-right: 20px;
  }
}
.banner {
  text-align: center;
  img {
    width: 100%;
  }
}
.brand-classification {
  font-size: 28px;
  color: #fff;
  text-align: center;

  ul {
    overflow: hidden;
    li {
      width: 25%;
      float: left;
    }
  }
  .icon {
    margin: 10px auto;
    width: 95px;
    height: 95px;
    font-size: 50px;

    border-radius: 50%;
    border: 5px solid #8f88d3;
  }
}
.bangdan {
  .more {
    width: 300px;
    line-height: 70px;
    height: 70px;
    color: #333;
    text-align: center;
    border-radius: 50px;
    margin: 25px auto 0;
    background: #fedc00;
    font-size: 32px;
  }
  margin: 25px 20px;

  .name {
    font-size: 32px;
  }
  .info {
    font-size: 28px;
    margin: 15px 0;
    span {
      color: #f65f01;
    }
  }
  .btn {
    width: 75px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    color: #fff;
    border-radius: 10px;
    margin: 0 auto;
    font-size: 24px;
    background: #514ab1;
  }
  ul.list {
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
  .other {
    background: #fff;
    padding: 30px 0;
    border-top: 1px solid #eee;
    .num {
      width: 80px;
      font-size: 32px;
    }
    .brand-logo {
      width: 160px;
      margin-right: 30px;
      img {
        width: 100%;
      }
    }
    .name {
      font-size: 28px;
      width: 290px;
    }
    .icon {
      margin-left: 10px;
      font-size: 40px;
    }
  }
}
.knowledge-classification {
  padding: 20px 0;
  border-top: 20px solid #f4f4f4;
  border-bottom: 20px solid #f4f4f4;
  ul {
    overflow: hidden;
    li {
      .icon {
        font-size: 50px;
        margin: 10px 0;
      }
      width: 20%;
      float: left;
      font-size: 28px;
      color: #000;
      margin: 10px 0;
    }
  }
}

.recommend {
  margin-bottom: 100px;
  font-size: 32px;
  .top {
    padding: 30px 40px;
    box-shadow: 0 5px 10px #ccc;
    .icon {
      font-size: 40px;
    }
  }

}
</style>
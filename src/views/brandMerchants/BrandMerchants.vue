<template>
  <div class="brandMerchants">
    <HeaderBar
      :header-data="{
        title: '品牌招商',
        active: 4,
      }"
    />
    <SwiperBanner
      :swiperBanner-data="{
        data: {},
        textTrue: false,
      }"
    />
    <SwiperMallNav />
    <div class="bt20bg">
      <div class="jiamengruzhu">
        <div class="item">
          <img src="@assets/images/DM_20211220094132_001.jpg" alt="" />
        </div>
        <div class="item">
          <img src="@assets/images/DM_20211220094132_002.jpg" alt="" />
        </div>
        <div class="item">
          <img src="@assets/images/DM_20211220094132_003.jpg" alt="" />
        </div>
        <div class="item">
          <img src="@assets/images/DM_20211220094132_004.jpg" alt="" />
        </div>
      </div>
      <div class="jiamengdongtai">
        <div class="flex-fs itemscroll">
          <div class="left">
            <div>加盟</div>
            <div class="orange">动态</div>
          </div>
          <div class="right">
            <div class="my-swipe dynamic-list" :autoplay="1000" vertical>
              <div
                class="dynamic-item flex-fs"
                v-for="index in 10"
                :key="index"
              >
                <div class="img">
                  <img src="@assets/images/icon.png" alt="" />
                </div>
                <div class="text ellipsis">
                  想了解伟业板材品牌资料请点击访问跳转到相对也没
                </div>
                <div class="name ellipsis">伟业板材有限公司</div>
              </div>
            </div>
          </div>
        </div>
        <div class="desc clear">
          <van-icon name="volume-o" class="orange" /> 当前代理信息总量
          <span class="orange">154545</span> 条
        </div>
      </div>
    </div>
    <!--加盟招商-->
    <div class="jiamengzhaoshang itembox">
      <div class="title">
        <div class="t1">行业品牌火热招商中</div>
        <div class="t2">ATTRACT INVESTMENT</div>
        <div class="t3">六步教您规避代理风险</div>
      </div>

      <div class="line">
        <ul>
          <li>
            <div class="icon"><van-icon name="points" /></div>
            <div class="text">寻找项目</div>
          </li>
          <li>
            <div class="icon"><van-icon name="comment-o" /></div>
            <div class="text">咨询项目</div>
          </li>
          <li>
            <div class="icon"><van-icon name="location-o" /></div>
            <div class="text">来访考察</div>
          </li>
          <li>
            <div class="icon"><van-icon name="brush-o" /></div>
            <div class="text">装修开业</div>
          </li>
          <li>
            <div class="icon"><van-icon name="records" /></div>
            <div class="text">签署合同</div>
          </li>
          <li>
            <div class="icon"><van-icon name="friends-o" /></div>
            <div class="text">合同洽谈</div>
          </li>
        </ul>
      </div>
      <div class="formbox">
        <van-form @submit="onSubmit">
          <van-cell-group>
            <van-field
              v-model="message"
              rows="2"
              autosize
              label="您的留言"
              type="textarea"
              placeholder="想了解行业的相关信息！"
              show-word-limit
            />
          </van-cell-group>
          <van-cell-group>
            <van-field
              v-model="username"
              name="代理区域"
              label="代理区域"
              placeholder="请输入代理区域"
            />
          </van-cell-group>
          <van-cell-group>
            <van-field
              v-model="username"
              name="意向行业"
              label="意向行业"
              placeholder="请输入意向行业"
            />
          </van-cell-group>
          <van-cell-group>
            <van-field
              v-model="username"
              name="您的称呼"
              label="您的称呼"
              placeholder="请输入您的称呼"
            />
          </van-cell-group>
          <van-cell-group>
            <van-field
              v-model="username"
              name="联系方式"
              label="联系方式"
              placeholder="请输入手机号码"
            />
          </van-cell-group>
          <div style="margin: 16px">
            <van-button
              class="submit"
              round
              block
              type="primary"
              native-type="submit"
            >
              提交行业代理申请
            </van-button>
          </div> 
        </van-form>

        <div class="item flex-fs itembox">
          <div class="c333 left">服务协议</div>

          <div class="c666 right flex-fs">
            <van-checkbox v-model="checked" shape="square"></van-checkbox>
            我接受 服务协议声明提醒注意事项
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
import SwiperBanner from "@/components/SwiperBanner.vue";
import SwiperMallNav from "@/components/SwiperMallNav.vue";
import {
  Tab,
  Tabs,
  Swipe,
  SwipeItem,
  Icon,
  Form,
  Field,
  CellGroup,
  Checkbox,
  Area,
} from "vant";
import ImgDesList from "@/components/ImgDesList.vue";
import DesList from "@/components/DesList.vue";

export default {
  components: {
    HeaderBar,
    SwiperBanner,
    SwiperMallNav,
    ImgDesList,
    DesList,
    [Icon.name]: Icon,
    [Area.name]: Area,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Form.name]: Form,
    [Field.name]: Field,
    [Checkbox.name]: Checkbox,
    [CellGroup.name]: CellGroup,
  },
  setup() {},
};
</script>
<style lang="scss" scoped>
.jiamengruzhu {
  margin: 30px 15px;
  overflow: hidden;
  .item {
    margin-bottom: 10px;
    margin-left: 10px;
    width: 345px;
    float: left;
    font-size: 42px;
    line-height: 125px;
    img {
      width: 100%;
      height: 125px;
    }
  }
}
.jiamengdongtai {
  overflow: hidden;
  .left {
    width: 120px;
    font-size: 32px;
  }
  .right {
    height: 400px;
    width: 610px;
    overflow-y: auto;
    border-left: 1px solid #eee;
    .dynamic-item {
      height: 80px;

      .img {
        margin-left: 30px;
        margin-right: 10px;
        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 1px solid #eee;
        }
      }
      .text {
        font-size: 28px;
        color: #666;
      }
      .name {
        color: #999;
        font-size: 24px;
      }
    }
  }
  .desc {
    color: #666;
    text-align: left;
    padding: 20px;
  }
}
.jiamengzhaoshang {
  background: linear-gradient(to bottom, #c3444b, #f7babe);
  .title {
    margin-bottom: 40px;
    .t1 {
      font-size: 38px;
      font-weight: bold;
      color: #ffff00;
    }
    .t2 {
      color: #ffff00;
      font-size: 24px;
      opacity: 0.7;
      margin-top: 10px;
    }
    .t3 {
      margin-top: 10px;
      color: #fff;
      font-size: 28px;
      background: rgba(190, 15, 27, 0.45);
      display: inline-block;
      padding: 2px 15px 5px;
    }
  }
  .line {
    ul {
      overflow: hidden;
      li {
        width: 33.3%;
        float: left;
        color: #fff;
        margin-bottom: 15px;
        .icon {
          height: 100px;
          line-height: 100px;
          border-radius: 50%;
          margin: 0 auto;
          background: #fff;
          width: 100px;
          color: #be0f1b;
          font-size: 60px;
          margin-bottom: 5px;
        }
      }
    }
  }
  .formbox {
    overflow: hidden;
    margin-top: 20px;
    background: #fff;
    border-radius: 10px;
    .submit {
      color: #fff;
      display: block;
      height: 78px;
      font-size: 32px;
      border-radius: 5px;
      line-height: 78px;
      background: linear-gradient(0deg, #ff2369, #ff6a3f);
    }
  }
  .item {
    .left{
      padding-right: 20px;
    }
    .right {
      font-size: 24px;
    }
  }
}
</style>
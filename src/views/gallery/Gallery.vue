<template>
  <div class="focus">
    <HeaderBar
      :header-data="{
        title: '美图',
        active: 11,
      }"
    />
    <div class="tukubg">
      <div class="tukusearch">
        <div class="tab flex-sa">
          <div class="current">全部</div>
          <div>原创图库</div>
          <div>共享图库</div>
        </div>
        <div class="search flex-sb">
          <div class="input">
            <input type="text" placeholder="搜索图片" />
          </div>
          <div class="search-btn">搜一搜</div>
        </div>
      </div>
      <SwiperMallNav :data="{ row: 2, col: 5, list: 16 }" />
    </div>
    <!--装修图片-->
    <div class="bt20">
      <SectionTitle :data="{ title: '装修图片' }" />
      <List />
    </div>

    <!--美食图片-->
    <div class="bt20">
      <SectionTitle :data="{ title: '美食图片' }" />
      <List />
    </div>
    <!--品牌图片-->
    <div class="bt20">
      <SectionTitle :data="{ title: '品牌图片' }" />
      <List />
    </div>
  </div>
</template>

<script>
import SectionTitle from "@/components/SectionTitle.vue";
import HeaderBar from "@/components/HeaderBar.vue";
import List from "./List.vue";
import SwiperMallNav from "@/components/SwiperMallNav.vue";

export default {
  components: {
    SectionTitle,
    HeaderBar,
    List,
    SwiperMallNav,

  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.tukubg {
  background: linear-gradient(to bottom, #0264c5, #0192e1, #0293e2, #a6e4f8);
  padding-top: 40px;
  .tukusearch {
    width: 690px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding-bottom: 10px;
    margin: 0 auto;
    .tab {
      color: #fff;
      line-height: 75px;
      .current {
        color: #ffdc00;
      }
    }
    .search {
      margin: 0 20px 20px 20px;
      padding-left: 20px;
      line-height: 2em;
      height: 70px;
      border-radius: 10px;
      border: none;
      outline: none;
      background: #fff;
      .input {
        input {
          background: none;
          border: 0;
          outline: none;
        }
      }
      .search-btn {
        width: 150px;
        right: 0;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;

        top: 0;
        height: 70px;
        text-align: center;
        line-height: 70px;
        cursor: pointer;
        background: #ffdc00;
        color: #1a1a1a;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
}
</style>
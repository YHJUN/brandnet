<template>
  <div>
    <div class="top-bar flex-fs">
      <div class="back"><van-icon name="arrow-left" /></div>
      <div class="search-content flex-fs">
        <div class="select-type">
          <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
          </van-dropdown-menu>
        </div>
        <div class="input">
          <input type="text" placeholder="搜行业或品牌(综合搜索)" />
        </div>
      </div>
      <div class="search-btn"><van-icon name="search" /></div> 
    </div>
    <div class="search-history">
      <div class="bar flex-sb">
        <div class="flex-fs">
          <van-icon class="icon" name="replay" /> 搜索历史
        </div>
        <div class="del"><van-icon class="icon" name="delete-o" /></div>
      </div>
      <div class="history-list">
        <ul>
          <li>手机</li>
          <li>电脑</li>
          <li>保暖内衣</li>
        </ul>
      </div>
    </div>
    <div class="select-content">
      <van-tabs v-model:active="active">
        <van-tab title="热卖搜索">
          <div class="select1">
            <ul>
              <li v-for="index in 10" :key="index" class="flex-sb">
                <div>{{ index }} 羽绒服</div>
                <div class="progess">
                  <div class="num">989884</div>
                  <div><van-progress pivot-text="" :percentage="50" /></div>
                </div>
              </li>
            </ul>
          </div>
        </van-tab>
        <van-tab title="热卖分类">
          <div class="select2">
            <ul>
              <li v-for="index in 25" :key="index">防火门</li>
            </ul>
          </div>
        </van-tab>
        <van-tab title="品牌分类">
          <div class="select3">
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
                <div class="text">品牌分类></div>
              </li>
            </ul>
          </div>
        </van-tab>
        <van-tab title="知识分类">
          <div class="select3">
            <ul>
              <li v-for="index in 19" :key="index">
                <div class="icon">
                  <van-icon name="logistics" />
                </div>
                <div class="text">居住/装修</div>
              </li>
              <li>
                <div class="icon">
                  <van-icon name="logistics" />
                </div>
                <div class="text">知识分类></div>
              </li>
            </ul>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { Tab, Tabs, Icon, Progress, DropdownMenu, DropdownItem } from "vant";

import { ref } from "vue";

export default {
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Icon.name]: Icon,
    [Progress.name]: Progress,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem,
  },
  setup() {
    const active = ref(0);
    const value1 = ref(0);

    const option1 = [
      { text: "综合", value: 0 },
      { text: "品牌", value: 1 },
      { text: "知识", value: 2 },
      { text: "网购", value: 3 },
      { text: "招商", value: 4 },
      { text: "名人", value: 5 },
    ];

    return {
      value1,

      option1,

      active,
    };
  },
};
</script>

<style lang="scss" scoped>
.top-bar {
  height: 90px;
  background: #5252b4;
  color: #fff;
  .back {
    width: 80px;
  }
  .search-content {
    height: 65px;
    background: #fff;
    width: 590px;
    border-radius: 30px;
    .select-type {
      padding: 0 10px;
    }
    .input {
      input {
        background: none;
        outline: none;
        border: 0;
        font-size: 32px;
        height: 60px;
        color: #666;
        line-height: 60px;
      }
    }
  }
  .search-btn {
    width: 80px;
  }
}

.search-history {
  font-size: 28px;
  .bar {
    height: 85px;
    padding: 0 35px;
    .icon {
      font-size: 35px;
    }
  }
  .history-list {
    ul {
      padding-left: 25px;
      text-align: left;
      li {
        height: 55px;
        background: #f5f5f5;
        color: #666;
        line-height: 55px;
        font-size: 24px;
        display: inline-block;
        padding: 0 30px;
        border-radius: 30px;
        margin-right: 15px;
        margin-bottom: 15px;
      }
    }
  }
}

.select-content {
  .select1 {
    padding: 20px 30px;
    font-size: 28px;
    ul {
      li {
        height: 70px;
        color: #666;
        .progess {
          width: 150px;
          text-align: right;
          .num {
            color: #999;
          }
        }
      }
    }
  }
  .select2 {
    padding: 20px 0;
    ul {
      text-align: center;
      li {
        float: left;
        border: 1px solid #ccc;
        border-radius: 30px;
        text-align: center;
        color: #666;
        font-size: 28px;
        margin: 15px 20px;
        height: 45px;
        line-height: 45px;
        width: 200px;
      }
    }
  }
  .select3 {
    padding: 20px 0;

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
}
</style>
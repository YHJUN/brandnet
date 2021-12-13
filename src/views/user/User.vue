<template>
  <div>
    <div class="user-info flex-fs">
      <div class="avatar flex-m">
        <img src="@assets/images/nimg.png" alt="" />
      </div>
      <div class="info">
        <div class="nickname">用户名称</div>
        <div class="grade">个人普通用户身份</div>
      </div>
    </div>
    <div class="row-list flex-sa">
      <div class="r-item">
        <div class="icon"><van-icon name="star-o" /></div>
        <div class="text">我的收藏</div>
      </div>
      <div class="r-item">
        <div class="icon"><van-icon name="smile-comment-o" /></div>
        <div class="text">我的评论</div>
      </div>
      <div class="r-item">
        <div class="icon"><van-icon name="certificate" /></div>
        <div class="text">投票记录</div>
      </div>
      <div class="r-item">
        <div class="icon"><van-icon name="todo-list-o" /></div>
        <div class="text">浏览记录</div>
      </div>
    </div>
    <div class="column-list">
      <div class="c-item flex-sb">
        <div class="flex-fs">
          <div class="icon"><van-icon name="like-o" /></div>
          <div class="text">我关注</div>
        </div>
        <div class="arrow"><van-icon name="arrow" /></div>
      </div>
      <div class="c-item flex-sb">
        <div class="flex-fs">
          <div class="icon"><van-icon name="thumb-circle-o" /></div>
          <div class="text">我的点赞</div>
        </div>
        <div class="arrow"><van-icon name="arrow" /></div>
      </div>
      <div class="c-item flex-sb">
        <div class="flex-fs">
          <div class="icon"><van-icon name="setting-o" /></div>
          <div class="text">设置</div>
        </div>
        <div class="arrow"><van-icon name="arrow" /></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "vant";
export default {
  components: {
    [Icon.name]: Icon,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.user-info {
  height: 230px;
  padding-left: 30px;
  .avatar {
    margin-right: 20px;
    height: 145px;
    width: 145px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .info {
    text-align: left;
    .nickname {
      font-size: 28px;
      margin-bottom: 10px;
    }
    .grade {
      background: #fd781d;
      color: #fff;
      border-radius: 20px;
      padding: 5px;
      font-size: 24px;
    }
  }
}
.row-list {
  height: 140px;
  border-top: 20px solid #f4f4f4;
  border-bottom: 20px solid #f4f4f4;
  .r-item {
    text-align: center;
    .text {
      color: #666;
      font-size: 30px;
    }
    .icon {
      font-size: 60px;
    }
  }
}
.column-list {
  .c-item {
    height: 95px;
    .icon {
      font-size: 45px;
      padding-left: 30px;
      padding-right: 20px;
    }
    .text {
      color: #666;
      font-size: 30px;
    }
    .arrow{
      color: #999;
      font-size: 40px;
      padding-right: 20px;
    }
  }
}
</style>
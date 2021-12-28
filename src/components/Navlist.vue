<template>
  <div class="navlist">
    <ul>
      <li v-for="(item, index) in data.list" :key="index" :class="'col'+data.col">
        <div class="icon" :class="'size'+data.iconSize"><img src="@assets/images/icon.png" alt="" /></div>
        <div class="text">栏目名称{{index}}</div>
      </li>
    </ul>
  </div>  
</template>

<script>
export default {
  props: ["data"],
  setup() {},
};
</script> 


<style lang="scss" scoped>
.navlist {
  padding-bottom: 30px;
  ul {
    overflow: hidden;
    li {
        margin-bottom: 10px;
      float: left;
      &.col4 {
        width: 25%;
      }
      &.col5 {
        width: 20%;
      }
      .icon {
        width: 100px;
        height: 100px;
        border-radius: 50%; 
        margin: 5px auto;
        &.size60{
            width: 60px;
            height: 60px;
        }
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
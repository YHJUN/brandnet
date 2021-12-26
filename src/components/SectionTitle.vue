<template>
  <div class="sectiontitle">
    <span
      ><i class="t1"></i><i class="t2"></i>{{ data.title }}<i class="t3"></i
      ><i class="t4"></i
    ></span>
  </div>
</template>

<script>
export default {
  props: ["data"],
  setup() {},
};
</script>
 

<style lang="scss" scoped>
.sectiontitle {
  text-align: center;

  color: #ccc;
  line-height: 100px;
  padding-top: 20px;
  span {
    padding: 0 50px;
    font-size: 40px;
    z-index: 1;
    font-weight: bold;
    position: relative;
    &::before {
      content: "";
      height: 3px;
      width: 80px;
      background: #ccc;
      bottom: 47px;
      position: absolute;
      left: -120px;
      top: 18px;
    }
    &::after {
      content: "";
      height: 3px;
      width: 80px;
      background: #ccc;
      bottom: 47px;
      position: absolute;
      right: -120px;
      top: 20px;
    }
  }
  i {
    position: absolute;
    height: 35px;
    width: 6px;
    background: #ccc;

    top: 5px;
    border-radius: 10px;
    z-index: 6;
    transform: rotate(30deg);
  }
  .t1 {
    left: 0;
  }
  .t2 {
    background: #eee;
    left: 15px;
  }
  .t3 {
    right: 15px;
    background: #eee;
  }
  .t4 {
    right: 0;
  }
}
</style>
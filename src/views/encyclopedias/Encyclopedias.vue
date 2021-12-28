<template>
  <div class="encyclopedias">
    <HeaderBar
      :header-data="{
        title: '百科',
        active: 12,
      }"
    />
    <Navlist :data="{ col: 4, list: 8 }" />

    <!--知识体系-->
    <div class="bt20 zhishitixi">
      <List1 />
    </div>
  </div>
</template>  
<script>
import HeaderBar from "@/components/HeaderBar.vue";

import Navlist from "@/components/Navlist.vue";

import List1 from "@/components/List1.vue";

export default {
  components: {
    HeaderBar,

    Navlist,
    List1,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
</style>

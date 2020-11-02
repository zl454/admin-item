<template>
<div class="main-container">
  <MainMessage :src="src1" :msg="{title:'今日订单总数',num:'2000'}" />
  <MainMessage :src="src2" :msg="{title:'今日订单总数',num:'2000'}" />
  <MainMessage :src="src3" :msg="{title:'今日订单总数',num:'2000'}" />
</div>
</template>

<script>
import MainMessage from "@/components/MainMessage";
export default {
  data() {
    return {
      src1: require("@/assets/images/home_order.png"),
      src2: require("@/assets/images/home_today_amount.png"),
      src3: require("@/assets/images/home_yesterday_amount.png"),
    };
  },
  components: {
    MainMessage,
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  background: orange;
  height: 100%;
}
</style>

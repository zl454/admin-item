<template>
  <div class="home-container">
    <div class="total-layout">
      <el-row :gutter="20">
        <el-col :span="6">
          <MainMessage
            :src="src1"
            :msg="{title:'今日订单总数',num:'2000'}"
          />
        </el-col>
        <el-col :span="6">
          <MainMessage
            :src="src2"
            :msg="{title:'今日订单总数',num:'2000'}"
          />
        </el-col>
        <el-col :span="6">
          <MainMessage
            :src="src3"
            :msg="{title:'今日订单总数',num:'2000'}"
          />
        </el-col>
        <el-col :span="6">
          <MainMessage
            :src="src3"
            :msg="{title:'今日订单总数',num:'4000'}"
          />
        </el-col>
      </el-row>
    </div>
    <div class="un-handle-layout">
      <UnhandleLayout />
    </div>
    <div class="overview-layout">
      <el-row :gutter="20">
        <el-col :span="12">
          <ProductOverview />
        </el-col>
        <el-col :span="12">
          <UserOverview />
        </el-col>
      </el-row>
    </div>
    <div class="statistics-layout">
      <Statistics />
    </div>
  </div>
</template>

<script>
import MainMessage from "@/components/MainMessage";
import UnhandleLayout from "@/components/UnhandleLayout";
import ProductOverview from "@/components/Overview/ProductOverview";
import UserOverview from "@/components/Overview/UserOverview";
import Statistics from "@/components/Statistics";
export default {
  data() {
    return {
      statisticalData: {},
      src1: require("@/assets/images/home_order.png"),
      src2: require("@/assets/images/home_today_amount.png"),
      src3: require("@/assets/images/home_yesterday_amount.png"),
    };
  },
  components: {
    MainMessage,
    UnhandleLayout,
    ProductOverview,
    UserOverview,
    Statistics,
  },
};
</script>

<style lang="scss" scoped>
.home-container {
  width: 100%;
  height: 100%;

  .total-layout {
    width: 100%;
    margin: 20px 0;
  }

  .un-handle-layout {
    margin: 20px 0;
  }

  .overview-layout {
    width: 100%;
    margin: 20px 0;
  }

  .overview-layout {
    margin: 20px 0;
  }

  .statistics-layout {
    margin: 20px 0;
  }
}
</style>

<template>
<div class="un-handle-container">
  <div class="layout-title">订单统计</div>
  <el-row>
    <el-col :span="4">
      <div style="padding: 20px">
        <div>
          <div style="color: #909399;font-size: 14px">本月订单总数</div>
          <div style="color: #606266;font-size: 24px;padding: 10px 0">10000</div>
          <div>
            <span class="color-success" style="font-size: 14px">+10%</span>
            <span style="color: #C0C4CC;font-size: 14px">同比上月</span>
          </div>
        </div>
        <div style="margin-top: 20px;">
          <div style="color: #909399;font-size: 14px">本周订单总数</div>
          <div style="color: #606266;font-size: 24px;padding: 10px 0">1000</div>
          <div>
            <span class="color-danger" style="font-size: 14px">-10%</span>
            <span style="color: #C0C4CC;font-size: 14px">同比上周</span>
          </div>
        </div>
        <div style="margin-top: 20px;">
          <div style="color: #909399;font-size: 14px">本月销售总额</div>
          <div style="color: #606266;font-size: 24px;padding: 10px 0">100000</div>
          <div>
            <span class="color-success" style="font-size: 14px">+10%</span>
            <span style="color: #C0C4CC;font-size: 14px">同比上月</span>
          </div>
        </div>
        <div style="margin-top: 20px;">
          <div style="color: #909399;font-size: 14px">本周销售总额</div>
          <div style="color: #606266;font-size: 24px;padding: 10px 0">50000</div>
          <div>
            <span class="color-danger" style="font-size: 14px">-10%</span>
            <span style="color: #C0C4CC;font-size: 14px">同比上周</span>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="20">
      <div style="padding: 10px;border-left:1px solid #DCDFE6">
        <el-date-picker style="float: right;z-index: 1" size="small" v-model="orderCountDate" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" @change="handleDateChange" :picker-options="pickerOptions">
        </el-date-picker>
        <div>
          <ve-line :data="chartData" :legend-visible="false" :loading="loading" :data-empty="dataEmpty" :settings="chartSettings"></ve-line>
        </div>
      </div>
    </el-col>
  </el-row>
</div>
</template>

<script>
import {
  str2Date
} from "@/utils/data.js";
import VeLine from "v-charts/lib/line.common";
import {
  getdSource
} from "@/assets/js/mock";
// const DATA_FROM_BACKEND = {
//   columns: ["date", "orderCount", "orderAmount"],
//   rows: [
//     {
//       date: "2019-11-01",
//       orderCount: 10,
//       orderAmount: 1093,
//     },
//     {
//       date: "2019-11-02",
//       orderCount: 20,
//       orderAmount: 2230,
//     },
//     {
//       date: "2019-11-03",
//       orderCount: 33,
//       orderAmount: 3623,
//     },
//     {
//       date: "2019-11-04",
//       orderCount: 50,
//       orderAmount: 6423,
//     },
//     {
//       date: "2019-11-05",
//       orderCount: 80,
//       orderAmount: 8492,
//     },
//     {
//       date: "2019-11-06",
//       orderCount: 60,
//       orderAmount: 6293,
//     },
//     {
//       date: "2019-11-07",
//       orderCount: 20,
//       orderAmount: 2293,
//     },
//     {
//       date: "2019-11-08",
//       orderCount: 60,
//       orderAmount: 6293,
//     },
//     {
//       date: "2019-11-09",
//       orderCount: 50,
//       orderAmount: 5293,
//     },
//     {
//       date: "2019-11-10",
//       orderCount: 30,
//       orderAmount: 3293,
//     },
//     {
//       date: "2019-11-11",
//       orderCount: 20,
//       orderAmount: 2293,
//     },
//     {
//       date: "2019-11-12",
//       orderCount: 80,
//       orderAmount: 8293,
//     },
//     {
//       date: "2019-11-13",
//       orderCount: 100,
//       orderAmount: 10293,
//     },
//     {
//       date: "2019-11-14",
//       orderCount: 10,
//       orderAmount: 1293,
//     },
//     {
//       date: "2019-11-15",
//       orderCount: 40,
//       orderAmount: 4293,
//     },
//   ],
// };
export default {
  data() {
    return {
      pickerOptions: {
        shortcuts: [{
            text: "最近一周",
            onClick(picker) {
              let end = new Date();
              let start = new Date();
              start.setTime(end - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一月",
            onClick(picker) {
              let end = new Date();
              let start = new Date();
              start.setTime(end - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      orderCountDate: "",
      chartSettings: {
        xAxisType: "time",
        area: true,
        axisSite: {
          right: ["orderAmount"],
        },
        labelMap: {
          orderCount: "订单数量",
          orderAmount: "订单金额",
        },
      },
      chartData: {
        columns: [],
        rows: [],
      },
      loading: false,
      dataEmpty: false,
    };
  },
  components: {
    VeLine,
  },
  created() {
    this.initOrderCountDate();
    this.getData();
  },
  methods: {
    handleDateChange() {
      this.getData();
    },
    initOrderCountDate() {
      // let start = new Date();
      // start.setFullYear(2019);
      // start.setMonth(10);
      // start.setDate(1);
      // const end = new Date();
      // end.setTime(start.getTime() + 1000 * 60 * 60 * 24 * 7);
      // this.orderCountDate = [start, end];
      let start = new Date();
      let end = new Date();
      start.setTime(end - 1000 * 60 * 60 * 24 * 7);
      this.orderCountDate = [start, end];
    },
    getData() {
      setTimeout(() => {
        this.chartData = {
          columns: ["date", "orderCount", "orderAmount"],
          rows: [],
        };
        for (let i = 0; i < DATA_FROM_BACKEND.rows.length; i++) {
          let item = DATA_FROM_BACKEND.rows[i];
          let currDate = str2Date(item.date);
          let start = this.orderCountDate[0];
          let end = this.orderCountDate[1];
          if (
            currDate.getTime() >= start.getTime() &&
            currDate.getTime() <= end.getTime()
          ) {
            this.chartData.rows.push(item);
          }
        }
        this.dataEmpty = false;
        this.loading = false;
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.un-handle-container {
  border: 1px solid #dcdfe6;

  >.layout-title {
    font-size: 18px;
    font-weight: 600;
    text-align: left;
    padding: 10px;
    background: #f2f6fc;
  }
}
</style>

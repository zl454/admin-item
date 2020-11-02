<template>
  <div class="un-handle-container">
    <div class="layout-title">待处理事务</div>
    <div class="un-handle-content">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="un-handle-item">
            <span class="font-medium">待付款订单</span>
            <span
              style="float: right"
              class="color-danger"
            >(10)</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="un-handle-item">
            <span class="font-medium">已完成订单</span>
            <span
              style="float: right"
              class="color-danger"
            >(10)</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="un-handle-item">
            <span class="font-medium">待确认收货订单</span>
            <span
              style="float: right"
              class="color-danger"
            >(10)</span>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="un-handle-item">
            <span class="font-medium">待发货订单</span>
            <span
              style="float: right"
              class="color-danger"
            >(10)</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="un-handle-item">
            <span class="font-medium">新缺货登记</span>
            <span
              style="float: right"
              class="color-danger"
            >(10)</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="un-handle-item">
            <span class="font-medium">待处理退款申请</span>
            <span
              style="float: right"
              class="color-danger"
            >(10)</span>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="un-handle-item">
            <span class="font-medium">已发货订单</span>
            <span
              style="float: right"
              class="color-danger"
            >(10)</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="un-handle-item">
            <span class="font-medium">待处理退货订单</span>
            <span
              style="float: right"
              class="color-danger"
            >(10)</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="un-handle-item">
            <span class="font-medium">广告位即将到期</span>
            <span
              style="float: right"
              class="color-danger"
            >(10)</span>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.un-handle-container {
  border: 1px solid #dcdfe6;

  > .layout-title {
    font-size: 18px;
    font-weight: 600;
    text-align: left;
    padding: 10px;
    background: #f2f6fc;
  }

  > .un-handle-content {
    padding: 10px 24px 20px;

    .un-handle-item {
      line-height: 36px;
      text-align: left;

      border-bottom: 1px solid #ebeef5;
    }
  }
}
</style>

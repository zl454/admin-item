<template>
  <div class="un-handle-container">
    <div class="layout-title">商品总览</div>
    <div class="un-handle-content">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <p>100</p>
            <p>已下架</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <p>100</p>
            <p>已上架</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <p>100</p>
            <p>库存紧张</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <p>100</p>
            <p>全部商品</p>
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

    p {
      text-align: center;
      white-space: nowrap;
      margin-top: 5px;
    }
  }
}
</style>

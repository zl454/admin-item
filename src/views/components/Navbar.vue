<template>
<div class="navbar-container">
  <el-radio-group v-model="opend" style="margin-bottom: 20px;">
    <el-radio-button :label="false">展开</el-radio-button>
    <el-radio-button :label="true">收起</el-radio-button>
  </el-radio-group>
</div>
</template>

<script>
import {
  mutations
} from "vuex";
export default {
  data() {
    return {
      isCollapse: true,
      ...mutations(["opend"]),
    };
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.navbar-container {
  position: relative;
}

.el-radio-group {
  position: absolute;
  left: 0;
  top: 0;
  margin-top: 10px;
}
</style>

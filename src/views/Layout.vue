<template>
<el-container style="height:100%">
  <el-aside width="auto">
    <Aside />
  </el-aside>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-main>
      <Main />
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import Aside from "./components/Aside";
import Main from "./components/Main";
import Header from "./components/Header";

import {
  mapState
} from "vuex";
export default {
  name: "layout",
  data() {
    return {};
  },
  components: {
    Aside,
    Main,
    Header,
  },
  computed: {
    ...mapState(["aside"]),
  },
};
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  width: 100%;
  padding: 0;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  line-height: 200px;
  height: 100%;
}

.el-main {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  padding: 20px 120px;
}

body>.el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>

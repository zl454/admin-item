<template>
<el-container style="height:100%">
  <el-aside width="auto">
    <Aside />
  </el-aside>
  <el-container>
    <el-header>
      <Navbar />
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
import Navbar from "./components/Navbar";
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
    Navbar,
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
}

.el-header {
  padding: 0;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  line-height: 200px;
  height: 100%;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
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

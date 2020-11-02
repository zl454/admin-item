<template>
<div class="header-container">
  <Hamburger class="hamburger" :toggle="toggleAside" :isActive="aside.isOpend" />
  <el-dropdown trigger="click" class="dropdown-menu">
    <span class="el-dropdown-link">
      <img class="user-img" src="http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/timg.jpg" alt="">
      <i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <router-link to="/">
        <el-dropdown-item>首页</el-dropdown-item>
      </router-link>
      <el-dropdown-item>退出</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</div>
</template>

<script>
import Hamburger from "components/Hamburger/index.vue";
import {
  mapState,
  mapMutations
} from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    Hamburger,
  },
  methods: {
    ...mapMutations(["toggleAsideBtn"]),
    toggleAside() {
      this.toggleAsideBtn();
    },
  },
  created() {},
  computed: {
    ...mapState(["aside"]),
  },
};
</script>

<style lang="scss" scoped>
.header-container {
  width: 100%;
  height: 60px;
  float: left;
  padding: 0 20px;
}

.hamburger {
  float: left;
}

.dropdown-menu {
  float: right;
}

.user-img {
  margin-top: 10px;
  width: 40px;
}
</style>

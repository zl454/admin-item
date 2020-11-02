/* eslint-disable vue/no-use-v-if-with-v-for */
<template>
<div class="aside-container">
  <el-menu default-active="1" router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="aside.isOpend" background-color="#304156" text-color="#bfcbd9" active-text-color="#409EFF">
    <template v-for="item in routers" v-if="!item.hidden&&item.children">
      <el-menu-item :index="item.path" v-if="hasOneShowingChildren(item.children)&&!item.children[0].children" :key="item.path">
        <i :class="`el-icon-${item.children[0].meta.icon}`"></i>
        <span slot="title">{{item.children[0].meta.title}}</span>
      </el-menu-item>

      <el-submenu v-else :key="item.name" :index="item.path">
        <template slot="title">
          <i :class="`el-icon-${item.meta.icon}`"></i>
          <span slot="title">{{item.meta.title}}</span>
        </template>
        <el-menu-item v-for="childItem in item.children" :key="childItem.name" :index="item.path+'/'+childItem.path">
          <i :class="`el-icon-${childItem.meta.icon}`"></i>
          <span slot="title">{{childItem.meta.title}}</span>
        </el-menu-item>
      </el-submenu>
    </template>
  </el-menu>
</div>
</template>

<script>
import {
  mapState
} from "vuex";
export default {
  data() {
    return {};
  },
  created() {
    console.log(this.routers[0].children[0]);
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    hasOneShowingChildren(children) {
      const showingChildren = children.filter((item) => !item.hidden);
      if (showingChildren.length === 1) {
        return true;
      }
      return false;
    },
  },
  computed: {
    ...mapState(["aside", "routers"]),
  },
};
</script>

<style lang="scss" scoped>
.aside-container {
  // position: relative;
  height: 100%;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-radio-group {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
}

.el-menu {
  height: 100%;
}
</style>

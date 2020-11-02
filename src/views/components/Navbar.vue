<template>
  <div class="navbar-container">
    <Hamburger
      :toggle="toggleAside"
      :isActive="aside.isOpend"
    />
  </div>
</template>

<script>
import Hamburger from "components/Hamburger/index.vue";
import { mapState, mapMutations } from "vuex";
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
.navbar-container {
  margin-left: 20px;
  position: relative;
}

.el-radio-group {
  position: absolute;
  left: 0;
  top: 0;
  margin-top: 10px;
}
</style>

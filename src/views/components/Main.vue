<template>
  <main class="main-container">
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view></router-view>
    </transition>
  </main>
</template>

<script>
export default {
  name: "AppMain",
};
</script>

<style lang="scss" scoped>
.main-container {
  width: 100%;
  height: 100%;
}
</style>

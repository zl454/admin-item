<template>
<div class="message-container">
  <img :src="src">
  <div>
    <p>{{msg.title}}</p>
    <p>{{msg.num}}</p>
  </div>
</div>
</template>

<script>
export default {
  props: {
    src: String,
    msg: Object,
  },
};
</script>

<style lang="scss">
.message-container {
  height: 100px;
  background: pink;
  padding: 20px;
  overflow: hidden;
  position: relative;
  // min-width: 200px;

  >img {
    width: 60px;
    display: block;
    position: relative;
  }

  >div {
    position: absolute;
    top: 20px;
    left: 80px;
    height: 60px;
    padding: 5px;

    >p {
      text-align: left;
      white-space: nowrap;
      margin-top: 5px;
    }
  }
}
</style>

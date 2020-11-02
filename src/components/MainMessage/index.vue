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
  background: pink;
  padding: 20px;
  overflow: hidden;
  display: inline-block;

  >img {
    float: left;
    width: 60px;
  }

  >div {
    float: left;
    height: 60px;
    padding: 5px;

    >p {
      text-align: left;
      margin-top: 5px;
    }
  }

  &.message-container {
    margin-right: 20px;
  }
}
</style>

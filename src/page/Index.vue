<template>
  <div class="container">
    <canvas id="canvas" resize></canvas>
  </div>
</template>

<script>

export default {
  name: "page-index",
  mounted () {
    if (process.env.VUE_ENV === "client") {
      const paper = require("paper");
      const canvas = document.getElementById("canvas");
    }
  }
};
</script>

<style lang="sass">

.container
  position: relative
  height: 100vh
  width: 100vh

canvas[resize]
  position: absolute
  display: block
  top: 0
  left: 0
  width: 100%
  height: 100%

</style>

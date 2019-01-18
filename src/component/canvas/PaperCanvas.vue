<template>
  <canvas id="canvas" resize></canvas>
</template>

<script>

export default {
  name: "component-canvas-canvas",
  mounted () {
    if (process.env.VUE_ENV === "client") {
      const paper = require("paper");
      const canvas = document.getElementById("canvas");
    }
  }
};
</script>

<style lang="sass">

canvas[resize]
  position: absolute
  display: block
  top: 0
  left: 0
  width: 100%
  height: 100%

</style>

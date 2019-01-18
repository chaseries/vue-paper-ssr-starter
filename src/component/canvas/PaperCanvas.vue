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
      paper.setup(canvas);
      const rectShape = new paper.Rectangle(new paper.Point(0,0), new paper.Size(200,200));
      const rect = new paper.Path.Rectangle(rectShape);
      rect.fillColor = "blue";
      paper.view.draw();
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

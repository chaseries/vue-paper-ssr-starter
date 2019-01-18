<template>
  <div class="container">
    <paper-canvas></paper-canvas>
  </div>
</template>

<script>
import PaperCanvas from "VUE_COMPONENT/canvas/PaperCanvas.vue";


export default {
  name: "page-index",
  components: {
    PaperCanvas
  }
};
</script>

<style lang="sass">

.container
  position: relative
  height: 100vh
  width: 100vh

</style>

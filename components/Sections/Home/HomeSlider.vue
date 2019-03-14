<template>
  <div class="carousel"
    :style="{
      paddingTop: sliderHeight
    }"
  >
    <Carousel :data="data" type="home"/>
  </div>
</template>

<script>
import Carousel from "@/components/UI/Carousel";

export default {
  props: {
    data: {
      required: true,
      type: Array
    }
  },
  components: {
    Carousel
  },
  mounted() {
    this.windowWidth = window.innerWidth
  },
  computed: {
    sliderHeight() {
      const height = `${this.windowWidth < 720 ? 100 : 41.66}%`
      return height
    }
  },
  data() {
    return {
      windowWidth: 1366,
    };
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  width: 100%;
  padding-top: 41.66%;
  background: $white;
}
</style>
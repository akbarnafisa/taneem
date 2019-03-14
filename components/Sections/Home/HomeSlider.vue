<template>
  <div
    class="carousel"
    :style="{
      paddingTop: sliderHeight
    }"
  >
    <Carousel
      :data="data"
      type="home"
    />
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
  created () {
    if (process.client) {
      this.windowWidth = window.innerWidth
      this.sliderHeight = `${this.windowWidth < 720 ? 100 : 41.66}%`
      window.addEventListener('resize', (event) => {
        this.windowWidth = window.innerWidth
        this.sliderHeight = `${this.windowWidth < 720 ? 100 : 41.66}%`
      }, true)
    }
  },
  beforeMount () {

  },
  // computed: {
  //   sliderHeight () {
  //     console.log('called')
  //     return height
  //   }
  // },
  data () {
    return {
      windowWidth: 1366,
      sliderHeight: 0,
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
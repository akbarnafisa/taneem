<template>
  <div class="carousel">
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
  }
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
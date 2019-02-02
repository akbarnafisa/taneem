<template>
  <transition name="fadeCarousel" mode="out-in">
    <img
      v-if="type === 'product'"
      v-show="currIndex === dataId"
      :src="`${data}`"
      class="sliderItem__imageProduk"
      alt="Taneem Products"
      style="width: 100%;"
      @dblclick="openNewTab(data.image)"
    >
    <nuxt-link v-else v-show="currIndex === dataId" :to="data.link">
      <img
        :src="`${data.image}`"
        class="sliderItem__home"
        alt="Taneem Products"
        style="width: 100%"
        @dblclick="openNewTab(data.image)"
      >
    </nuxt-link>
  </transition>
</template>

<script>
export default {
  props: {
    data: { required: true },
    type: { type: String, default: "" },
    currIndex: { type: Number, default: 0 },
    dataId: { type: Number, default: 0 }
  },
  mounted() {},
  computed: {
    windowWidth() {
      return this.$store.getters.windowWidth;
    }
  },
  data() {
    return {
      heightImage: 0
    };
  },
  methods: {
    openNewTab(value) {
      const win = window.open(value, "_blank");
      win.focus();
    },
    addHash() {
      this.$router.push(this.$route.path + "#carousel");
    }
  }
};
</script>


<style lang="scss" scoped>
.sliderItem__imageProduk {
  position: absolute;
  box-shadow: $box-shadow-black;
  right: 0;
  top: 0;

  &:after {
    content: "";
    top: 0;
    left: 0;
    position: relative;
    display: block;
    width: 100px;
    height: 100px;
  }
}

.sliderItem__home {
  position: absolute;
  box-shadow: $box-shadow-black;
  left: 50%;
  top: 0%;
  transform: translate3d(-50%, 0, 0);
}

.fadeCarousel-enter-active {
  transition: opacity 1s ease;
}

.fadeCarousel-leave-active {
  transition: opacity 0.25s ease;
}
.fadeCarousel-enter,
.fadeCarousel-leave-to {
  opacity: 0;
}
</style>

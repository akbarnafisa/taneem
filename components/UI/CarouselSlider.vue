<template>
  <transition name="fade" mode="out-in">
    <img
      v-if="type === 'product'"
      v-show="currIndex === dataId"
      :src="`${data}`"
      class="sliderItem__imageProduk"
      alt="Taneem Products"
      style="width: 100%;"
      @dblclick="openNewTab(data.image)"
    >
    <img
      v-else
      v-show="currIndex === dataId"
      :src="`${data.image}`"
      class="sliderItem__home"
      alt="Taneem Products"
      style="width: 100%"
      @dblclick="openNewTab(data.image)"
    >
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
  computed: {
    windowWidth() {
      return this.$store.getters.windowWidth;
    }
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

.fade-enter-active {
  transition: opacity 1s ease;
}

.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

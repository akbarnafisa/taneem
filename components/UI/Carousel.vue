<template>
  <div
    id="slider"
    :class="type === 'product' ?  'slider-product' : null"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <div :class="type === 'product' ? 'slider__item' : null ">
      <carouselSlider
        v-for="(item, index) in data"
        :data="item"
        :data-id="index"
        :curr-index="currIndex"
        :key="index"
        :type="type"
        @click.native="$emit('modalActive', currIndex)"
      />
    </div>
    <button
      v-if="type !== 'product'"
      name="slider"
      aria-label="slide"
      class="slider__arrowWrapper slider__arrowWrapper_left px-2 py-4 pointer"
      @click="slideLeft"
    >
      <div class="slider__leftArrow flex-center">
        <arrow direction="left"/>
      </div>
    </button>
    <button
      v-if="type !== 'product'"
      name="slider"
      aria-label="slide"
      class="slider__arrowWrapper slider__arrowWrapper_right px-2 py-4 pointer"
      @click="slideRight"
    >
      <div class="slider__rightArrow flex-center">
        <arrow direction="right"/>
      </div>
    </button>
    <div v-if="type === 'product'" class="imageSlider-left">
      <img
        v-for="(item, index) in data"
        :key="index"
        :class="currIndex === index ? 'active' : null"
        :src="item"
        class="pointer"
        title="Opposite Products"
        alt="Opposite Products"
        @mouseover="indicatorClick(index)"
      >
    </div>
    <div v-else class="flex-items slider__indicator">
      <div
        v-for="i in data.length"
        :key="i"
        :class="{
            'active' : currIndex + 1 === i,
          }"
        class="pointer m-1 slider__bullet"
        @click="indicatorClick(i - 1)"
      />
    </div>
  </div>
</template>

<script>
import carouselSlider from "./CarouselSlider";
import arrow from "../Icon/arrow";
import { setTimeout, setInterval } from "timers";
export default {
  name: "Carousel",
  components: {
    carouselSlider,
    arrow
  },
  props: {
    data: { type: Array, required: true },
    type: { type: String, required: true },
    index: { type: Number, default: 0 }
  },
  data() {
    return {
      currIndex: this.index | 0,
      touchstartX: 0,
      touchstartY: 0,
      touchendX: 0,
      touchendY: 0,
      hover: false
    };
  },
  mounted() {
    this.swipeHandler();
    const self = this;

    setInterval(() => {
      if (!self.hover && self.type === "home") {
        self.slideRight();
      }
    }, 5000);
  },
  destroyed() {
    this.swipeDestroyer();
  },
  methods: {
    indicatorClick(index) {
      this.currIndex = index;
    },
    slideRight(e) {
      if (this.currIndex >= this.data.length - 1) {
        this.currIndex = 0;
      } else {
        this.currIndex += 1;
      }
    },
    slideLeft(e) {
      if (this.currIndex <= 0) {
        this.currIndex = this.data.length - 1;
      } else {
        this.currIndex -= 1;
      }
    },
    touchStart(event) {
      this.touchstartX = event.changedTouches[0].screenX;
      this.touchstartY = event.changedTouches[0].screenY;
    },
    touchEnd(event) {
      this.touchendX = event.changedTouches[0].screenX;
      this.touchendY = event.changedTouches[0].screenY;
      this.swipe();
    },
    swipe() {
      const diff = this.touchendX - this.touchstartX;
      const angle = Math.abs(
        (Math.atan2(
          this.touchendY - this.touchstartY,
          this.touchendX - this.touchstartX
        ) *
          180) /
          Math.PI
      );
      if (
        this.touchendX < this.touchstartX &&
        diff < -40 &&
        this.data &&
        (angle > 160 && angle < 180)
      ) {
        this.slideRight();
      }
      if (
        this.touchendX > this.touchstartX &&
        diff > 40 &&
        this.data &&
        (angle > 0 && angle < 25)
      ) {
        this.slideLeft();
      }
      this.touchstartX = 0;
      this.touchstartY = 0;
      this.touchendX = 0;
      this.touchendY = 0;
    },
    swipeHandler() {
      const slider = document.querySelector("#slider");
      if (slider) {
        slider.addEventListener("touchstart", this.touchStart, {
          passive: true
        });
        slider.addEventListener("touchend", this.touchEnd, { passive: true });
      }
    },
    swipeDestroyer() {
      const slider = document.querySelector("#slider");
      if (slider) {
        slider.removeEventListener("touchstart", this.touchStart, {
          passive: true
        });
        slider.removeEventListener("touchend", this.touchEnd, {
          passive: true
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.imageSlider-left::-webkit-scrollbar {
  width: 4px;
}
.imageSlider-left::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}
.imageSlider-left::-webkit-scrollbar-thumb {
  background-color: $black50;
  border-radius: 5px;
}

#slider {
  touch-action: manipulation;
  .imageSlider-left {
    width: 50px;
    margin-right: 12px;
    max-height: 100vw;
    overflow-y: auto;
    overflow-x: hidden;
    @include media(sm) {
      width: 80px;
      max-height: 486px;
    }

    @include media(md) {
      max-height: 615px;
    }

    @include media(lg) {
      max-height: 552px;
    }

    @include media(xl) {
      max-height: 683px;
    }

    img {
      width: 100%;
      border: 1px solid white;
      transition: border 0.3s ease;
      cursor: pointer;

      &.active {
        border: 1px solid $black80;
      }

      &:hover {
        border: 1px solid $black80;
      }
    }
  }
  // .slider__imageIndicator {
  //   width: 100%;
  //   margin-bottom: 8px;
  //   display: flex;
  //   flex-direction: column;
  //   background: white;
  //   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  //   padding-bottom: 121%;
  //   position: relative;

  //   img {
  //     width: 100%;
  //     border: 1px solid white;
  //     transition: border 0.3s ease;
  //     cursor: pointer;
  //     position: absolute;
  //     top: 0;
  //     left: 0;

  //     &.active {
  //       border: 1px solid $black80;
  //     }

  //     &:hover {
  //       border: 1px solid $black80;
  //     }
  //   }
  // }

  .slider__indicator {
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    bottom: 12px;
    @include media(md) {
      bottom: 32px;
    }

    .slider__bullet {
      width: 8px;
      height: 8px;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      @include media(md) {
        width: 12px;
        height: 12px;
      }

      &.active {
        background-color: $primary50;
      }
    }
  }

  .slider__arrowWrapper {
    position: absolute;
    top: 50%;
    border-radius: 50%;
    transform: translateY(-50%);
    cursor: pointer;

    &.slider__arrowWrapper_right {
      right: -1%;
      @include media(md) {
        right: 2%;
      }
    }

    &.slider__arrowWrapper_left {
      left: -1%;
      @include media(md) {
        left: 2%;
      }
    }

    .slider__rightArrow,
    .slider__leftArrow {
      height: 35px;
      width: 35px;
      opacity: 0.5;
      background-color: #fff;
      transition: opacity 0.3s ease;
      border-radius: 50%;
      transform: scale(0.75);

      @include media(md) {
        transform: scale(1);
      }
      &:hover {
        opacity: 1;
      }
    }

    .slider__rightArrow svg {
      transform: rotate(180deg);
    }
  }
}

.slider-product {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  position: relative;
  .slider__item {
    position: relative;
    width: 100%;
    padding-bottom: 130%;

    @include media(xs) {
      width: 75%;
    }

    @include media(sm) {
      width: 60% !important;
      padding-bottom: 100%;
    }

    @include media(lg) {
      width: 100% !important;
    }
  }
}
</style>

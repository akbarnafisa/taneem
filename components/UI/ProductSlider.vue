<template>
  <div class="wrapper py-5 py-md-7">
    <div class="flex-items justify-content-between">
      <h5 class="underline-header h4-sm">{{header}}</h5>
      <nuxt-link
        v-if="linkToAllProduct"
        class="flex-items"
        to="/produk"
      >Selengkapnya
        <arrow
          class="ml-1"
          color="#D31212"
          width="12px"
          height="12px"
          direction="right"
        />
      </nuxt-link>
    </div>
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <nuxt-link
          :to="`/produk/${product.link}`"
          class="swiper-slide"
          v-for="(product, index) in data"
          :key="product.name + index"
        >
          <div class="product__image-wrapper">
            <img
              class="product__image"
              :src="product.image"
            >
            <!-- <div v-if="product.new !== undefined || product.new " class="product__new">
              <span>Baru</span>
            </div>-->
          </div>
          <div class="product__name">{{product.name}}</div>
          <div class="product__price">Rp. {{(product.price).toLocaleString('id') }}</div>
          <div
            v-if="product.fromDiscount > 0"
            class="product__discount"
          >
            Rp. {{(product.fromDiscount).toLocaleString('id') }}
            <!-- <span
            class="product__discount__percent"
            >{{countDiscount(product.fromDiscount, product.price)}}</span>-->
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import arrow from "@/components/Icon/arrow";
export default {
  props: {
    data: {
      type: Array,
      required: true
    },
    header: {
      type: String,
      required: true
    },
    linkToAllProduct: {
      type: Boolean,
      default: true
    }
  },
  components: {
    arrow
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: "auto",
        spaceBetween: 16
      }
    };
  },
  methods: {
    countDiscount (discount, price) {
      return Math.floor((1 - price / discount) * 100);
    }
  }
};
</script>


<style lang="scss" scoped>
.wrapper {
  overflow: hidden;

  .underline-header {
    border-bottom: 4px solid $primary40;
  }

  a {
    color: $primary50;
    font-weight: 600;
    font-size: 14px;

    @include media(sm) {
      font-size: 16px;
    }
  }
}

.swiper-wrapper {
  display: flex;
  margin-top: 36px;
  cursor: grab;
  .product__image-wrapper {
    width: 134px;
    box-shadow: $box-shadow-black;
    position: relative;
    height: 200px;

    @include media(md) {
      width: 235px;
      height: 350px;
    }

    .product__image {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }

    .product__new {
      font-size: 10px;
      line-height: 1.5882;
      background: darken($primary10, 10%);
      display: table;
      left: 0;
      letter-spacing: 0.03em;
      line-height: 1.1;
      padding: 0 3em 0.75em;
      position: absolute;
      top: 0;
      transform: translateX(-50%) rotate(-45deg);
      transform-origin: 50% 0;
      vertical-align: bottom;
      z-index: 2;

      @include media(sm) {
        font-size: 12px;
      }

      @include media(md) {
        font-size: 14px;
      }

      span {
        display: table-cell;
        height: 3.5em;
        vertical-align: bottom;
      }
    }
  }

  .product__name {
    margin-top: 8px;
    font-size: 13px;
    color: $black50;
    margin-bottom: 4px;

    @include media(md) {
      font-size: $font-medium;
    }
  }

  .product__price {
    font-weight: 700;
    font-size: 16px;
    color: $black60;
    @include media(md) {
      font-size: 18px;
    }
  }

  .product__discount {
    text-decoration: line-through;
    color: $primary50;
    font-weight: 700;
    font-size: 13px;
  }
}

// .my-swiper {
//   height: 300px;
//   width: 100%;
//   .swiper-slide {
//     text-align: center;
//     font-size: 38px;
//     font-weight: 700;
//     background-color: #eee;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
//   .swiper-pagination {
//     > .swiper-pagination-bullet {
//       background-color: red;
//     }
//   }
// }
</style>
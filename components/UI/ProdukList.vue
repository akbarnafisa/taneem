<template>
  <div class="product__wrapper">
    <div v-if="type === 'page-home'" class="flex-center">
      <h4 class="fw-700 h3-sm">{{header.replace(/\-/g, " ")}}</h4>
    </div>
    <p v-else class="mt-5 mt-md-7">
      Menampilkan
      <span class="strong">{{data.length}} Produk</span>
    </p>
    <div class="product__list row mt-5 mt-md-7">
      <nuxt-link
        v-for="(product, index) in data"
        :key="product.name + index + index"
        :to="`/produk/taneem-${product.name}`"
        class="product__item col-lg-3 col-md-4 col-6 mb-lg-7 mb-5"
      >
        <div class="product__image-wrapper">
          <img class="product__image" :src="product.image">
          <!-- <div v-if="product.new !== undefined || product.new " class="product__new">
            <span>Baru</span>
          </div> -->
        </div>
        <div class="product__name">Tane'em - {{product.name}}</div>
        <div class="product__price">Rp. {{(product.price).toLocaleString('id') }}</div>
        <div v-if="product.fromDiscount > 0" class="product__discount">
          Rp. {{(product.fromDiscount).toLocaleString('id') }}
          <!-- <span
            class="product__discount__percent"
          >{{countDiscount(product.fromDiscount, product.price)}}</span>-->
        </div>
      </nuxt-link>
    </div>
    <div v-if="type === 'page-home'" class="flex-center">
      <nuxt-link
        class="btn btn--large primary large flex-center"
        :to="`/collections/${link}`"
      >Selengkapnya
        <arrow class="ml-3" color="#fff" width="12px" height="12px" direction="right"/>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import arrow from "@/components/Icon/arrow";
export default {
  props: {
    data: {
      required: true,
      type: Array
    },
    type: {
      type: String,
      default: "page-product"
    },
    header: {
      type: String
    }
  },
  components: {
    arrow
  },
  computed: {
    link() {
      return this.header.toLowerCase().replace(/\s/g, "-");
    }
  }
};
</script>

<style lang="scss" scoped>
.product__wrapper {
  h4 {
    border-bottom: 4px solid $primary50;
    color: $black80;
    text-transform: capitalize;
  }
  p {
    text-align: center;

    .strong {
      color: $black80;
      text-decoration: underline;
      font-weight: 700;
    }
  }

  .product__list {
    .product__item {
      &:hover {
        .product__image-wrapper img {
          transform: scale(1.05);
        }
      }

      .product__image-wrapper {
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        position: relative;
        background-color: $lightgrey;
        width: 100%;
        padding-top: 150%;
        overflow: hidden;

        .product__image {
          transition: transform 0.3s ease;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
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
        font-size: $font-medium;
        color: $black50;
        margin-bottom: 4px;
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
        font-size: 12px;

        @include media(md) {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
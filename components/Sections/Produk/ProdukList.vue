<template>
  <div class="product__wrapper mt-5 mt-md-7">
    <p>
      Menampilkan
      <span class="strong">{{data.length}} Produk</span>
    </p>
    <div class="product__list row mt-5 mt-md-7">
      <nuxt-link
        v-for="(product, index) in data"
        :key="product.name + index + index"
        :to="`/produk/taneem-${product.name}`"
        class="product__item col-lg-3 col-sm-4 col-6 mb-lg-7 mb-5"
      >
        <div class="product__image-wrapper">
          <img class="product__image" :src="product.image">
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
  </div>
</template>

<script>
export default {
  props: {
    data: {
      required: true,
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped>
.product__wrapper {
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
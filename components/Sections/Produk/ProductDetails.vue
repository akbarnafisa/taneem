<template>
  <div class="product row">
    <div class="col-lg-6 product__slider">
      <carousel :data="product.images" type="product"/>
    </div>
    <div class="product__desc col-lg-6">
      <div class="product__title">Tane'em - {{product.name}}</div>

      <div class="product__price">
        Rp. {{(product.price).toLocaleString('id') }}
        <span
          v-if="product.fromDiscount > 0"
          class="product__discount ml-2"
        >
          Rp. {{(product.fromDiscount).toLocaleString('id') }}
          <!-- <span
            class="product__discount__percent"
          >{{countDiscount(product.fromDiscount, product.price)}}</span>-->
        </span>
      </div>
      <product-color :colors="product.colors"/>
      <product-sizes :sizes="product.sizes"/>

      <div class="product__plus">
        <div class="label">Keunggulan</div>
        <div class="product__icon__wrapper">
          <div v-if="product.bahan.trim() !== ''" class="product__icon">
            <div class="product__icon--bahan"></div>
            {{product.bahan}}
          </div>
          <div v-if="product.syari" class="product__icon">
            <div class="product__icon--syari"></div>Syar'i
          </div>
          <div v-if="product.hamil" class="product__icon product__icon--hamil">
            <div class="product__icon--hamil"></div>Bisa untuk Ibu Hamil
          </div>
        </div>
      </div>

      <product-quantity :stock="product.stock"/>

      <div class="product__button">
        <button class="btn btn--medium primary">Beli Ecer</button>
        <button class="btn btn--medium secondary">Beli Seri</button>
      </div>
      <div class="notes">*Dapatkan harga lebih murah dengan pembelian seri</div>
      <share-social :title="product.name"/>
      <p class="product__desc mt-7">{{product.desc}}</p>
    </div>
  </div>
</template>

<script>
import ShareSocial from "@/components/UI/ShareSocial";
import Carousel from "@/components/UI/Carousel";

import ProductQuantity from "@/components/UI/ProductQuantity";
import ProductColor from "@/components/UI/ProductColor";
import ProductSizes from "@/components/UI/ProductSizes";

export default {
  components: {
    Carousel,
    ShareSocial,
    ProductQuantity,
    ProductColor,
    ProductSizes
  },
  props: {
    product: {
      required: true,
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
.product {
  .notes {
    font-size: $font-medium;
    font-weight: 700;
    color: $black50;
  }
  .product__slider {
    position: relative;
  }

  .product__desc {
    .product__title {
      color: $black50;
    }
    .product__price {
      font-weight: 700;
      font-size: 24px;
      color: $black60;
      border-bottom: 1px solid $black10;
      padding-bottom: 16px;
      display: flex;
      align-items: center;
    }

    .product__discount {
      text-decoration: line-through;
      color: $primary50;
      font-weight: 700;
      font-size: 14px;
    }

    .product__plus {
      .product__icon__wrapper {
        display: flex;
        flex-wrap: wrap;
        .product__icon {
          margin-right: 36px;
          margin-bottom: 24px;
          color: $black50;
          text-transform: capitalize;
          display: flex;

          .product__icon--bahan,
          .product__icon--syari,
          .product__icon--hamil {
            width: 24px;
            height: 24px;
            margin-right: 12px;
          }

          .product__icon--bahan {
            background: url("/svg/bahan.svg");
          }

          .product__icon--syari {
            background: url("/svg/syari.svg");
          }

          .product__icon--hamil {
            background: url("/svg/ibu.svg");
          }
        }
      }
    }

    .product__button {
      display: flex;
      margin: 36px 0 12px 0;

      button {
        width: 50%;
        max-width: 170px;

        &:first-child {
          margin-right: 12px;
        }
      }
    }
  }
}
</style>
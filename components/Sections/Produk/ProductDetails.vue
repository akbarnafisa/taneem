<template>
  <div class="product row">
    <div class="col-lg-6 product__slider">
      <carousel
        :data="product.images"
        type="product"
      />
    </div>
    <div
      id="top"
      class="product__desc col-lg-6"
    >
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
      <product-color
        @handleInput="handleInput($event)"
        :error="error"
        :selected="order.color"
        :colors="product.colors"
      />
      <product-sizes
        @handleInput="handleInput($event)"
        :error="error"
        :selected="order.size"
        :sizes="product.sizes"
      />

      <div class="product__plus">
        <div class="label">Keunggulan</div>
        <div class="product__icon__wrapper">
          <div
            v-if="product.bahan.trim() !== ''"
            class="product__icon"
          >
            <div class="product__icon--bahan"></div>
            {{product.bahan}}
          </div>
          <div
            v-if="product.syari"
            class="product__icon"
          >
            <div class="product__icon--syari"></div>Syar'i
          </div>
          <div
            v-if="product.hamil"
            class="product__icon product__icon--hamil"
          >
            <div class="product__icon--hamil"></div>Bisa untuk Ibu Hamil
          </div>
        </div>
      </div>

      <product-quantity
        @handleInput="handleInput($event)"
        :quantity="order.quantity"
        :stock="product.stock"
      />

      <div class="product__button">
        <button
          @click="addToCart"
          class="btn btn--medium primary addToCart"
        >Beli Ecer</button>
        <button class="btn btn--medium secondary">Beli Seri</button>
      </div>
      <div class="notes">*Dapatkan harga lebih murah dengan pembelian seri</div>
      <share-social :title="product.name" />
      <div
        class="product__desc mt-7"
        v-html="product.desc"
      ></div>
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
  },
  data () {
    return {
      submited: false,
      error: false
    };
  },
  created () {
    this.resetOrder();
  },
  methods: {
    resetOrder () {
      this.$store.commit("order/REMOVE_NEWORDER");
    },
    handleInput (data) {
      this.$store.commit("order/SET_NEWORDER", data);
    },
    addToCart () {
      this.error = false;
      this.$store
        .dispatch("order/ADD_ORDER", {
          _id: this.product._id,
          name: this.product.name,
          image: this.product.images[0],
          price: this.product.price,
          fromDiscount: this.product.fromDiscount,
          stock: this.product.stock,
          color: this.order.color,
          size: this.order.size,
          quantity: this.order.quantity
        })
        .then(() => {
          const value = `https://api.whatsapp.com/send?phone=6282320114568&text=Hi Saya ingin pesan produk ${
            this.product.name
            } dengan warna ${this.product.color} dan ukuran ${this.product.size} sebanyak ${this.order.quantity}`
          const win = window.open(value, "_blank");
          win.focus();
        })
        .catch(err => {
          this.error = true;
          this.scroll();
        });
    },
    scroll () {
      const element = document.querySelector("#top").offsetTop;
      window.scroll({
        top: element - 50,
        behavior: "smooth"
      });
    }
  },
  computed: {
    order () {
      return this.$store.state.order.newOrder;
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
<template>
  <div>
    <div class="header">Detail Barang</div>
    <div v-for="(item, index) in data" :key="item._id + index" class="item__wrapper">
      <div class="item">
        <div class="item__left">
          <nuxt-link :to="`/produk/taneem-${item.name}`" class="item__image_wrapper">
            <img :src="item.image" class="item__image">
          </nuxt-link>
          <div class="item__desc w-100">
            <div class="item__title flex-wrap">
              Tane'em - {{item.name}}
              <div class="item__price-wrapper flex-wrap">
                <div
                  class="product__price"
                >Rp. {{(item.price * item.quantity).toLocaleString('id') }}</div>
                <div
                  v-if="item.fromDiscount > 0"
                  class="product__discount"
                >Rp. {{(item.fromDiscount * item.quantity).toLocaleString('id') }}</div>
              </div>
            </div>
            <div class="item__color">Warna: {{item.color}}</div>
            <div class="item__size">Ukuruan: {{item.size}}</div>
            <product-quantity
              v-if="isCartPage"
              class="mt-2 mb-3"
              type="cart"
              @handleInput="handleInput($event, index)"
              :quantity="item.quantity"
              :stock="item.stock"
            />
            <div v-else class="item__quantity">Banyaknya: {{item.quantity}}</div>
          </div>
        </div>
        <!-- <div class="item__right"></div> -->
      </div>
      <div v-if="isCartPage" class="item__delete">
        <button @click="handleDelete(index)">
          <b class="mr-1">X</b>
          Hapus
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ProductQuantity from "@/components/UI/ProductQuantity";
export default {
  props: {
    data: {
      type: Array,
      required: true
    },
    type: {
      type: String,
      default: "cart-page"
    }
  },
  components: {
    ProductQuantity
  },
  methods: {
    handleDelete(index) {
      if (window.confirm(`Barang akan dihapus dari keranjang, anda yakin ?`)) {
        this.$store.dispatch("order/REMOVE_ORDER", index);
      }
    },
    handleInput(data, index) {
      this.$store.dispatch("order/EDIT_ORDER", {
        key: data.key,
        value: data.value,
        index
      });
    }
  },
  computed: {
    isCartPage() {
      if (this.type !== "cart-page") return false;
      return true;
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  font-size: 24px;
  border-bottom: 1px solid $black10;
  padding-bottom: 8px;
  margin-bottom: 24px;
}
.item__wrapper {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
  border-bottom: 1px solid $black10;
  margin-bottom: 16px;
  padding-bottom: 16px;

  .item {
    width: 100%;

    .item__left {
      display: flex;
      width: 100%;

      .item__image_wrapper {
        margin-right: 16px;

        .item__image {
          max-width: 83px;
          width: 100%;
          height: auto;
        }
      }

      .item__title {
        font-size: $font-size;
        color: $black60;
        display: flex;
        font-weight: 600;
        justify-content: space-between;
      }
      .item__color,
      .item__size,
      .item__quantity {
        font-size: $font-medium;
        color: $black50;
        margin-bottom: 3px;
      }

      .item__price-wrapper {
        display: flex;
        align-items: center;
        margin-bottom: 4px;

        .product__price {
          font-weight: 700;
          font-size: 16px;
          color: $black60;
          margin-right: 8px;

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
    }

    .item__right {
    }
  }
  .item__delete {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-top: 8px;

    button {
      color: $black50;
      cursor: pointer;
      font-size: $font-size;

      b {
        color: $black50;
      }

      &:hover {
        color: $primary50;
        b {
          color: $primary50;
        }
      }
    }
  }
}
</style>
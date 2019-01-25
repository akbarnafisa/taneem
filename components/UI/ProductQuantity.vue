<template>
  <div class="product__quantity">
    <div v-if="type === 'default'" class="label">Kuantitas</div>
    <div class="product__quantity__wrapper flex-wrap">
      <div class="flex-items" :class="{'product__quantity--cart' : type === 'cart'}">
        <button class="product__quantity__button">
          <svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0">
            <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon>
          </svg>
        </button>
        <input class="product__quantity__input" type="text" value="1">
        <button class="product__quantity__button">
          <svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0">
            <polygon
              points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"
            ></polygon>
          </svg>
        </button>
      </div>
      <div class="product__quantity__count">tersisah {{stock}} buah</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stock: {
      type: Number,
      required: true,
      default: 1
    },
    type: {
      type: String,
      default: "default"
    }
  }
};
</script>

<style lang="scss" scoped>
.product__quantity {
  .product__quantity__wrapper {
    display: flex;
    align-items: center;

    .product__quantity__input {
      height: 32px;
      width: 50px;
      text-align: center;
      margin-bottom: 0;
      border-radius: 0px;
    }
    .product__quantity__button {
      width: 32px;
      height: 32px;
      border: 1px solid $black10;
      border-radius: 0px;
      background: transparent;
      color: rgba(0, 0, 0, 0.8);
      cursor: pointer;
      svg {
        width: 12px;
      }
    }
    .product__quantity__count {
      font-size: $font-medium;
      color: $black50;
      margin-left: 12px;
    }

    .product__quantity--cart {
      transform: scale(0.9);
    }
  }
}
</style>
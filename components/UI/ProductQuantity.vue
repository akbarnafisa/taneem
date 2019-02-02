<template>
  <div class="product__quantity">
    <div v-if="type === 'default'" class="label">Kuantitas</div>
    <div class="product__quantity__wrapper flex-wrap">
      <div class="flex-items" :class="{'product__quantity--cart' : type === 'cart'}">
        <button @click="quantityButton('left')" class="product__quantity__button button--left">
          <svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0">
            <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon>
          </svg>
        </button>
        <input
          class="product__quantity__input p-1"
          type="number"
          @input="quantityChange($event)"
          @blur="checkQuantity"
          @keydown="$event.key === '.' 
          || $event.key === '-' ? $event.preventDefault() : false"
          :value="quantity"
          name="quantity"
        >
        <button @click="quantityButton('right')" class="product__quantity__button button--right">
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
    quantity: {
      type: Number,
      required: true,
      default: 1
    },
    type: {
      type: String,
      default: "default"
    },
    idProduct: {
      type: String
    }
  },
  data() {
    return {
      __test: null
    };
  },
  methods: {
    quantityButton(type) {
      let value = this.quantity;
      if (type === "left" && value !== 1) {
        value -= 1;
      } else if (type === "right" && value < this.stock) {
        value += 1;
      }
      this.__test = value;
      const data = {
        key: "quantity",
        value
      };
      this.$emit("handleInput", data);
    },
    quantityChange(e, index) {
      let value = Number(e.target.value);
      if (value === 0 || value === 1) value = 1;
      this.__test = value;
      const data = {
        key: "quantity",
        value
      };
      this.$emit("handleInput", data);
    },
    checkQuantity(e) {
      const value = Number(e.target.value);
      if (value > this.stock) {
        this.$emit("handleInput", {
          key: "quantity",
          value: this.stock
        });
        e.target.value = this.stock;
      } else if (value < 1) {
        this.$emit("handleInput", {
          key: "quantity",
          value: 1
        });
        e.target.value = 1;
      }
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
      width: 60px;
      margin-bottom: 0;
      text-align: center;
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
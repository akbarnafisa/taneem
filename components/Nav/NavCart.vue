<template>
  <div class="cart">
    <slot :cartItems="cartItems"/>
    <div class="notif" :class="isItemAdded ? 'active': null">
      Produk telah ditambakan ke keranjang belanja
      <span class="triangle"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String
    }
  },
  data() {
    return {
      isItemAdded: false
    };
  },
  watch: {
    cartItems(newVal, oldVal) {
      const self = this;
      this.isItemAdded = false;
      if (newVal > oldVal && !this.$route.name.includes("cart")) {
        this.isItemAdded = true;
        setTimeout(() => {
          this.isItemAdded = false;
        }, 1250);
      }
    }
  },
  computed: {
    cartItems() {
      const items = this.$store.state.order.items;
      if (items) {
        const reducer = (accumulator, currentValue) =>
          accumulator + currentValue.quantity;
        return items.reduce(reducer, 0);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.cart {
  position: relative;

  .notif {
    transition: bottom 0.3s ease, opacity 0.3s ease;
    opacity: 0;
    position: absolute;
    bottom: -50px;
    left: -260px;
    width: 300px;
    padding: 8px 12px;
    background-color: $primary50;
    color: white;
    border-radius: 5px;

    &.active {
      opacity: 1;
      bottom: -70px;
    }
    .triangle {
      background-color: $primary50;
      width: 20px;
      height: 20px;
      position: absolute;
      top: -4px;
      right: 12px;
      transform: rotate(45deg);
    }
  }
}
</style>
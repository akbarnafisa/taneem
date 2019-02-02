<template>
  <div class="container cart section-header px-2">
    <no-ssr>
      <div class="pt-5 text-center" v-if="items === null || items.length === 0">
        <div class="svg mb-7"></div>
        <p class="mb-4">Keranjang Belanja Anda Masih Kosong</p>
        <nuxt-link to="/produk" class="btn btn--medium primary">Belanja Sekarang</nuxt-link>
      </div>
      <span v-else>
        <h4 class="underline-header h4-sm">Keranjang Belanja</h4>
        <div class="row section pt-0">
          <div class="col-lg-8">
            <cart-item class="mt-5 section-white box-shadow p-3 p-sm-4" :data="items"/>
          </div>
          <div class="col-lg-4 mt-2">
            <payment-details type="cart" class="mt-7 px-2"/>
          </div>
        </div>
      </span>
    </no-ssr>
  </div>
</template>

<script>
import CartItem from "@/components/UI/CartItems";
import PaymentDetails from "@/components/UI/PaymentDetail";
export default {
  components: {
    CartItem,
    PaymentDetails
  },
  data() {
    return {};
  },
  computed: {
    items() {
      return this.$store.state.order.items;
    }
  }
};
</script>

<style lang="scss" scoped>
.cart {
  .svg {
    width: 100%;
    height: 50vw;
    max-height: 300px;
    background-image: url(/svg/empty.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .underline-header {
    border-bottom: 4px solid $primary50;
    display: inline;
  }
}
</style>
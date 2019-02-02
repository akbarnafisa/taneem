<template>
  <div class="container section-header mw-3 px-2">
    <no-ssr>
      <payment-detail class="p-0 section-white box-shadow p-3 p-sm-4" type="checkout-review"/>
      <final-costumer-data class="mt-5 section-white box-shadow p-3 p-sm-4"/>
      <cart-item
        class="mt-5 section-white box-shadow p-3 p-sm-4"
        type="checkout-page"
        :data="items"
      />
      <final-payment class="mt-5 section-white box-shadow p-3 p-sm-4"/>
    </no-ssr>
  </div>
</template>

<script>
import FinalPayment from "@/components/Sections/Checkout/FinalPayment";
import FinalCostumerData from "@/components/Sections/Checkout/FinalCostumerData";

import PaymentDetail from "@/components/UI/PaymentDetail";
import CartItem from "@/components/UI/CartItems";

export default {
  components: {
    FinalPayment,
    FinalCostumerData,
    PaymentDetail,
    CartItem
  },
  created() {
    this.$store.commit("order/LOAD_COSTUMER");
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

<style scoped>
</style>
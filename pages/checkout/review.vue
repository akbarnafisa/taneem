<template>
  <div class="container section pt-0 mw-3">
    <no-ssr>
      <payment-detail class="p-0" type="checkout-review" :payment="paymentDetails"/>
      <final-costumer-data class="mt-7"/>
      <cart-item class="mt-7" type="checkout-page" :data="items"/>
      <final-payment class="mt-7"/>
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
  data() {
    return {
      items: [
        {
          _id: "gg",
          name: "18113",
          color: "Aqua",
          size: "S",
          quantity: 1,
          image: ["/images/produk3.jpg"],
          price: 130000,
          fromDiscount: 150000,
          stock: 20,
          quantity: 1
        },
        {
          _id: "wp",
          name: "18113",
          color: "Aqua",
          size: "S",
          quantity: 1,
          image: ["/images/produk3.jpg"],
          price: 130000,
          fromDiscount: 150000,
          stock: 20,
          quantity: 1
        }
      ],
      paymentDetails: {
        subtotal: 300000,
        discount: 40000,
        shipment: 0,
        total: 260000
      }
    };
  }
};
</script>

<style scoped>
</style>
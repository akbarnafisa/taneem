<template>
  <div class="container cart">
    <h4 class="underline-header h4-sm">Keranjang Belanja</h4>
    <div class="mt-7 row section pt-0">
      <cart-item class="col-lg-8 mb-5 pr-lg-7" :data="items"/>
      <payment-details type="cart" class="section col-lg-4" :payment="paymentDetails"/>
    </div>
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
          stock: 20
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
          stock: 20
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

<style lang="scss" scoped>
.cart {
  .underline-header {
    border-bottom: 4px solid $primary50;
    display: inline;
  }
}
</style>
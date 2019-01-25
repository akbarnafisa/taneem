<template>
  <div class="container section pt-0">
    <div class="row">
      <div class="col-lg-8 pr-lg-7">
        <costumer-data :data="costumer"/>
        <payment-and-shipping :data="costumer" class="mt-5"/>
      </div>
      <div class="col-lg-4">
        <payment-detail type="checkout-address" :payment="paymentDetails"/>
      </div>
    </div>
  </div>
</template>

<script>
import CostumerData from "@/components/Sections/Checkout/CostumerData";
import PaymentAndShipping from "@/components/Sections/Checkout/PaymentAndShipping";
import PaymentDetail from "@/components/UI/PaymentDetail";

export default {
  components: {
    CostumerData,
    PaymentAndShipping,
    PaymentDetail
  },
  data() {
    return {
      costumer: {
        fullname: null,
        handphone: null,
        email: null,
        address: null,
        province: null,
        city: null,
        courier: null,
        payment: "Transfer Bank"
      },
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
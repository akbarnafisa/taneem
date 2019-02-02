<template>
  <div>
    <transition name="page" mode="out-in">
      <modal-error v-if="ModalError"/>
    </transition>
    <transition name="page" mode="out-in">
      <payment-success v-if="ModalPayment"/>
    </transition>
    <the-nav-checkout v-if="route.includes('checkout')"/>
    <the-nav v-else/>
    <!-- <the-nav-mobile/> -->
    <nuxt class="app-wrapper"/>
    <the-footer/>
  </div>
</template>
<script>
import TheNav from "@/components/Nav/TheNav";
import TheNavCheckout from "@/components/Nav/TheNavCheckout";
import TheNavMobile from "@/components/Nav/TheNavMobile";
import TheFooter from "@/components/Nav/TheFooter";

import PaymentSuccess from "@/components/UI/modal/PaymentSuccess";
import ModalError from "@/components/UI/modal/error";

export default {
  components: {
    TheNav,
    TheNavMobile,
    TheFooter,
    TheNavCheckout,
    PaymentSuccess,
    ModalError
  },
  created() {
    if (this.$store.state.order.items) {
      this.$store.dispatch("order/LOAD_CART");
    }
  },
  computed: {
    route() {
      return this.$route.name;
    },
    ModalPayment() {
      return this.$store.state.order.modalPayment;
    },
    ModalError() {
      return this.$store.state.modalError;
    }
  }
};
</script>
<style lang="scss" scopped>
.app-wrapper {
}
</style>

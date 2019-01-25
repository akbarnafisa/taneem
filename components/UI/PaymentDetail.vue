<template>
  <div class="payment">
    <div
      class="header"
      :class="{
      'header--review' : type === 'checkout-review'
    }"
    >Rincian Belanja</div>
    <div v-if="$route.name.includes('checkout')" class="payment__id">
      <span class="paymentId">ID Pembayaran</span>
      <span class="id">wn6xh0d1w_</span>
    </div>
    <div class="payment__subtotal">
      <span class="title">Subtotal</span>
      <span class="price">Rp. {{(payment.subtotal).toLocaleString('id') }}</span>
    </div>
    <div class="payment__discount">
      <span class="title">Diskon</span>
      <span class="price">Rp. {{(payment.discount).toLocaleString('id') }}</span>
    </div>
    <div class="payment__shipping">
      <span class="title">Biaya Kirim</span>
      <span class="price">Rp. {{(payment.shipment).toLocaleString('id') }}</span>
    </div>
    <div class="payment__total">
      <span class="title">Total</span>
      <span class="price">Rp. {{(payment.total).toLocaleString('id') }}</span>
    </div>
    <span v-if="type !== 'checkout-review'">
      <div class="notes">*belum termasih biaya kirim</div>
      <nuxt-link :to="page.link" class="btn btn--medium primary w-100 flex-justify">{{page.button}}</nuxt-link>
    </span>
  </div>
</template>


<script>
export default {
  props: {
    payment: {
      required: true,
      type: Object
    },
    type: {
      type: String,
      default: "default"
    }
  },
  computed: {
    page() {
      if (this.$route.name.includes("address-and-payment")) {
        return {
          link: "/checkout/review",
          button: "Selanjutnya"
        };
      }
      return {
        link: "/checkout/address-and-payment",
        button: "Lanjut ke Pembayaran"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.payment {
  padding: 0 16px 16px 16px;

  .header {
    font-size: 18px;
    padding-bottom: 8px;
    margin-bottom: 16px;
    font-weight: 700;
    color: $black60;
    border-bottom: 1px solid $black10;

    &--review {
      font-weight: 500;
      font-size: 24px;
    }
  }
  .payment__id,
  .payment__subtotal,
  .payment__discount,
  .payment__shipping {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    .title {
      color: $black50;
    }

    .price {
      font-weight: 600;
      color: $black60;
    }
  }

  .payment__id {
    .paymentId {
      font-weight: 700;
      color: $black80;
    }
    .id {
      color: $primary50;
      font-weight: 700;
    }
  }

  .payment__total {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid $black10;
    margin-top: 16px;
    margin-bottom: 8px;
    padding-top: 8px;
    .title,
    .price {
      color: $black80;
      font-weight: 700;
    }
  }

  .notes {
    margin-bottom: 16px;
    font-weight: 700;
    font-size: $font-medium;
    color: $black50;
  }
}
</style>
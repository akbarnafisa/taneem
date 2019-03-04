<template>
  <div class="payment">
    <div
      class="header"
      :class="{
      'header--review' : type === 'checkout-review'
    }"
    >Rincian Belanja</div>
    <div
      v-if="$route.name.includes('checkout')"
      class="payment__id"
    >
      <span class="paymentId">ID Pembayaran</span>
      <span class="id">{{paymentId}}</span>
    </div>
    <div class="payment__subtotal">
      <span class="title">Subtotal</span>
      <span class="price">Rp. {{(payment.subtotal).toLocaleString('id') }}</span>
    </div>
    <div class="payment__discount">
      <span class="title">Diskon</span>
      <span class="price">Rp. {{(payment.discount).toLocaleString('id') }}</span>
    </div>
    <!-- <div class="payment__shipping">
      <span class="title">Biaya Kirim</span>
      <span class="price">Rp. {{(payment.ongkir).toLocaleString('id') }}</span>
    </div> -->
    <div class="payment__total">
      <span class="title">Total</span>
      <span class="price">Rp. {{(payment.total).toLocaleString('id') }}</span>
    </div>
    <span v-if="type !== 'checkout-review'">
      <div class="notes">*belum termasih biaya kirim</div>
      <slot />
      <button
        @click="handleClick"
        class="btn btn--medium primary w-100 flex-justify"
      >{{page.button}}</button>
    </span>
  </div>
</template>


<script>
export default {
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  data () {
    return {
      route: this.$route.name
    };
  },
  methods: {
    handleClick () {
      if (this.route === "cart") {
        // this.$store.commit("order/ADD_PAYMENT_ID");
        // const head = `https://api.whatsapp.com/send?phone=6282320114568&text=Hi Saya ingin pesan produk ${
        //   self.product.name
        //   } dengan warna ${self.order.color} dan ukuran ${self.order.size} sebanyak ${self.order.quantity}`
        const data = this.$store.state.order.items
        const payment = this.$store.state.order.payment
        const head = `https://api.whatsapp.com/send?phone=6282320114568&text=Halo Taneem, saya ingin pesan produk: `
        let msg = "" + "\r\n"
        data.forEach((el, index) => {
          msg = msg + `- ${el.name} [${el.color.trim()}] [${el.size.trim()}] [${el.quantity}] : Rp. ${(el.price).toLocaleString('id')}` + "\r\n"
        });
        msg = msg + "\r\n" + `Subtotal Rp. ${(payment.subtotal).toLocaleString('id')} ${"\r\n"}Diskon Rp. ${(payment.discount).toLocaleString('id')} ${"\r\n"}Total Rp. ${(payment.total).toLocaleString('id')}`
        msg = window.encodeURIComponent(msg)
        const win = window.open(head + msg, "_blank");
        win.focus();
      }
    }
  },
  computed: {
    page () {
      if (this.$route.name.includes("address-and-payment")) {
        return {
          link: "/checkout/address-and-payment",
          button: "Selanjutnya"
        };
      }
      return {
        link: "/checkout/address-and-payment",
        button: "Lanjut ke Pembayaran"
      };
    },
    payment () {
      return this.$store.state.order.payment;
    },
    paymentId () {
      return this.$store.state.order.paymentId;
    }
  }
};
</script>

<style lang="scss" scoped>
.payment {
  .header {
    font-size: 24px;
    border-bottom: 1px solid $black10;
    padding-bottom: 8px;
    margin-bottom: 24px;

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
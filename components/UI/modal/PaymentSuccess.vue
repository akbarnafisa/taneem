<template>
  <div class="modal-wrapper flex-items">
    <div class="modal-body mt-2">
      <div class="modal-content text-center">
        <div class="svg my-4"></div>
        <p>
          Terimakasih telah membeli produk di Tane'em,
          proses pengiriman akan dilakukan setelah transfer sebelum
          <b>24 jam</b>
        </p>
        <button
          name="close"
          @click="closeModal"
          class="btn btn--medium primary w-100 mt-5 mb-2"
        >Tutup</button>
      </div>
    </div>
    <div @click="closeModal" class="modal-black"></div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$store.commit("order/SET_MODAL_PAYMENT", false);
    }
  }
};
</script>

<style scoped>
.svg {
  width: 100%;
  height: 200px;
  background-image: url(/svg/purchase.svg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
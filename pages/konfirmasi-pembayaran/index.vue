<template>
  <div class="section-header section-white">
    <transition name="page" mode="out-in">
      <confirmation-success v-if="modalActive" @CloseModal="modalActive = false"/>
    </transition>
    <div class="confirmation container">
      <breadcrumbs/>
      <h4 class="underline-header h4-sm mb-0">Konfirmasi Pembayaran</h4>
      <div class="div row mt-6">
        <div class="col-lg-6">
          <p>
            Silakan transfer pembayaran anda ke salah satu rekening berikut. Lalu jangan lupa untuk konfimasi pembayaran anda melalui halaman
            <a
              href="/konfirmasi-pembayaran"
            >Konfirmasi pembayaran</a> setelah melakukan transfer pembayaran.
          </p>
          <div class="d-flex mt-4">
            <img src="/mandiri.png" alt="mandiri">
            <div class="ml-4">
              <div>Naufal Haidar</div>
              <b>1370011619117</b>
            </div>
          </div>
          <div class="flex-items mt-3">
            <img style="max-height: 23px" src="/bri.png" alt="mandiri">
            <div class="ml-4">
              <div>Naufal Haidar</div>
              <b>306201001499506</b>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mt-5 mt-lg-0">
          <confirmation-form class="section-white box-shadow p-3 p-sm-4"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from "@/components/UI/Breadcrumbs";
import ConfirmationForm from "@/components/Sections/Confirmation/Form";
import ConfirmationSuccess from "@/components/UI/modal/ConfirmationSuccess";
export default {
  components: {
    Breadcrumbs,
    ConfirmationForm,
    ConfirmationSuccess
  },
  data() {
    return {
      modalActive: false
    };
  }
};
</script>

<style lang="scss" scoped>
.confirmation {
  .underline-header {
    border-bottom: 4px solid $primary50;
    display: inline;
  }

  p {
    color: $black80;
  }

  a {
    color: $primary40;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
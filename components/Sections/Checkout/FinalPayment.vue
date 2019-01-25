<template>
  <div class="payment">
    <div class="header">Pembayaran</div>
    <div class="wrapper">
      <h5 class="fw-600">Transfer Bank</h5>
      <p>Pembayaran dapat di lakukan ke salah satu rekening taneem berikut</p>
      <div class="d-flex">
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
      <div class="payment__info px-25 py-4 mt-4">
        <div class="row">
          <div class="mb-3 col-md-6">
            <h5 class="fw-700">
              ID Pembayaran:
              <b>wn6xh0d1w_</b>
            </h5>
          </div>
          <div class="mb-3 col-md-6">
            <h5 class="fw-700">
              Total Pembayaran:
              <b>Rp. 260.000</b>
            </h5>
          </div>
        </div>

        <p>
          Harap melakukan
          <b>konfirmasi pembayaran</b> dengan mengirimkan
          <b>bukti transfer, ID Pembayaran dan nama pengirim</b> melalui kontak Craftiserrie berikut:
        </p>
        <div class="m-2">
          <b>Facebook</b>: Taneem
        </div>
        <div class="m-2">
          <b>Whatsapp</b>: 085123123
        </div>
        <p>atau melalui
          <nuxt-link to="/konfirmasi-pembayaran">halaman website kami</nuxt-link>
        </p>
      </div>
    </div>
    <div class="flex-center">
      <button class="btn btn--medium primary w-100 mx-auto mt-5 mw-2">Proses Transaksi</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.payment {
  .header {
    font-size: 24px;
    border-bottom: 1px solid $black10;
    padding-bottom: 8px;
    margin-bottom: 24px;
  }
  b {
    color: $black60;
  }
  a {
    color: $primary50;
    font-weight: 600;
  }
  .payment__info {
    border: 1px dashed $primary50;
    padding: 24px;
  }
}
</style>
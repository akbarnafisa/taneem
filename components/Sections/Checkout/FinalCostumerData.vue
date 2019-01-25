<template>
  <div class="costumer">
    <div class="header">Data Pembeli</div>
    <div class="wrapper row p-0">
      <div class="costumer__address-data col-md-6 mb-4">
        <h5 class="fw-600">Alamat Pengiriman
          <nuxt-link to="/checkout/address-and-payment">Ubah</nuxt-link>
        </h5>
        <div class="costumer__name">Akbar Nafisa Ja'far</div>
        <div
          class="costumer__address"
        >Gamping Kidul RT 02 / RW 019, Ambarketawang, Gamping, YO, Sleman , Indonesia</div>
        <div class="costumer__phone">081213348502</div>
        <div class="costumer__email">akbarnj788@gmail.com</div>
      </div>
      <div class="costumer__shipping col-md-6">
        <h5 class="fw-600">Pengiriman
          <nuxt-link to="/checkout/address-and-payment">Ubah</nuxt-link>
        </h5>
        <div class="costumer__courier">JNE REG Rp. 54.000</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.costumer {
  .header {
    font-size: 24px;
    border-bottom: 1px solid $black10;
    padding-bottom: 8px;
    margin-bottom: 24px;
  }

  .wrapper {
    .costumer__address-data,
    .costumer__shipping {
      h5 {
        margin-bottom: 12px;
      }
      a {
        color: $primary50;
        font-size: $font-medium;
        margin-left: 8px;
      }
    }

    .costumer__name,
    .costumer__address,
    .costumer__phone,
    .costumer__email {
      margin-bottom: 6px;
      color: $black60;
      font-size: $font-medium;
    }

    .costumer__name,
    .costumer__courier {
      font-size: $font-size;
    }
  }
}
</style>
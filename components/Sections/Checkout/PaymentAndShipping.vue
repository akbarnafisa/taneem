<template>
  <div class="costumer">
    <div class="header">Pengiriman dan Pembayaran</div>
    <div class="wrapper d-flex flex-wrap justify-content-between">
      <div class="costumer__courier form__group">
        <div class="form__group-label">
          <label>Kurir Pengiriman</label>
          <div class="required">*Wajib</div>
        </div>
        <label class="form__radio">
          <input type="radio" name="courier" value="JNE REG"> JNE REG Rp. 54.000
        </label>
        <label class="form__radio">
          <input type="radio" name="courier" value="JNE REG"> JNE REG Rp. 54.000
        </label>
        <label class="form__radio">
          <input type="radio" name="courier" value="JNE REG"> JNE REG Rp. 54.000
        </label>
        <label class="form__radio">
          <input type="radio" name="courier" value="JNE REG"> JNE REG Rp. 54.000
        </label>
        <span class="error"></span>
      </div>
      <div class="costumer__payment form__group">
        <div class="form__group-label">
          <label>Metode Pembayaran</label>
        </div>
        <label class="form__radio">
          <input type="radio" name="payment" value="Transfer Bank" checked> Transfer Bank
        </label>
        <span class="error"></span>
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

  .costumer__courier,
  .costumer__payment {
    width: 300px;

    .form__radio {
      display: block;
      margin-bottom: 8px;
      color: $black60;
      cursor: pointer;
    }
  }
}
</style>
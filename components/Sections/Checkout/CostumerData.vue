<template>
  <div class="costumer">
    <div class="header">Data Pembeli</div>
    <form>
      <div class="d-flex flex-wrap justify-content-between">
        <div class="costumer__name form__group">
          <div class="form__group-label">
            <label>Nama Lengkap</label>
            <div class="required">*Wajib</div>
          </div>
          <input placeholder="Nama Lengkap Anda" type="text">
          <span class="error"></span>
        </div>
        <div class="costumer__handphone form__group">
          <div class="form__group-label">
            <label>Handphone</label>
            <div class="required">*Wajib</div>
          </div>
          <input placeholder="Nomor Handphone Anda" type="text">
          <span class="error"></span>
        </div>
      </div>
      <div class="costumer__email form__group">
        <div class="form__group-label">
          <label>Email</label>
        </div>
        <input placeholder="Email Anda" type="email">
        <span class="error"></span>
      </div>

      <div class="costumer__address form__group">
        <div class="form__group-label">
          <label>Alamat Tujuan</label>
          <div class="required">*Wajib</div>
        </div>
        <textarea placeholder="Alamat Lengkap Anda"/>
        <span class="error"></span>
      </div>

      <div class="d-flex flex-wrap justify-content-between">
        <div class="costumer__province form__group">
          <div class="form__group-label">
            <label>Provinsi Tujuan</label>
            <div class="required">*Wajib</div>
          </div>
          <input placeholder="Pilih Provinsi" type="text">
          <span class="error"></span>
        </div>
        <div class="costumer__city form__group">
          <div class="form__group-label">
            <label>Kabupaten Tujuan</label>
            <div class="required">*Wajib</div>
          </div>
          <input placeholder="Pilih Kabupaten" type="text">
          <span class="error"></span>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      required: true,
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
.costumer {
  .header {
    font-size: 24px;
    border-bottom: 1px solid $black10;
    padding-bottom: 8px;
    margin-bottom: 24px;
  }
  .costumer__name,
  .costumer__handphone,
  .costumer__city,
  .costumer__province,
  .costumer__email {
    width: 100%;
    max-width: 335px;
  }
}
</style>
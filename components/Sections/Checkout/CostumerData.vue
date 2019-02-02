<template>
  <div class="costumer">
    <div class="header">Data Pembeli</div>
    <no-ssr>
      <form @input="handleInput">
        <div class="d-flex flex-wrap justify-content-between">
          <div class="costumer__name form__group">
            <div class="form__group-label">
              <label>Nama Lengkap</label>
              <div class="required">*Wajib</div>
            </div>
            <input
              v-focus
              id="name"
              @blur="nameClicked = true"
              :value="data.name"
              :class="finalError.name ? 'error' : null"
              placeholder="Nama Lengkap Anda"
              type="text"
            >
            <!-- v-if="$v.costumerData.name.$invalid && costumerData.nameClicked || $v.costumerData.name.$invalid && sending" -->
            <span
              v-if="finalError.name"
              class="error"
              :class="finalError.name ? 'errorShake' : null"
            >Masukan nama lengkap anda</span>
          </div>
          <div class="costumer__handphone form__group">
            <div class="form__group-label">
              <label>Handphone</label>
              <div class="required">*Wajib</div>
            </div>
            <input
              id="handphone"
              :class="finalError.handphone ? 'error' : null"
              placeholder="Nomor Handphone Anda"
              @blur="handphoneClicked = true"
              :value="data.handphone"
              type="number"
            >
            <span
              v-if="finalError.handphone"
              class="error"
              :class="finalError.handphone ? 'errorShake' : null"
            >Masukan nomor handphone</span>
          </div>
        </div>
        <div class="costumer__email form__group">
          <div class="form__group-label">
            <label>Email</label>
          </div>
          <input id="email" :value="data.email" placeholder="Email Anda" type="email">
        </div>

        <div class="costumer__address form__group">
          <div class="form__group-label">
            <label>Alamat Tujuan</label>
            <div class="required">*Wajib</div>
          </div>
          <textarea
            id="address"
            @blur="addressClicked = true"
            :value="data.address"
            :class="finalError.address ? 'error' : null"
            placeholder="Alamat Lengkap Anda"
          />
          <div class="contoh">Contoh: Jl. Cinta Boulevard No.3 RT 07/02Bintaro, Pesanggrahan, Jaksel</div>
          <span
            v-if="finalError.address"
            class="error"
            :class="finalError.address ? 'errorShake' : null"
          >Masukan alamat lengkap</span>
        </div>

        <div class="d-flex flex-wrap justify-content-between">
          <div class="costumer__province form__group">
            <div class="form__group-label">
              <label>Provinsi Tujuan</label>
              <div class="required">*Wajib</div>
            </div>
            <input
              id="province"
              @blur="provinceClicked = true"
              :value="data.province"
              :class="finalError.province ? 'error' : null"
              placeholder="Pilih Provinsi"
              type="text"
            >
            <span
              v-if="finalError.province"
              class="error"
              :class="finalError.province ? 'errorShake' : null"
            >Masukan alamat provinsi</span>
          </div>
          <div class="costumer__city form__group">
            <div class="form__group-label">
              <label>Kabupaten Tujuan</label>
              <div class="required">*Wajib</div>
            </div>
            <input
              id="city"
              @blur="cityClicked = true"
              :value="data.city"
              :class="finalError.city ? 'error' : null"
              placeholder="Pilih Kabupaten"
              type="text"
            >
            <span
              v-if="finalError.city"
              class="error"
              :class="finalError.city ? 'errorShake' : null"
            >Masukan alamat provinsi</span>
          </div>
        </div>
      </form>
    </no-ssr>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      required: true,
      type: Object
    },
    error: {
      required: true,
      type: Object
    },
    submited: {
      required: true,
      type: Boolean
    }
  },
  directives: {
    focus: {
      inserted(el) {
        if (el.value.trim() === "") {
          el.focus();
        }
      }
    }
  },
  data() {
    return {
      nameClicked: false,
      handphoneClicked: false,
      addressClicked: false,
      provinceClicked: false,
      cityClicked: false
    };
  },
  methods: {
    handleInput(e) {
      const key = e.target.id;
      const value = e.target.value;
      this.$emit("handleInput", {
        key,
        value
      });
    }
  },
  computed: {
    finalError() {
      return {
        name:
          (this.error.name && this.nameClicked) ||
          (this.error.name && this.submited),
        handphone:
          (this.error.handphone && this.handphoneClicked) ||
          (this.error.handphone && this.submited),
        address:
          (this.error.address && this.addressClicked) ||
          (this.error.address && this.submited),
        province:
          (this.error.province && this.provinceClicked) ||
          (this.error.province && this.submited),
        city:
          (this.error.city && this.cityClicked) ||
          (this.error.city && this.submited)
      };
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

  .contoh {
    color: $black50;
    font-size: $font-medium;
    margin: 4px 0;
  }
  .costumer__name,
  .costumer__handphone,
  .costumer__city,
  .costumer__province,
  .costumer__email {
    width: 100%;
    max-width: 327px;
  }
}
</style>
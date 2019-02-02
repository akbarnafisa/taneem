<template>
  <div class="form">
    <div class="header">Data Pembeli</div>
    <div class="form__name form__group">
      <div class="form__group-label">
        <label>Nama Lengkap Pemesan</label>
        <div class="required">*Wajib</div>
      </div>
      <input
        @blur="fullnameClicked = true"
        v-model="form.fullname"
        :class="error.fullname ? 'error' : null"
        placeholder="Contoh: Akbar Nafisa"
        type="text"
      >
      <span
        v-if="error.fullname"
        class="error"
        :class="error.fullname ? 'errorShake' : null"
      >Masukan nama lengkap anda</span>
    </div>
    <div class="form__name form__group">
      <div class="form__group-label">
        <label>ID pesanan</label>
        <div class="required">*Wajib</div>
      </div>
      <input
        @blur="paymentIdClicked = true"
        :class="error.paymentId ? 'error' : null"
        v-model="form.paymentId"
        placeholder="Contoh: a9dzj_"
        type="text"
      >
      <span
        v-if="error.paymentId"
        class="error"
        :class="error.paymentId ? 'errorShake' : null"
      >Masukan ID pesanan anda</span>
    </div>
    <!-- <div class="form__name form__group">
      <div class="form__group-label">
        <label>Nama Pemilik Rekening</label>
        <div class="required">*Wajib</div>
      </div>
      <input id="name" placeholder="Contoh: Akbar Nafisa" type="text">
      <span class="error">Masukan ID pesanan anda</span>
    </div>
    <div class="form__name form__group">
      <div class="form__group-label">
        <label>Jumlah Transfer</label>
        <div class="required">*Wajib</div>
      </div>
      <input id="name" placeholder="Contoh: 150.000" type="text">
      <span class="error">Masukan jumlah transfer pesanan anda</span>
    </div>
    <div class="form__name form__group">
      <div class="form__group-label">
        <label>Tanggal Transfer</label>
        <div class="required">*Wajib</div>
      </div>
      <input id="name" placeholder="Contoh: 150.000" type="text">
      <span class="error">Masukan waktu transfer anda</span>
    </div>-->
    <div class="form__name form__group">
      <div class="form__group-label">
        <label>Nama Pemilik Rekening</label>
        <div class="required">*Wajib</div>
      </div>
      <input
        @blur="pemilikRekeningClicked = true"
        :class="error.pemilikRekening ? 'error' : null"
        v-model="form.pemilikRekening"
        placeholder="Contoh: Akbar Nafisa"
        type="text"
      >
      <span
        v-if="error.pemilikRekening"
        class="error"
        :class="error.pemilikRekening ? 'errorShake' : null"
      >Masukan nama pemilik rekening</span>
    </div>
    <div class="form__payment form__group">
      <div class="form__group-label">
        <label>Rekening Tujuan</label>
        <div class="required">*Wajib</div>
      </div>
      <label class="form__radio">
        <input type="radio" name="payment" v-model="form.bankTujuan" value="BCA">
        BCA 389 040 3599 a.n Ridho Khusnul Fadhil
      </label>
      <label class="form__radio">
        <input type="radio" name="payment" v-model="form.bankTujuan" value="Mandiri"> Mandiri 13 000 136 33816 a.n Ridho Khusnul Fadhil
      </label>
      <span
        v-if="error.bankTujuan"
        class="error"
        :class="error.bankTujuan ? 'errorShake' : null"
      >Pilih bank tujuan anda</span>
    </div>
    <div class="form__name form__group mb-4">
      <div class="form__group-label">
        <label>Bukti Pembayaran</label>
        <div class="required">*Wajib</div>
      </div>
      <p>Foto struk atau screenshoot bukti pembayaran</p>
      <div class="d-flex">
        <img :src="imageTransfer" class="image-payment">
        <input
          class="ml-3 pointer"
          type="file"
          accept="image/*"
          id="fileInput_a"
          @input="filesChange($event.target.files[0])"
        >
      </div>
      <span
        v-if="error.pemilikRekening"
        class="error mt-2"
        :class="error.pemilikRekening ? 'errorShake' : null"
      >Bukti pembayaran tidak boleh kosong</span>
    </div>
    <div
      v-if="submitError"
      :class="error.buktiTransfer ? 'errorShake' : null"
      class="error my-3"
    >Data anda belum lengkap</div>
    <button @click="handleSubmit" class="btn btn--medium primary w-100">Konfirmasi</button>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import { ContentService } from "~/utils/api.service";

export default {
  mixins: [validationMixin],
  data() {
    return {
      submited: false,
      submitError: false,
      form: {
        fullname: null,
        paymentId: null,
        pemilikRekening: null,
        bankTujuan: null,
        buktiTransfer: null
      },
      fullnameClicked: false,
      paymentIdClicked: false,
      pemilikRekeningClicked: false,
      bankTujuan: false,
      imageTransfer: null
    };
  },
  methods: {
    handleSubmit() {
      this.$v.form.$touch();
      this.submited = true;
      if (this.$v.form.$invalid) {
        this.submitError = true;
      } else {
        this.submitError = false;

        const UploadFile = ContentService.upload(this.form.buktiTransfer);

        Promise.all([UploadFile])
          .then(([val]) => {
            console.log(val);
            ContentService.post("konfirmasi", {
              id_pembayaran: this.form.fullname,
              nama_pembeli: this.form.paymentId,
              nama_pemiliki_rekening: this.form.pemilikRekening,
              rekening_tujuan: this.form.bankTujuan,
              bukti_transfer: val
            });
            // data.monthlyBillImg = bill;
            // data.electricCapacityImg = capacity;
            // this.$store.dispatch("register/REGISTER_PROCESS", data);
          })
          .then(err => console.log(err));
        // this.$router.push("/checkout/review");
      }
    },
    filesChange(image) {
      let fileReader = new FileReader();
      fileReader.readAsDataURL(image);
      fileReader.onload = e => {
        this.imageTransfer = fileReader.result;
      };
      this.form.buktiTransfer = image;
    }
  },
  computed: {
    error() {
      return {
        fullname:
          (this.$v.form.fullname.$invalid && this.fullnameClicked) ||
          (this.$v.form.fullname.$invalid && this.submited),
        paymentId:
          (this.$v.form.paymentId.$invalid && this.paymentIdClicked) ||
          (this.$v.form.paymentId.$invalid && this.submited),
        pemilikRekening:
          (this.$v.form.pemilikRekening.$invalid &&
            this.pemilikRekeningClicked) ||
          (this.$v.form.pemilikRekening.$invalid && this.submited),
        bankTujuan: this.$v.form.bankTujuan.$invalid && this.submited,
        buktiTransfer: this.$v.form.buktiTransfer.$invalid && this.submited
      };
    }
  },
  validations: {
    form: {
      fullname: {
        required
      },
      paymentId: {
        required
      },
      pemilikRekening: {
        required
      },
      bankTujuan: {
        required
      },
      buktiTransfer: {
        required
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  .header {
    font-size: 24px;
    border-bottom: 1px solid $black10;
    padding-bottom: 8px;
    margin-bottom: 24px;
  }

  .form__radio {
    display: block;
    margin: 8px 0;
    color: $black60;
    cursor: pointer;
  }

  .image-payment {
    width: 80px;
    height: 80px;
    border-radius: 5px;
    border: 2px dashed $black40;
  }
}
</style>
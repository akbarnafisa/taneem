<template>
  <div class="costumer">
    <div class="header">Pengiriman dan Pembayaran</div>
    <form @input="handleInput" class="wrapper d-flex flex-wrap justify-content-between">
      <div class="costumer__courier form__group">
        <div class="form__group-label">
          <label>Kurir Pengiriman</label>
          <div class="required">*Wajib</div>
        </div>
        <label class="form__radio">
          <input type="radio" name="courier" value="JNE REG" :checked="data.courier === 'JNE REG'"> JNE REG Rp. 54.000
        </label>
        <span
          v-if="finalError.courier"
          class="error"
          :class="finalError.courier ? 'errorShake' : null"
        >Masukan alamat provinsi</span>
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
    </form>
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
  data() {
    return {
      courierClicked: false
    };
  },
  methods: {
    handleInput(e) {
      const key = e.target.name;
      const value = e.target.value;
      this.courierClicked = true;
      this.$emit("handleInput", {
        key,
        value
      });
    }
  },
  computed: {
    finalError() {
      return {
        courier:
          (this.error.courier && this.courierClicked) ||
          (this.error.name && this.submited)
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
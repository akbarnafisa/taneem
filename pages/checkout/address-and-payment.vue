<template>
  <div class="container section-header px-2">
    <div class="row">
      <div class="col-lg-8">
        <costumer-data
          id="alamat-pengiriman"
          class="section-white box-shadow p-3 p-sm-4"
          @handleInput="handleInput($event)"
          :data="costumer"
          :error="error"
          :submited="submited"
        />

        <payment-and-shipping
          id="pengiriman"
          class="mt-5 section-white box-shadow p-3 p-sm-4"
          @handleInput="handleInput($event)"
          :data="costumer"
          :error="error"
          :submited="submited"
        />
      </div>
      <div class="col-lg-4 mt-2">
        <payment-detail
          @click.native="handleSubmit"
          type="checkout-address"
          class="mt-7 mt-lg-3 px-2"
        >
          <div
            v-if="submitError"
            :class="error.bankTujuan ? 'errorShake' : null"
            class="error mb-3"
          >Data anda belum lengkap</div>
        </payment-detail>
      </div>
    </div>
  </div>
</template>

<script>
import CostumerData from "@/components/Sections/Checkout/CostumerData";
import PaymentAndShipping from "@/components/Sections/Checkout/PaymentAndShipping";
import PaymentDetail from "@/components/UI/PaymentDetail";

import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  components: {
    CostumerData,
    PaymentAndShipping,
    PaymentDetail
  },
  created() {
    this.$store.commit("order/LOAD_COSTUMER");
  },
  data() {
    return {
      submited: false,
      submitError: false
    };
  },
  validations: {
    costumer: {
      name: {
        required
      },
      handphone: {
        required
      },
      address: {
        required
      },
      province: {
        required
      },
      city: {
        required
      },
      courier: {
        required
      }
    }
  },
  computed: {
    error() {
      return {
        name: this.$v.costumer.name.$invalid,
        handphone: this.$v.costumer.handphone.$invalid,
        address: this.$v.costumer.address.$invalid,
        province: this.$v.costumer.province.$invalid,
        city: this.$v.costumer.city.$invalid,
        courier: this.$v.costumer.courier.$invalid
      };
    },
    costumer() {
      return { ...this.$store.state.order.dataCostumer };
    }
  },
  methods: {
    handleInput(data) {
      this.costumer[data.key] = data.value;
      this.$store.commit("order/EDIT_COSTUMER", data);
    },
    handleSubmit() {
      this.$v.costumer.$touch();
      this.submited = true;
      if (this.$v.costumer.$invalid) {
        this.submitError = true;
      } else {
        this.submitError = false;
        this.$router.push("/checkout/review");
      }
    }
  }
};
</script>

<style scoped>
</style>


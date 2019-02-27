<template>
  <div class="costumer">
    <div class="header">Data Pembeli</div>
    <no-ssr>
      <form @change="handleInput">
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
          <input
            id="email"
            :value="data.email"
            placeholder="Email Anda"
            type="email"
          >
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
            <!-- <input
              id="province"
              @blur="provinceClicked = true"
              :value="data.province"
              :class="finalError.province ? 'error' : null"
              placeholder="Pilih Provinsi"
              type="text"
            > -->
            <select 
              id="province"
              @blur="provinceClicked = true"
              v-model="selectedProvince"
              @change="getCity($event)"
              :class="finalError.province ? 'error' : null"
              >
              <option disabled value="" >Pilih Pronvinsi</option>
              <option 
                v-for="(value,index) in provinceData"
                :key="index"
                :value="value"
              >
                {{value.province}}
              </option>
            </select>
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
            <!-- <input
              id="city"
              @blur="cityClicked = true"
              :value="data.city"
              :class="finalError.city ? 'error' : null"
              placeholder="Pilih Kabupaten"
              type="text"
            > -->
            <select 
              id="city"
              @blur="cityClicked = true"
              @change="getCost"
              v-model="selectedCity"
              :class="finalError.province ? 'error' : null"
              >
              <option disabled value="" >Pilih Kabupaten</option>
              <option 
                v-for="(value,index) in cityData"
                :key="index"
                :value="value"
              >
                {{value.city_name}}
              </option>
            </select>
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
import { ContentService } from '~/utils/api.service'
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
      inserted (el) {
        if (el.value.trim() === "") {
          el.focus();
        }
      }
    }
  },
  created () {
    this.getProvince()
  },
  mounted () {
    this.setData();

    if (this.selectedProvince) {
      this.getCity();
    }
    if (this.selectedCity) {
      this.getCost();
    }
  },
  data () {
    return {
      selectedProvince: null,
      selectedCity: null,
      nameClicked: false,
      handphoneClicked: false,
      addressClicked: false,
      provinceClicked: false,
      cityClicked: false,
      provinceData: [],
      cityData: []
    };
  },
  methods: {
    setData () {
      this.selectedProvince = this.data.province;
      this.selectedCity = this.data.city;
    },
    handleInput (e) {
      const key = e.target.id;
      let value = e.target.value;
      if (key === 'province') {
        value = this.selectedProvince
      } else if (key === 'city') {
        value = this.selectedCity
      }
      this.$emit("handleInput", {
        key,
        value
      });
    },
    getProvince () {
      if (this.selectedCity) {
        this.$store.commit('order/EDIT_COSTUMER', {
          key: 'city',
          value: null
        })
        this.$store.commit('order/EDIT_COSTUMER', {
          key: 'courier',
          value: null
        })
      }
      ContentService.getDestination('get', 'province').then(res => {
        this.provinceData = res.data.rajaongkir.results
      });

    },
    getCity () {
      if (this.$store.state.order.courierData) {
        this.$store.commit('order/SET_COURIER', null)
        this.$store.commit('order/EDIT_COSTUMER', {
          key: 'courier',
          value: null
        })
      }
      ContentService.getDestination('get', 'city', {
        province: this.selectedProvince.province_id
      }).then(res => {
        this.cityData = res.data.rajaongkir.results
      });
    },
    getCost (value) {
      this.$store.commit('order/EDIT_COSTUMER', {
        key: 'courier',
        value: null
      })
      ContentService.getDestination('post', 'cost', {
        origin: 501,
        destination: this.selectedCity.city_id,
        weight: 1000,
        courier: 'jne'
      }).then(res => {
        const data = res.data.rajaongkir.results[0].costs
        this.$store.commit('order/SET_COURIER', data)
      })
    }
  },
  computed: {
    finalError () {
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
    max-width: 315px;
    @include media(lg) {
      max-width: 327px;
    }
  }
}
</style>
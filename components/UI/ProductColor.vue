<template>
  <div class="product__color">
    <div class="label">Pilih warna yang tersedia</div>
    <button
      class="btn btn--block tertiary mr-2 mb-2"
      :class="selected === color ? 'active' : null"
      v-for="(color, index) in colors"
      :key="color + index"
      @click="handleClick(color)"
    >{{color}}</button>
    <p class="selected" v-if="selected">
      Warna Pilihan Anda :
      <b>{{selected}}</b>
    </p>
    <p
      class="error"
      :class="this.error & this.selected === null ? 'errorShake' : null"
      v-if="this.error & this.selected === null"
    >Pilih Warna Anda Dahulu</p>
  </div>
</template>

<script>
export default {
  props: {
    colors: {
      type: Array,
      required: true
    },
    selected: {
      type: String
    },
    error: {
      type: Boolean,
      require: true
    }
  },
  methods: {
    handleClick(value) {
      this.$emit("handleInput", {
        key: "color",
        value
      });
    }
  }
};
</script>

<style scoped>
</style>
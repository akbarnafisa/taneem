<template>
  <div class="product__size">
    <div class="label">Pilih ukuran yang tersedia</div>
    <button
      class="btn btn--block tertiary mr-2 mb-2"
      :class="selected === size ? 'active' : null"
      v-for="(size, index) in sizes"
      :key="size + index"
      @click="handleClick(size)"
    >{{size}}</button>
    <p class="selected" v-if="selected">
      Ukuran Pilihan Anda :
      <b>{{selected}}</b>
    </p>
    <p
      class="error"
      :class="this.error & this.selected === null ? 'errorShake' : null"
      v-if="this.error & this.selected === null"
    >Pilih Ukuran Anda Dahulu</p>
  </div>
</template>

<script>
export default {
  props: {
    sizes: {
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
        key: "size",
        value
      });
    }
  }
};
</script>

<style scoped>
</style>
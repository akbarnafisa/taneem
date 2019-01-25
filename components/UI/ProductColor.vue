<template>
  <div class="product__color">
    <div class="label">Pilih warna yang tersedia</div>
    <button
      class="btn btn--block tertiary mr-2 mb-3"
      v-for="(color, index) in colors"
      :key="color + index"
    >{{color}}</button>
  </div>
</template>

<script>
export default {
  props: {
    colors: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
</style>
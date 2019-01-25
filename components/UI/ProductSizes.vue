<template>
  <div class="product__size">
    <div class="label">Pilih ukuran yang tersedia</div>
    <button
      class="btn btn--block tertiary mr-2"
      v-for="(size, index) in sizes"
      :key="size + index"
    >{{size}}</button>
  </div>
</template>

<script>
export default {
  props: {
    sizes: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
</style>
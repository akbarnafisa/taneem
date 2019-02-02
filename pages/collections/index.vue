<template>
  <div></div>
</template>

<script>
export default {
  created() {
    console.log(this.$route.name);
    if (this.$route.name === "collections") {
      this.$router.push("/produk");
    }
  }
};
</script>

<style scoped>
</style>
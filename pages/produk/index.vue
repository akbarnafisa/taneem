<template>
  <div>
    <div class="section-white">
      <section class="container">
        <breadcrumbs class="section pb-0" />

        <produk-list
          v-for="(category, index, key) in CategoryProduct"
          :key="index"
          class="section"
          :class="key == 0 ? 'pt-0' : null"
          type="page-home"
          :header="index"
          :data="category.slice(0,8)"
        />
        <produk-list
          class="section pt-0"
          type="page-home"
          header="Seluruh Produk"
          :data="AllProduct.slice(0,8)"
        />
      </section>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from "@/components/UI/Breadcrumbs";
import ProdukList from "@/components/UI/ProdukList";
export default {
  name: "home",
  components: {
    ProdukList,
    Breadcrumbs
  },
  async asyncData ({ store }) {
    if (store.state.products.listCategory === null) {
      await store.dispatch("products/FETCH_CATEGORY");
    }
  },
  data () {
    return {};
  },
  computed: {
    AllProduct () {
      return this.$store.state.products.allProducts.slice(0, 8);
    },
    CategoryProduct () {
      return this.$store.state.products.category;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

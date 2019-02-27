<template>
  <div class="section-white">
    <div class="container product section">
      <div class="flex-center my-7">
        <h4 class="fw-700 h3-sm">{{heading}}</h4>
      </div>
      <div class="product__header row">
        <breadcrumbs class="m-0 col-md-8 col-lg-9" />
        <div class="product__view mt-5 col-md-4 col-lg-3 mt-md-0">
          <!-- <produk-filter/> -->
          <produk-sort />
        </div>
      </div>
      <produk-list :data="Products" />
    </div>
  </div>
</template>

<script>
import Breadcrumbs from "@/components/UI/Breadcrumbs";
import ProdukFilter from "@/components/Sections/Produk/ProdukFilter";
import ProdukSort from "@/components/Sections/Produk/ProdukSort";
import ProdukList from "@/components/UI/ProdukList";

export default {
  components: {
    Breadcrumbs,
    ProdukSort,
    ProdukFilter,
    ProdukList
  },
  data () {
    return {};
  },
  async asyncData ({ store }) {
    if (store.state.products.listCategory === null) {
      await store.dispatch("products/FETCH_CATEGORY");
    }
  },
  computed: {
    Products () {
      const key = this.$route.params.id;
      if (key !== "seluruh-produk")
        return this.$store.state.products.category[key];

      return this.$store.state.products.allProducts;
    },
    heading () {
      return this.$route.params.id.replace(/\-/g, " ");
    }
  }
};
</script>

<style lang="scss" scoped>
.product {
  h4 {
    border-bottom: 4px solid $primary50;
    color: $black80;
    text-transform: capitalize;
  }
  .m-0 {
    margin: 0 !important;
  }
  .product__header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-wrap: wrap;

    .underline-header {
      border-bottom: 4px solid $primary40;
    }
    .product__view {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
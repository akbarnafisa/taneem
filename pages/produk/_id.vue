<template>
  <div>
    <div class="section-white">
      <div class="container section pb-5 pb-md-7">
        <breadcrumbs />
        <product-details :product="product" />
      </div>
    </div>

    <div class="section section-2">
      <product-slider
        class="container wrapper py-5 py-md-7"
        :data="Products"
        :autoplay="false"
        header="Produk Lainya"
      />
      <!-- <product-slider
        class="container wrapper py-5 py-md-7"
        :data="SelectionProduct"
        :autoplay="false"
        :linkToAllProduct="false"
        header="Produk yang baru Anda lihat"
      />-->
    </div>
  </div>
</template>

<script>
import ProductSlider from "@/components/UI/ProductSlider";
import Breadcrumbs from "@/components/UI/Breadcrumbs";
import ProductDetails from "@/components/Sections/Produk/ProductDetails";

export default {
  components: {
    Breadcrumbs,
    ProductSlider,
    ProductDetails
  },
  async asyncData ({ store, route }) {
    if (store.state.products.listCategory === null) {
      await store.dispatch("products/FETCH_CATEGORY");
    }
    const id = route.params.id.split("-")[1];
    return {
      product: store.getters["products/GET_PRODUCT"](id)
    };
  },
  data () {
    return {};
  },
  computed: {
    Products () {
      const products = this.$store.state.products.allProducts;
      return this.product.nextData
        .map(v => {
          if (products[v]) {
            return products[v];
          }
        })
        .filter(Boolean);
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  overflow: hidden;

  .underline-header {
    border-bottom: 4px solid $primary40;
  }

  a {
    color: $primary50;
    font-weight: 600;
    font-size: 14px;

    @include media(sm) {
      font-size: 16px;
    }
  }
}

.section-2 {
  background-color: $lightgrey;
}
</style>
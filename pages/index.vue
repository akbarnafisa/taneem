<template>
  <div>
    <section class="container section-header">
      <home-slider :data="homeSliderData" />
    </section>
    <div class="section-white">
      <section class="container">
        <produk-list
          class="section"
          type="page-home"
          header="Produk Pilihan"
          :data="SelectionProduct"
        />
        <produk-list
          class="section"
          type="page-home"
          header="Best Seller"
          :data="BestSellerProduct"
        />
      </section>
    </div>
  </div>
</template>

<script>
import HomeSlider from "@/components/Sections/Home/HomeSlider";
import ProdukList from "@/components/UI/ProdukList";
export default {
  name: "home",
  components: {
    HomeSlider,
    ProdukList
  },
  async asyncData ({ store }) {
    if (store.state.home.sliders === null) {
      await store.dispatch("home/FETCH_SLIDER");
    }
    if (store.state.products.listCategory === null) {
      await store.dispatch("products/FETCH_CATEGORY");
    }
  },
  data () {
    return {};
  },
  computed: {
    homeSliderData () {
      return this.$store.state.home.sliders;
    },
    SelectionProduct () {
      return this.$store.state.products.category["produk-pilihan"] && this.$store.state.products.category["produk-pilihan"].slice(0, 8);
    },
    BestSellerProduct () {
      return this.$store.state.products.category["best-seller"] && this.$store.state.products.category["best-seller"].slice(0, 8);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

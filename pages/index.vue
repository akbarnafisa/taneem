<template>
  <div>
    <section class="container section-header">
      <home-slider :data="homeSliderData" />
    </section>
    <div class="section-white">
      <section class="container">
        <produk-list
          v-if="SelectionProduct"
          class="section"
          type="page-home"
          :header="reverseObject['5c53ddf3151b4805957a69b7']"
          :data="SelectionProduct"
        />
        <produk-list
          v-if="BestSellerProduct"
          class="section"
          type="page-home"
          :header="reverseObject['5c53ddfc151b4805957a69b8']"
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
      const key = this.reverseObject['5c53ddf3151b4805957a69b7']
      return this.$store.state.products.category[key] && this.$store.state.products.category[key].slice(0, 8);
    },
    BestSellerProduct () {
      const key = this.reverseObject['5c53ddfc151b4805957a69b8']
      return this.$store.state.products.category[key] && this.$store.state.products.category[key].slice(0, 8);
    },
    reverseObject () {
      const ret = {};
      const obj = this.$store.state.products.listCategory
      Object.keys(obj).forEach((key) => {
        ret[obj[key]] = key;
      });
      return ret;
    },
  }
};
</script>

<style lang="scss" scoped>
</style>

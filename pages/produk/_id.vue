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
import { ContentService } from '~/utils/api.service'

export default {
  components: {
    Breadcrumbs,
    ProductSlider,
    ProductDetails
  },
  async asyncData ({ app, store, route }) {
    if (store.state.products.listCategory === null) {
      await store.dispatch("products/FETCH_CATEGORY");
    }
    const self = this
    const id = route.params.id.split("-")[1];
    const product = store.getters["products/GET_PRODUCT"](id)
    const variation = await new Promise((resolve, reject) => {
      ContentService.get('variasi', {
        produk_id: product._id
      })
        .then(res => {
          let data = {}
          res.data.data.map(val => {
            const key = `${val.color}${val.size}`.toLowerCase().replace(/ /g, "")
            data = {
              ...data,
              [key]: val.quantity
            }
          })
          store.commit('products/SET_VARIATIONS', {
            key: store.state.products.keyList[id],
            data
          })
          resolve(data)
        })
        .catch(err => {
          console.log(err)
          app.router.push('/')
        })
    })

    return {
      product,
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
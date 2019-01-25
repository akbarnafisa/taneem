<template>
  <div class="container product">
    <breadcrumbs/>
    <div class="product__header">
      <h5 class="underline-header h4-sm mb-0">Seluruh Produk</h5>
      <div class="product__view mt-5 mt-md-0">
        <produk-filter/>
        <produk-sort/>
      </div>
    </div>
    <produk-list :data="Products"/>
  </div>
</template>

<script>
import Breadcrumbs from "@/components/UI/Breadcrumbs";
import ProdukFilter from "@/components/Sections/Produk/ProdukFilter";
import ProdukSort from "@/components/Sections/Produk/ProdukSort";
import ProdukList from "@/components/Sections/Produk/ProdukList";
export default {
  components: {
    Breadcrumbs,
    ProdukSort,
    ProdukFilter,
    ProdukList
  },
  data() {
    return {
      Products: [
        {
          id: "123335123",
          image: "/images/produk3.jpg",
          link: "/",
          name: "18113",
          price: 130000,
          fromDiscount: 0
        },
        {
          id: "1233sdas3",
          image: "/images/produk1.jpg",
          link: "/",
          name: "18114",
          price: 120000,
          fromDiscount: 130000
        },
        {
          id: "123asd3sd3zxczxc",
          image: "/images/produk2.jpg",
          link: "/",
          name: "18115",
          price: 100000,
          fromDiscount: 130000
        },
        {
          id: "1233sd35123",
          image: "/images/produk5.jpg",
          link: "/",
          name: "18116",
          price: 110000,
          fromDiscount: 130000
        },
        {
          id: "1233sdasdas3",
          image: "/images/produk4.jpg",
          link: "/",
          name: "18117",
          price: 110000,
          fromDiscount: 130000
        },
        {
          id: "123asd3sasdd3zxczxc",
          image: "/images/produk2.jpg",
          link: "/",
          name: "18118",
          price: 100000,
          fromDiscount: 0
        },
        {
          id: "123335123",
          image: "/images/produk3.jpg",
          link: "/",
          name: "18113",
          price: 130000,
          fromDiscount: 0
        },
        {
          id: "1233sdas3",
          image: "/images/produk1.jpg",
          link: "/",
          name: "18114",
          price: 120000,
          fromDiscount: 130000
        },
        {
          id: "123asd3sd3zxczxc",
          image: "/images/produk2.jpg",
          link: "/",
          name: "18115",
          price: 100000,
          fromDiscount: 130000
        },
        {
          id: "1233sd35123",
          image: "/images/produk5.jpg",
          link: "/",
          name: "18116",
          price: 110000,
          fromDiscount: 130000
        },
        {
          id: "1233sdasdas3",
          image: "/images/produk4.jpg",
          link: "/",
          name: "18117",
          price: 110000,
          fromDiscount: 130000
        },
        {
          id: "123asd3sasdd3zxczxc",
          image: "/images/produk2.jpg",
          link: "/",
          name: "18118",
          price: 100000,
          fromDiscount: 0
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.product {
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
      max-width: 464px;
      display: flex;
      align-items: center;
    }
  }
}
</style>
<template>
  <div>
    <div class="container pb-5 pb-md-7">
      <breadcrumbs/>
      <product-details :product="product"/>
    </div>
    <div class="section section-2">
      <product-slider
        class="container wrapper py-5 py-md-7"
        :data="SelectionProduct"
        :autoplay="false"
        header="Produk Lainya"
      />
      <product-slider
        class="container wrapper py-5 py-md-7"
        :data="SelectionProduct"
        :autoplay="false"
        :linkToAllProduct="false"
        header="Produk yang baru Anda lihat"
      />
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
  data() {
    return {
      product: {
        id: "123335123",
        images: [
          "/images/produk3.jpg",
          "/images/produk1.jpg",
          "/images/produk2.jpg",
          "/images/produk4.jpg"
        ],
        name: "18113",
        price: 130000,
        fromDiscount: 150000,
        colors: ["Grey", "Crepe Pink", "Peanut Brown", "Aqua"],
        sizes: ["S", "M", "L"],
        bahan: "Brukat",
        syari: true,
        hamil: true,
        stock: 20,
        desc: `Celana yang terbuat dari bahan katun Stretch yang nyaman di pakai.di bagian samping pinggang memakai sleting.dan bisa di pakai ke kantor atau juga bisa di pakai untuk hangout bareng teman.tinggal di padukan memakai atasan polos atau cardigan,
 `
      },
      SelectionProduct: [
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
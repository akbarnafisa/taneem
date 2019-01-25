<template>
  <div>
    <section class="container p-0">
      <home-slider :data="homeSliderData"/>
    </section>
    <section class="container section">
      <product-slider header="Produk Pilihan" :data="SelectionProduct"/>
      <product-slider header="Best Seller" :data="BestSellerProduct"/>
    </section>
  </div>
</template>

<script>
import ProductSlider from "@/components/UI/ProductSlider";
import HomeSlider from "@/components/Sections/Home/HomeSlider";
export default {
  name: "home",
  components: {
    HomeSlider,
    ProductSlider
  },
  data() {
    return {
      homeSliderData: [
        {
          id: "12333",
          image: "/images/homeslider1.jpg",
          link: "/"
        },
        {
          id: "1233sd3",
          image: "/images/homeslider2.jpg",
          link: "/"
        },
        {
          id: "123asd3sd3",
          image: "/images/homeslider3.jpg",
          link: "/"
        }
      ],
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
      ],
      BestSellerProduct: [
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
          id: "123335123",
          image: "/images/produk3.jpg",
          link: "/",
          name: "18113",
          price: 130000,
          fromDiscount: 0
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
          id: "123asd3sd3zxczxc",
          image: "/images/produk2.jpg",
          link: "/",
          name: "18115",
          price: 100000,
          fromDiscount: 130000
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>

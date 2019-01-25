<template>
  <div class="container articles section pt-0">
    <breadcrumbs/>
    <h5 class="underline-header h4-sm mb-0">Seluruh Artikel</h5>
    <list-articles :articles="articles"/>
  </div>
</template>

<script>
import Breadcrumbs from "@/components/UI/Breadcrumbs";
import ListArticles from "@/components/Sections/Article/ListArticles";
export default {
  components: {
    Breadcrumbs,
    ListArticles
  },
  data() {
    return {
      articles: [
        {
          thumbnail: "/images/homeslider1.jpg",
          title: "Perbedaan Antara Pulse Pouring Dengan Continuous Pouring",
          content:
            "Setiap orang mempunyai cara sendiri untuk menikmati kopi. Kenikmatan rasa ini biasanya berbanding lurus dengan teknik/metode apa yang digunakan untuk menyeduh kopinya. Bagi home brewers yang suka sekali mengulik kopi, metode/teknik tertentu termasuk saat menuangkan air, menjadi salah satu elemen penting yang dipertimbangkan saat menyeduh kopi.",
          date: new Date(),
          link: "artikel-taneem"
        },
        {
          thumbnail: "/images/homeslider2.jpg",
          title: "Perbedaan Antara Pulse Pouring Dengan Continuous Pouring",
          content:
            "Setiap orang mempunyai cara sendiri untuk menikmati kopi. Kenikmatan rasa ini biasanya berbanding lurus dengan teknik/metode apa yang digunakan untuk menyeduh kopinya. Bagi home brewers yang suka sekali mengulik kopi, metode/teknik tertentu termasuk saat menuangkan air, menjadi salah satu elemen penting yang dipertimbangkan saat menyeduh kopi.",
          date: new Date(),
          link: "artikel-taneem"
        },
        {
          thumbnail: "/images/homeslider1.jpg",
          title: "Perbedaan Antara Pulse Pouring Dengan Continuous Pouring",
          content:
            "Setiap orang mempunyai cara sendiri untuk menikmati kopi. Kenikmatan rasa ini biasanya berbanding lurus dengan teknik/metode apa yang digunakan untuk menyeduh kopinya. Bagi home brewers yang suka sekali mengulik kopi, metode/teknik tertentu termasuk saat menuangkan air, menjadi salah satu elemen penting yang dipertimbangkan saat menyeduh kopi.",
          date: new Date(),
          link: "artikel-taneem"
        },
        {
          thumbnail: "/images/homeslider3.jpg",
          title: "Perbedaan Antara Pulse Pouring Dengan Continuous Pouring",
          content:
            "Setiap orang mempunyai cara sendiri untuk menikmati kopi. Kenikmatan rasa ini biasanya berbanding lurus dengan teknik/metode apa yang digunakan untuk menyeduh kopinya. Bagi home brewers yang suka sekali mengulik kopi, metode/teknik tertentu termasuk saat menuangkan air, menjadi salah satu elemen penting yang dipertimbangkan saat menyeduh kopi.",
          date: new Date(),
          link: "artikel-taneem"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.articles {
  .underline-header {
    border-bottom: 4px solid $primary50;
    display: inline;
  }
}
</style>
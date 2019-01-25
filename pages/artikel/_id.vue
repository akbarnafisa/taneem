<template>
  <div>
    <div class="section container">
      <div>
        <img :alt="article.title" :src="`${article.thumbnail}`">
      </div>
      <Breadcrumbs/>
      <h4 class="h3-sm text-center fw-700">{{article.title}}</h4>
      <p class="text-center mb-5">{{article.date}}</p>
      <div class="mw-3 mx-auto content">
        <p>{{article.content}}</p>
        <ShareSocial class="mt-7" :title="article.title"/>
      </div>
    </div>
    <div v-if="articles.length > 0" class="section bg-semiwhite section-2">
      <div class="container">
        <h5 class="underline-header h4-sm mb-0">Artikel Lainya</h5>
        <ListArticles :articles="articles"/>
      </div>
    </div>
  </div>
</template>

<script>
import ShareSocial from "@/components/UI/ShareSocial";
import ListArticles from "@/components/Sections/Article/ListArticles";
import Breadcrumbs from "@/components/UI/Breadcrumbs";

export default {
  components: {
    ListArticles,
    ShareSocial,
    Breadcrumbs
  },
  data() {
    return {
      article: {
        thumbnail: "/images/homeslider1.jpg",
        title: "Perbedaan Antara Pulse Pouring Dengan Continuous Pouring",
        content:
          "Setiap orang mempunyai cara sendiri untuk menikmati kopi. Kenikmatan rasa ini biasanya berbanding lurus dengan teknik/metode apa yang digunakan untuk menyeduh kopinya. Bagi home brewers yang suka sekali mengulik kopi, metode/teknik tertentu termasuk saat menuangkan air, menjadi salah satu elemen penting yang dipertimbangkan saat menyeduh kopi.",
        date: new Date(),
        link: "artikel-taneem"
      },
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
.underline-header {
  border-bottom: 4px solid $primary50;
  display: inline;
}
</style>



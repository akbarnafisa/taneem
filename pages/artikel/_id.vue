<template>
  <div>
    <div class="section-white">
      <div class="section-header container">
        <div>
          <img :alt="article.title" :src="`${article.thumbnail}`">
        </div>
        <Breadcrumbs/>
        <h4 class="h3-sm mw-3 mx-auto text-center fw-700">{{article.title}}</h4>
        <p class="text-center mb-5 mt-3">{{article.date}}</p>
        <div class="mw-3 mx-auto content">
          <div v-html="article.content"></div>
          <ShareSocial class="mt-7" :title="article.title"/>
        </div>
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
  async asyncData({ store, route }) {
    if (store.state.artikel.artikel === null) {
      await store.dispatch("artikel/FETCH_ARTIKEL");
    }
    return {
      article: store.getters["artikel/GET_ARTIKEL"](route.params.id)
    };
  },
  data() {
    return {};
  },
  computed: {
    articles() {
      const articles = this.$store.state.artikel.artikel;
      return this.article.nextBlog
        .map(v => {
          if (articles[v]) {
            return articles[v];
          }
        })
        .filter(Boolean);
    }
  }
};
</script>
<style lang="scss" scoped>
img {
  width: 100%;
}
.underline-header {
  border-bottom: 4px solid $primary50;
  display: inline;
}
</style>



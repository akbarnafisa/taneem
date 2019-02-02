<template>
  <div class="section-white">
    <div class="container articles section-header">
      <breadcrumbs/>
      <h5 class="underline-header h4-sm mb-0">Seluruh Artikel</h5>
      <list-articles :articles="articles"/>
    </div>
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
  async asyncData({ store }) {
    if (store.state.artikel.artikel === null) {
      await store.dispatch("artikel/FETCH_ARTIKEL");
    }
  },
  data() {
    return {};
  },
  computed: {
    articles() {
      return this.$store.state.artikel.artikel;
    }
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
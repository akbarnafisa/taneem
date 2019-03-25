<template>
  <div class="section-white">
    <div class="section-header">
      <informations :informations="informations">
        <breadcrumbs />
      </informations>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from "@/components/UI/Breadcrumbs";
import Informations from "@/components/Sections/Informations/Informations";
export default {
  components: {
    Informations,
    Breadcrumbs
  },
  async asyncData ({ store }) {
    if (store.state.informasi.informations === null) {
      await store.dispatch("informasi/FETCH_DATA");
    }
  },
  computed: {
    informations () {
      return this.$store.state.informasi.informations
    },
  }
};
</script>

<style lang="scss" scoped>
</style>
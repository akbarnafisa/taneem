<template>
  <div>
    <the-nav-checkout v-if="route.includes('checkout')"/>
    <the-nav v-else/>
    <!-- <the-nav-mobile/> -->
    <nuxt class="app-wrapper"/>
    <the-footer/>
  </div>
</template>
<script>
import TheNav from "@/components/Nav/TheNav";
import TheNavCheckout from "@/components/Nav/TheNavCheckout";
import TheNavMobile from "@/components/Nav/TheNavMobile";
import TheFooter from "@/components/Nav/TheFooter";

export default {
  components: {
    TheNav,
    TheNavMobile,
    TheFooter,
    TheNavCheckout
  },
  computed: {
    route() {
      return this.$route.name;
    }
  }
};
</script>
<style lang="scss" scopped>
.app-wrapper {
  margin-top: 78px;
  @include media(md) {
    margin-top: 108px;
  }
}
</style>

<template>
  <div class="my-5 my-md-7 d-flex flex-wrap">
    <nuxt-link
      aria-label="go"
      v-for="(link, index) in links"
      :key="link + index"
      :to="link.path"
      class="link flex-items mr-2 mb-2"
    >
      {{link.name}}
      <Arrow
        v-if="index !== links.length - 1"
        class="ml-2"
        width="10px"
        height="10px"
        direction="right"
      />
    </nuxt-link>
  </div>
</template>

<script>
import Arrow from "@/components/Icon/arrow";
export default {
  components: {
    Arrow
  },
  computed: {
    links() {
      const routePath =
        this.$route.path.charAt(this.$route.path.length - 1) === "/"
          ? this.$route.path.slice(0, this.$route.path.length - 1)
          : this.$route.path;
      const getLinks = routePath.split("/");

      let path = "";

      return getLinks.map(link => {
        link === "" ? (path = "/") : (path = `${path}${link}/`);
        return {
          name: link === "" ? "home" : link,
          path
        };
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.link {
  font-size: $font-medium;
  color: $black50;
  text-transform: capitalize;

  &:hover {
    color: $primary50;
  }
  &.nuxt-link-exact-active {
    font-weight: 700 !important;
    color: $primary50;
  }
}
</style>

<template>
  <div class="navbar w-100">
    <nav role="navigation " class="container flex-center h-100">
      <div class="nav-top">LOGO</div>
      <div class="nav-bottom flex-items justify-content-around flex-wrap">
        <nuxt-link
          v-for="(link, index) in links"
          :key="link.name + index"
          class="menu flex-items flex-column"
          :to="link.to"
          aria-label="navigation"
        >
          <div class="menu__icon"></div>
          <span>{{link.name}}</span>
        </nuxt-link>
        <button class="menu flex-items flex-column">
          <div class="menu__icon"></div>
          <span>Menu</span>
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: "Beranda",
          to: "/"
        },
        {
          name: "Produk",
          to: "/produk"
        },
        {
          name: "Informasi",
          to: "/informasi"
        },
        {
          name: "Konfirmasi",
          to: "/konfirmasi"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.025);
  background-color: $primary50;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  .nav-top {
    color: $white;
  }

  .nav-bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: $white;
    height: 56px;
    border-top: 1px solid $black10;
    width: 100%;

    .menu,
    button.menu {
      font-size: $font-small;
      font-weight: 600;
      color: $black40;
      transition: color 0.3s ease;
      position: relative;

      .menu__icon {
        width: 24px;
        height: 24px;
        background-color: $primary50;
      }

      &.nuxt-link-active {
        color: $primary50;
      }

      &:hover {
        color: $primary50;
      }
    }
  }
}
</style>
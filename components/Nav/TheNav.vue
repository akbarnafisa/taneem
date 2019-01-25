<template>
  <div class="navbar w-100">
    <nav role="navigation " class="container flex-items justify-content-between h-100">
      <div class="nav-right">LOGO</div>
      <div class="nav-left flex-items">
        <nuxt-link
          v-for="(link, index) in links"
          :key="link.name + index"
          class="menu px-3"
          :to="link.to"
          aria-label="navigation"
        >{{link.name}}</nuxt-link>
        <nuxt-link class="cart-wrapper flex-items" to="/cart" aria-label="navigation">
          <div class="menu menu--cart px-3"/>
          <div class="cart__count">0</div>
        </nuxt-link>
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
          name: "Konfirmasi Pembayaran",
          to: "/konfirmasi-pembayaran"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 60px;
  border-bottom: 1px solid $black10;
  background-color: $white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  .menu {
    text-transform: capitalize;
    font-size: $font-size;
    font-weight: 600;
    color: $black40;
    transition: color 0.3s ease;
    position: relative;

    &--cart {
      width: 36px;
      height: 39px;
      transform: scale(0.9);
      background: url("/svg/cart.svg");
    }
    &.nuxt-link-exact-active {
      color: $primary50;

      &:after {
        content: "";
        height: 3px;
        width: 100%;
        background-color: $primary50;
        position: absolute;
        bottom: -20px;
        left: 0;
      }
    }

    &:hover {
      color: $primary50;
    }
  }

  .cart-wrapper {
    .cart__count {
      font-size: 13px;
      font-weight: 700;
      margin-top: 7px;
      color: $black80;
    }

    &:hover {
      .cart__count {
        color: $primary50;
      }
    }
  }
}
</style>
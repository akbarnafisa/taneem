<template>
  <div class="navbar w-100">
    <nav role="navigation " class="container flex-items justify-content-between h-100">
      <div class="nav-right">LOGO</div>
      <div class="nav-left flex-items">
        <nuxt-link class="menu px-3" to="/checkout/address-and-payment" aria-label="navigation">
          <div class="menu__number">1</div>
          <div class="menu__text">Data Pembeli</div>
        </nuxt-link>
        <div class="navigation__bar"></div>
        <nuxt-link class="menu px-3" to="/checkout/review" aria-label="navigation">
          <div class="menu__number">2</div>
          <div class="menu__text">Review</div>
        </nuxt-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 70px;
  border-bottom: 1px solid $black10;
  background-color: $white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  .navigation__bar {
    width: 100px;
    height: 1px;
    background-color: $black40;
  }

  .menu {
    text-transform: capitalize;
    font-size: $font-size;
    font-weight: 600;
    color: $black40;
    transition: color 0.3s ease;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    pointer-events: none;
    cursor: default;

    .menu__number {
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border: 2px solid $black50;
      color: $black50;
    }

    .menu__text {
      font-size: $font-medium;
    }

    &.nuxt-link-exact-active {
      .menu__number {
        border: 2px solid $primary50;
        color: $primary50;
      }

      .menu__text {
        color: $primary50;
      }
    }
  }
}
</style>
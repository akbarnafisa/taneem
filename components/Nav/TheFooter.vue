<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="container h-100">
        <div class="row h-100">
          <div
            class="col-md-6 flex-center h5 text-center mb-4 mb-md-0"
          >Kunjungi Juga Halaman Penjual Resmi Kami</div>
          <div class="affiliates col-md-6 flex-items justify-content-around">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom py-5 py-md-7">
      <div class="container py-5 py-md-7 white">
        <div class="row">
          <div class="col-md-3 col-6 mb-6">
            <nuxt-link aria-label="go" style="width: initial;" to="/">LOGO
              <!-- <img alt="logo" class="logo" src="/logo.png"> -->
            </nuxt-link>

            <p class="mb-1">Tane'em</p>
            <p>+62-823-2011-4568</p>
            <p>+62-823-2011-4568</p>
            <p>© 2018 Taneem.com</p>
          </div>
          <div class="col-md-2 col-6 mb-6">
            <h5>Navigasi</h5>
            <nuxt-link aria-label="go" to="/">Beranda</nuxt-link>
            <nuxt-link aria-label="go" to="/produk">Produk</nuxt-link>
            <nuxt-link aria-label="go" to="/informasi">Informasi</nuxt-link>
            <nuxt-link aria-label="go" to="/konfirmasi">Konfirmasi</nuxt-link>
            <nuxt-link aria-label="go" to="/Artikel">Artikel</nuxt-link>
          </div>
          <div class="col-md-2 col-6 mb-6">
            <h5>Sosial</h5>
            <a
              href="https://www.instagram.com/oppositecoffee/"
              rel="noopener"
              target="_blank"
            >Instagram</a>
            <a
              href="https://www.facebook.com/oppositecoffee/"
              rel="noopener"
              target="_blank"
            >Facebook</a>
          </div>
          <div class="col-md-5 col-6 mb-6 px-lg-5">
            <h5>Location</h5>
            <p class="mb-0 fw-600">Lokasi Pertama :</p>
            <p class="mb-4">
              Jl. Lembah UGM No.Selatan
              Karang Malang, Caturtunggal
              Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281, Indonesia
            </p>
            <p class="mb-0 fw-600">Lokasi Pertama :</p>
            <p>East Park - Tower AC Jl. KRT Radjiman Widiningrat Jatinegara, Cakung, Jakarta Timur 13930</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  .footer-top {
    background-color: $primary10;
    padding: 36px 0px;
    box-shadow: 0px -8px 20px rgba(0, 0, 0, 0.025);
    .affiliates {
      div {
        width: 150px;
        height: 75px;
        background-color: $white;
      }
    }

    @include media(md) {
      padding: 0;
      height: 100px;
    }
  }
  .footer-bottom {
    background-color: #d31212;
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z' fill='%23c90e0e' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E");
    .logo {
      width: 120px;
      margin-bottom: 16px;
    }
    a {
      color: $lightgrey;
      font-size: 14px;
      display: block;
      margin-bottom: 8px;
      width: 65px;

      &:hover {
        text-decoration: underline;
      }
    }
    h5 {
      color: $white;
      font-weight: 600;
    }
    p {
      line-height: 1.75;
      font-size: 14px;
      color: $lightgrey;
    }
  }
}

.rate__wrapper a {
  display: block;
  width: initial;
  margin-bottom: 0;
  line-height: 1;
  text-decoration: underline;
}
</style>

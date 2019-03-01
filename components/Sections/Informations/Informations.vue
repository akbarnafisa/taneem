<template>
  <div class="information container section pt-0 mw-3">
    <slot />
    <h4 class="underline-header h4-sm mb-0">Informasi</h4>
    <input
      placeholder="Tulis pertanyaan atau kata kunci yang ingin kamu cari"
      class="information__input"
      type="text"
      v-model="search"
    >
    <div v-if="filteredSearch.length > 0">
      <div
        v-for="(list, index) in filteredSearch"
        :key="index"
        class="information__list"
        :class="tabActive === index ? 'active' : null"
      >
        <div
          @click="handleClick(index)"
          class="information__title"
        >
          {{list.title}}
          <arrow
            class="arrow"
            color="rgba(0,0,0,.4)"
            direction="down"
          />
        </div>
        <transition
          name="fade"
          mode="out-in"
        >
          <div
            v-show="tabActive === index"
            class="information__content"
          >{{list.content}}</div>
        </transition>
      </div>
    </div>
    <div v-else>
      <p class="flex-center mt-5 fw-700">
        Tidak ada data ditemukan
      </p>
    </div>

  </div>
</template>

<script>
import Breadcrumbs from "@/components/UI/Breadcrumbs";
import arrow from "@/components/Icon/arrow";
export default {
  components: {
    Breadcrumbs,
    arrow
  },
  props: {
    informations: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      tabActive: null,
      search: '',
    };
  },
  computed: {
    filteredSearch () {
      const self = this;
      if (this.search !== "") {
        return this.informations.filter(content => {
          return Object.values(content).some(val =>
            String(val)
              .toLowerCase()
              .includes(self.search.toLowerCase())
          );
        });
      } else {
        return this.informations;
      }
    }
  },
  methods: {
    handleClick (index) {
      if (this.tabActive === index) {
        this.tabActive = null;
      } else {
        this.tabActive = index;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.information {
  .underline-header {
    border-bottom: 4px solid $primary50;
    display: inline;
  }
  .information__input {
    margin: 48px 0px 16px 0px;
  }
  .information__list {
    padding: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
    background-color: white;
    border-bottom: solid 1px $black10;

    @include media(sm) {
      padding: 20px;
    }

    &.active {
      background-color: $lightgrey;

      .arrow {
        transform: rotate(90deg) !important;
      }
    }

    .information__title {
      font-size: 18px;
      font-weight: 700;
      color: $primary60;
      padding-top: 30px;
      padding-right: 10px;
      padding-bottom: 20px;
      letter-spacing: 0.75px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &:hover {
        opacity: 0.7;
      }

      .arrow {
        min-width: 14px;
      }

      @include media(sm) {
        padding-right: 40px;
      }
    }

    .information__content {
      font-size: 16px;
      line-height: 26px;
      margin-bottom: 30px;
      text-align: justify;
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}
</style>
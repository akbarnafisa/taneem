<template>
  <div class="produk__sortir">
    <div class="label">Urutkan</div>
    <select @change="changeHandler">
      <option disabled value>Please select one</option>
      <option
        v-for="(sort) in sorts"
        :value="sort"
        :key="sort"
        :selected="sortSelected === sort"
      >{{sort}}</option>
    </select>
    <!-- <button
      name="sortir"
      @click="click()"
      class="produk__inputclik noSelect mt-2 pointer flex-items justify-content-between"
    >
      <span class="textOverflow fz-12">{{sortSelected}}</span>
      <dropdown-icon/>
    </button>-->
  </div>
</template>

<script>
import dropdownIcon from "@/components/Icon/dropdown";
export default {
  components: {
    dropdownIcon
  },
  methods: {
    changeHandler($event) {
      this.$store.commit("products/SET_SORT", $event.target.value);
    }
  },
  computed: {
    sortSelected() {
      return this.$store.state.products.sortSelected;
    },
    sorts() {
      return this.$store.state.products.sort;
    }
  }
};
</script>

<style lang="scss" scoped>
.produk__sortir {
  width: 100%;

  .textOverflow {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .label {
    font-weight: 700;
    font-size: $font-medium;
    color: $black60;
  }

  select {
    transition: border 0.3s ease;
    cursor: pointer;

    &:hover {
      border: 1px solid rgba(0, 0, 0, 1);
    }
    &:focus {
      border: 1px solid rgb(139, 123, 123);
    }
  }
}
</style>
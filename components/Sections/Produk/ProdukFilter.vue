<template>
  <div class="produk__filter mr-3">
    <div class="label">Filter</div>
    <button
      name="filter"
      @click="click()"
      class="produk__inputclik noSelect mt-2 pointer flex-items justify-content-between"
    >
      <div class="textOverflow">
        <span v-if="FilterActive.length < 1" class="fz-12">Tampilkan Semua</span>
        <span
          v-else
          class="fz-12"
          v-for="(item, index) in FilterActive"
          :key="index"
        >{{item + ', '}}</span>
      </div>
      <dropdown-icon/>
    </button>
  </div>
</template>

<script>
import dropdownIcon from "@/components/Icon/dropdown";
export default {
  components: {
    dropdownIcon
  },
  props: {
    FilterActive: {
      required: true,
      type: Array,
      default: ["Tampilkan Semua"]
    }
  },
  methods: {
    click() {
      this.$router.push(this.$route.path + "#filterButton");
      this.$emit("modalFilter");
    }
  }
};
</script>

<style lang="scss" scoped>
.produk__filter {
  width: 55%;
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
  .produk__inputclik {
    width: 100%;
    padding: 6px 10px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    transition: border 0.3s ease;
    border-radius: 5px;
    cursor: pointer;
    font-family: $family-primary;

    &:hover {
      border: 1px solid rgba(0, 0, 0, 1);
    }
    &:focus {
      border: 1px solid rgb(139, 123, 123);
    }
  }
}
</style>
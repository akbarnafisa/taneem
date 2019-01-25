<template>
  <div class="produk__sortir">
    <div class="label">Urutkan</div>
    <button
      name="sortir"
      @click="click()"
      class="produk__inputclik noSelect mt-2 pointer flex-items justify-content-between"
    >
      <span class="textOverflow fz-12">{{sortirActive}}</span>
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
    sortirActive: {
      required: true,
      type: String,
      default: "Termurah"
    }
  },
  methods: {
    click() {
      this.$router.push(this.$route.path + "#sortirButton");
      this.$emit("modalSortir");
    }
  }
};
</script>

<style lang="scss" scoped>
.produk__sortir {
  width: 45%;

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
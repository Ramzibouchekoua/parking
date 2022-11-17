<template>
  <div class="parking-places">
    <BestPricesParking
      v-for="item in bestPrices"
      :place="parking[item]"
      :key="parking[item].id"
    />
  </div>
</template>
<script>
export default {
  props: {
    parking: {
      type: Object,
      default: {},
    },
    bestPrices: {
      type: Array,
      default: [],
    },
  },
};
</script>
<style>
.parking-places {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
}
</style>

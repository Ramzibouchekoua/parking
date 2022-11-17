<template>
  <div class="parking">
    <div class="image">Image</div>

    <div class="info">
      <h1>{{ lowestPrice?.merchant?.slug }}</h1>
      <p>{{ lowestPrice?.merchant?.name }}</p>
      <span>Rating: {{ Math.round(lowestPrice?.review?.score) + "/10" }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    lowestPrice: {
      type: Object,
      default: {},
    },
  },
};
</script>
<style scoped>
.parking {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 50px;
}
.image {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  width: 300px;
  height: 300px;
  margin-right: 20px;
}
h1 {
  margin-bottom: 30px;
}
span {
  font-weight: bold;
  font-size: 16px;
  margin-top: 30px;
}
</style>

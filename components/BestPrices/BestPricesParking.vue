<template>
  <div class="parking">
    <div class="parking-info">
      <h1>{{ place?.merchant?.slug + ": " + place?.parking_type }}</h1>
      <span>{{ place?.merchant?.name }}</span>
    </div>
    <div class="price">
      <span>{{ place?.currency }}</span>
      <span>{{ place?.price }}</span>
    </div>
    <button>Book</button>
  </div>
</template>
<script>
export default {
  props: {
    place: {
      type: Object,
      default: {},
    },
    key: {
      type: Number,
      default: 0,
    },
  },
};
</script>
<style scoped>
.parking {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin-top: 20px;
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px;
}

h1 {
  margin-bottom: 30px;
}
span {
  font-weight: bold;
  font-size: 16px;
  margin-top: 30px;
}
button {
  width: fit-content;
  padding: 10px;
  border-radius: 4px;
  background-color: #0063a6;
  color: white;
  border: 1px solid white;
}
.price {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.parking-info {
  width: 60%;
}
</style>

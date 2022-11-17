<template>
  <div>
    <div v-if="parking && Object.keys(parking).length">
      <Parking :lowestPrice="lowestPrice" />

      <BestPrices :bestPrices="bestPrices" :parking="parking" />
      <button class="update" @click="recall()">Update Liste</button>
      <SomeSeo />
    </div>
    <div v-else class="danger">No Data</div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "IndexPage",
  head() {
    return {
      title: this.lowestPrice?.merchant?.slug,
      meta: [
        {
          hid: "description",
          name: this.lowestPrice?.merchant?.name,
          content:
            this.lowestPrice?.merchant?.name + this.lowestPrice?.merchant?.slug,
        },
      ],
    };
  },
  data() {
    return { parking: null };
  },
  asyncData({ $axios }) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    var deparaturDate = new Date();
    deparaturDate.setDate(deparaturDate.getDate() + 7);
    const arrival = moment(tomorrow).format("YYYY-MM-DD");
    const departure = moment(deparaturDate).format("YYYY-MM-DD");

    return $axios
      .$get(
        "https://parkos.nl/ajax/locationSearchJSON/?&arrivalTime=12:00&departureTime=12:00&location=parkeren-schiphol&version=3&sort_f=price&sort_w=asc",
        {
          params: {
            arrival,
            departure,
          },
        }
      )
      .then((res) => {
        console.log("i m");
        return { parking: res.available };
      });
  },
  methods: {
    recall() {
      this.$nuxt.refresh();
    },
  },
  computed: {
    lowestPrice() {
      if (!this.parking) return null;
      let lowest = +Infinity;
      let result = null;
      for (const key in this.parking) {
        if (+this.parking[key].price < lowest) {
          lowest = +this.parking[key].price;
          result = key;
        }
      }
      return this.parking[result];
    },
    bestPrices() {
      const keys = Object.keys(this.parking);

      return keys.sort((a, b) => this.parking[a] - this.parking[b]).slice(0, 3);
    },
  },
};
</script>
<style>
.update {
  width: fit-content;
  padding: 10px;
  border-radius: 4px;
  background-color: #22bb33;
  color: white;
  border: 1px solid white;
  align-self: flex-end;
  margin: 20px;
  float: right;
}
.danger {
  color: #bb2124;
  display: flex;

  justify-content: center;
  align-items: center;
  font-size: 42px;
  font-weight: 700;
}
</style>

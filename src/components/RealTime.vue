<template>
  <div class="lg:m-8">
    <h2>Bitcoin to USD</h2>
    <p>US$: {{ value }}</p>
  </div>
</template>

<script>
import { realTimeRequest } from "../requests";
export default {
  name: "RealTime",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    async realTimeFunc() {
      this.value = await realTimeRequest();
    },
  },
  created() {
    this.realTimeFunc();
    setInterval(async () => {
      this.value = await realTimeRequest();
    }, 30000);
  },
};
</script>

<style></style>

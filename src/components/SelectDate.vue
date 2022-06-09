<template>
  <div class="real-time">
    <form>
      <input
        type="text"
        v-model="date"
        placeholder="Write a date: (DD-MM-YYYY)"
      />
      <select v-model="base_input">
        <option value="USD">USD</option>
        <option value="XAU">XAU</option>
        <option value="BRL">BRL</option>
        <option value="EUR">EUR</option>
      </select>
      <input type="submit" value="Show value" v-on:click="submitForm" />
    </form>
    <p id="answer">{{ base }} {{ value }}</p>
  </div>
</template>

<script>
import { anyTime } from "../requests";
import { realTimeRequest } from "../requests";
export default {
  name: "SelectDate",
  data: () => {
    return {
      coin: "bitcoin",
      date: "",
      base_input: "USD",
      base: "USD",
      value: "",
    };
  },
  methods: {
    async changeValue(date, base) {
      this.value = await anyTime(date, base);
    },
    submitForm(e) {
      e.preventDefault();
      this.base = this.base_input;
      const lower = this.base.toLowerCase();
      this.changeValue(this.date, lower);
      this.date = "";
    },
    async firtsRequest() {
      this.value = await realTimeRequest();
    },
  },
  created() {
    this.firtsRequest();
  },
};
</script>

<style></style>

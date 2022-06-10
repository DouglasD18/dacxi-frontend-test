<template>
  <div>
    <form
      class="flex-grow bg-white shadow-xl rounded-md border border-gray-300 p-8 mt-8"
    >
      <input
        type="date"
        v-model="date"
        pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}"
        required
        class="mb-2"
      />
      <select v-model="coin">
        <option value="bitcoin">BITCOIN</option>
        <option value="dacxi">DACXI</option>
        <option value="ethereum">ETH</option>
        <option value="cosmos">ATOM</option>
        <option value="terra-luna">LUNA</option>
      </select>
      <select v-model="base_input">
        <option value="usd">USD</option>
        <option value="xau">XAU</option>
        <option value="brl">BRL</option>
        <option value="eur">EUR</option>
      </select>
      <input
        type="submit"
        value="Show value"
        v-on:click="submitForm"
        class="text-green-500 hover:text-white hover:bg-green-500 border border-green-500 font-semibold rounded-md text-xs mt-4 px-4 py-1 focus:outline-none cursor-pointer"
      />
    </form>
    <p class="mt-8" v-if="toggle">{{ base }} {{ value }}</p>
    <p class="mt-8" v-else>Sorry, invalid date!</p>
  </div>
</template>

<script>
import { anyTime } from "../requests";
export default {
  name: "SelectDate",
  data: () => {
    return {
      coin: "bitcoin",
      date: "",
      date_value: "",
      base_input: "usd",
      base: "",
      value: "",
      toggle: true,
    };
  },
  methods: {
    async changeValue(coin, date, base) {
      this.value = await anyTime(coin, date, base);
      if (this.value === undefined) {
        this.toggle = false;
      } else {
        this.toggle = true;
      }
    },
    changeDateValue() {
      const day = this.date.slice(-2);
      const month = this.date.slice(5, 7);
      const year = this.date.slice(0, 4);
      this.date_value = `${day}-${month}-${year}`;
    },
    submitForm(e) {
      e.preventDefault();
      this.changeDateValue();
      this.base = `${this.date_value}: ${this.base_input.toUpperCase()}`;
      this.changeValue(this.coin, this.date_value, this.base_input);
    },
  },
};
</script>

<style></style>

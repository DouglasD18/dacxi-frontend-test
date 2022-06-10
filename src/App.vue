<script setup>
import RealTime from "./components/RealTime.vue";
import SelectDate from "./components/SelectDate.vue";
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2">
    <header
      class="bg-sky-700 lg:min-h-screen lg:flex lg:items-center p-8 sm-p-12"
    >
      <h1 class="text-white text-center text-2xl sm:text-5xl mb-2">
        Dacxi: Frontend Test
      </h1>
    </header>
    <main
      class="lg:min-h-screen lg:flex lg:items-center p-12 lg:p-24 xl:p-48 text-blue-700 text-center"
    >
      <RealTime />
      <SelectDate />
    </main>
  </div>
</template>

<style></style>

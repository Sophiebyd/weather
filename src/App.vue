<script setup>
import HeaderNav from "./components/templates/HeaderNav.vue"
import FooterNav from "./components/templates/FooterNav.vue"
import SearchForm from "./components/views/SearchForm.vue"
import CitiesList from "./components/views/CitiesList.vue"
import { useWeatherStore } from "./stores/weatherStore"

const store = useWeatherStore()

</script>

<template>
<div id="container">
  <HeaderNav />
    <div>
      <SearchForm />
      <button @click="store.$reset" class="btn btn-danger">Effacer toute la liste</button>
      <CitiesList />
    </div>
  <FooterNav />
</div>
</template>

<style scoped>
#container {
  display: flex;
    flex-direction: column;
    min-height: 100vh;
}
</style>

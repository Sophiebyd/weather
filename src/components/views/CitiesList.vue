<template>
<div class="row">
    <div class="mx-auto col-sm-6 col-md-4 col-lg-3 mb-4" v-for="city in store.citiesList" v-bind:key="city.id">
        <CardWeather v-bind:cityWeather="city"/>

    </div>
</div>
</template>

<script setup>
import { useWeatherStore } from "@/stores/weatherStore.js"

import CardWeather from "./CardWeather.vue"
const store = useWeatherStore()
</script>

<template>
<div class="container d-flex justify-content-center">
    <div class="card mt-5" style="width: 18rem;" v-if="cityWeather">
        <div class="card-body">
            <h5 class="card-title d-flex justify-content-center">Nom de la ville {{ cityWeather.name }}</h5>
            <h6 class="card-subtitle mb-2 text-muted d-flex justify-content-center">Température {{ cityWeather.main.temp }}</h6>
            <h6 class="card-subtitle mb-2 text-muted d-flex justify-content-center">Description {{ cityWeather.weather[0].description }}</h6>
            <p class="d-flex justify-content-center"><img class="mx-auto rounded-circle bg-primary" :src="`https://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@2x.png`" alt="icône temps"></p>
            <div class="d-flex justify-content-center">
                <button @click="store.removeCitiesWeather(cityWeather.id)" class="btn btn-danger">Effacer</button>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import { useWeatherStore } from '@/stores/weatherStore';

const store = useWeatherStore()

defineProps([
    'cityWeather'
])

</script>

<style scoped>
</style>

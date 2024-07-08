<template>
<form @submit.prevent="searchCity" class="mt-3">
    <p v-if="errorMessage != ''" class="text-white bg-danger w-50 p-3 mx-auto rounded-pill">{{ errorMessage }}</p>
    <input type="text" v-model="search">
    <button type="submit">Valider</button>
</form>
</template>

<script setup>
import axios from "axios"
import { ref } from "vue"
import { useWeatherStore } from "@/stores/weatherStore";

const search = ref("")

const apiKey = "0b7b0f66fedd5755eb79eb5bbedf4b03"

const errorMessage = ref("")

const store = useWeatherStore()

const searchCity = () => {
    axios.get (
        `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=${apiKey}&lang=fr&units=metric`
    ) 
    .then(response => {
        store.storeCityWeather(response.data)
    })
    .catch(error => {
        console.log(error);

        if (error.response.data.message === "city not found") {
            errorMessage.value = "La ville n'existe pas";            
        } else {
            errorMessage.value= error.message;
        }
        setTimeout(() => errorMessage.value = "", 5000)
    });
}
</script>

<style scoped>
</style>
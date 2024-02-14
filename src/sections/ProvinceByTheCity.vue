<template>
    <div class="container mx-auto p-8">
        <div class="mb-12">
            <h2 class="text-xl font-bold mb-4">Province by The City</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div v-for="city in displayedCities" :key="city.id"
                    class="bg-white rounded-lg shadow-md p-6 max-h-80 overflow-y-scroll">
                    <h3 class="text-lg font-semibold mb-2">{{ city.name }}</h3>
                    <p>Province: {{ getProvinceNameByCityId(city.id) }}</p>
                </div>
            </div>
        </div>

        <div class="flex justify-center">
            <button @click="prevPage" :disabled="currentPage === 1"
                class="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Prev</button>
            <button @click="nextPage" :disabled="currentPage === totalPages"
                class="bg-blue-500 text-white px-4 py-2 rounded-md">Next</button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

import province from '@/assets/js/province.js';
import city from '@/assets/js/city.js';

import getCitiesByProvinceId from '@/utils/getCitiesByProvinceId.js';
import getProvinceNameByCityId from '@/utils/getProvinceNameByCityId.js';

const citiesPerPage = 3;
const currentPage = ref(1);

const cities = ref(city);

const totalCities = computed(() => Math.ceil(cities.value.length / citiesPerPage));
const displayedCities = computed(() => {
    const start = (currentPage.value - 1) * citiesPerPage;
    const end = start + citiesPerPage;
    return cities.value.slice(start, end);
});

function prevPage() {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
}

function nextPage() {
    if (currentPage.value < totalCities.value) {
        currentPage.value++;
    }
}
</script>

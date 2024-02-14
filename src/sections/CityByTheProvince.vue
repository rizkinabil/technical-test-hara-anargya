<template>
    <div class="container mx-auto p-8">
        <h1 class="text-3xl font-bold mb-8">Overview</h1>
        <div class="mb-12">
            <h2 class="text-xl font-bold mb-4">Cities by Province</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div v-for="province in displayedProvinces" :key="province.id"
                    class="bg-white rounded-lg shadow-md p-6 max-h-80 overflow-y-scroll">
                    <h3 class="text-lg font-semibold mb-2">{{ province.name }}</h3>
                    <ul>
                        <li v-for="city in getCitiesByProvinceId(province.id)" :key="city.id" class="text-gray-600">{{
                            city.name }}</li>
                    </ul>
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

const provincesPerPage = 3;
const currentPage = ref(1);

const provinces = ref(province);
const cities = ref(city);

const totalProvinces = computed(() => Math.ceil(provinces.value.length / provincesPerPage));
const displayedProvinces = computed(() => {
    const start = (currentPage.value - 1) * provincesPerPage;
    const end = start + provincesPerPage;
    return provinces.value.slice(start, end);
});

function prevPage() {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
}

function nextPage() {
    if (currentPage.value < totalProvinces.value) {
        currentPage.value++;
    }
}
</script>
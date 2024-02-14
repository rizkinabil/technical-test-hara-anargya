<template>
    <div class="container mx-auto p-8 bg-white rounded-sm">
        <h1 class="text-3xl font-bold mb-4">Provinces</h1>

        <div class="flex items-center mb-4">
            <label for="sortBy">Sort by:</label>
            <select v-model="sortBy" id="sortBy" class="mx-2">
                <option value="id">ID</option>
                <option value="name">Name</option>
            </select>

            <label for="order">Order:</label>
            <select v-model="order" id="order" class="mx-2">
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
        </div>

        <table class="table-auto w-full">
            <thead>
                <tr>
                    <th class="px-4 py-2">ID</th>
                    <th class="px-4 py-2">Name</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(province, index) in paginatedProvinces" :key="province.id">
                    <td class="border px-4 py-2">{{ province.id }}</td>
                    <td class="border px-4 py-2">{{ province.name }}</td>
                </tr>
            </tbody>
        </table>

        <div class="flex justify-center mt-4">
            <button @click="prevPage" :disabled="currentPage === 1"
                class="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Prev</button>
            <button @click="nextPage" :disabled="currentPage === totalPages"
                class="bg-blue-500 text-white px-4 py-2 rounded-md">Next</button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import sortProvinces from '@/utils/sortProvinces.js';

const sortBy = ref('id');
const order = ref('asc');
const pageSize = 5;
let currentPage = ref(1);

const sortedProvinces = computed(() => sortProvinces(sortBy.value, order.value));
const totalPages = computed(() => Math.ceil(sortedProvinces.value.length / pageSize));

const paginatedProvinces = computed(() => {
    const startIndex = (currentPage.value - 1) * pageSize;
    return sortedProvinces.value.slice(startIndex, startIndex + pageSize);
});

function prevPage() {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
}

function nextPage() {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
}
</script>

<style scoped>
.table-auto {
    border-collapse: collapse;
    width: 100%;
}

.table-auto th,
.table-auto td {
    border: 1px solid #e2e8f0;
    padding: 0.5rem;
}

.table-auto th {
    background-color: #edf2f7;
}
</style>

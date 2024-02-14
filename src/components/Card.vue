<template>
    <div class="bg-white rounded-lg shadow p-5">
        <div class="flex justify-between items-center">
            <h3 class="font-sans font-semibold text-gray-400 text-sm ">{{ title }}</h3>
            <img src="../assets/icons/Card-item.svg" alt="icon" class="w-8 h-8">
        </div>
        <div class="text-2xl font-bold">{{ value }}</div>

        <div class="flex justify-between items-center mt-4">
            <div class="flex items-center text-gray-500 text-sm">
                <span v-if="percentChange > 0" class="text-green-500 mr-1 flex items-center">
                    <img src="../assets/icons/arrow-up.svg" alt="Arrow-up" class="w-6 h-6">
                    <span>{{ Math.abs(percentChange) }}%</span>
                </span>
                <span v-else-if="percentChange < 0" class="text-red-500 mr-1 flex items-center">
                    <img src="../assets/icons/arrow-down.svg" alt="Arrow-down" class="w-6 h-6">
                    <span>{{ Math.abs(percentChange) }}%</span>
                </span>
                <span class="text-gray-400 text-sm ms-2">Last Month</span>
            </div>
            <span class="text-gray-500 text-sm cursor-pointer">View more</span>
        </div>
    </div>
</template>

<script setup>

import { defineProps } from 'vue'

const props = defineProps({
    title: String,
    value: String,
    percentChange: Number,
});
</script>
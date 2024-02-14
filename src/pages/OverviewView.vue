<template>
    <CityByTheProvince />
    <ProvinceByTheCity />
    <SortSectionTable />
</template>

<script setup>
import { ref } from 'vue';

import ProvinceByTheCity from '@/sections/ProvinceByTheCity.vue';
import CityByTheProvince from '@/sections/CityByTheProvince.vue';
import SortSectionTable from '@/sections/SortSectionTable.vue';


</script>
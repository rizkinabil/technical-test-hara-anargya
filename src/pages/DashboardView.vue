<template>
    <div>
        <div class="grid grid-cols-3 gap-4">
            <Card title="Pending" :value="pendingValue" percentChange=2.15 />
            <Card title="Paid" :value="paidValue" percentChange=-1.10 />
            <Card title="Rejected" :value="rejectedValue" percentChange=2.15 />
        </div>
        <UserList />
    </div>
</template>

<script setup>
import Card from '@/components/Card.vue';
import UserList from '../components/DashboardSection/UserList.vue';

const pendingValue = '2.480,30';
const paidValue = '84.310';
const rejectedValue = '12.155';
</script>
<template>
    <div class="bg-white rounded-lg shadow mt-8">
        <div class="p-6">
            <h1 class="text-[#080808] font-sans font-bold text-xl ">User List</h1>
        </div>
        <table class="w-full border-collapse ">
            <thead>
                <tr class="bg-[#FAFBFC] border-t-2 border-b-2">
                    <th class="font-sans font-medium px-4 py-2 text-sm text-[#7C7C7C]">ID</th>
                    <th class="font-sans font-medium px-4 py-2 text-sm text-[#7C7C7C]">User</th>
                    <th class="font-sans font-medium px-4 py-2 text-sm text-[#7C7C7C]">Date of Birth
                    </th>
                    <th class="font-sans font-medium px-4 py-2 text-sm text-[#7C7C7C]">Email</th>
                    <th class="font-sans font-medium px-4 py-2 text-sm text-[#7C7C7C]">Job</th>
                    <th class="font-sans font-medium px-4 py-2 text-sm text-[#7C7C7C]">Country</th>
                    <th class="font-sans font-medium px-4 py-2 text-sm text-[#7C7C7C]">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id" class="border-t-2 border-b-2">
                    <td class="font-sans font-medium px-4 py-2 text-sm">{{ user.id }}</td>
                    <td class="px-4 py-2 text-sm flex items-center">
                        <img :src="user.profile_picture" alt="profile_picture" class="w-7 h-7 rounded-full mr-3">

                        <span class="font-sans font-bold">
                            {{ user.first_name }} {{ user.last_name }}
                        </span>
                    </td>
                    <td class="font-sans font-light px-4 py-2 text-sm">{{
                        formatDate(user.date_of_birth) }}</td>
                    <td class="font-sans font-bold px-4 py-2 text-sm">{{ user.email }}</td>
                    <td class="font-sans font-light px-4 py-2 text-sm">{{ user.job }}</td>
                    <td class="font-sans font-bold px-4 py-2 text-sm">{{ user.country }}</td>
                    <td class="font-sans font-medium px-4 py-2 text-sm">
                        <button disabled @click="selectUser(user)"
                            class="text-gray-400 border-2 px-2 py-1 rounded mr-2">Select</button>
                        <button type="button" @click="viewDetails(user)" class=" text-black border-2 px-2 py-1 rounded">View
                            Detail</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <Dialog :user="selectedUser" v-if="showDialog" @closeDialog="closeDialog" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Dialog from '@/components/Dialog.vue'

const users = ref([]);
const showDialog = ref(false);
const selectedUser = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get('https://api.slingacademy.com/v1/sample-data/users');
        users.value = response.data.users;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
});

const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
};

const selectUser = (user) => {
    selectedUser.value = user;
};

const viewDetails = (user) => {
    selectedUser.value = user;
    showDialog.value = true;
};

const closeDialog = () => {
    showDialog.value = false;
};
</script>
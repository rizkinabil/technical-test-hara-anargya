<template>
    <transition name="modal-fade">
        <div v-if="isOpen" class="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div class="bg-white rounded-lg p-8 relative">
                <span @click="closeDialog"
                    class="text-red-600 font-sans font-bold cursor-pointer absolute top-3 right-3">X</span>

                <div class="flex items-center">
                    <img :src="user.profile_picture" alt="avatar" class="w-24 h-24 rounded-full">

                    <div class="ml-4">
                        <h1 class="font-sans font-bold text-2xl text-black">{{ user.first_name }} {{ user.last_name }}</h1>
                        <p class="font-sans font-medium text-lg text-black">{{ user.email }}</p>
                        <p class="font-sans font-medium text-lg text-black">{{ user.phone }}</p>

                    </div>

                </div>

                <!-- detail section -->
                <div class="mt-8">
                    <ul class="list-disc pl-6">
                        <li class="font-sans font-medium text-lg text-black"><strong>Date of Birth:</strong> {{
                            formatDate(user.date_of_birth) }}</li>
                        <li class="font-sans font-medium text-lg text-black"><strong>Job:</strong> {{ user.job }}</li>
                        <li class="font-sans font-medium text-lg text-black"><strong>Country:</strong> {{ user.country }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    user: Object
})

const emits = defineEmits(['closeDialog']);
const isOpen = ref(true);

const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
};

const closeDialog = () => {
    props.user.value = null
    isOpen.value = false
    emits('closeDialog');
};
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
    opacity: 0;
}
</style>

<!-- 
{
    "id": 1,
    "gender": "female",
    "date_of_birth": "2002-04-26T00:00:00",
    "job": "Herbalist",
    "city": "Humphreyfurt",
    "zipcode": "79574",
    "latitude": 13.032103,
    "profile_picture": "https://api.slingacademy.com/public/sample-users/1.png",
    "first_name": "Kayla",
    "last_name": "Lopez",
    "email": "kayla.lopez.1@slingacademy.com",
    "phone": "+1-697-415-3345x5215",
    "street": "3388 Roger Wells Apt. 010",
    "state": "Vermont",
    "country": "Jordan",
    "longitude": 112.16014,
    "value": null
} -->


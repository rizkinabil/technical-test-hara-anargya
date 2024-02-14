<template>
    <div class="flex flex-col h-screen w-full bg-gray-100">
        <!-- Top bar -->
        <div class="bg-white text-black text-left font-sans font-bold py-4 px-6 border-b-2 absolute w-[82%] left-[256px]">
            Conversion
        </div>

        <div class="flex flex-grow overflow-hidden">
            <!-- Sidebar -->
            <div class="flex flex-col w-64 bg-white border-r-2 overflow-y-auto">
                <div class="text-black ps-6 py-4 text-left text-2xl font-sans font-extrabold">heylink.</div>

                <nav class="flex-1">
                    <ul>
                        <router-link v-for="(item, index) in menuItems" :key="index" :to="item.route"
                            :class="{ 'bg-[#E3F2FD]': $route.path === item.route }"
                            class="ms-6 me-2 p-4 cursor-pointer hover:bg-[#E3F2FD] rounded-lg flex items-center">
                            <img :src="item.icon" class="w-4 h-4 mr-2" alt="icon">
                            <p class="text-gray-600 text-sm">{{ item.label }}</p>
                        </router-link>
                    </ul>
                </nav>
            </div>

            <!-- Main content area -->
            <div class="flex-1 flex flex-col overflow-y-auto">
                <!-- Page content -->
                <div class="px-6 pt-20 pb-6">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import dashboardIcon from '@/assets/icons/Dashboard.svg';
import overviewIcon from '@/assets/icons/Overview.svg';

const menuItems = ref([
    { label: 'Dashboard', route: '/', icon: dashboardIcon },
    { label: 'Overview', route: '/overview', icon: overviewIcon },
]);
// export default {
//     name: 'DefaultLayout',
//     data() {
//         return {
//             menuItems: [
//                 { label: 'Dashoard', route: '/', icon: 'Dashoard' },
//                 { label: 'Overview', route: '/overview', icon: 'Overview' },

//             ]
//         };
//     }
// }
</script>


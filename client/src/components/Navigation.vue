<template>
    <div>
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#0c1b32"
            text-color="#fff"
            active-text-color="#9eb8ff"
        >
            <el-menu-item index="1">
                <router-link :to="{ name: 'Dashboard' }">Dashboard</router-link>
            </el-menu-item>
            <el-menu-item index="2">
                <router-link :to="{ name: 'Profile' }">Profile</router-link>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const activeIndex = ref('1');
        const handleSelect = (key, keyPath) => {
            console.log(key, keyPath);
        };
        return {
            activeIndex,
            handleSelect,
        };
    },
});
</script>

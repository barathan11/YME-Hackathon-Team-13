<template>
    <div class="Interests">
        <div>
            <el-checkbox
                v-for="i in 10"
                :key="i"
                v-model="checked1"
                label="Option1"
                border
            ></el-checkbox>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Interests',
    components: {},
};
</script>

<style lang="scss" scoped></style>

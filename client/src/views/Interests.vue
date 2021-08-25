<template>
    <div class="interests">
        <div class="interests__options">
            <el-checkbox
                v-for="general_interest in generalInterests"
                :key="general_interest"
                v-model="checked1"
                :label="general_interest"
                border
            ></el-checkbox>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Interests',
    components: {},
    setup() {
        const generalInterests = [
            'Sports',
            'Music',
            'Dogs',
            'Cats',
            'Reading',
            'Art',
            'Eating',
            'History',
            'Philosophy',
            'Kopitiam',
            'Networking',
            'Volunteering',
            'Dancing',
            'Gardening',
            'Languages',
        ];

        return {
            generalInterests,
        };
    },
};
</script>

<style lang="scss" scoped>
.interests {
    &__options {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
}
.el-checkbox {
    margin: 0;
    margin-left: 0 !important;
    margin-bottom: 10px;
}
</style>

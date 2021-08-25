<template>
    <div class="interests">
        <router-link :to="{ name: 'Profile' }">
            <div class="return__button">
                <el-icon size="15">
                    <arrow-left-bold />
                </el-icon>
                <p>Back to profile</p>
            </div>
        </router-link>
        <h3>Select your general interests</h3>
        <div>
            <el-checkbox-group
                class="interests__options"
                v-model="generalInterestsValues"
            >
                <el-checkbox
                    v-for="generalInterest in generalInterests"
                    :key="generalInterest"
                    v-model="checked1"
                    :label="generalInterest"
                    border
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <h3>Select your fitness interests</h3>
        <div>
            <el-checkbox-group
                class="interests__options"
                v-model="fitnessInterestsValues"
            >
                <el-checkbox
                    v-for="fitnessInterests in fitnessInterests"
                    :key="fitnessInterests"
                    v-model="checked1"
                    :label="fitnessInterests"
                    border
                ></el-checkbox>
            </el-checkbox-group>
        </div>
        <el-button
            type="primary"
            class="submit-button"
            @click="updateInterests"
        >
            Save
        </el-button>
    </div>
</template>

<script>
import { ref } from 'vue';
import { ArrowLeftBold } from '@element-plus/icons';
export default {
    name: 'Interests',
    components: { ArrowLeftBold },
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

        const fitnessInterests = [
            'Walking',
            'Jogging',
            'Running',
            'Hiking',
            'Cycling',
            'Tai Chi',
            'Skateboarding',
            'Equestrian',
            'Climbing',
            'Tennis',
            'Badminton',
        ];

        // Populate this data from DB
        const generalInterestsValues = ref([]);
        const fitnessInterestsValues = ref([]);

        const updateInterests = () => {
            // write to DB
            console.log(generalInterestsValues.value);
            console.log(fitnessInterestsValues.value);
        };

        return {
            generalInterests,
            fitnessInterests,
            generalInterestsValues,
            fitnessInterestsValues,
            updateInterests,
        };
    },
};
</script>

<style lang="scss" scoped>
.interests {
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .return__button {
        margin-left: 10px;
        display: flex;
        align-items: center;
        p {
            margin-left: 5px;
        }
    }
    h3 {
        text-align: center;
        margin: 25px 0 15px 0;
    }
    &__options {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    .submit-button {
        margin: 20px auto;
    }
}
.el-checkbox {
    margin: 0 5px 10px 5px !important;
}
</style>

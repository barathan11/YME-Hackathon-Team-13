<template>
    <div class="goal">
        <router-link :to="{ name: 'Profile' }">
            <div class="return__button">
                <el-icon size="15">
                    <arrow-left-bold />
                </el-icon>
                <p>Back to profile</p>
            </div>
        </router-link>
        <h3>What's your fitness level goal?</h3>
        <div class="goal__options">
            <el-radio-group v-model="goalValue">
                <el-radio-button label="Low"></el-radio-button>
                <el-radio-button label="Medium"></el-radio-button>
                <el-radio-button label="High"></el-radio-button>
            </el-radio-group>
        </div>
        <p>We will progressively guide you towards your goal!</p>
    </div>
</template>

<script>
import { ref } from 'vue';
import { ArrowLeftBold } from '@element-plus/icons';
export default {
    name: 'YourGoal',
    components: { ArrowLeftBold },
    setup() {
        const goalValue = ref('Medium');
        return { goalValue };
    },
};
</script>

<style lang="scss" scoped>
.goal {
    padding: 20px 10px;
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
        margin-bottom: 20px;
    }
    p {
        text-align: center;
    }
}
.el-checkbox {
    margin: 0 5px 10px 5px !important;
}
</style>

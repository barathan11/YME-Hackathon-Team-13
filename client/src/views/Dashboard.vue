<template>
    <div class="dashboard">
        <div class="activity-box">
            <h2>Today's Activity</h2>
            <div class="activity-details">
                <p>
                    <strong>Type: {{ userActivities[userLevel].type }}</strong>
                </p>
                <p>{{ userActivities[userLevel].duration }}</p>
            </div>
            <div v-if="activityState == 0">
                <p class="timepicker-label">Pick your time below!</p>
                <div class="timepicker">
                    <div class="block">
                        <el-date-picker
                            v-model="value1"
                            type="datetime"
                            placeholder="Select date and time"
                        ></el-date-picker>
                    </div>
                </div>
            </div>
            <button @click="handleSubmit" class="enter-button">
                {{ activityLevels[activityState] }}
            </button>
        </div>
        <div class="stat-wrapper limit-width">
            <h2>Your Stats</h2>
            <div class="stats orange">
                <h3 class="stat-title">Streaks</h3>
                <h1 class="stat-value">300</h1>
            </div>
            <div class="stats purple">
                <h3 class="stat-title">Connections Made</h3>
                <h1 class="stat-value">3</h1>
            </div>
            <div class="stats pink">
                <h3 class="stat-title">Vaccinated Users</h3>
                <h1 class="stat-value">13280</h1>
            </div>
        </div>
    </div>
</template>

<script>
// @ts-ignore
import store from '@/store';
import { reactive, toRefs, computed } from 'vue';
import { ElMessageBox } from 'element-plus';
import { ElMessage } from 'element-plus';
export default {
    name: 'Dashboard',
    setup() {
        const userLevel = computed(() => store.state.userLevel);
        const userActivities = computed(() => store.state.userActivities);
        const activityState = computed(() => store.state.activityState);
        const activityLevels = computed(() => store.state.activityLevels);

        // fetch from DB
        const state = reactive({
            value1: '',
        });

        const handleSubmit = () => {
            ElMessageBox.confirm(
                'James will join you for the activity',
                'Found a Partner!',
                {
                    confirmButtonText: 'Contact',
                    cancelButtonText: 'Close',
                    type: 'info',
                    center: true,
                }
            )
                .then(() => {
                    ElMessage({
                        type: 'success',
                        message: 'Contacted James',
                    });
                })
                .then(() => {
                    if (activityState.value == 3) {
                        store.dispatch('updateLevel', userLevel.value + 1);
                        store.dispatch('updateActivityState', 0);
                    } else {
                        store.dispatch(
                            'updateActivityState',
                            activityState.value + 1
                        );
                    }
                })

                .catch(() => {
                    ElMessage({
                        type: 'success',
                        message: 'Scheduled acticity successfully',
                    });
                });
        };

        return {
            handleSubmit,
            ...toRefs(state),
            userLevel,
            userActivities,
            activityState,
            activityLevels,
        };
    },
};
</script>

<style lang="scss" scoped>
.activity-box {
    padding: 30px 10px;
    padding-bottom: 80px;
    // margin: 40px auto;
    margin-bottom: -40px;
    // border-radius: 18px;
    background-color: #0d1d35;
    color: rgb(233, 233, 233);
    // width: 90vw;
    // max-width: 500px;
    text-align: center;
    // box-shadow: 0 8px 15px rgba(0, 0, 0, 0.35);

    .activity-details {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .timepicker-label {
        margin-bottom: 10px;
    }

    .enter-button {
        background-color: #4caf50; /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        margin-top: 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        border-radius: 8px;
        cursor: pointer;
    }
}

.stat-wrapper {
    // border: 2px solid black;
    padding-top: 30px;
    border-radius: 40px;
    background-color: white;
    h2 {
        text-align: center;
        // margin-left: 30px;
        font-size: 25px;
    }
}
.stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .stat-title {
        color: rgb(0, 0, 0);
        font-weight: 300;
    }
    padding: 20px 20px;
    margin: 20px 30px;
    // margin-bottom: 20px;
    border-radius: 8px;
}
.orange {
    background: rgb(255, 184, 71);
    background: linear-gradient(
        0deg,
        rgba(255, 184, 71, 1) 0%,
        rgba(255, 228, 130, 1) 100%
    );
}
.purple {
    background: rgb(173, 102, 255);
    background: linear-gradient(
        0deg,
        rgba(173, 102, 255, 1) 0%,
        rgba(230, 176, 255, 1) 100%
    );
}
.pink {
    background: rgb(255, 102, 102);
    background: linear-gradient(
        0deg,
        rgba(255, 102, 102, 1) 0%,
        rgba(255, 176, 176, 1) 100%
    );
}
</style>

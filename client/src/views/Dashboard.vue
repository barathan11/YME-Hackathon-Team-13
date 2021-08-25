<template>
    <div class="dashboard">
        <div class="activity-box">
            <h2>Today's Activity</h2>
            <div class="activity-details">
                <p>
                    <strong>Type: Running</strong>
                </p>
                <p>1 Hour</p>
            </div>
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
            <button @click="handleSubmit" class="enter-button">Confirm</button>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
export default {
    name: 'Dashboard',
    setup() {
        // fetch from DB
        const state = reactive({
            value1: '',
        });

        const handleSubmit = () => {
            // write to DB
            console.log('Successful Activity Creation');
            console.log(state.value1);
        };

        return {
            handleSubmit,
            ...toRefs(state),
        };
    },
};
</script>

<style lang="scss" scoped>
.activity-box {
    padding: 30px 10px;
    margin: 20px auto;
    border-radius: 18px;
    background-color: #e0eeee;
    width: 90vw;
    max-width: 500px;
    text-align: center;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);

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
</style>

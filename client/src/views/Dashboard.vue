<template>
    <div class="dashboard">
        <div class="activity-box">
            <h2>Today's Activity</h2>
            <p>
                <br />
                <br />
                <strong>Type: Running</strong>
                <br />
            </p>
            <br />
            <br />
            <p>Pick your time below!</p>
            <br />
            <div class="timepicker">
                <TimePicker />
            </div>
        </div>
    </div>
</template>

<script>
import TimePicker from '@/components/TimePicker';
export default {
    name: 'Dashboard',
    components: { TimePicker },
};
</script>

<style lang="scss" scoped>
h1 {
    // font-family: 'Trebuchet MS', sans-serif;
}
.activity-box {
    padding: 30px 10px 10px 10px;
    margin: 20px auto;
    border-radius: 18px;
    background-color: #e0eeee;
    height: 220px;
    width: 90vw;
    max-width: 500px;
    text-align: center;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);

    .timepicker {
        // display: grid;
        // justify-items: center;
        // grid-row-gap: 23px;
        // // width: 100%;
        // padding-top: 25px;
    }
}
</style>

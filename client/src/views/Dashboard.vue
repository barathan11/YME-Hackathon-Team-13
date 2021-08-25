<template>
    <div class="dashboard">
        <div class="activity-box">
            <h1>Create Your Workout</h1>
            <p>
                <br />
                <br />
                <strong> Exercise Type: Running  </strong>
                <br />
            </p>
            <br />
            <br />
                Pick your time below!
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
  font-family: 'Trebuchet MS', sans-serif;
}
.activity-box {
    padding: 50px 5%;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    background-color: #E0EEEE;
    height: 220px;
    text-align: center;
    box-shadow: 0 3px 3px rgba(0,0,0,0.2);

    .timepicker {
        display: grid;
        justify-items: center;
        grid-row-gap: 23px;
        width: 100%;
        padding-top: 25px;
    }

    .controls {
        display: flex;
        justify-content: space-between;

        width: 187px;
    }
}
</style>

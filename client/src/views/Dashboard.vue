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
            <br /><br />
             Recommended Duration: 1 Hour
            <br /><br /><br />
             Pick your time below!
            <div class="timepicker">
                <TimePicker />
            </div>
            <br /><br />
            <button type="submit" @click="handleSubmit" class="enter-button">></button>
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
    height: 330px;
    text-align: center;
    box-shadow: 0 3px 3px rgba(0,0,0,0.2);

    .duration-input {
    height: 15px;
    width: 40%;
    }

    .timepicker {
        display: grid;
        justify-items: center;
        grid-row-gap: 23px;
        width: 100%;
        padding-top: 25px;
    }
    .enter-button {
        background-color: #4CAF50; /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        border-radius: 8px;
    }
    .controls {
        display: flex;
        justify-content: space-between;
        width: 187px;
    }
}
</style>

<template>
    <div class="dashboard">
        <div class="activity-box">
            <h1>Create Your Workout</h1>
            <p>
            <br><br>Exercise Type: Running
            </p>

            <br><div class="timepicker">
             <TimePicker/>
            </div>
        </div>
    </div>
</template>

<script>
import {TimePicker} from "@/components/TimePicker"
export default {
    name: 'Dashboard',
    components: {TimePicker},
}
</script>

<style lang="scss" scoped>
.activity-box {
  padding: 50px 5%;
  background-color: #E0EEEE;
  height: 500px;
  
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

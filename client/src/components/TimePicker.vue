<template>
  <div class="block">
    <span class="demonstration">Default</span>
    <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="Select date and time">
    </el-date-picker>
  </div>
</template>

<script>
  
  export default defineComponent({
     name: 'TimePicker',
     
  });
</script>
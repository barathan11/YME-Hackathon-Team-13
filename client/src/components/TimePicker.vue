<template>
    <div>
        <div class="block">
            <el-date-picker
                v-model="value1"
                type="datetime"
                placeholder="Select date and time"
            ></el-date-picker>
        </div>
    </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
    name: 'TimePicker',
    setup() {
        const state = reactive({
            value1: '',
        });

        return {
            ...toRefs(state),
        };
    },
});
</script>

<template>
<div class="composition">Còn trống: {{spaceLeft}} trong {{capacity}} (vị trí)</div>
  <button @click="increaseCapacity()">Thêm vị trí</button>
  <h2>Người tham dự (Reactive)</h2>
  <ul>
    <li  v-for="(name, index) in attending" :key="index">{{name}}</li>
  </ul>
</template>
<script>
import {reactive, computed, toRefs} from 'vue'
export default {
  setup() {
    const events = reactive({
        capacity: 4,
        attending: ['Nguyễn Đức Tuấn','Nguyễn Thu Trang','Bùi Thị Ngọc Ánh'],
        spaceLeft: computed(() => {
            return events.capacity - events.attending.length
        })
    })
    const increaseCapacity = () => {
        events.capacity += 1
    }
    return {
        ...toRefs(events),
        increaseCapacity
    }
  }
}
</script>
<style scoped>
ul {
  list-style: none;
}
</style>
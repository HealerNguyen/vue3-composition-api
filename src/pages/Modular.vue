<template>
<div class="composition">Còn trống: {{spaceLeft}} trong {{capacity}} (vị trí)</div>
  <button @click="increaseCapacity()">Thêm vị trí</button>
  <h2>Người tham dự (Modular)</h2>
  <ul>
    <li  v-for="(name, index) in attending" :key="index">{{name}}</li>
  </ul>
</template>
<script>
import useEventSpace from "../use/event-space.js"

export default {
  setup() {
    const { capacity, attending, spaceLeft, increaseCapacity} = useEventSpace()
    // const {map, embedId} = useMapping()
    return {
        capacity, attending, spaceLeft, 
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
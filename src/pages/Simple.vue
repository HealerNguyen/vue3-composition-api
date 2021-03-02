<template>
<div class="composition">Còn trống: {{spaceLeft}} trong {{capacity}} (vị trí)</div>
  <button @click="increaseCapacity()">Thêm vị trí</button>
  <h2>Người tham dự(Ref)</h2>
  <ul>
    <li  v-for="(name, index) in attending" :key="index">{{name}}</li>
  </ul>
</template>
<script>
import {ref, computed} from 'vue'
export default {
  setup() {
    const capacity = ref(3)
    const attending = ref(['Nguyễn Đức Tuấn','Nguyễn Thu Trang','Bùi Thị Ngọc Ánh'])
    const increaseCapacity = () => {
      capacity.value += 1
    }
    const spaceLeft = computed(() => {
      return capacity.value - attending.value.length
    })
    return {
      capacity,
      attending,
      increaseCapacity,
      spaceLeft
    }
  }
}
</script>
<style scoped>
ul {
  list-style: none;
}
</style>
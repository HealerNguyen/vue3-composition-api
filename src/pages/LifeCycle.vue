<template>
  <div class="composition">
      <h1>LifeCycle Hooks</h1>
  </div>
</template>
<script>
import { onBeforeMount, onMounted } from 'vue'
export default {
  setup() {
    onBeforeMount(() => {
        console.log("Before Mount")
    })
    onMounted(() => {
        console.log("Mounted")
    })
  }
}
</script>
<style scoped>
ul {
  list-style: none;
}
</style>
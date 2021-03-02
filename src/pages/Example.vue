<template>
  <div class="composition">
      Tìm kiếm <input v-model="searchInput"/>
      <div>
          <p>Số lượng chương trình: {{results}}</p>
      </div>
  </div>
</template>
<script>
import { ref, watchEffect } from 'vue'
import eventApi from "../api/event.js"
export default {
  setup() {
    const searchInput = ref("")
    const results = ref(0)
    results.value = eventApi().counts

    watchEffect(() => {
        console.log(searchInput.value)
        results.value += eventApi().counts
    })

    // watch([firstName, lastName], ([newFirst, newLast], [oldFirst, oldLast]) => {

    // }, {immediate: true})

    return {
        searchInput, results
    }
  }
}
</script>
<style scoped>
ul {
  list-style: none;
}
</style>
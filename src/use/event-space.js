import {computed, ref} from 'vue'
export default function useEventSpace() {
    const capacity = ref(5)
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
<template>
  <div class="sectors">
  <TableContents/>
  </div>
</template>

<script>
import TableContents from '@/components/TableContents.vue'
export default {
  data() {
    return {
      something: true
    }
  },
 
  components: {
    TableContents
  }
}
</script>
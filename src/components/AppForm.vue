<template>
  <div class="container"></div>
</template>

<style>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
}
</style>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      facebookSource: '/facebook.svg',
      igSource: '/ig.svg',
      xSource: '/x.svg'
    }
  },
  setup() {
    const facebookSourceUrl = () => import(`@/assets/${this.facebookSource}`)
    const igSourceUrl = () => import(`@/assets/${this.igSource}`)
    const xSourceUrl = () => import(`@/assets/${this.xSource}`)

    return {
      facebookSourceUrl,
      igSourceUrl,
      xSourceUrl
    }
  }
})
</script>

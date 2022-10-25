<template>
  <div class="app">
    <v-main-wrapper/>
  </div>

</template>

<script>
import { ref } from 'vue'
import vMainWrapper from './components/v-main-wrapper.vue'

export default {
  name: 'app',

  components: {
    vMainWrapper
  },

  setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  }
}
</script>

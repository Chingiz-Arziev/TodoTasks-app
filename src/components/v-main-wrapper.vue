<template>

    <div class="justify-center row">
      <v-header/>
      <v-catalog/>
    </div>
      <v-cart/>

</template>

<script>
import vHeader from './v-header'
import vCatalog from './v-catalog.vue'
import vCart from './v-cart.vue'

export default {
  name: "v-main-wrapper",
  components: {
    vHeader,
    vCatalog,
    vCart,
  }
}
</script>

<style>

</style>
<template>
    <q-layout class="justify-center row">
      <q-page-container class="justify-center row">
        <div class="text-h3">ONLINE SHOP</div>
        <v-catalog/>
        <v-cart/>
      </q-page-container>
    </q-layout>
</template>

<script>
import vCatalog from './v-catalog.vue'
import vCart from './v-cart.vue'

export default {
  name: "v-main-wrapper",
  components: {
    vCatalog,
    vCart,
  }
}
</script>

<style>

</style>
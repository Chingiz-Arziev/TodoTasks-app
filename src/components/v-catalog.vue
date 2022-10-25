<template>
 <div class="justify-center row" style="max-width: 1440px;">
    <div class="text-h4 q-pa-lg">CATALOG</div>
    <div class="row">
      <v-catalog-item
          v-for="product in PRODUCTS"
          :key="product.article"
          :product-data="product"
          @sendArticle="check"
      />
    </div>
 </div>
</template>

<script>
import vCatalogItem from './v-catalog-item'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "v-catalog",
  components: {
    vCatalogItem
  },
  data() {
    return {}
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API'
    ])
  },
  computed: {
    ...mapGetters([
        "PRODUCTS"
    ])
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
  }
}
</script>

<style scoped>

</style>
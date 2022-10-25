<template>
    <div class="q-pa-md no-margin">
      <q-card class="my-card bg-primary text-white no-margin items-center">
        <q-card-section>
          <img :src=" require('../assets/images/' + productData.image)" alt="">
          <div class="text-h6">{{productData.name}}</div>
          <div class="text-subtitle2">{{productData.price.toFixed(2)}} $</div>
        </q-card-section>

        <q-separator dark />

        <q-card-actions>
          <q-btn @click="sendData" flat>В корзину </q-btn>
          <q-btn flat>В избранное </q-btn>
        </q-card-actions>
      </q-card>
    </div>
</template>

<script>
export default {
  name: "v-catalog-item",

  props: {
    productData: {
      type: Object,
      default() {
        return {}
      }
    }
  },

  methods: {
    sendData() {
      this.$emit("sendArticle", this.productData.article)
    }
  }

}
</script>

<style scoped>

</style>
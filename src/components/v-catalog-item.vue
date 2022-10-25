<template>
    <div class="q-pa-md col-3">
      <q-card class="my-card">
        <q-img style="height: 200px;" :src="require('../assets/images/' + productData.image)" />

        <q-card-section>
          <q-btn
              fab
              color="red"
              icon="favorite_border"
              class="absolute"
              style="top: 0; right: 12px; transform: translateY(-50%);"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
              {{productData.name}}
            </div>
            <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
              <q-icon name="place" />
              {{productData.article}}
            </div>
          </div>

          <q-rating v-model="stars" :max="5" size="32px" class=""/>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
            $ {{productData.price.toFixed(2)}}
          </div>
          <div class="text-caption text-grey">
            Small plates, salads & sandwiches in an intimate setting.
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-btn flat color="primary">
            Add to card
          </q-btn>
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
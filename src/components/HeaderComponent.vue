<template>
  <div class="row header">
    <div class="col-2">
      <h4>{{ headertitle }}.....</h4>
    </div>
    <div class="col-5 d-flex justify-content-center">
      <div class="col-11 text-left">
        <span for="bran"> Brands </span>
        <select
          v-model="brand"
          id="brand"
          class="form-control"
          @change="getValue(1)"
          placeholder="Select Brand"
        >
          <option v-for="brand in brands" :key="brand.id">{{ brand }}</option>
        </select>
      </div>
    </div>

    <div class="col-5 d-flex justify-content-center">
      <div class="col-11 text-left">
        <span for="produc"> Products </span>
        <select
          v-model="product"
          id="produc"
          class="form-control"
          @change="getValue(2)"
          placeholder="Select Product"
        >
          <option v-for="product in products" :key="product.Id">
            {{ product }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['headertitle', 'brands', 'products'],

  methods: {
    getValue(from) {
      if (from == 1) {
        this.$emit('responsefrombrand', this.brand);
        console.log('from' + from + ' brand :-' + this.brand);
      } else {
        this.$emit('responsefromproduct', this.product);
        console.log('from' + from + ' brand :-' + this.product);
      }
    },
  },
};
</script>

<style scoped>
.header {
  padding: 40px 30px 40px 30px;
  /* border: 2px solid #f76707; */
  background-color: #8ebfe7;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 100px);
}
</style>
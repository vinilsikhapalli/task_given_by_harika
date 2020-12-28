<template>
  <div class="col-5 leftComoponent">
    <h4>{{ leftTitle }}.....</h4>
    <div class="d-flex justify-content-center">
      <div class="col-5 text-left">
        <span for="foodBran"> Brands's :</span>
        <select
          v-model="foodBrand"
          id="foodBran"
          @change="getValueLeftComponent('brand')"
          class="form-control"
        >
          <option v-for="fbrand in foodBrands" :key="fbrand.id">
            {{ fbrand }}
          </option>
        </select>
      </div>

      <div class="col-4 text-left">
        <span for="foodCategery"> Catageroy's :</span>
        <select
          v-model="foodCategerye"
          id="foodCategery"
          @change="getValueLeftComponent('categeroy')"
          class="form-control"
        >
          <option v-for="catagery in foodCategeryes" :key="catagery.id">
            {{ catagery }}
          </option>
        </select>
      </div>

      <div class="col-3 text-left">
        <span for="fQuantit"> Quantity:</span>
        <input
          type="text"
          v-model="foodQuantity"
          @blur="getValueLeftComponent('fquantit')"
          id="fQuantit"
          class="form-control"
          placeholder=" Quantity"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['leftTitle', 'foodBrands', 'foodCategeryes'],

  methods: {
    getValueLeftComponent(from) {
      if (from == 'brand') {
        this.$emit('fromfoodbrand', this.foodBrand);
      } else if (from == 'categeroy') {
        this.$emit('fromfoodcategeory', this.foodCategerye);
      } else {
        this.$emit('fromfoodquantit', this.foodQuantity);
      }
    },
  },
};
</script>


<style scoped>
.leftComoponent {
  padding: 60px 10px 80px 20px;
  /* border: 2px solid #f76707; */
  /* border-radius: 5px; */
  background-color: #c2c5eb;
  /* display: grid; */
  grid-template-columns: 1fr 2fr;
  grid-template-rows: repeat(3, 100px);
}
</style>
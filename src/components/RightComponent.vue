<template>
  <div class="col-7 rightComoponent">
    <h4>{{ rightTitle }}.....</h4>
    <div class="d-flex justify-content-center">
      <div class="col-5 text-left">
        <span for="electronicBran"> Brands's :</span>
        <select
          v-model="electronicBrand"
          id="electronicBrand"
          @change="getValueRightComponent('brand')"
          class="form-control"
        >
          <option v-for="brand in electronicBrands" :key="brand.id">
            {{ brand }}
          </option>
        </select>
      </div>

      <div class="col-4 text-left">
        <span for="electronicCategery"> Catageroy's :</span>
        <select
          v-model="electronicCategerye"
          id="electronicCategerye"
          @change="getValueRightComponent('categeroy')"
          class="form-control"
        >
          <option v-for="catagery in electronicCategeryes" :key="catagery.id">
            {{ catagery }}
          </option>
        </select>
      </div>

      <div class="col-2 text-left">
        <span for="eQunatit"> Quantity:</span>
        <input
          type="text"
          id="eQunatit"
          class="form-control"
          @blur="getValueRightComponent('eQunatit')"
          v-model="electronicQunatit"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rightTitle', 'electronicBrands', 'electronicCategeryes'],
  methods: {
    getValueRightComponent(from) {
      if (from == 'categeroy') {
        this.$emit('fromelectroniccategerye', this.electronicCategerye);
      } else if (from == 'brand') {
        this.$emit('fromelectronicbrand', this.electronicBrand);
      } else {
        this.$emit('fromelectronicquantity', this.electronicQunatit);
      }
    },
  },
};
</script>

<style scoped>
.rightComoponent {
  padding: 60px 10px 80px 20px;
  /* border: 2px solid #f76707; */
  /* border-radius: 5px; */
  background-color: #9de7b3;
  /* display: grid; */
  grid-template-columns: 1fr 2fr;
  grid-template-rows: repeat(3, 100px);
}
</style>
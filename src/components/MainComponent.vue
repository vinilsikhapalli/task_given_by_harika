<template>
  <div class="container">
    <header-component
      :headertitle="avalableData.headertitle"
      :brands="brands"
      :products="products"
      @responsefrombrand="frombrand"
      @responsefromproduct="fromproduct"
    ></header-component>
    <div class="row">
      <left-component
        :leftTitle="avalableData.leftTitle"
        :foodBrands="foodBrands"
        :foodCategeryes="foodCategeryes"
        @fromfoodbrand="fromfoodbrand"
        @fromfoodcategeory="fromfoodcategeory"
        @fromfoodquantit="fromfoodquantit"
      ></left-component>
      <right-component
        :rightTitle="avalableData.rightTitle"
        :electronicBrands="electronicBrands"
        :electronicCategeryes="electronicCategeryes"
        @fromelectroniccategerye="fromelectroniccategerye"
        @fromelectronicbrand="fromelectronicbrand"
        @fromelectronicquantity="fromelectronicquantity"
      ></right-component>
    </div>
  </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent.vue';

export default {
  components: {
    HeaderComponent,
    LeftComponent,
    RightComponent,
  },

  methods: {
    frombrand(event) {
      (this.avalableData.brand = event),
        //console.log(this.avalableData +'avalable  '+event )
        this.$emit('avalabledata', this.avalableData);
    },
    fromproduct(event) {
      this.avalableData.product = event;
      this.$emit('avalabledata', this.avalableData);
    },
    fromelectroniccategerye(data) {
      this.avalableData.electronicCategerye = data;
      this.$emit('avalabledata', this.avalableData);
    },
    fromelectronicbrand(data) {
      this.avalableData.electronicBrand = data;
      this.$emit('avalabledata', this.avalableData);
    },
    fromelectronicquantity(data) {
      this.avalableData.electronicQunatit = data;
      this.$emit('avalabledata', this.avalableData);
    },
    fromfoodbrand(data) {
      this.avalableData.foodBrand = data;
      this.$emit('avalabledata', this.avalableData);
    },
    fromfoodcategeory(data) {
      this.avalableData.foodCategerye = data;
      this.$emit('avalabledata', this.avalableData);
    },
    fromfoodquantit(data) {
      this.avalableData.foodQuantity = data;
      this.$emit('avalabledata', this.avalableData);
    },
  },

  data() {
    return {
      data: [],
      avalableData: {
        headertitle: 'Mobile',
        leftTitle: 'Food',
        rightTitle: 'Electronic',

        product: '',
        brand: '',

        foodBrand: '',
        foodCategerye: '',
        foodQuantity: '',

        electronicBrand: '',
        electronicCategerye: '',
        electronicQunatit: '',
      },

      brands: ['Apple', 'Samsung', 'Nokia', 'Micro mac'],
      products: ['Mac pro', 'Samsung Guru', 'Lumia 535', 'In'],
      foodBrands: ['Paradise', 'Nala Bheemas', 'KFC', 'FoodCourt'],
      foodCategeryes: ['Veg', 'Non Veg', 'Checken', 'Edly'],
      electronicBrands: ['Sony', 'MI', 'Thosiba', 'V-guard'],
      electronicCategeryes: ['Ear Pods', 'Mobile', 'TV', 'Fan'],
    };
  },
};
</script>
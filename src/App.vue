<template>
  <div v-for="data in numVal" :key="data">
    <main-component @avalabledata="getavalableData"></main-component>
    <p>{{ avalabledata }}</p>
    <div class="text-right col-10">
      <button @click="remove(data)">Remove</button>
    </div>
    <hr />
  </div>

  <div class="row">
    <div class="col-5 text-center">
      <button @click="add">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      template: `<main-component @avalabledata="getavalableData"></main-component>`,
      avalabledata: [],
      numVal: [],
      selectedDataAr: [],
      count: 1,
    };
  },

  methods: {
    getavalableData(data) {
      // console.log('data :-'+data);
      this.avalabledata = JSON.stringify(data);
    },
    add() {
      //alert(this.count)
      this.numVal.push(this.count++);
    },
    remove(data) {
      //alert(data)
      this.numVal.pop(data);
      // this.numVal.filter(da => da !== data)
    },
  },
};
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
<template>
  <div class="DemoElement">
    <button v-if="name" @click="clickMe" @clickMe="clickMe" class="btn">Click me</button>
    <h4 v-else>HI {{name}}</h4>
  </div>
</template>

<script>
export default {
  name: 'DemoElement',
  props: {
    name: String,
  },
  data() {
    return {
      msg: 'Hi I am a web component',
    };
  },
  methods: {
    clickMe() {
      console.log(this.msg);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn {
  font-size: 0.8rem;
  width: 200px;
  display: inline-block;
  border: 1px solid black;
  padding: 10px;
  background: white;
  border-radius: 10px;
  transition: 0.6s all;
  z-index: 3;
}

</style>

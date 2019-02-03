<template>
  <div class="Home">
    <h1>Demo</h1>
    <demo-element :name="'Supriya'" @click="$emit('clickMe')"></demo-element>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

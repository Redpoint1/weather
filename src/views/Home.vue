<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>There is nothing right now :(</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  beforeCreate: function() {
    this.$store.dispatch("getWeather");
  }
};
</script>

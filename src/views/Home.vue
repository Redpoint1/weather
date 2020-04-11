<template>
  <div class="home h-100 d-flex align-items-center justify-content-center">
    <Weather :weather="currentWeather" />
  </div>
</template>

<script>
import Weather from "@/components/Weather";
export default {
  name: "Home",
  components: { Weather },
  beforeCreate: function() {
    this.$store.dispatch("getWeather");
  },
  computed: {
    currentWeather() {
      return this.$store.state.currentWeather;
    }
  }
};
</script>

<template>
  <div class="weather" v-if="weather">
    <p>
      <span class="icon">{{ weatherIcon }}</span
      ><br />
      <span class="description">{{
        weather.weather[0].description | capitalize
      }}</span
      ><br />
      <span class="temperature"
        >🌡️ {{ weather.temp }}{{ temperatureUnit }}</span
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "Weather",
  props: { weather: Object },
  data: function() {
    return {};
  },
  computed: {
    isPrediction() {
      return this.weather.dt == this.currentWeather;
    },
    currentWeather() {
      return this.$store.state.currentWeather;
    },
    temperatureUnit() {
      return this.$store.getters.temperatureUnit;
    },
    weatherIcon() {
      let iconNumber = parseInt(this.weather.weather[0].icon);

      switch (iconNumber) {
        case 1:
          return "☀️";
        case 2:
          return "⛅";
        case 3:
          return "☁️";
        case 4:
          return "☁️";
        case 9:
          return "🌧️";
        case 10:
          return "🌧️";
        case 11:
          return "🌩️";
        case 13:
          return "🌨️";
        case 50:
          return "🌫️";
        default:
          return "?";
      }
    }
  }
};
</script>
<style scoped>
.weather {
  text-align: center;
}
.icon {
  font-size: 50px;
}
</style>

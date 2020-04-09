import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lattitude: 48.1629,
    longtitue: 17.5762,
    units: "metric",
    language: "en",
    current: {},
    hourlyPrediction: [],
    dailyPrediction: []
  },
  mutations: {
    currentWeather(state, payload) {
      state.current = payload;
    },
    hourlyPrediction(state, payload) {
      state.hourlyPrediction = payload;
    },
    dailyPrediction(state, payload) {
      state.dailyPrediction = payload;
    }
  },
  actions: {
    getWeather(ctx) {
      const url = "api/onecall";
      const promise = axios.get(url, {
        params: {
          lat: ctx.state.lattitude,
          lon: ctx.state.longtitue,
          units: ctx.state.units,
          lang: ctx.state.language
        }
      });

      promise.then(response => {
        const data = response.data;

        ctx.commit("currentWeather", data.current);
        ctx.commit("hourlyPrediction", data.hourly);
        ctx.commit("dailyPrediction", data.daily);
      });

      return promise;
    }
  },
  modules: {}
});

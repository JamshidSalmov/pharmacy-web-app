<template>
  <div class="apps w-100" style='height:calc(100vh)' :class="typeof Allweather.main != 'undefined' && Allweather.main.temp > 16 ? 'warm' : ''">
    <main class="w-100 height:calc(100vh)">
      <div class="search-box">
        <input
          type="text"
          class="search-bar border"
          placeholder="Search..."
          v-model="query"
          @keypress="showWeather"
          @click="clearInput"
        />
      </div>
      <div class="weather-wrap" v-if="typeof Allweather.main != 'undefined'">
            <div class="location-box">
                <div class="location">
                    {{ Allweather.name }} ,{{ Allweather.sys.country }}
                </div>
                <div class="date">{{ dataBuilder() }}</div>
            </div>
            <div class="weather-box">
            <div class="temp">{{ Math.round(Allweather.main.temp) }}</div>
            <div class="weather">{{ Allweather.weather[0].main }}</div>
            </div>
      </div>
    </main>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
export default {
  data() {
    return {
      query: 'Tashkent'
    };
  },
  methods: {
    ...mapActions(['fetch_weather']),
    showWeather(e) {
      if (e.key === "Enter") {
        this.fetch_weather(this.query);
      }
    },
    setResults(results) {
      this.weather = results;
    },
  
    dataBuilder() {
      let d = new Date();
      let months = [
        "January",
        "February",
        "March",
        "Aprel",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thuresday",
        "Freday",
        "Saturday",
      ];

      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `${day} ${date} ${month} ${year} `;
    },
    clearInput(){
        this.query = '';
    }
    
  },
  computed: mapGetters(['Allweather']),
  mounted(){
    // this.showWeather({key:'Enter'}),
    this.dataBuilder()
    this.fetch_weather(this.query);
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "montserrat", sans-serif;
}
.apps {
  background: url("@/assets/cloudy.jpg") no-repeat center center / cover;
  transition: 0.5s;
}
.apps.warm {
  background: url("@/assets/sunny.jpg") no-repeat center center / cover;
  transition: 0.5s;
}
main {
  display: grid;
  grid-template-columns: 50% 50%;
  min-height: calc(100vh -60px);
  padding: 25px;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0.25),
    rgba(0, 0, 0, 0.2)
  );
}
.search-box {
  width: 90%;
}
.search-bar {
  margin-top: 30vh;
  display: block;
  width: 100%;
  padding: 15px;
  color: #353535;
  font-size: 20px;
  border: none;
  background: none;
  outline: none;
  appearance: none;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 0 16px 0 16px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  transition: 0.4s;
}
.search-bar:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255);
  border-radius: 16px 0 16px 0;
}
.weather-wrap {
  margin-top: 10vh;
}
.location-box .location {
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
  margin: 30px 0;
}
.location-box .date {
  color: #fff;
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  text-align: center;
}
.weather-box {
  text-align: center;
}
.weather-box .temp {
  display: inline-block;
  padding: 10px 25px;
  color: #fff;
  font-size: 100px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  font-family: sans-serif;
  border-radius: 16px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  margin: 30px 0;
}
.weather-box .weather {
  font-style: italic;
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
</style>
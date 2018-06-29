<template>
  <div>
    <p>{{ msg }}</p>
    <div id='temperatureChart' style="width: 700px;height:500px;">
    </div>  
  </div>
  
</template>

<script>
import {temperatureOption} from '../../assets/temperature.js'
export default {
  name: 'lineChart',
  data () {
    return {
      msg: 'line charts'
    }
  },
  methods: {
    genAllCharts() {
      this.genTemperatureChangeChart();
    },
    genTemperatureChangeChart() {
      let temperatureChart = this.$echarts.init(document.getElementById('temperatureChart'));
      temperatureChart.setOption(temperatureOption);
    }
  },
  mounted() {
    this.genAllCharts();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

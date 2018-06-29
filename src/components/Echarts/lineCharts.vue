<template>
  <div>
  <div class="wrapper">
    <div id='lineChart1' class="chart" style="width: 650px;height:450px;"></div>
    <div id='lineChart2' class="chart" style="width: 650px;height:450px;"></div>
  </div>
  <div class="wrapper">
    <div id='lineChart3' class="chart" style="width: 650px;height:450px;"></div>
    <div id='lineChart4' class="chart" style="width: 650px;height:450px;"></div>  
  </div>
  </div>
</template>

<script>
import {lineChart1Option} from '../../assets/lineChart1';
import {lineChart2Option} from '../../assets/lineChart2';
import {lineChart3Option} from '../../assets/lineChart3';
import {lineChart4Option} from '../../assets/lineChart4';

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
      this.genLineChart1();
      this.genLineChart2();
      this.genLineChart3();
    },
    genTemperatureChangeChart() {
      let lineChart4 = this.$echarts.init(document.getElementById('lineChart4'));
      lineChart4.setOption(lineChart4Option);
    },
    genLineChart1(){
      let lineChart1 = this.$echarts.init(document.getElementById('lineChart1'));
      lineChart1.setOption(lineChart1Option);
    },
    genLineChart2() {
      let lineChart2 = this.$echarts.init(document.getElementById('lineChart2'));
      lineChart2.setOption(lineChart2Option);
    },
    genLineChart3() {
      let lineChart3 = this.$echarts.init(document.getElementById('lineChart3'));
      lineChart3.setOption(lineChart3Option);
    },

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
.chart {
  margin: 40px;
}
.wrapper {
  display: flex;
}
</style>

<template>
 <div>
  <div class="wrapper">
    <div id='barChart1' class="chart" style="width: 650px;height:450px;"></div> 
    <div id='barChart2' class="chart" style="width: 650px;height:450px;"></div> 
  </div>  
  <div class="wrapper">
    <div id='barChart3' class="chart" style="width: 650px;height:450px;"></div> 
    <div id='barChart4' class="chart" style="width: 650px;height:450px;"></div> 
  </div>
  </div>
</template>

<script>
import {barChart1Option} from '../../assets/barChart1'
import {barChart2Option} from '../../assets/barChart2'
import {barChart3Option} from '../../assets/barChart3'
import {barChart4Option} from '../../assets/barChart4'

export default {
  name: 'barCharts',
  data () {
    return {
      msg: 'Welcome to bar charts'
    }
  },
  methods: {
    genAllBarCharts(){
      this.genBarChart1();
      this.genBarChart2();
      this.genBarChart3();
      this.genBarChart4();
    },
    genBarChart1() {
      let barChart1 = this.$echarts.init(document.getElementById('barChart1'));
      barChart1.setOption(barChart1Option);
    },
    genBarChart2() {
      let barChart2 = this.$echarts.init(document.getElementById('barChart2'));
      barChart2.setOption(barChart2Option);
    },
    genBarChart3() {
      let barChart3 = this.$echarts.init(document.getElementById('barChart3'));
      barChart3.setOption(barChart3Option);
    },
    genBarChart4() {
      let barChart4 = this.$echarts.init(document.getElementById('barChart4'));
      barChart4.setOption(barChart4Option);
    },
  },
  mounted() {
    this.genAllBarCharts();
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

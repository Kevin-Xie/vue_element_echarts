<template>
  <div>
  <div class="wrapper">
    <div id='pieChart1' class="chart" style="width: 650px;height:450px;"></div> 
    <div id='pieChart2' class="chart" style="width: 650px;height:450px;"></div> 
  </div>  
  <div class="wrapper">
    <div id='pieChart3' class="chart" style="width: 650px;height:450px;"></div> 
    <div id='pieChart4' class="chart" style="width: 650px;height:450px;"></div> 
  </div>
  </div>
</template>

<script>
import {pieChart1Option} from '../../assets/pieChart1'
import {pieChart2Option} from '../../assets/pieChart2'
import {pieChart3Option} from '../../assets/pieChart3'
import {pieChart4Option} from '../../assets/pieChart4'

export default {
  name: 'pieCharts',
  data () {
    return {
      msg: 'Welcome to pie charts'
    }
  },
  methods: {
    genAllPieCharts() {
      this.genPieChart1();
      this.genPieChart2();
      this.genPieChart3();
      this.genPieChart4();
    },
    genPieChart1() {
      let pieChart1 = this.$echarts.init(document.getElementById('pieChart1'));
      pieChart1.setOption(pieChart1Option);
    },
    genPieChart2() {
      let pieChart2 = this.$echarts.init(document.getElementById('pieChart2'));
      pieChart2.setOption(pieChart2Option);
    },
    genPieChart3() {
      let pieChart3 = this.$echarts.init(document.getElementById('pieChart3'));
      pieChart3.setOption(pieChart3Option);
    },
    genPieChart4() {
      let pieChart4 = this.$echarts.init(document.getElementById('pieChart4'));
      pieChart4.setOption(pieChart4Option);
    }
  },
  mounted() {
    this.genAllPieCharts();
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

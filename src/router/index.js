import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../pages/home'
import Login from '../pages/login'
import PieCharts from '@/components/Echarts/pieCharts'
import homeTab from '@/components/homepage/homeTab'
import LineCharts from '@/components/Echarts/lineCharts'
import BarCharts from '@/components/Echarts/barCharts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
      	{
      		path: '',
      		component: homeTab
      	},
      	{
      		path: 'linecharts',
      		component: LineCharts,
      	},
      	{
      		path: 'piecharts',
      		component: PieCharts
      	},
      	{
      		path: 'barcharts',
      		component: BarCharts
      	}
      ]
    },
    {
    	path: '/login',
    	name: 'login',
    	component: Login
    },
    {
    	path: '/admin',
    	name: 'HelloWorld',
    	component: HelloWorld
    }
  ]
})

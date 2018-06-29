<template>
	<div>
		<p>Vue</p>
		<p>Vue-router</p>
		<p>Element UI</p>
		<p>Echarts <el-button @click="goToEcharts">go to line charts</el-button> </p>
	</div>
</template>

<script>
export default {
	name: 'hometab',
	data() {
		return {

		}
	},
	methods: {
		goToEcharts() {
			this.$router.push('/linecharts')
		}
	}
}
</script>

<style>
	
</style>
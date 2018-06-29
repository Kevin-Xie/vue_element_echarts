<template>
	<div>
		<el-menu :default-active="$route.path" 
				class="el-menue-demo" 
				mode="horizontal"
				@select="handleSelect"
				router>
			<el-menu-item index="/">Home</el-menu-item>
			<el-submenu index="/">
				<template slot="title">Echarts</template>
				<el-menu-item index="/linecharts">Line Charts</el-menu-item>
				<el-menu-item index="/piecharts">Pie Charts</el-menu-item>
				<el-menu-item index="/barcharts">Bar Charts</el-menu-item>
			</el-submenu>
			<el-menu-item index="2">Table</el-menu-item>
			<el-menu-item index="3">Axios</el-menu-item>
			<el-menu-item index="4">About me</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
export default {
	name: 'menu',
	data() {
		return {
		}
	},
	methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped>
	.el-header {
		background-color: #B3C0D1;
	    color: #333;
	    text-align: center;
	    line-height: 60px;
	    top: 0;
	    left: 0;
	    width: 100%;
	    position: relative;
	}
</style>
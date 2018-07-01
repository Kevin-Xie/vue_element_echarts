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
			<el-menu-item index="3">Table</el-menu-item>
			<el-submenu index="4">
				<template slot="title">OpenApi</template>
				<el-submenu index="4-1">
					<template slot="title">douban</template>
					<el-submenu index="4-1-1">
						<template slot="title">Movie</template>
						<el-menu-item index="/doubanmovie">Movies in_theaters</el-menu-item>
						<el-menu-item index="/doubanmovie">Movies top250</el-menu-item>
					</el-submenu>
					<el-submenu index="4-1-2">
						<template slot="title">Book</template>
						<el-menu-item index="4-1-2-1">Books Api 1</el-menu-item>
						<el-menu-item index="4-1-2-2">Books Api 2</el-menu-item>
					</el-submenu>
					<el-submenu index="4-1-3">
						<template slot="title">Music</template>
						<el-menu-item index="4-1-3-1">Music Api 1</el-menu-item>
						<el-menu-item index="4-1-3-2">Music Api 2</el-menu-item>
					</el-submenu>
				</el-submenu>
				<el-submenu>
					<template slot="title">ele</template>
				</el-submenu>
			</el-submenu>
			<el-menu-item index="5">About me</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
export default {
	name: 'menuBar',
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
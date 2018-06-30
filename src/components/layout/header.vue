<template>
	<div class="">
		<el-row>
			<el-col :span=2>
				<slot name="logo"></slot>
			</el-col>
			<el-col :span=20>
				<v-menu-bar></v-menu-bar>
			</el-col>
			<el-col :span=2>
				<router-link to="/"></router-link>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import VMenuBar from './menuBar.vue';

export default {
	name: 'myHeader',
	data() {
		return {
		}
	},
	components: {
		VMenuBar
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
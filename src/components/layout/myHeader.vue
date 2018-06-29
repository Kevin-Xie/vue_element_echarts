<template>
	<div class="">
		<el-row>
			<el-col :span=2>
				<img src="../../assets/logo.png" width="60px">
			</el-col>
			<el-col :span=20>
				<v-menu></v-menu>
			</el-col>
			<el-col :span=2>
				
			</el-col>
		</el-row>
	</div>
</template>

<script>
import VMenu from './menu.vue';

export default {
	name: 'myHeader',
	data() {
		return {
		}
	},
	components: {
		VMenu
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
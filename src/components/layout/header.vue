<template>
	<div class="">
		<el-row>
			<el-col :span=1>
				<slot name="logo"></slot>
			</el-col>
			<el-col :span=20>
				<v-menu-bar></v-menu-bar>
			</el-col>
			<el-col :span=3>
				<p><span :class="locationClass"></span> {{city}}</p>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import {getAddress} from '../../services/location'
import VMenuBar from './menuBar.vue';

export default {
	name: 'myHeader',
	data() {
		return {
			city: 'Where are you now',
			locationClass: 'el-icon-location-outline'
		}
	},
	components: {
		VMenuBar
	},
	methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      getCity() {
      	getAddress()
      	.then(data => {
      		this.city = data.content.address;
      		this.locationClass = 'el-icon-location';
      	})
      	.catch(err => {
      		console.log(err);
      		this.locationClass = 'el-icon-location-outline';
      	})
      },
    },
    mounted() {
    	this.getCity();
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
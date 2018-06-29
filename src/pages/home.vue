<template>
	<div class="home">
		<v-header></v-header>
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import VHeader from '../components/layout/myHeader.vue'
export default {
	name: 'home',
	data() {
		return {

		}
	},
	components: {
		VHeader,
	},
	mounted() {
		// console.log(this.$router)
	}
}
</script>

<style scoped>
	
</style>
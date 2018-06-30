<template>
	<div class="home">
		<v-header>
			<img slot="logo" class="logo-class" src="../assets/logo.png" @click="reload">
		</v-header>
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import VHeader from '../components/layout/header.vue'
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
	},
	methods: {
		reload() {
			window.location.reload();
		}
	}
}
</script>

<style scoped>
.logo-class {
	width: 60px;
}
</style>
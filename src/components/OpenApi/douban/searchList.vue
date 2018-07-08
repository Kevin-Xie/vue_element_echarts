<template>
	<div>
		<div class="searchbar">
			<el-autocomplete 
				v-model.trim="searchText" 
				:trigger-on-focus="false"
				:fetch-suggestions="querySearch"
				@select="handleSelect"
				placeholder="搜索电影、电视剧、综艺、影人">
				<template slot-scope="{ item }">
					<div style="display: flex; border-bottom: 1px solid #e5ebe4;">
						<img :src="item.img" style="width: 10%; height: 10%; margin-top: 5px; margin-bottom: 5px;">
						<div style="margin-left: 20px;">
							<span>{{item.title}} {{item.year}}</span> 
							<br>
							<span>{{item.sub_title}}</span>
							<br>
							<!-- <span>{{item.episode}}</span> -->
						</div>
					</div>
				</template>
				<el-button @click="searchMovies" slot="append" icon="el-icon-search"></el-button>
			</el-autocomplete>
		</div>
	</div>
</template>

<script>
import {searchMovies, suggest} from '../../../services/movie'
export default {
	name: 'SearchList',
	data() {
		return {
			searchText: '',
			searchResult: {},
			url: '/api/j/subject_suggest?q='
		}
	},
	methods: {
		searchMovies() {
			if(!this.searchText)
				return;
			searchMovies(this.searchText)
			.then(data => {
				this.searchResult = data;
				console.log(data)
			})
			.catch(err => {
				console.log(err);
			})
		},
		querySearch(queryString, callback) {
			suggest(queryString)
			.then(data => {
				callback(data);
			})
			.catch(err => {
				console.log(err);
				callback([]);
			})
		},
		handleSelect(item) {
			console.log(item)
		}
	},
	watch: {
		// searchText: (val) => console.log(val)
	}
}
</script>

<style scoped>
.searchbar {
	border-bottom: 1px solid #e5ebe4;
}

.el-autocomplete {
	margin: 20px;
    width: 500px;
}

</style>
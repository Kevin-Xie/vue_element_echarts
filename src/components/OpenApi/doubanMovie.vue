<template>
  <div>
    <h1>正在上映</h1>
    <div>
	    <div class="movie-list">
	    	<v-movie-item v-for="(movie, index) in currentPageData" :movie="movie" :key="index"></v-movie-item>
		</div> 
		<div class='pager-class'>   	
		    <el-pagination 
		    	layout="prev, pager, next"
		    	:total="totalRecords"
		    	:page-size="pageSize"
		    	@prev-click="goPrevPage"
		    	@next-click="goNextPage"
		    	@current-change="changeCurrentPage">
		    </el-pagination>	
	    </div>
    </div>
    
  </div>
</template>

<script>
import VMovieItem from './movieItem'
// import {movies} from '../../assets/movies'
import {Loading} from 'element-ui';

export default {
  name: 'doubanMovie',
  data () {
    return {	
      movies: [],
      currentPageData: [],
      pageSize: 4,
    }
  },
  methods: {
    initMovieData() {
    	// this.movies = movies.subjects;
    	// this.updateCurrentPageData(1, this.pageSize)
    	const loading = Loading.service({fullscreen: true})
    	this.$Axios.get('/api/movie/in_theaters?city=zhuhai&count=50')
    	.then(res => {
    					console.log(res.data.subjects);
    					this.movies = res.data.subjects;
    					this.updateCurrentPageData(1, this.pageSize);
    					loading.close();
    				})
    	.catch(err => {
    					console.log(err);
    					loading.close();
    				})
    },
    updateCurrentPageData(pageNumber, pageSize){
    	this.currentPageData = this.movies.slice((pageNumber-1) * pageSize, pageNumber * pageSize);
    },
    goPrevPage(pageNumber) {

    },
    goNextPage(pageNumber) {

    },
    changeCurrentPage(pageNumber) {
    	this.updateCurrentPageData(pageNumber, this.pageSize);
    }
  },
  components: {
  	VMovieItem,
  },
  computed: {
  	totalRecords() {
  		return this.movies.length;
  	},
  },
  mounted() {
  	console.log('parent mounted')
  	this.initMovieData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pager-class {
	text-align: center;
}
.movie-list {
	text-align: center;
}
</style>

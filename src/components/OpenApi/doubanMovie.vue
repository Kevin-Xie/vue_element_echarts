<template>
  <div>
    <h1>正在上映</h1>
    <div>
    	<v-movie-item v-for="(movie, index) in movies" :movie="movie" :key="index"></v-movie-item>
	</div>    	
  </div>
</template>

<script>
import VMovieItem from './movieItem'
import {movies} from '../../assets/movies'

export default {
  name: 'doubanMovie',
  data () {
    return {	
      movies: [],
    }
  },
  methods: {
    initData() {
    	// console.log(movies.subjects)
    	// this.movies = movies.subjects;
    	this.$Axios.get('/api/movie/in_theaters?city=zhuhai')
    	.then(res => {
    					console.log(res.data.subjects);
    					this.movies = res.data.subjects;
    				})
    	.catch(err => {console.log(err)})
    }
  },
  components: {
  	VMovieItem,
  },
  mounted() {
  	console.log('parent mounted')
  	this.initData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

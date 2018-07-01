<template>
  <div class="movie_item">
    <slot></slot>
      <h2>{{title}}</h2>
    <div width="100%">
      <img :src="post">
    </div>
    <div>
      <!-- <p>{{casts}}</p> -->
      <p>{{genres}}</p>
      <p>{{directors}}</p>
      <p>{{score}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'movieItem',
  props: ['movie'],
  data () {
    return {  
    }
  },
  methods: {
    updateData(movie) {
    }
  },
  watch: {
    movie(movie) {
      console.log('==',movie)
    }
  },
  mounted() {
    console.log('child mounted')
    this.updateData(this.movie)
  },
  computed: {
    title() {
      return this.movie.title;
    },
    post() {
      return this.movie.images.small;
    },
    casts() {
      return this.movie.casts.map(cast => cast.name).join(',');
    },
    genres() {
      return this.movie.genres.join(',');
    },
    directors() {
      return this.movie.directors.map(director => director.name).join(',');
    },
    score() {
      return this.movie.rating.average;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.movie_item {
  display: inline-block;
  margin: 20px;
  width: 20%;
}
</style>

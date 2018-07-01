<template>
  <div class="movie_item">
      <h3>{{title}}</h3>
    <div>
      <el-popover 
        placement="right"
        trigger="hover"
        >
        <img :src="post" width="80%" slot="reference">
        <div>
          <p>主演</p>
          <p>{{casts}}</p>
          <p>导演</p>
          <p>{{directors}}</p>
        </div>
      </el-popover>
    </div>
    <div>
      <p>{{genres}}</p>
      <div>
        <p v-if="score > 0">{{score}}</p>
        <p v-else>暂无评分</p>
        <el-rate v-model="rateScore" 
                disabled
                allow-half
                text-color="#ff9900"
                v-if="score > 0">
              </el-rate>
      </div>
    </div>
  </div>
</template>
<!--  -->
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
      return this.movie.casts.map(cast => cast.name).join(' | ');
    },
    genres() {
      return this.movie.genres.join(',');
    },
    directors() {
      return this.movie.directors.map(director => director.name).join(' | ');
    },
    score() {
      return this.movie.rating.average;
    },
    rateScore() {
      return this.score / 10 * 5;
    },
    hoverContent() {
      return this.casts;
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

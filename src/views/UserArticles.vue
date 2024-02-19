<template>
  <myLoading :active="isLoading"></myLoading>
  <div class="text-center h3 my-4">部落格</div>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <template v-for="article in articles" :key="article.id">
        <div class="col" v-if="article.isPublic">
          <div class="card">
            <img :src="article.imageUrl" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">{{ article.title }}</h5>
              <div v-html="article.description"></div>
            </div>
            <div class="card-footer">
              <RouterLink
                :to="`/article/${article.id}`"
                v-if="article.isPublic"
                class="btn btn-outline-primary"
              >
                文章頁面
              </RouterLink>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
const url = import.meta.env.VITE_APP_API_URL
const path = import.meta.env.VITE_APP_API_NAME
export default {
  data () {
    return {
      isLoading: false,
      articles: []
    }
  },
  methods: {
    getArticles () {
      this.isLoading = true
      this.$http.get(`${url}/api/${path}/articles`)
        .then((res) => {
          this.articles = res.data.articles
          this.isLoading = false
        })
        .catch((err) => {
          console.log(err)
          alert(err.response.data.message)
          this.isLoading = false
        })
    }
  },
  mounted () {
    this.getArticles()
  }
}
</script>

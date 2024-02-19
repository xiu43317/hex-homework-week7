<template>
  <myLoading :active="isLoading"></myLoading>
  <div class="text-center h3 my-4">單一文章</div>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <RouterLink to="/articles">部落格列表</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ article.title }}
        </li>
      </ol>
    </nav>
    <div class="row justify-content-center">
      <article class="col-8">
        <h2>{{ article.title }}</h2>
        <p>
          <small class="text-muted">{{
            date(article.create_at)
          }}</small>
          -
          <small class="text-muted">作者：{{ article.author }}</small>
        </p>
        <img
          :src="article.imageUrl"
          :alt="article.title"
          class="img-fluid mb-3"
        />
        <div v-html="article.content"></div>
      </article>
    </div>
  </div>
</template>
<script>
const url = import.meta.env.VITE_APP_API_URL
const path = import.meta.env.VITE_APP_API_NAME
export default {
  data () {
    return {
      id: '',
      isLoading: false,
      article: {}
    }
  },
  methods: {
    getArticle (id) {
      this.isLoading = true
      this.$http.get(`${url}/api/${path}/article/${id}`)
        .then((res) => {
          this.article = res.data.article
          this.isLoading = false
        })
        .catch((err) => {
          this.isLoading = false
          alert(err.response.data.message)
        })
    },
    date (time) {
      const localDate = new Date(time * 1000)
      return localDate.toLocaleDateString()
    }
  },
  mounted () {
    this.id = this.$route.params.id
    this.getArticle(this.id)
  }
}
</script>

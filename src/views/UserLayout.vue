<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-success">
  <div class="container-fluid">
    <a class="navbar-brand" href="#/products">這是前台</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link to="/products" class="nav-link">前台產品列表</router-link>
        <router-link to="/cart" class="nav-link">前台購物車列表</router-link>
        <router-link to="/orders" class="nav-link">查看訂單</router-link>
        <router-link to="/articles" class="nav-link">部落格</router-link>
      </div>
      <div class="navbar-nav ms-auto">
        <router-link to="/admin/products" class="nav-link">進入後台</router-link>
      </div>
    </div>
  </div>
</nav>
<router-view></router-view>
</template>
<script>
export default {
}
</script>

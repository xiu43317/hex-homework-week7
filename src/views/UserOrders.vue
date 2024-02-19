<template>
     <myLoading :active="isLoading"></myLoading>
     <div class="text-center h3 my-4">訂單狀態</div>
     <div class="container">
        <table class="table">
  <thead>
    <tr>
        <th>購買時間</th>
          <th>Email</th>
          <th>購買款項</th>
          <th>應付金額</th>
          <th>是否付款</th>
          <th>查看明細</th>
    </tr>
  </thead>
  <tbody>
    <template v-for="order in orders" :key="order.id">
        <tr v-if="orders.length">
            <td>{{ order.create_at }}</td>
            <td><span v-text="order.user.email" v-if="order.user"></span></td>
            <td>
              <ul class="list-unstyled">
                <li v-for="product in order.products" :key="product.id">
                  {{ product.product.title }} 數量：{{ product.qty }}
                  {{ product.product.unit }}
                </li>
              </ul>
            </td>
            <td class="text-right">{{ order.total }}</td>
            <td>
              <span v-show="order.is_paid">已付款</span>
              <span v-show="!order.is_paid">未付款</span>
            </td>
            <td>
                <button
                  class="btn btn-outline-primary btn-sm"
                  type="button"
                  @click="goToOrder(order.id)"
                >
                  檢視
                </button>
            </td>
        </tr>
    </template>
  </tbody>
</table>
     </div>
</template>
<script>
const url = import.meta.env.VITE_APP_API_URL
const path = import.meta.env.VITE_APP_API_NAME
export default {
  data () {
    return {
      isLoading: false,
      orders: []
    }
  },
  methods: {
    getOrders () {
      this.isLoading = true
      this.$http.get(`${url}/api/${path}/orders`)
        .then((res) => {
          this.isLoading = false
          this.orders = [...res.data.orders]
          this.orders.forEach((item, index) => {
            this.orders[index].create_at = this.covertDate(item.create_at)
          })
        })
        .catch((err) => {
          this.isLoading = false
          console.log(err)
          alert(err.response.data.message)
        })
    },
    covertDate (time) {
      return new Date(time * 1000).toLocaleDateString()
    },
    goToOrder (id) {
      this.$router.push(`/order/${id}`)
    }
  },
  mounted () {
    this.getOrders()
  }
}
</script>

<template>
  <myLoading :active="isLoading"></myLoading>
  <div class="text-center h3 my-4">訂單編號：{{ id }}</div>
  <div class="container">
    <table class="table mt-4">
      <thead>
        <tr>
          <th>品名</th>
          <th>數量</th>
          <th>單價</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in order.products" :key="item.id">
          <td>{{ item.product.title }}</td>
          <td>{{ item.qty }}/{{ item.product.unit }}</td>
          <td class="text-end">{{ item.final_total }}</td>
        </tr>
      </tbody>
      <tfoot>
          <tr>
            <td colspan="2" class="text-end">總計</td>
            <td class="text-end">{{ order.total }}</td>
          </tr>
        </tfoot>
    </table>
    <table class="table">
        <tbody>
          <tr>
            <th width="100">Email</th>
            <td>{{ order.user.email }}</td>
          </tr>
          <tr>
            <th>姓名</th>
            <td>{{ order.user.name }}</td>
          </tr>
          <tr>
            <th>收件人電話</th>
            <td>{{ order.user.tel }}</td>
          </tr>
          <tr>
            <th>收件人地址</th>
            <td>{{ order.user.address }}</td>
          </tr>
          <tr>
            <th>付款狀態</th>
            <td>
              <span v-if="!order.is_paid">尚未付款</span>
              <span v-else class="text-success">付款完成</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-end" v-if="order.is_paid === false">
        <button type="button"
        class="btn btn-danger"
        :disabled="isPaying"
        @click="payOrder(this.id)"
        >確認付款去
        </button>
      </div>
  </div>
</template>
<script>
const url = import.meta.env.VITE_APP_API_URL
const path = import.meta.env.VITE_APP_API_NAME
export default {
  data () {
    return {
      order: {
        user: {
          name: '',
          address: '',
          tel: '',
          email: ''
        }
      },
      id: '',
      isLoading: false,
      isPaying: false
    }
  },
  methods: {
    getOrder (id) {
      this.isLoading = true
      this.$http.get(`${url}/api/${path}/order/${id}`)
        .then((res) => {
          // console.log(res.data.order)
          this.order = { ...res.data.order }
          this.isLoading = false
        })
        .catch((err) => {
          console.log(err)
          this.isLoading = false
          alert(err.reponse.data.message)
        })
    },
    payOrder (id) {
      this.isPaying = true
      this.$http.post(`${url}/api/${path}/pay/${id}`)
        .then((res) => {
          this.isPaying = false
          alert(res.data.message)
          this.getOrder(this.id)
        }).catch((err) => {
          this.isPaying = false
          alert(err.reponse.data.message)
        })
    }
  },
  mounted () {
    this.id = this.$route.params.id
    this.getOrder(this.id)
  }
}
</script>

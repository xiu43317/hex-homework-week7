<template>
  <div
    id="delProductModal"
    ref="delProductModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="delProductModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除品項</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{ product.title }}</strong>
          (刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            @click="hideModal()"
          >
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="deleteProduct()">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Modal } from 'bootstrap'

export default {
  data () {
    return {
      delModal: ''
    }
  },
  props: ['product'],
  methods: {
    deleteProduct () {
      this.$emit('deleteItem', this.product.id)
    },
    openModal () {
      this.delModal.show()
    },
    hideModal () {
      this.delModal.hide()
    }
  },
  mounted () {
    this.delModal = new Modal(document.querySelector('#delProductModal'))
  }
}
</script>

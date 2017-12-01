<template>
  <ul class="pagination">
    <li class="page-item"
        :class="{'disabled' : currentPage === 1}"
        @click="clickItem(1)">
      <span class="page-link">
        &laquo;
      </span>
    </li>
    <li class="page-item"
        :class="{'disabled' : currentPage === 1}"
        @click="clickItem(currentPage > 1 ? currentPage-1 : 1)">
      <span class="page-link">
        &lsaquo;
      </span>
    </li>

    <li class="page-item disabled" v-if="showFirstEllipsis">
      <span class="page-link">…</span>
    </li>

    <li v-for="pageNumber in getPages"
        :class="[pageNumber === currentPage ? activeClass : '']"
        :key="pageNumber"
        class="page-item"
        @click="clickItem(pageNumber)"
        :style="VlPaginationStyle">
      <a class="page-link">
        {{ pageNumber }}
      </a>
    </li>

    <li class="page-item disabled"
        v-if="showLastEllipsis">
      <span class="page-link">…</span>
    </li>

    <li class="page-item"
        :class="{'disabled' : currentPage === totalPage}"
        @click="clickItem(currentPage < totalPage ? currentPage + 1 : totalPage)">
      <span class="page-link">
        &rsaquo;
      </span>
    </li>
    <li class="page-item"
        :class="{'disabled' : currentPage === totalPage}"
        @click="clickItem(totalPage)">
      <span class="page-link">
        &raquo;
      </span>
    </li>
  </ul>
</template>


<script>
export default {
  name: 'VlPagination',
  model: {
    prop: 'currentPage',
    event: 'currentPageChanged'
  },
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    firstLabel: {
      type: String,
      default: '&laquo;'
    },
    prevLabel: {
      type: String,
      default: '&lsaquo;'
    },
    nextLabel: {
      type: String,
      default: '&rsaquo;'
    },
    lastLabel: {
      type: String,
      default: '&raquo;'
    },
    ellipsisLabel: {
      type: String,
      default: '&hellip;'
    },
    activeClass: {
      type: String,
      default: 'active'
    },
    pageRows: {
      type: Number,
      default: 20,
      required: true
    },
    totalRows: {
      type: Number,
      default: 1,
      required: true
    },
    limit: {
      type: Number,
      default: 3
    }
  },
  data () {
    return {
    }
  },
  computed: {
    totalPage () {
      const result = Math.ceil(this.totalRows / this.pageRows)
      return result < 1 ? 1 : result
    },
    VlPaginationClass (val) {
      return {
      }
    },
    VlPaginationStyle () {
      return {}
    },
    showFirstEllipsis () {
      return this.currentPage > this.limit + 1
    },
    showLastEllipsis () {
      return (this.currentPage > this.limit && this.currentPage <= this.totalPage - this.limit) ||
             (this.currentPage <= this.limit && this.limit + 1 < this.totalPage)
    },
    getPages () {
      const result = []
      if (this.currentPage <= this.limit + 1) {
        return this.limit >= this.totalPage ? this.totalPage : this.limit + 1
      }
      if (this.currentPage > this.totalPage - this.limit) {
        for (let i = 0; i < this.limit + 1; i++) {
          result.push(this.totalPage - this.limit + i)
        }
      } else {
        for (let i = 0; i < this.limit; i++) {
          result.push(this.currentPage - 1 + i)
        }
      }
      return result
    }
  },
  methods: {
    currentPageChanged (val) {
      this.$emit('currentPageChanged', val)
    },
    clickItem (val) {
      this.currentPageChanged(val)
    }
  }
}
</script>

<style src="./VlPagination.css"></style>

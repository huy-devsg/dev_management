<template>
  <div class="form-group">
    <div class="input-group">
      <input
        type="text"
        class="form-control"
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        v-model="keyword"
        @input="handleSearch"
      />
      <div class="input-group-append">
        <button class="btn btn-sm btn-gradient-primary" type="button">
          Search
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      keyword: '',
      timeoutId: null,
    }
  },
  methods: {
    ...mapActions(['setKeyWord']),
    handleSearch(event) {
      this.keyword = event.target.value
      clearTimeout(this.timeoutId)
      this.timeoutId = setTimeout(() => {
        this.setKeyWord(this.keyword)
      }, 1000)
    },
  },
}
</script>

<style></style>

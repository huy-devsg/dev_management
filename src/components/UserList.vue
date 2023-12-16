<template>
  <tbody v-if="getIsLogin">
    <UserItem
      v-for="(userItem, index) in displayedUsers"
      :key="index"
      :user="userItem"
    />
  </tbody>
</template>

<script>
import UserItem from './UserItem.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      userList: [],
    }
  },
  components: {
    UserItem,
  },
  computed: {
    ...mapGetters(['getUserList', 'searchValue', 'getIsLogin']),
    displayedUsers() {
      return this.searchValue ? this.filteredUsers : this.getUserList
    },
    filteredUsers() {
      return this.getUserList.filter((user) =>
        user.full_name.toLowerCase().includes(this.searchValue)
      )
    },
  },

  created() {
    if (this.getIsLogin) {
      this.fetchUserApi()
    }
  },

  methods: {
    ...mapActions(['fetchUserApi']),
  },
}
</script>

<style></style>

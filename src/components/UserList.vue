<template>
  <tbody>
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
    ...mapGetters(['getUserList', 'searchValue']),
    displayedUsers() {
      return this.searchValue ? this.filteredUsers : this.getUserList
    },
    filteredUsers() {
      return this.getUserList.filter((user) =>
        user.full_name.toLowerCase().includes(this.searchValue.toLowerCase())
      )
    },
  },

  created() {
    this.fetchUserApi()
  },
  methods: {
    ...mapActions({
      fetchUserApi: 'fetchUserApi',
    }),
  },
}
</script>

<style></style>

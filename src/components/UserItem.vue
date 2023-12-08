<template>
  <tr>
    <td><img :src="user.avatar" alt="" /></td>
    <td>{{ user.full_name }}</td>
    <td>
      {{
        user.user_language
          ?.map((item) => {
            return item.language.language_name
          })
          .join(', ')
      }}
    </td>
    <td>
      {{ user.gender }}
    </td>
    <td>
      <button
        type="button"
        class="btn btn-gradient-info btn-icon-text"
        @click="handleEditUser(user)"
      >
        <i class="mdi mdi-border-color btn-icon-prepend"></i> Edit
      </button>
      &ensp;
      <button
        type="button"
        class="mr-2 btn btn-gradient-danger btn-icon-text"
        @click="handleRemoveUser(user.user_id)"
      >
        <i class="mdi mdi-delete btn-icon-prepend"></i> Remove
      </button>
      <button
        type="button"
        class="mr-2 btn btn-gradient-danger btn-icon-text"
        @click="handleRemoveUser(user.user_id)"
      >
        <i class="mdi mdi-email-outline"></i>
      </button>
    </td>
    <div>
      <AppModal v-if="openModal">
        <FormUser :userInfo="user"></FormUser>
      </AppModal>
    </div>
  </tr>
</template>

<script>
import { mapActions } from 'vuex'
import AppModal from './AppModal.vue'
import FormUser from './FormUser.vue'
export default {
  props: {
    user: { type: Object },
  },
  data() {
    return {
      isModalEdit: false,
    }
  },

  methods: {
    ...mapActions({
      removeUser: 'removeUser',
      openModal: 'openModal',
      setUserEdit: 'setUserEdit',
    }),
    handleEditUser(user) {
      this.openModal()
      this.setUserEdit(user.user_id)
    },
    handleRemoveUser(userId) {
      if (confirm('Bạn chắc chắn muốn xóa người dùng này không ?')) {
        this.removeUser(userId)
      }
    },
  },

  components: { AppModal, FormUser },
}
</script>

<style></style>

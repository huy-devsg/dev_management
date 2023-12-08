<template>
  <div class="card">
    <div class="card-body">
      <form class="forms-sample">
        <div class="form-group">
          <label for="username">Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Email"
            v-model="userForm.email"
          />

          <span
            class="span-noti"
            v-if="$v.userForm.email.$dirty && !$v.userForm.email.required"
          >
            Email is not empty</span
          >
          <span class="span-noti" v-else-if="!$v.userForm.email.email">
            Email must be valid</span
          >
        </div>
        <div class="form-group">
          <label for="age">Full Name</label>
          <input
            type="text"
            class="form-control"
            id="fullName"
            placeholder="Full Name"
            v-model="userForm.full_name"
          />
          <span
            class="span-noti"
            v-if="
              $v.userForm.full_name.$dirty && !$v.userForm.full_name.required
            "
          >
            Full name is not empty
          </span>
        </div>
        <div class="form-group">
          <label for="avatar">Avatar</label>
          <input
            type="text"
            class="form-control"
            id="avatar"
            placeholder="avatar"
            v-model="userForm.avatar"
          />
          <span
            class="span-noti"
            v-if="$v.userForm.avatar.$dirty && !$v.userForm.avatar.required"
          >
            Avatar is not empty</span
          >
        </div>
        <div class="form-group">
          <label for="">Programming Language : </label>
          <div class="form-row-flex">
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="1"
                  v-model="userForm.language" />

                JavaScript <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="2"
                  v-model="userForm.language" />

                Java <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="4"
                  v-model="userForm.language" />

                PHP <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="3"
                  v-model="userForm.language" />

                Python <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="5"
                  v-model="userForm.language" />

                C# <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="6"
                  v-model="userForm.language" />

                C/C++ <i class="input-helper"></i
              ></label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="">Gender : </label>
          <div class="d-flex">
            <div class="form-check mr-3">
              <label class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name="gender"
                  id="gender"
                  value="Male"
                  v-model="userForm.gender" />
                Male <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check mr-3">
              <label class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name="gender"
                  id="gender"
                  value="Female"
                  v-model="userForm.gender" />
                Female <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check mr-3">
              <label class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name="gender"
                  id="gender"
                  value="Khác"
                  v-model="userForm.gender" />
                Other <i class="input-helper"></i
              ></label>
            </div>
          </div>
          <span
            class="span-noti"
            v-if="$v.userForm.gender.$dirty && !$v.userForm.gender.required"
          >
            Gender is not empty
          </span>
        </div>
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">Role User : </label>
          <div class="col-sm-9">
            <select class="form-control" v-model="userForm.role">
              <option value="admin">Admin</option>
              <option value="client">Client</option>
            </select>
          </div>
          <span
            class="span-noti"
            v-if="$v.userForm.role.$dirty && !$v.userForm.role.required"
          >
            Role is not empty
          </span>
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea
            class="form-control"
            id="description"
            rows="4"
            v-model="userForm.desc"
          ></textarea>
        </div>
        <button
          type="submit"
          class="btn btn-gradient-primary mr-2"
          @click.prevent="submitForm(userForm)"
        >
          Submit
        </button>

        <button class="btn btn-light" @click.prevent="openModal">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { required, email } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      userForm: {
        email: '',
        full_name: '',
        avatar: '',
        gender: '',
        language: [],
        role: '',
        desc: '',
      },
    }
  },
  validations: {
    userForm: {
      email: { email, required },
      full_name: {
        required,
      },
      avatar: {
        required,
      },
      gender: { required },
      role: { required },
    },
  },
  computed: {
    ...mapGetters(['getUserEdit']),
  },
  methods: {
    submitForm() {
      this.$v.userForm.$touch()
      if (!this.$v.userForm.$invalid) {
        if (this.getUserEdit) {
          if (confirm('Bạn chắc chắn muốn cập nhật thông tin user ?')) {
            this.handleUpdateUser(this.userForm)
            this.resetForm()
            this.openModal()
          }
        } else {
          if (confirm('Bạn chắc chắn muốn thêm user ?')) {
            this.handleAddUser(this.userForm)
            this.resetForm()
            this.openModal()
          }
        }
      }
    },
    ...mapActions({
      handleAddUser: 'createUser',
      handleUpdateUser: 'updateUser',
      openModal: 'openModal',
      resetForm: 'resetForm',
    }),
  },
  created() {
    if (this.getUserEdit) {
      this.userForm = { ...this.getUserEdit }
      this.userForm.language =
        this.userForm.user_language?.map((item) => item.language.language_id) ||
        []
    }
  },
}
</script>
<style>
.form-row-flex {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>

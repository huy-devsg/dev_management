<template>
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid"
          alt="Sample image"
        />
      </div>
      <div class="col-md-8 col-lg-6 col-xl-5 offset-xl-1">
        <form>
          <h2 class="text-center">REGISTER</h2>
          <label class="form-label" for="form3Example3">Email address :</label>
          <div class="form-outline mb-4">
            <input
              type="email"
              class="form-control form-control-lg"
              placeholder="Enter a valid email address"
              v-model="userForm.email"
            />
          </div>
          <label class="form-label">Full Name :</label>
          <div class="form-outline mb-4">
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Enter a valid full name"
              v-model="userForm.full_name"
            />
          </div>

          <label class="form-label">Password :</label>
          <div class="form-outline mb-3">
            <input
              type="password"
              class="form-control form-control-lg"
              placeholder="Enter password"
              v-model="userForm.password"
            />
          </div>

          <label class="form-label">Avatar :</label>
          <div class="form-outline mb-3">
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Enter avatar link"
              v-model="userForm.avatar"
            />
          </div>

          <label for="">Gender : </label>
          <div class="d-flex">
            <div class="form-check mr-3">
              <label class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name="gender"
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
                  value="Female"
                  v-model="userForm.gender" />
                Female <i class="input-helper"></i
              ></label>
            </div>
          </div>
          <div class="text-center text-lg-start mt-4 pt-2">
            <button
              type="button"
              class="btn btn-primary btn-lg"
              style="padding-left: 2.5rem; padding-right: 2.5rem"
              @click="handleRegister"
            >
              Register
            </button>
            <p class="small fw-bold mt-2 pt-1 mb-0">
              Do have an account?
              <router-link to="/login" class="link-danger">Login</router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import authMixin from '@/mixins/authMixin'
import { registerUserApi } from '@/apis/auth'
export default {
  data() {
    return {
      userForm: {
        email: '',
        full_name: '',
        avatar: '',
        gender: '',
        password: '',
      },
    }
  },

  mixins: [authMixin],
  methods: {
    async handleRegister() {
      if (confirm('Comfirm register ?')) {
        const register = await registerUserApi(this.userForm)
        if (register) {
          alert('Register success')
          this.$router.push('/')
        } else {
          alert('Register failed')
        }
      }
    },
  },
}
</script>

<style></style>

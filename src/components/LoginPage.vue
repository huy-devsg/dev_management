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
          <h2 class="text-center">LOGIN</h2>

          <!-- Email input -->
          <label class="form-label" for="form3Example3">Email address :</label>
          <div class="form-outline mb-4">
            <input
              type="email"
              id="form3Example3"
              class="form-control form-control-lg"
              placeholder="Enter a valid email address"
              v-model="user.email"
            />
          </div>

          <!-- Password input -->
          <label class="form-label" for="form3Example4">Password :</label>
          <div class="form-outline mb-3">
            <input
              type="password"
              id="form3Example4"
              class="form-control form-control-lg"
              placeholder="Enter password"
              v-model="user.password"
            />
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <!-- Checkbox -->
            <div class="form-check mb-0">
              <input
                class="form-check-input me-2"
                type="checkbox"
                value=""
                id="form2Example3"
              />
              <label class="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <router-link to="#" class="text-body">Forgot password?</router-link>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button
              class="btn btn-primary btn-lg"
              style="padding-left: 2.5rem; padding-right: 2.5rem"
              @click.prevent="handleLogin"
            >
              Login
            </button>
            <p class="small fw-bold mt-2 pt-1 mb-0">
              Don't have an account?
              <router-link to="/register" class="link-danger"
                >Register</router-link
              >
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { userLoginApi } from '../apis/auth.js'
import authMixin from '../mixins/authMixin.js'
import { jwtDecode } from 'jwt-decode'

export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    }
  },

  mixins: [authMixin],

  methods: {
    ...mapActions(['setLogin', 'setUser']),
    async handleLogin() {
      const login = await userLoginApi(this.user)
      if (login) {
        alert('Login success')
        const accessToken = localStorage.getItem('accessToken')
        const decode = jwtDecode(accessToken)
        const { user_id } = decode.data
        this.setLogin(true)
        this.setUser(user_id)
        this.$router.push('/')
      } else {
        alert('Login failed')
        this.setLogin(false)
      }
    },
  },
}
</script>

<style></style>

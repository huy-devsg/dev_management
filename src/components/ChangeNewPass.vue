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
          <h2 class="text-center">RESET PASSWORD</h2>

          <!-- Email input -->
          <label class="form-label">Password :</label>
          <div class="form-outline mb-4">
            <input
              type="password"
              class="form-control form-control-lg"
              placeholder="Enter your new password"
              v-model="user.password"
            />

            <span
              class="span-noti"
              v-if="$v.user.password.$dirty && !$v.user.password.required"
            >
              Password is not empty</span
            >
          </div>
          <label class="form-label">Re Password :</label>
          <div class="form-outline mb-4">
            <input
              type="password"
              class="form-control form-control-lg"
              placeholder="Enter again new password"
              v-model="user.rePassword"
            />

            <span
              class="span-noti"
              v-if="$v.user.rePassword.$dirty && !$v.user.rePassword.required"
            >
              Re Password is not empty</span
            >
            <span
              class="span-noti"
              v-else-if="!$v.user.rePassword.sameAsPassword"
            >
              Passwords must be identical</span
            >
          </div>
          <div class="text-center text-lg-start mt-4 pt-2">
            <button
              class="btn btn-primary btn-lg"
              style="padding-left: 2.5rem; padding-right: 2.5rem"
              @click.prevent="handleReset"
            >
              Change Password
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
import { jwtDecode } from 'jwt-decode'
// import authMixin from '../mixins/authMixin.js'

import { required, sameAs } from 'vuelidate/lib/validators'
import { updatePassApi } from '@/apis/users'

export default {
  data() {
    return {
      token: '',
      user: {
        password: '',
        rePassword: '',
      },
    }
  },
  mounted() {
    const token = this.$route.query.token
    this.token = token
  },
  validations: {
    user: {
      password: { required },
      rePassword: {
        required,
        sameAsPassword: sameAs('password'),
      },
    },
  },
  //   mixins: [authMixin],
  methods: {
    async handleReset() {
      this.$v.user.$touch()
      if (!this.$v.user.$invalid) {
        const decode = jwtDecode(this.token)
        console.log('decode.data: ', decode.data)
        const { user_id } = decode.data
        const user = {
          user_id,
          password: this.user.password,
        }
        updatePassApi(user)
      }
    },
  },
}
</script>

<style></style>

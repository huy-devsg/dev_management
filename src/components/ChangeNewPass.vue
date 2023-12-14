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
        <form v-if="token">
          <h2 class="text-center">NEW PASSWORD</h2>

          <!-- Email input -->
          <label class="form-label">New Password :</label>
          <div class="form-outline mb-4">
            <input
              type="password"
              class="form-control form-control-lg"
              placeholder="Enter your new password"
              v-model="password"
            />

            <span
              class="span-noti"
              v-if="$v.password.$dirty && !$v.password.required"
            >
              Password is not empty</span
            >
            <span
              class="span-noti"
              v-else-if="!$v.password.maxLength || !$v.password.minLength"
            >
              Password must be from 8 to 15 characters
            </span>
          </div>
          <label class="form-label">Re Password :</label>
          <div class="form-outline mb-4">
            <input
              type="password"
              class="form-control form-control-lg"
              placeholder="Enter again new password"
              v-model="rePassword"
            />

            <span
              class="span-noti"
              v-if="$v.rePassword.$dirty && !$v.rePassword.required"
            >
              Re Password is not empty</span
            >
            <span class="span-noti" v-else-if="!$v.rePassword.sameAsPassword">
              Passwords must be identical</span
            >
            <span
              class="span-noti"
              v-else-if="!$v.rePassword.maxLength || !$v.rePassword.minLength"
            >
              Password must be from 8 to 15 characters
            </span>
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
        <h2 v-else>Token không hợp lệ hoặc đã hết hạn!</h2>
      </div>
    </div>
  </div>
</template>
<script>
import { required, sameAs } from 'vuelidate/lib/validators'
import { updatePassApi } from '@/apis/users'
import maxLength from 'vuelidate/lib/validators/maxLength'
import minLength from 'vuelidate/lib/validators/minLength'
import { checkTokenEmail } from '@/apis/auth'

export default {
  data() {
    return {
      checkTime: false,
      password: '',
      rePassword: '',
      token: null,
    }
  },
  async mounted() {
    const token = this.$route.query.token
    if (token) {
      const check = await this.checkToken(token)
      if (check) {
        this.token = token
      }
    }
  },
  methods: {
    redirectToErrorPage() {
      this.$router.push('/404')
    },
    async checkToken(token) {
      return await checkTokenEmail(token)
    },
    async handleReset() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const update = await updatePassApi({
          password: this.password,
          token: this.token,
        })
        if (update) {
          alert('Updated password successly!')
          this.$router.push('/login')
        }
      }
    },
  },
  validations: {
    password: { required, maxLength: maxLength(15), minLength: minLength(8) },
    rePassword: {
      required,
      maxLength: maxLength(15),
      minLength: minLength(8),
      sameAsPassword: sameAs('password'),
    },
  },
}
</script>

<style></style>

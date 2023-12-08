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
          <label class="form-label" for="form3Example3">Email address :</label>
          <div class="form-outline mb-4">
            <input
              type="email"
              id="form3Example3"
              class="form-control form-control-lg"
              placeholder="Enter your email address to receive your password agains"
              v-model="user.email"
            />

            <span
              class="span-noti"
              v-if="$v.user.email.$dirty && !$v.user.email.required"
            >
              Email is not empty</span
            >
            <span class="span-noti" v-else-if="!$v.user.email.email">
              Email must be valid</span
            >
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button
              class="btn btn-primary btn-lg"
              style="padding-left: 2.5rem; padding-right: 2.5rem"
              @click.prevent="handleReset"
            >
              Send
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
import authMixin from '../mixins/authMixin.js'

import { required, email } from 'vuelidate/lib/validators'
import { sendMailReset } from '@/apis/resetPass.js'

export default {
  data() {
    return {
      user: {
        email: '',
      },
    }
  },
  validations: {
    user: {
      email: { email, required },
    },
  },
  mixins: [authMixin],
  methods: {
    async handleReset() {
      this.$v.user.$touch()
      if (!this.$v.user.$invalid) {
        const send = sendMailReset(this.user)
        if (send) {
          alert('Send email successly!')
        } else {
          alert('Send email failed!')
        }
      }
    },
  },
}
</script>

<style></style>

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
            <span
              class="span-noti"
              v-if="$v.userForm.email.$dirty && !$v.userForm.email.required"
            >
              Email is not empty</span
            >
            <span class="span-noti" v-else-if="!$v.userForm.email.email">
              Email must be valid</span
            >
            <span class="span-noti" v-else-if="!$v.userForm.email.maxLength">
              Full name limit is 35 characters
            </span>
          </div>
          <label class="form-label">Full Name :</label>
          <div class="form-outline mb-4">
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Enter a valid full name"
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
            <span
              class="span-noti"
              v-else-if="!$v.userForm.full_name.maxLength"
            >
              Full name limit is 50 characters
            </span>
          </div>

          <label class="form-label">Password :</label>
          <div class="form-outline mb-3">
            <input
              type="password"
              class="form-control form-control-lg"
              placeholder="Enter password"
              v-model="userForm.password"
            />
            <span
              class="span-noti"
              v-if="
                $v.userForm.password.$dirty && !$v.userForm.password.required
              "
            >
              Password is not empty
            </span>
            <span
              class="span-noti"
              v-else-if="
                !$v.userForm.password.maxLength ||
                !$v.userForm.password.minLength
              "
            >
              Password must be from 8 to 15 characters
            </span>
          </div>

          <label class="form-label">Avatar :</label>
          <div class="form-outline mb-3">
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Enter avatar link"
              v-model="userForm.avatar"
            />
            <span
              class="span-noti"
              v-if="$v.userForm.avatar.$dirty && !$v.userForm.avatar.required"
            >
              Avatar is not empty</span
            >
          </div>
          <label for="">Gender : </label>
          <div class="d-flex">
            <div class="form-check mr-3">
              <label class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name="gender"
                  :value="true"
                  v-model="userForm.gender"
                />
                Male <i class="input-helper"></i>
              </label>
            </div>
            <div class="form-check mr-3">
              <label class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name="gender"
                  :value="false"
                  v-model="userForm.gender" />
                Female <i class="input-helper"></i
              ></label>
            </div>
          </div>
          <span
            class="span-noti"
            v-if="$v.userForm.gender.$dirty && !$v.userForm.gender.required"
          >
            Gender is not empty
          </span>
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
import { registerUserApi } from '@/apis/auth'
import { required, email } from 'vuelidate/lib/validators'
import maxLength from 'vuelidate/lib/validators/maxLength'
import minLength from 'vuelidate/lib/validators/minLength'

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
  validations: {
    userForm: {
      email: { email, required, maxLength: maxLength(35) },
      full_name: {
        required,
        maxLength: maxLength(50),
      },
      avatar: {
        required,
      },
      gender: { required },
      password: { required, maxLength: maxLength(15), minLength: minLength(8) },
    },
  },
  methods: {
    async handleRegister() {
      this.$v.userForm.$touch()
      if (!this.$v.userForm.$invalid) {
        if (confirm('Comfirm register ?')) {
          const register = await registerUserApi(this.userForm)
          if (register) {
            alert('Register success')
            this.$router.push('/login')
          } else {
            alert('Register failed')
          }
        }
      }
    },
  },
}
</script>

<style></style>

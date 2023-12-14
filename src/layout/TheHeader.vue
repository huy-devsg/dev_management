<template>
  <nav
    class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row"
  >
    <div
      class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center"
    >
      <router-link class="navbar-brand brand-logo" to="/"
        ><h2>VueProject</h2></router-link
      >
      <router-link class="navbar-brand brand-logo-mini" to="/"
        ><img src="../../public/assets/images/logo-mini.svg" alt="logo"
      /></router-link>
    </div>
    <div class="navbar-menu-wrapper d-flex align-items-stretch">
      <button
        class="navbar-toggler navbar-toggler align-self-center"
        type="button"
        data-toggle="minimize"
      >
        <span class="mdi mdi-menu"></span>
      </button>
      <div class="search-field d-none d-md-block">
        <form class="d-flex align-items-center h-100">
          <div class="input-group">
            <div class="input-group-prepend bg-transparent">
              <i class="input-group-text border-0 mdi mdi-magnify"></i>
            </div>
            <input
              type="text"
              class="form-control bg-transparent border-0"
              placeholder="Search projects"
            />
          </div>
        </form>
      </div>
      <ul class="navbar-nav navbar-nav-right" v-if="getIsLogin">
        <li class="nav-item nav-profile dropdown">
          <a
            class="nav-link dropdown-toggle"
            id="profileDropdown"
            to="#"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            <div class="nav-profile-img">
              <img :src="user.avatar" alt="image" />
              <span class="availability-status online"></span>
            </div>
            <div class="nav-profile-text">
              <p class="mb-1 text-black">{{ user.full_name }}</p>
            </div>
          </a>
          <div
            class="dropdown-menu navbar-dropdown"
            aria-labelledby="profileDropdown"
          >
            <router-link to="/login" class="dropdown-item">
              <i class="mdi mdi-account mr-2 text-success"></i> User Information
            </router-link>

            <div class="dropdown-divider"></div>
            <div class="dropdown-item" @click="signout">
              <i class="mdi mdi-logout mr-2 text-primary"></i> Signout
            </div>
          </div>
        </li>

        <li class="nav-item d-none d-lg-block full-screen-link">
          <router-link to="#" class="nav-link">
            <i class="mdi mdi-fullscreen" id="fullscreen-button"></i>
          </router-link>
        </li>
        <li class="nav-item dropdown">
          <router-link
            class="nav-link count-indicator dropdown-toggle"
            id="messageDropdown"
            to="#"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="mdi mdi-email-outline"></i>
            <span class="count-symbol bg-warning"></span>
          </router-link>
          <div
            class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
            aria-labelledby="messageDropdown"
          >
            <h6 class="p-3 mb-0">Messages</h6>
            <div class="dropdown-divider"></div>
            <router-link to="#" class="dropdown-item preview-item">
              <div class="preview-thumbnail">
                <img
                  src="../../public/assets/images/faces/face4.jpg"
                  alt="image"
                  class="profile-pic"
                />
              </div>
              <div
                class="preview-item-content d-flex align-items-start flex-column justify-content-center"
              >
                <h6 class="preview-subject ellipsis mb-1 font-weight-normal">
                  Mark send you a message
                </h6>
                <p class="text-gray mb-0">1 Minutes ago</p>
              </div>
            </router-link>
            <div class="dropdown-divider"></div>
            <router-link to="#" class="dropdown-item preview-item">
              <div class="preview-thumbnail">
                <img
                  src="../../public/assets/images/faces/face2.jpg"
                  alt="image"
                  class="profile-pic"
                />
              </div>
              <div
                class="preview-item-content d-flex align-items-start flex-column justify-content-center"
              >
                <h6 class="preview-subject ellipsis mb-1 font-weight-normal">
                  Cregh send you a message
                </h6>
                <p class="text-gray mb-0">15 Minutes ago</p>
              </div>
            </router-link>
            <div class="dropdown-divider"></div>
            <router-link to="#" class="dropdown-item preview-item">
              <div class="preview-thumbnail">
                <img
                  src="../../public/assets/images/faces/face3.jpg"
                  alt="image"
                  class="profile-pic"
                />
              </div>
              <div
                class="preview-item-content d-flex align-items-start flex-column justify-content-center"
              >
                <h6 class="preview-subject ellipsis mb-1 font-weight-normal">
                  Profile picture updated
                </h6>
                <p class="text-gray mb-0">18 Minutes ago</p>
              </div>
            </router-link>
            <div class="dropdown-divider"></div>
            <h6 class="p-3 mb-0 text-center">4 new messages</h6>
          </div>
        </li>
        <li class="nav-item dropdown">
          <router-link
            class="nav-link count-indicator dropdown-toggle"
            id="notificationDropdown"
            to="#"
            data-toggle="dropdown"
          >
            <i class="mdi mdi-bell-outline"></i>
            <span class="count-symbol bg-danger"></span>
          </router-link>
          <div
            class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
            aria-labelledby="notificationDropdown"
          >
            <h6 class="p-3 mb-0">Notifications</h6>
            <div class="dropdown-divider"></div>
            <router-link to="#" class="dropdown-item preview-item">
              <div class="preview-thumbnail">
                <div class="preview-icon bg-success">
                  <i class="mdi mdi-calendar"></i>
                </div>
              </div>
              <div
                class="preview-item-content d-flex align-items-start flex-column justify-content-center"
              >
                <h6 class="preview-subject font-weight-normal mb-1">
                  Event today
                </h6>
                <p class="text-gray ellipsis mb-0">
                  Just a reminder that you have an event today
                </p>
              </div>
            </router-link>
            <div class="dropdown-divider"></div>
            <router-link to="#" class="dropdown-item preview-item">
              <div class="preview-thumbnail">
                <div class="preview-icon bg-warning">
                  <i class="mdi mdi-settings"></i>
                </div>
              </div>
              <div
                class="preview-item-content d-flex align-items-start flex-column justify-content-center"
              >
                <h6 class="preview-subject font-weight-normal mb-1">
                  Settings
                </h6>
                <p class="text-gray ellipsis mb-0">Update dashboard</p>
              </div>
            </router-link>
            <div class="dropdown-divider"></div>
            <router-link to="#" class="dropdown-item preview-item">
              <div class="preview-thumbnail">
                <div class="preview-icon bg-info">
                  <i class="mdi mdi-link-variant"></i>
                </div>
              </div>
              <div
                class="preview-item-content d-flex align-items-start flex-column justify-content-center"
              >
                <h6 class="preview-subject font-weight-normal mb-1">
                  Launch Admin
                </h6>
                <p class="text-gray ellipsis mb-0">New admin wow!</p>
              </div>
            </router-link>
            <div class="dropdown-divider"></div>
            <h6 class="p-3 mb-0 text-center">See all notifications</h6>
          </div>
        </li>
        <li class="nav-item nav-logout d-none d-lg-block">
          <span class="nav-link" @click="signout">
            <i class="mdi mdi-power"></i>
          </span>
        </li>
      </ul>
      <ul class="navbar-nav navbar-nav-right" v-else>
        <li class="nav-item nav-profile text-black fs-6">
          <router-link to="/login">
            <p class="mb-0 text-black">
              <i class="mdi mdi-login text-success"></i>
              Login
            </p>
          </router-link>
        </li>
        <li class="nav-item nav-profile text-black fs-6">
          <router-link to="/register">
            <p class="mb-0 ml-3 text-black">
              <i class="mdi mdi-account text-success"></i>
              Register
            </p>
          </router-link>
        </li>
      </ul>
      <button
        class="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
        type="button"
        data-toggle="offcanvas"
      >
        <span class="mdi mdi-menu"></span>
      </button>
    </div>
  </nav>
</template>

<script>
import { getUserById } from '@/apis/users'
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      user: '',
    }
  },
  computed: {
    ...mapGetters(['getIsLogin']),
  },
  created() {
    this.fetchUserData()
  },
  methods: {
    ...mapActions({
      isModal: 'openModal',
    }),
    async fetchUserData() {
      if (this.getIsLogin) {
        this.user = await getUserById()
      }
    },

    signout() {
      if (confirm('Bạn chắc chắn muốn đăng xuất ?')) {
        localStorage.clear('accessToken')
        window.location.reload()
      }
    },
  },
  watch: {
    getIsLogin(newValue) {
      console.log('newValue: ', newValue)
      if (newValue) {
        this.fetchUserData()
      }
    },
  },
}
</script>

<style></style>

import { isLoggedIn, decodeToken } from '../utils/jwtUtils.js'
import { mapActions } from 'vuex'

export default {
  created() {
    this.checkIfLoggedIn()
  },

  methods: {
    ...mapActions(['setLogin', 'setUser']),

    checkIfLoggedIn() {
      const accessToken = localStorage.getItem('accessToken')
      if (accessToken && isLoggedIn(accessToken)) {
        const decoded = decodeToken(accessToken)
        const { email, user_id } = decoded.data
        if (decoded && email && user_id) {
          this.$router.push('/')
          this.setLogin(true)
          this.setUser(user_id)
        }
      } else {
        this.redirectToLogin()
        this.setLogin(false)
      }
    },
    redirectToLogin() {
      if (
        this.$route.path !== '/login' &&
        this.$route.path !== '/register' &&
        this.$route.path !== '/reset-password'
      ) {
        this.$router.push('/login')
      }
    },
  },
}

import { isvalidUsername } from '@/utils/validate'
import { getApiUrl } from '@/utils/utils'
import { getQrcodeStatus } from '@/api/user'
import LangSelect from '@/components/LangSelect'
export default {
  name: 'login',
  components: { LangSelect },
  data () {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error(this.$t('login.errorAccount')))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 3) {
        callback(new Error(this.$t('login.errorPassword')))
      } else {
        callback()
      }
    }
    return {

      qrcode: {
        activeName: 'first',
        showAppdownload: false,
        imgUrl: '',
        uuid: '',
        resultStatus: '',
        msg: '请使用flash-uniapp 扫码登录'
      },
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false,
      pwdType: 'password',
      redirect: '/'
    }
  },
  mounted () {
    this.init()

  },
  methods: {
    init () {
      const redirect = this.$route.query.redirect
      if (redirect) {
        this.redirect = redirect
      }

    },
    changeLoginType (tab) {
      if (this.qrcode.activeName === 'second') {


      }
    },
    uuid () {
      function S4 () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
      }
      return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4())
    },
    showAppdownload () {
      this.qrcode.showAppdownload = true
    },
    hideAppdownload () {
      this.qrcode.showAppdownload = false
    },


    sleep (time) {
      return new Promise((resolve) => setTimeout(resolve, time))
    },
    showPwd () {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.loading = false
            this.$router.push({ path: this.redirect })
          }).catch((err) => {
            this.loading = false
          })
        } else {
          return false
        }
      })
    }
  }
}

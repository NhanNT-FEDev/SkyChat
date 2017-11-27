<template>
  <div class="login">
    <div class="">
      <h1>sky.chat</h1>
      <form @submit.prevent="firebaseLogin">
        <div class="box-form">
          <label class="label-style" for="">Email</label> <br />
          <text-input type="email" v-model="userLogin.email" />
        </div>
        <div class="box-form">
          <label class="label-style" for="">Password</label> <br />
          <text-input type="password" v-model="userLogin.password" :errorMsg="passwordError" :hasError="passwordError !== null" />
        </div>
        <input class="btn-submit" type="submit" value="Sign in"> <br />
      </form>
      <button class="btn-submit">Facebook</button>
      <a class="small-text" href="">Forgot Password</a>
      <a class="large-text" href="#/register">Register</a>
    </div>
  </div>
</template>

<script>
import TextInput from '../form/TextInput'
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'Login',
  components: {
    TextInput
  },
  computed: {
    ...mapGetters({
      user: 'user/user',
      roomsMap: 'user/roomsMap'
    }),
    firstRoomID () {
      return Object.keys(this.roomsMap)[0]
    }
  },
  data () {
    return {
      userLogin: {
        password: '',
        email: ''
      },
      passwordError: null
    }
  },
  methods: {
    ...mapActions({
      'fbLogin': 'user/login',
      'setUserOnline': 'user/setUserOnline'
    }),
    firebaseLogin () {
      this.fbLogin({fb: this.$firebase(), email: this.userLogin.email, password: this.userLogin.password})
    }
  }
}
</script>

<style scoped>
  .login {
    width: 300px;
    margin: 0 auto;
    height: 100vh;
    padding-top: 45px;
    box-sizing: border-box;
  }

  .login h1 {
    color: #00b3ee;
    font-size: 50px;
    margin-bottom: 50px;
    font-weight: 400;
    text-align: center;
  }

  .label-style {
    color: #e0e0e1;
    font-size: 11px;
    text-transform: uppercase;
  }

  input {
    outline: none;
  }

  .input-style {
    border: none;
    border-bottom: 1px solid #e0e0e1;
    padding: 0px 0px 5px 0;
    width: 100%;
    font-size: 14px;
  }

  .box-form {
    margin-bottom: 25px;
  }

  .btn-submit {
    width: 100%;
    margin: 0px auto 20px auto;
    padding: 12px 0px;
    background-color: #00b3ee;
    border-radius: 5px;
    border: none;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
  }

  form input[type='submit'] {
    margin-top: 15px;
  }

  .small-text {
    font-size: 13px;
    color: #00b3ee;
    display: block;
    text-decoration: none;
  }

  .large-text {
    font-size: 15px;
    color: #00b3ee;
    margin-top: 60px;
    display: block;
    text-decoration: underline;
  }

  .small-text,
  .large-text {
    text-align: center;
  }
</style>
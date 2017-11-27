<template>
  <div class="register is-fullhd top-header">
    <!-- Set the Input img -->
    <div class="img-input">
      <div class="team-pic">
        <img class="img-inside" src="../../assets/inputCamare.png">
        <input @change="onFileChange" type="file" id="profile_pic" name="profile_pic" class="choose-file" accept=". jpg, .jpeg, .png">
      </div>

    </div>
    <!-- Set the form input and button register for sky chat -->
    <form action="" @submit.prevent='registerUser'>
      <div class=" main-body">
        <label class=" label-style">Email</label>
        <p class="control has-icons-left has-icons-right">
          <input type="email" v-model='user.email' />
        </p>
      </div>
      <div class=" main-body">
        <label class=" label-style">Username</label>
        <p class="control has-icons-left has-icons-right">
          <input type="input" v-model='user.username' />
        </p>
      </div>
      <div class=" main-body">
        <label class=" label-style">Password</label>
        <p class="control has-icons-left has-icons-right">
          <input type="password" v-model='user.password' />
        </p>
      </div>
      <input class="field button-body btn-submit" value="Register" type="submit" />
    </form>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  export default {
    name: 'index',
    data () {
      return {
        user: {
          email: '',
          username: '',
          password: '',
          avatar: 'inputCamare.png'
        }
      }
    },
    computed: {
      ...mapGetters({
        registerSuccess: 'user/registerSuccess'
      })
    },
    methods: {
      ...mapActions({
        register: 'user/register',
        createDocOfUser: 'user/createDocOfUser',
        changUserRegisterState: 'user/changUserRegisterState'
      }),
      registerUser () {
        this.register({fb: this.$firebase(), db: this.$db(), email: this.user.email, password: this.user.password, username: this.user.username})
        // this.createDocOfUser({db: this.$db(), user: this.user})
      },
      onFileChange (event) {
        const image = this.$el.querySelector('.img-inside')
        if (event.target.files) {
          const reader = new FileReader()
          reader.onload = e => {
            image.setAttribute('src', e.target.result)
          }
          reader.readAsDataURL(event.target.files[0])
        }
      }
    },
    watch: {
      registerSuccess (val) {
        if (val) {
          this.$router.push({name: 'Login'})
        }
      }
    },
    mounted () {
      this.changUserRegisterState(false)
    }
  }
</script>

<style>
  .register {
    width: 300px;
    margin: 0 auto;
    padding-top: 45px;
    box-sizing: border-box;
  }

  .top-header {
    /* background-color: yellow; */
    height: 100vh;
  }

  .main-body {
    width: 100%;
    padding: 0;
    display: block;
    margin-bottom: 25px;
  }

  .main-body input {
    width: 100%;
  }

  input {
    border: none;
    border-bottom: 1px solid #e0e0e1;
    padding: 0px 0px 5px 0;
    width: 100%;
    font-size: 14px;
    outline: none;
  }

  .fix-input {
    width: 60%;
    opacity: 0.5;
    border-color: white;
    border-bottom-color: rgb(70, 68, 68);
    margin-bottom: 2%;
  }

  .button-body {
    margin: auto;
    display: block;
    position: relative;
  }

  .btn-submit {
    width: 100%;
    margin: 15px auto 20px auto;
    padding: 12px 0px;
    background-color: #00b3ee;
    border-radius: 5px;
    border: none;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    text-align: center;
  }

  form input[type='submit'] {
    margin-top: 15px;
  }

  .button-detail {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 5%;
  }

  /* Fix the input + pic */
  #team-pic {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin: 0;
  }
  .img-input {
    height: 100px;
    width: 100px;
    margin: auto;
    margin-bottom: 15px;
  }

  .team-pic {
    width: 100px;
    height: 100px;
    margin: auto;
    position: relative;
  }
  .team-pic img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .img-inside {
    position: absolute;
  }

  .input-getImg {
    position: absolute;
    height: 75%;
    width: 70%;
    margin-top: 11%;
    margin-left: 15%;
  }

  .choose-file {
    height: 100px;
    width: 100px;
    z-index: 100;
    opacity: 0;
  }

  .label-style {
    color: #e0e0e1;
    font-size: 11px;
    text-transform: uppercase;
  }
</style>
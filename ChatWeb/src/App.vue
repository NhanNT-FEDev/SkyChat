<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'app',
  computed: {
    ...mapGetters({
      user: 'user/user',
      roomsMap: 'user/roomsMap'
    }),
    firstRoomID () {
      return Object.keys(this.roomsMap)[0]
    }
  },
  methods: {
    ...mapActions({
      setUp: 'user/setUp'
    })
  },
  mounted () {
    this.setUp({db: this.$db(), fb: this.$firebase()})
  },
  watch: {
    user (val) {
      if (!val) {
        this.$router.replace(`login`)
      } else {
        console.log('App User changed', val)
        if (this.$route.name === 'Register' || this.$route.name === 'Login') {
          // this.setUserOnline({db: this.$db(), userID: val.key, onlineState: true})
          this.$router.push({name: 'room'})
        }
      }
    }
  }
}
</script>

<style lang="scss">
  @import '~bulma';
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
   
  }

  body,
  html {
    width: 100%;
    height: 100%;
    overflow-y: hidden;
  }

  #app {
    width: 100vw;
    height: 100vh;
  }

  * {
    box-sizing: border-box;
  }

  .width-10 {
    width: 10%;
  }

  .width-20 {
    width: 20%;
  }

  .width-25 {
    width: 25%;
  }

  .width-30 {
    width: 30%;
  }

  .width-35 {
    width: 35%;
  }

  .width-40 {
    width: 40%;

  }

  .width-50 {
    width: 50%;
  }

  .width-60 {
    width: 60%;
  }

  .width-65 {
    width: 65%;
  }

  .width-70 {
    width: 70%;
  }

  .width-75 {
    width: 75%;
  }

  .width-80 {
    width: 80%;
  }

  .width-90 {
    width: 90%;
  }

  .width-100 {
    width: 100%;
  }

  .width-1-3 {
    width: calc(100%/3);
  }

  .width-2-3 {
    width: calc(2*100%/3);
  }

  [class^="width"] {
    float: left;
  }

  .padding-left-12 {
    padding-left: 12px;
  }

  .padding-right-12 {
    padding-right: 12px;
  }

  .padding-top-20 {
    padding-top: 20px;
  }

  .padding-15 {
    padding: 15px;
  }

  .padding-top-15 {
    padding-top: 15px;
  }

  .padding-bottom-15 {
    padding-bottom: 15px;
  }

  .padding-left-15 {
    padding-left: 15px;
  }

  .padding-right-15 {
    padding-right: 15px;
  }

  .margin-left-nega-12 {
    margin-left: -12px;
  }

  .margin-right-nega-12 {
    margin-right: -12px;
  }

  .margin-right-10 {
    margin-right: 10px;
  }

  .margin-top-12 {
    margin-top: 12px;
  }

  .margin-top-20 {
    margin-top: 20px;
  }

  .margin-top-15 {
    margin-top: 15px;
  }

  .border-bottom {
    border-bottom: 1px solid #c1c2c3;
  }

  .clearfix {
    clear: both;
  }
  /*Particular */

  @media (max-width: 952px) {
    .contact {
      width: 244px;
    }
    .center {
      width: calc(100vw - 244px)
    }
  }

  @media (max-width:700px) {
    .receiver-info,
    .time,
    .search-box {
      display: none;
    }
    .contact {
      width: 75px;
    }
    .center {
      width: calc(100vw - 75px)
    }
    .user-online-list-item .receiver-info {
      display: block;
    }
    .setting-user .receiver-info {
      display: block;
    }
  }
</style>

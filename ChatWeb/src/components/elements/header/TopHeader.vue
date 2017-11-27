<template>
  <div class="header-user width-100 padding-left-12 padding-right-12">
    <div class="top-header">
      <h1>{{roomID}}</h1>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'top-header',
    data () {
      return {
        isNewMessage: false
      }
    },
    computed: {
      roomID () {
        return this.$route.params.id
      },
      roomTitle () {
        return this.roomsMap[this.roomID]['key'] || ''
      },
      ...mapGetters({
        roomsMap: 'user/roomsMap'
      })
    }
  }
</script>

<style scoped>
  .top-header {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .top-header h1 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .header-user {
    height: 8vh;
    border-bottom: 1px solid #c1c2c3;
    text-align: center;
  }
</style>




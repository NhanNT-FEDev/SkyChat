<template>
  <div class="conversation">
    <div class="width-25 contact">
      <column-header />
      <div class="room-list">
        <list-data :data="listRooms" :linkTo="{name: 'roomDetail'}"></list-data>
      </div>
    </div>

    <div class="width-75 center">
      <top-header></top-header>

      <div class="width-2-3">
        <!-- <chat-box></chat-box> -->
        <router-view />
        <input-space />
      </div>

      <div class="width-1-3 online">
        <list-data class="user-online-list-item" :data='userOnline' :linkTo="{name: 'roomDetail'}"></list-data>
      </div> 
    </div>
  </div>
</template>

<script>
  import ChatBox from '../elements/ui/ChatBox'
  import InputSpace from '../elements/message/InputSpace'
  import TopHeader from '../elements/header/TopHeader'
  import ColumnHeader from '../elements/header/ColumnHeader'
  import ListData from '../elements/user/ListData'
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'Conversation',
    components: {
      ChatBox,
      InputSpace,
      TopHeader,
      ColumnHeader,
      ListData
    },
    data () {
      return {}
    },
    methods: {
      ...mapActions({
        getAllUser: 'test/getAllUser'
      })
    },
    mounted () {
      this.getAllUser()
    },
    computed: {
      ...mapGetters({
        user: 'user/user',
        allUser: 'user/allUser',
        roomsMap: 'user/roomsMap'
      }),
      listRooms () {
        const result = []
        for (let key in this.roomsMap) {
          let dataItem = {
            id: this.roomsMap[key].key,
            title: this.roomsMap[key].key,
            subTitle: this.roomsMap[key].lastMessage,
            url: '',
            roomMessage: this.roomsMap[key].roomMessages,
            time: this.roomsMap[key].lastTimeUpdated
          }
          result.push(dataItem)
        }
        return result
      },
      userID () {
        return this.user.key
      },
      userOnline () {
        const result = []
        for (let key in this.allUser) {
          // const roomID = this.allUser[key]['conversation'] || null
          let dataItem = {
            id: this.allUser[key].key,
            title: this.allUser[key].displayName,
            subTitle: '',
            url: this.allUser[key].avatar,
            time: '',
            isOnline: this.allUser[key].isOnline
          }
          result.push(dataItem)
        }
        return result
      }
    },
    watch: {
      user (val) {
        if (!val) {
          this.$router.push({name: 'login'})
        }
      }
    }
  }
</script>

<style scoped>
  .height-100vh {
    display: block;
    height: 100vh;
  }

  .scale-layout {
    margin: 0;
    padding: 0;
  }

  .format-size {
    width: 100%;
    height: 100vh;
  }

  .conversation {
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
  }

  .header-user {
    height: 8vh;
    border-bottom: 1px solid #c1c2c3;
    text-align: center;
  }

  .center {
    border-left: 1px solid #c1c2c3;
  }
  /* room-list style */
  .room-list {
    height: 92vh;
    overflow-y: scroll;
    background-color: #fff;
  }
  /* user-online */
  .online {
    height: 92vh;
    overflow-y: scroll;
  }
  .user-online-list-item {
    display: block;
  }
</style>

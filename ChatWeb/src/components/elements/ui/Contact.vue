<template>
  <div class="left-panel">
    <div class="header">
      <div class="padding-left-12 padding-right-12 header-content">
        <div class="content">
          <div @click='signOut' class="width-20 text-vertical icon">
            <icon class="setting-icon" name="sign-out" title="Sign out"></icon>
          </div>
          <div class="width-60 has-text-centered text-vertical">
            <h3 class="">Contact</h3>
          </div>
          <div class="width-20 has-text-right text-vertical icon">
            <icon class="envelope-icon" name="envelope-open-o"></icon>
          </div>
        </div>
      </div>
    </div>
    <div class="message">
      <div class="width-100 search-box padding-left-12 padding-right-12 margin-top-12">
        <icon class="search-icon text-vertical" name="search" size="10px" scale="2"></icon>
        <input @keyup.enter="createRoomFieldInUser" v-model="newUser" class="search" type="text" placeholder="Nhập tên người thiếu nợ">
        <span class="delete"></span>
      </div>
      <!-- <list-user :data="listRoom"></list-user> -->
    </div>
  </div>
</template>

<script>
  import ListData from '../user/ListData'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'contact',
    components: {
      ListData
    },
    data () {
      return {
        newUser: ''
      }
    },
    methods: {
      signOut () {
        alert(`Sign out successful!`)
        this.$firebase().auth().signOut().then(() => {
          this.$router.push('/')
        })
          .catch(err => {
            console.error(err)
          })
      },
      ...mapActions({
        'getRoom': 'room/getRoom'
      })
    },
    computed: {
      ...mapGetters({
        user: 'user/user',
        roomsMap: 'user/roomsMap'
      }),
      listRoom () {
        let result = []
        for (let roomID in this.roomsMap) {
          const room = {
            ...this.roomsMap[roomID],
            id: roomID,
            title: `Room ${roomID}`
          }
          result.push(room)
        }
        return result
      }
    }
  }
</script>

<style scoped>
  .relative {
    position: relative;
    overflow: auto;
  }

  .header {
    /* padding-top: 12px; */
    /* padding-left: 12px; */
    margin-bottom: 0;
    overflow: auto;
    position: relative;
    border-bottom: 1px solid #c1c2c3;
    height: 8vh;
  }

  .header h3 {
    padding-top: 4px;
    font-size: 18px;
    padding-top: 10px;
  }

  .header-content,
  .content {
    width: 100%;
    height: 100%;
    position: relative;
  }

  /* .overflow {
		overflow: auto;
	} */

  .content .text-vertical:nth-child(1) {
    left: 0;
  }

  .content .text-vertical:nth-child(2) {
    left: 0;
    right: 0;
    text-align: center;
    margin-left: 20%;
  }

  .content .text-vertical:nth-child(3) {
    right: 0;
    margin-left: 80%;
  }

  .contact {
    overflow: hidden;
  }

  hr {
    margin: 0;
  }

  .search-box {
    position: relative;
  }

  .search {
    width: 100%;
    height: 30px;
    border-radius: 5px;
    background-color: #F6F7F9;
    border: none;
    outline: none;
    padding: 0 10px;
    font-size: 14px;
    padding-left: 30px;
  }

  svg {
    color: #1883f7;
    width: 23px;
    height: 23px;
    cursor: pointer;
  }

  svg.search-icon {
    position: absolute;
    color: #c1c2c3;
    background-color: #F6F7F9;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    font-size: 10px;
    pointer-events: none;
    cursor: pointer;
    text-align: left;
    width: 13px;
    height: 13px;
    left: 20px;
  }

  svg.setting-icon {
    position: relative;
    left: -10px;
  }

  svg.envelope-icon {
    position: relative;
    right: -10px;
  }

  .message {
    height: 92vh;
    overflow-y: scroll;
    background-color: #fff;
  }

  .text-vertical {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    font-size: 16px;
    font-weight: 600;
    color: #000;
    overflow: auto;
  }

  .delete {
    position: absolute;
    right: 20px;
    bottom: 5px;
    width: 15px !important;
    height: 15px !important;
  }
</style>
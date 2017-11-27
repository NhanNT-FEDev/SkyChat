<template>
	<div class="chat-box">
		<!-- <div id="load" v-show="roomMessageLoadingMap">
			<div id="load-icon"></div>
    </div> -->
    {{$router.params}}
    <user-header></user-header>
		<div id="message-content" v-for="(mess, index) in roomMessages">
			<div v-if='user.key === mess.user_id'>
				<sender class="clearfix" :mess="mess" :key='index'></sender>
			</div>
			<div v-else>
				<receiver class="clearfix" :mess="mess"></receiver>
			</div>	
    </div>
	</div>
</template>

<script>
import UserHeader from '../user/UserHeader'
import Receiver from '../user/Receiver'
import Sender from '../user/Sender'
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'chat-box',
  components: {
    Receiver, Sender, UserHeader
  },
  computed: {
    ...mapGetters({
      roomsMap: 'user/roomsMap',
      roomMessagesMap: 'user/roomMessagesMap',
      roomMessageLoadingMap: 'user/roomMessageLoadingMap',
      userStore: 'user/user'
    }),
    user () {
      return this.userStore || {}
    },
    room () {
      return this.roomsMap[this.roomID]
    },
    isLoading () {
      return this.roomMessageLoadingMap[this.roomID] || false
    },
    roomMessages () {
      return this.roomMessagesMap[this.roomID] || []
    },
    roomID () {
      return this.$route.params.id
    },
    messages () {
      const messArr = []
      const messages = this.$route.params.data.roomMessage
      let currentMess = ''
      for (let mess in messages) {
        if (messArr.length === 0 || this.user.key !== messages[currentMess].user_id) {
          const messInfo = {
            content: [messages[mess].content],
            user_id: messages[mess].user_id,
            imgHeight: messages[mess].imgHeight,
            imgWidth: messages[mess].imgWidth,
            type: messages[mess].type
          }
          messArr.push(messInfo)
        } else {
          if (this.user.key === messages[currentMess].user_id) {
            messages[currentMess].content.push(messages[mess].content)
          }
        }
        currentMess = messages[mess].user_id
      }
      return messArr
    }
  },
  methods: {
    scrollToBottom () {
      this.$el.scrollTop = this.$el.scrollHeight
    },
    ...mapActions({
      getMessageByRoom: 'user/getMessageByRoom',
      getMessage: 'user/getMessage'
    })
  },
  watch: {
    roomID (value) {
      this.getMessage({roomID: value, db: this.$db()})
    },
    roomMessages (messages) {
      this.scrollToBottom()
    }
  },
  mounted () {
    this.scrollToBottom()
    this.getMessage({roomID: this.roomID, db: this.$db()})
  }
}
</script>

<style scoped>
	.chat-box {
		height: 84vh;
		overflow-y: scroll;
		position: relative;
		border-right: 1px solid #c1c2c3;
	}

	.sender {
		float: right;
	}

	.reveiver {
		float: left;
	}

	#message-content {
		margin-bottom: 2px;
		overflow: auto;
	}

	#load-icon {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 30px;
		height: 30px;
		border-radius: 50%;
		border-top: 1px solid red;
		animation: loading 1s infinite linear;
	}

	@keyframes loading {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
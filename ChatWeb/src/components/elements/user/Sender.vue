<template>
	<div class="sender">
		<div class="message-list">
			<message-content :isReceiver='false' :mess='mess'>
			  <!-- <message-content :isEnd="true"></message-content>
        <template slot="title">
          <test>klskl</test>
          <div>Haha</div>
          <span>ABC</span>
        </template>
        <div slot="content">9090</div> -->
      </message-content>
		</div>
	</div>
</template>

<script>
import MessageContent from '../message/MessageContent'
export default {
  name: 'sender',
  components: {
    MessageContent
  },
  data () {
    return {
      isReceiver: false
    }
  },
  props: {
    mess: {
      type: Object
    }
  }
}
</script>

<style scoped>
	.sender {
		margin-right: 30px;
	}

	.message-box:last-child {
		margin: 0;
	}

	.message-list {
		text-align: right;
	}

	@media (max-width: 505px) {
		.message-box {
			margin-left: 50px;
		}
	}
</style>
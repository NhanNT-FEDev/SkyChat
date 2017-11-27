<template>
	<div class="receiver">
		<div class="content">
			<div class="img"></div>
			<div class="message-list">
				<message-content :mess='mess' :isReceiver='true'></message-content>
			</div>
		</div>
	</div>
</template>

<script>
import MessageContent from '../message/MessageContent'
export default {
  name: 'receiver',
  components: {
    MessageContent
  },
  data () {
    return {
      receiver: true
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
	.receiver {
		margin-left: 12px;
	}

	.message-box {
		background-color: #F1F0F0;
		color: #000;
		margin-bottom: 2px;
	}

	.message-box:last-child {
		margin: 0;
	}

	.content {
		position: relative;
	}

	.message-list {
		margin-left: 40px;
	}


	.img {
		width: 33px;
		height: 33px;
		margin-right: 10px;
		float: left;
		border-radius: 50%;
		background-color: #cccccc;
		position: absolute;
		bottom: 0;
	}
</style>
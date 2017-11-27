<template>
	<div>
		<span v-if="mess.type === 'text'" :class="{receiver: isReceiver, 'message-box':true, 'large-text': largeMess}">
    	{{mess.content}}
    </span>
    <span v-else class="img">
      <img :src="mess.content" alt="">
    </span>
		<!-- <slot name="title"></slot>
		<slot name="content"></slot> -->
	</div>
</template>

<script>
export default {
  name: 'message-content',
  data () {
    return {}
  },
  props: {
    mess: Object,
    isReceiver: Boolean
  },
  computed: {
    largeMess () {
      return this.mess.length > 250
    }
  }
}
</script>

<style scoped>
	.img img{
		border-top-left-radius: 1.3em;
		border-top-right-radius: 1.3em;
		border-bottom-left-radius: 1.3em;
		border-bottom-right-radius: 1.3em;
		max-width: 350px;
	}
	.message-box {
		border-top-left-radius: 1.3em;
		border-top-right-radius: 1.3em;
		border-bottom-left-radius: 1.3em;
		border-bottom-right-radius: 1.3em;
		box-sizing: border-box;
		padding: 6px 12px;
		max-width: 350px;
		font-size: 14px;
		display: inline-block;
		background-color: #1883F7;
		color: #fff;
		margin-bottom: 2px;
		text-align: left;
	}

	.receiver {
		background-color: #F1F0F0;
		color: #000;
		margin-bottom: 2px;
	}

	.large-text {
		margin: 16px 0;
	}
</style>
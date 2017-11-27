<template>
	<div class="fix-padding">
		<div class="skychat-intro-img">
			<!-- ../assets/conversationImg.jpg -->
			<img src="" alt="">
		</div>
	</div>
</template>

<script>
export default {
  name: 'self-img',
  data () {
    return {
      userSelectedImg: ''
    }
  },
  computed: {}
}
</script>

<style scoped>
	.fix-padding {
		height: 100%;
		text-align: center;
		padding-right: 0;
		float: left;
		margin: 0 12px 0 25px;
	}

	.fix-padding::after {
		clear: both;
	}

	img {
		width: 65px;
		height: 65px;
	}

	.skychat-intro-img {
		display: inline-block;
	}

	.skychat-intro-img img {
		border-radius: 50%;
	}
</style>
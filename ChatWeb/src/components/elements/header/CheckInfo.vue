<template>
	<div class="skychat-intro-detail">
		<div class="skychat-intro-detail-content">
			<h3></h3>
			<p>Các bạn bè trên facebook</p>
			<div class="txt">
				<p>centre of city tại THPT Chuyên Lê Hồng Phong</p>
			</div>
			<div class="txt">
				<p>Sống tại Thành phố Hồ Chí Minh</p>
			</div>
		</div>
	</div>
</template>


<script>
// import {mapGetters} from 'vuex'
export default {
  name: 'check-info',
  props: {
    info: String
  },
  computed: {}
}
</script>

<style scoped>
	/* Design the intro include img and information  */

	.skychat-intro-detail {
		height: 100%;
		padding-left: 0;
	}

	.skychat-intro-detail-content {

		height: 100%;
	}

	.skychat-intro-detail-content p {
		font-size: 0.8em;
		font-family: Arial, Helvetica, sans-serif;
	}

	.skychat-intro-detail-content .txt {
		font-size: 1em;
		color: rgba(0, 0, 0, .4);
	}
	/* Start for chat space  */
	/* Fix the padding in father space */

	.skychat-main {
		margin: 0;
		padding: 0;
		height: 10vh;
	}
	/* Make the header */

	.skychat-header {
		height: 10.5vh;
		width: 100%;
		border-bottom: 1px solid #DBDBDB;
	}
	/* Set the body content */
	/* Set the khung chat  */

	.skychat-main-body {
		margin: 0;
		padding: 0;
		height: 65vh;
		position: relative;
	}

	.skychat-content {
		/* background-color: gold; */
		width: 100%;
		margin: 0;
		padding: 0;
		position: absolute;
		margin: auto;
		text-align: center;
		height: 65vh;
		display: block;
	}

	.time-set {
		height: 3vh;
		width: 100%;
		text-align: center;
		position: absolute;
	}

	.time-set h6 {
		text-align: center;
		color: #999999;
		font-size: small;
	}
	/* Close khung chat */
	/* Set the footer */
	/* Close input text */
	/* Close Chat space */
</style>
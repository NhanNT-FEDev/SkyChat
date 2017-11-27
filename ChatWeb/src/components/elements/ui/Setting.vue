<template>
	<div class="setting">
		<div class="width-100 border-bottom setting-detail">
			<!-- <UserItem class="setting-user" ></UserItem> -->
		</div>
	</div>
</template>

<script>
import ListItem from '../user/ListItem'
// import {mapGetters} from 'vuex'
export default {
  name: 'setting',
  components: {
    ListItem
  },
  data () {
    return {}
  },
  computed: {}
}
</script>

<style scoped>
	.setting {
		overflow: hidden;
	}

	.setting-detail {
		padding: 12px;
	}
</style>
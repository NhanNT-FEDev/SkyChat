<template>
  <div class="user-online-content">
    {{users}}
    <list-data class="user-online-list-item" :data='listUser'></list-data>
  </div>
</template>

<script>
  import ListData from './ListData'
  import {mapGetters} from 'vuex'
  export default {
    name: 'user-online',
    components: {
      ListData
    },
    computed: {
      ...mapGetters({
        'allUser': 'user/allUser'
      }),
      listUser () {
        const result = []
        for (let key in this.allUser) {
          let dataItem = {
            id: this.users[key].key,
            title: this.users[key].displayName,
            subTitle: '',
            url: this.users[key].avatar,
            time: ''
          }
          result.push(dataItem)
        }
        return result
      }
    }
  }
</script>

<style scoped>
  .user-online-content {
    height: 100vh;
  }

  .user-online-list-item {
    display: block;
    height: 80%;
    overflow-y: scroll;
  }
</style>
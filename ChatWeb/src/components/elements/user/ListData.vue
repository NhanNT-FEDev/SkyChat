<template>
  <div class='list-user padding-left-12 padding-right-12'>
    <div class='user-info' v-for='(dataItem, index) in data'>
      <router-link :to="getRouterLinkParams(dataItem)">
        <list-item :dataItem='dataItem' :key='index'></list-item>
      </router-link>
    </div>
  </div>
</template>
<script>
  import ListItem from './ListItem'
  export default {
    name: 'list-data',
    components: {
      ListItem
    },
    props: {
      data: {
        type: Array,
        default () {
          return []
        }
      },
      linkTo: Object
    },
    methods: {
      getRouterLinkParams (item) {
        return {...this.linkTo, params: {id: item.id, data: item}}
      }
    }
  }
</script>
<style scoped>
  .list-user {
    overflow: auto;
    min-width: 244px;
  }

  .user-info:first-of-type {
    margin-top: 12px;
  }
</style>
<template>
  <div class='demo-firebase'>
    {{users}}
    <button @click='add'>Add user</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        users: []
      }
    },
    mounted () {
      this.$db().collection('users').doc('4YwYghP8GfhZBpdzpwubjdUbBf63').get()
      .then(doc => {
        Object.keys(doc.data()).forEach(e => {
          if (e.indexOf('room') > -1) {
            this.users.push(e)
          }
        })
        console.log(this.users)
      })
    },
    methods: {
      add () {
        this.$db().collection(`users`).doc('lover').update({
          born: 1996
        })
        .then(() => {
          console.log('Successful !!!')
        })
      }
    }
  }
</script>

<style scoped></style>
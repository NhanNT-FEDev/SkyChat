<template>
  <div class=" skychat-footer scale-layout">
    <div class="hoang">
      <!-- <form method="POST" class="choose-file" @submit.prevent="send" name="fileinfo"> -->
      <div class=" sk	ychat-footer-content scale-layout">
        <div class="skychat-footer-input scale-layout float-left ">
          <input id="input" @keyup.enter="send" v-model="mess" class=" fix-border" type="text" placeholder="Nhập tin nhắn..." autofocus="autofocus">
        </div>
        <div class="skychat-footer-btn scale-layout float-left ">
          <div class="btn-content">
            <a>
              <i class="fa fa-picture-o" aria-hidden="true"></i>
            </a>
          </div>
          <div class="input-by-click">
            <input type="file" class="choose-file" accept=". jpg, .jpeg, .png" @change='uploadFile'>
          </div>
        </div>
        <div class="skychat-footer-submit scale-layout float-left">
          <div class="skychat-design-btn">
            <button @click.self="send" :class="{'disabled-btn': mess == ''}" :disabled="mess == ''"> Gửi </button>
          </div>
        </div>
      </div>
      <!-- </form> -->
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import {
    mapActions,
    mapGetters
  } from 'vuex'
  export default {
    name: 'input-space',
    data () {
      return {
        mess: '',
        route: ''
      }
    },
    methods: {
      ...mapActions({
        sendMessage: 'user/sendMessage'
      }),
      send () {
        if (this.mess) {
          this.sendMessage({
            roomID: this.roomID,
            db: this.$db(),
            mess: this.mess,
            user_id: this.user.key,
            type: 'text'
          })
          this.mess = ''
        }
      },
      uploadFile (evt) {
        const self = this
        let selectedFile = event.target.files[0]

        let metadata = {
          contentType: 'image/jpg'
        }
        // alert(selectedFile)
        let filename = selectedFile.name
        console.log(filename)
        let storageRef = firebase.storage().ref('/secret/' + filename)
        let uploadTask = storageRef.put(selectedFile, metadata)
        uploadTask.on('state_changed', function (snapshot) {
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log('Upload is ' + progress + '% done')
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log('Upload is paused')
              break
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log('Upload is running')
              break
          }
        }, function (error) {
          switch (error.code) {
            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              break
            case 'storage/canceled':
              // User canceled the upload
              break
            case 'storage/unknown':
              // Unknown error occurred, inspect error.serverResponse
              break
          }
        }, function () {
          // Upload complete successfully, now  we can get the download URL
          let postKey = firebase.database().ref('Posts/').push().key
          let downloadURL = uploadTask.snapshot.downloadURL
          console.log(downloadURL)
          let updates = {}
          let postData = {
            url: downloadURL
          }
          self.sendMessage({
            roomID: self.roomID,
            db: self.$db(),
            mess: downloadURL,
            user_id: self.user.key,
            type: 'image'
          })
          alert(postData)
          updates['/Posts/' + postKey] = postData
          firebase.database().ref().update(updates)
        })
      }
    },
    computed: {
      roomID () {
        return this.$route.params.id
      },
      ...mapGetters({
        user: 'user/user'
      })
    },
    created () {
      this.route = this.$route.path
    }
  }
</script>

<style scoped>
  /* Set the input text */

  .hoang {
    height: inherit;
    position: relative;
  }

  .float-left {
    float: left;
  }

  .scale-layout {
    margin: 0;
    padding: 0;
  }

  .skychat-footer {
    border-top: 1px solid #999999;
    border-right: 1px solid #999999;
    border-bottom: 1px solid #999999;
    display: block;
    height: 8vh !important;
    position: relative;
    padding-left: 15px;
  }

  .skychat-footer-content {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .skychat-footer-input {
    width: 70%;
  }

  .skychat-footer-input input {
    width: 100%;
    border: none;
    height: 30px;
    font-size: 14px;
  }

  input {
    outline: none;
  }

  .fix-border {
    opacity: 1;
    border-color: white;
  }
  /* Close the input text */
  /* Set the btn load img */

  .skychat-footer-btn {
    position: absolute;
    right: 65px;
    cursor: pointer
  }

  .btn-content {
    margin: auto;
    text-align: center;
    position: absolute;
    left: 0;
    top: 0;
    cursor: pointer;
  }

  .input-by-click input,
  .input-by-click form {
    width: 34px;
  }

  .btn-content>a>i {
    margin-top: 5%;
    font-size: 2em;
    color: #999999;
    cursor: pointer;
  }

  .input-by-click {
    z-index: 1000;
    overflow-x: hidden;
    opacity: 0;
    cursor: pointer;
  }

  .choose-file {
    font-size: 20px;
  }
  /* Close the btn */
  /* Set the btn submit */

  .skychat-footer-submit {
    position: absolute;
    right: 15px;
  }

  .skychat-design-btn button {
    padding-top: 8px;
    border: none;
    color: #0084FF;
    background-color: white;
    font-size: 1em;
    outline: none;
    cursor: pointer;
    font-weight: bold;
  }

  .disabled-btn {
    opacity: .5;
  }
  /* Close the btn submit */

</style>

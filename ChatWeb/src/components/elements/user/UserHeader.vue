<template>
  <div class="skychat-intro width-100">
    <!-- {{$route.params.data}} -->
    <div class="fix-padding">
      <div class="skychat-intro-img">
        <!-- ../assets/conversationImg.jpg -->
        <img src="" alt="">
      </div>
    </div>
    <div class="skychat-intro-detail">
      <div class="skychat-intro-detail-content">
        <h3></h3>
        <p>Các bạn bè trên facebook</p>
        <div class="txt">
          <p>Làm việc tại Skylab</p>
        </div>
        <div class="txt">
          <p>Sống tại Thành phố Hồ Chí Minh</p>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import CheckInfo from '../header/CheckInfo'
  import SelfImg from '../header/SelfImg'
  export default {
    components: {
      CheckInfo, SelfImg
    },
    props: {
      data: Object
    }
  }
</script>


<style scoped>
  .skychat-intro {
    padding: 0;
    overflow: auto;
    padding: 12px 0;
    border-bottom: 1px solid #c1c2c3;
    margin-bottom: 40px;
  }

  /* img */

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
    width: 65px;
    height: 65px;
    background-color: #cccccc;
    border-radius: 50%;
  }

  .skychat-intro-img img {
    border-radius: 50%;
  }

  /* check-info */

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
</style>
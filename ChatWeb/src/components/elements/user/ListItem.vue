<template>
  <div class="margin-left-nega-12 margin-right-nega-12 ">
    <div class="data padding-left-12" >
      <!-- <div class="padding-left-12 padding-right-12 clearfix"> -->
        <div class="float-left margin-right-10">
          <div class="img-father">
            <div class="img">
              <img :src="dataItem.url" alt="">
            </div>
            <span v-if="dataItem.isOnline" class="online-dot"></span>
          </div>
        </div>
        <div class="float-left receiver-info">
          <div class="center-y">
            <h3 class="room-title">{{dataItem.title}}</h3>
            <p class="mess">{{dataItem.subTitle}}</p>
          </div>
        </div>
        <div class="float-left has-text-right">
          <span class="time">{{dataItem.time}}</span>
        </div>
    </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'list-item',
    props: ['dataItem']
  }
</script>
<style scoped>
  .receiver-info {
    width: 140px;
  }
  .room-title {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden !important;
  }
  .user-online-list-item .img {
    width: 35px;
    height: 35px;
    display: block;
  }

  .user-online-list-item h3 {
    font-size: 15px;
    color: grey;
  }

  .user-online-list-item p,
  .time {
    display: block;
  }
  .user-online-list-item .online-dot {
    bottom: 2px;
    width: 9px;
    height: 9px;
  }
  .float-left {
    float: left;
  }

  .data {
    margin-bottom: 0;
    position: relative;
    overflow: auto;
    cursor: pointer;
    padding: 5px 0;
    color: grey;
    padding-left: 12px;
  }

  .data:hover, .data:active {
    background-color: #f2f2f2;
  }

  .img-father {
    position: relative;
  }

  .img {
    background-color: #ccc;
    width: 50px;
    height: 50px;
    border-radius: 50%; 
  }
  
  .img img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  span.online-dot {
    width: 10px;
    height: 10px;
    background-color: #5DC971;
    position: absolute;
    bottom: 5px;
    right: 0px;
    border-radius: 50%;
    display: block;
  }

  .info {
    position: relative;
  }

  .padding-left-0 {
    padding-left: 0;
  }

  .center-y {
    /* position: absolute;
        top: 50%;
        transform: translateY(-50%); */
    padding-top: 3px;
  }

  ul li {
    margin: 20px 0;
    position: relative
  }

  .info h3 {
    font-size: 14px;
    color: #000;
    margin-bottom: 5px;
  }

  .mess {
    font-size: 12px;
    color: #c1c1c1;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden !important;
  }

  .time {
    color: #c1c1c1;
    font-size: 12px;
    position: absolute;
    right: 15px;
    top: 10px;
  }

  .setting .setting-user .data:hover {
    background-color: transparent;
    cursor: auto;
  }
</style>
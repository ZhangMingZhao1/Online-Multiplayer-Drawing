<script lang="ts">
import { useRouter } from 'vue-router'

export default {
  data() {
    return {
      lf: null,
      roomNum : 0,
      roomList: []
    };
  },
  mounted() {
  },
  methods: {
    createRoom() {
      this.$data.roomNum = this.$data.roomNum+1;
      this.$data.roomList.push(this.$data.roomNum);
    },
    toRoomDetail(item) {
      this.$router.push(`/room/${item}`)
       
    }
  }
};
</script>

<template>
  <div class="room-list-container">
    <div class="create-room" @click="createRoom">
      创建房间
    </div>
    <div v-for="item in roomList" :key="item" class="room" @click="toRoomDetail(item)">
      {{"房间"+item}}
    </div>
  </div>
</template>

<style scoped>
  .create-room, .room {
    width: 150px;
    height: 100px;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    overflow: hidden;
    color: #303133;
    background:#303133;

    margin-right: 10px;
    font-size: 20px;
    color: aqua;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .room-list-container {
    display: flex;
  }
</style>

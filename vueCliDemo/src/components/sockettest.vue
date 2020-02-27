<!--  -->
<template>
  <div>sockettest</div>
</template>

<script>
import io from "socket.io-client";
export default {

  components: {
  },

  props: {},

  data () {
    return {
    };
  },

  computed: {
  },

  mounted () { },
  created () {
    window.io = io
    // let cur = io('/?clientId=c55ee9cc399242db8b608bbb34d31863', { path: '/api/websocket', transports: ['websocket', 'xhr-polling', 'jsonp-polling'] })
    let cur = io('/?clientId=45df5c74dff24614a598a12e56398b9b&taskId=_local', { path: '/api/websocket', transports: ['websocket', 'xhr-polling', 'jsonp-polling'] })

    //默认socketio事件
    cur.on('connect', function (data) {
      console.log(data)
      console.log('连接成功')
    })

    cur.on('nodeStatus', function () {
      console.log(arguments)
      console.log('正在连接')
    })

    cur.on('connecting', function () {
      console.log('正在连接')
    })
    cur.on('disconnect', function () {
      console.log('断开连接')
    })
    cur.on('connect_failed', function () {
      console.log('连接失败')
    })
    cur.on('error', function () {
      console.log('错误发生，并且无法被其他事件类型所处理')
    })
    cur.on('message', function () {
      console.log('同服务器端message事件')
    })
    cur.on('anything', function () {
      console.log('同服务器端anything事件')
    })
    cur.on('reconnect_failed', function () {
      console.log('重连失败')
    })
    cur.on('reconnect', function () {
      console.log('成功重连')
    })
    cur.on('reconnecting', function () {
      console.log('正在重连')
    })

  },

  methods: {
  }
}

</script>

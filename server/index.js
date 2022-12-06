const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:5173',
    credentials: true,
    allowedHeaders: ['raw-url']
  }
});
const port = process.env.PORT || 3001;

app.use(express.static(__dirname + '/public'));
// 房间用户名单
const roomInfo = {};

function onConnection(socket) {
  const url = socket.request.headers['raw-url'];
  console.log('url', url);
  console.log('url', url);
  const splited = url.split('/');
  const roomID = splited[splited.length - 1]; // 获取房间ID
  console.log('roomId', roomID);
  let user = '';
  socket.on('join', function (userName) {
    user = userName;

    // 将用户昵称加入房间名单中
    if (!roomInfo[roomID]) {
      roomInfo[roomID] = [];
    }
    roomInfo[roomID].push(user);
    socket.join(roomID); // 加入房间
    // 通知房间内人员
    io.to(roomID).emit('sys', user + '加入了房间');
    io.to(roomID).emit('peopleNumJob', roomInfo[roomID].length);
    console.log(user + '加入了' + roomID);
  });

  socket.on('drawing', (data) => {
    console.log('erver drawing');
    // socket.broadcast.emit("drawing", data);
    socket.join(roomID);
    io.to(roomID).emit('drawing', data);
    io.to(roomID).emit('sys', user + '操作画布');
  });
  socket.on('leave', function () {
    // 从房间名单中移除
    const index = roomInfo[roomID].indexOf(user);
    if (index !== -1) {
      roomInfo[roomID].splice(index, 1);
    }

    io.to(roomID).emit('sys', user + '退出了房间', roomInfo[roomID]);
    socket.leave(roomID); // 退出房间
    console.log(user + '退出了' + roomID);
  });
}

io.on('connection', onConnection);

http.listen(port, () => console.log('listening on port ' + port));

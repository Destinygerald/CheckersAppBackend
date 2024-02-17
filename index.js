const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const server = require('http').createServer(app);
const uuid = require("uuid");
const { findSession, saveSession } = require('./helpers/SessionStorage.js');

const io = require('socket.io')(server, { cors: { origin: "*", credentials: true } });

require('dotenv').config();

const UserInfo = require('./models/User.js')

app.use(cors({
	origin: "*",
	credentials: true
}))

let GAME_ARRAY = []
let PLAYING_ARRAY = [];

io.on("connection", (socket) => {

	socket.Id = socket.handshake.auth.Id

	socket.on('find_player', ({name}) => {
		
		if (name != null){
			PLAYING_ARRAY.push(Id)

			if (PLAYING_ARRAY.length >= 2 ) {
				let playerOneObj = {
					playerOneName: PLAYING_ARRAY[0],
					playerOneValue: "White",
				}

				let playerTwoObj = {
					playerTwoName: PLAYING_ARRAY[1],
					playerTwoValue: "Black",
				}

				let gameObj = {
					playerOne: playerOneObj,
					playerTwo: playerTwoObj
				}

				GAME_ARRAY.push(gameObj);

				PLAYING_ARRAY.splice(0, 2);

				io.emit('find', { players: GAME_ARRAY })
			}

		}

	})

	socket.on("make_play", ({move, id}) => {
		socket.broadcast(to).emit("show_play", )
	})

})

const PORT = 7000;

server.listen(PORT, () => {
	console.log(`Listening to port ${PORT}`)
});



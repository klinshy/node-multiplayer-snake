import GameController from './controller/game-controller.js';

const gameController = new GameController();
/* global io */
// io is a global variable for socket.io-client set from the view html

/* global WA */
// WA is a global variable from @workadventure/iframe-api-typings
WA.chat.sendChatMessage('Snake-Game  initialized', 'Snake');

gameController.connect(io);

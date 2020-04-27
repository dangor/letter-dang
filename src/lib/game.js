import { getSessionId } from './session.js';
import { db } from '../services/firebase.js';

const phase = {
  lobby: 'lobby',
}

function newGameId() {
  var id = '';
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (var i = 0; i < 4; i++) {
    id += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return id;
}

function createGame() {
  const newId = newGameId();
  const gameRef = db.ref("games/" + newId);

  return gameRef.once('value').then((snapshot) => {
    if (snapshot.exists()) {
      // collision; try again
      return createGame();
    } else {
      return gameRef.set({
        players: [getSessionId()],
        phase: phase.lobby
      }).then(() => newId);
    }
  });
}

function doesGameExist(gameId) {
  return db.ref("games/" + gameId).once('value').then((snapshot) => snapshot.exists());
}

export { createGame, doesGameExist };

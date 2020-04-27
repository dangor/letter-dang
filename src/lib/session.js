import { v4 as uuidv4 } from 'uuid';

function getSessionId() {
  var sessionId = localStorage.getItem('sessionId');
  if (!sessionId) {
    sessionId = uuidv4();
    localStorage.setItem('sessionId', sessionId);
  }
  return sessionId;
}

export { getSessionId };

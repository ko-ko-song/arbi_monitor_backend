const ws = new WebSocket('ws://localhost:42000');

ws.onopen = function() {
  console.log('connected');
  ws.send('Hello, server!');
};

ws.onmessage = function(event) {
  console.log(`received: ${event.data}`);
};

ws.onclose = function() {
  console.log('disconnected');
};
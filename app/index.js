const express = require('express'),
      app = express(),
      port = 11919;

app.get('/', (request, response) => {
  response.send('Welcome to the Monument.');
});

app.listen(port, () => {
  
})
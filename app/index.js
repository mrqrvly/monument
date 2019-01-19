const express = require('express'),
      app = express(),
      port = 11919,
      path = require('path'),
      static = path.resolve(__dirname + '/../public/');

// console.log("serve static files from", static);

app.use(express.static(static));

// console.log("resolve:", path.resolve(__dirname + '/../public/html/index.html'));
// console.log("resolve:", path.resolve(__dirname + '/../public/html/index.html'));

app.get('/', (request, response) => {
  response.sendFile(path.resolve(__dirname + '/../public/html/index.html'));
});

app.listen(port, () => {
  console.log(`The monument is listening to you on port ${port}.`);
});
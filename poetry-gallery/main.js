const express = require('express');
const readPoems = require('./readPoems');

const app = express();
app.use(express.static('public'));
app.use('parser', express.static(__dirname + '/public/parser'));
app.use('styles', express.static(__dirname + '/public/styles'));

const server = app.listen(5000, () => {
  let port = server.address().port;
  console.log("Server started at http://localhost:%s", port);
})

app.get('/copy', (req, res) => {
  res.json({
    poems: readPoems.createCollection,
  });
})



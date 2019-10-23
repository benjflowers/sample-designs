const express = require('express');

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
    status: "success"
  });
})

// fs.readFile('./copy/small-songs-made-of-cloth.txt', function read(err, data){
//   if(err){
//     throw err;
//   }
//   content = data;

//   console.log(content);
// })

const fs = require('file-system');

const data = fs.readdir('./copy', (err, files) => {
  return files.length
})

console.log(data);
// fs.readdir('./copy', (err, files) => {
//   console.log(files.length);
// })


// fs.readFile(filePath, function read(err, data){
//   if(err){
//     throw err;
//   }
//   result = data;
// })

// let message = {
//   message1: 'hello',
//   message2: 'goodbye'
// }

// module.exports = {
//   // message: message,
//   getData: getData
// }

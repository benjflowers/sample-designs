const fs = require('file-system');

const getFiles = (url) => {
  return new Promise((resolve, reject) => {
    fs.readdir(url, (err, files) => {
      if(err){
        reject(err);
      } else {
        resolve(files);
      }
    })
  })
}

getFiles('./copy').then((files) => {console.log(files)});

// let message = {
//   message1: 'hello',
//   message2: 'goodbye'
// }

// module.exports = {
//   // message: message,
//   getData: getData
// }

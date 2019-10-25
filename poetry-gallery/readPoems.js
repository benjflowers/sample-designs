const fs = require('file-system');
const copyDirectory = './copy'
// returns list of files found at directory
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


getFiles(copyDirectory).then((files) => {
  fs.readFile(copyDirectory + '/' + files[1], 'utf8', (err, data) => {
    if (err) {
      console.log(err)
    } else {
      console.log(data);
    }
  });
});

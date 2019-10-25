const fs = require('file-system');
const copyDirectory = './copy';
const collection = {};
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

const readFiles = (files) => {
  for(let i = 0; i < files.length; i++){
    fs.readFile(copyDirectory + '/' + files[i], 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        setData(files[i],data);
      }
    });
  }
}

const setData = (title, data) => {
  collection[title] = data;
}

const createCollection = (directory) => {
  getFiles(directory).then( (files) => readFiles(files));
  return collection;
}

module.exports.createCollection = createCollection(copyDirectory);

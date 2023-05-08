const fs = require('fs');
const path = require('path');
const pathToMainFile = '04-copy-directory/files';
const pathToCopyFile = '04-copy-directory/files-copy';
// path.resolve(filePath, file)

fs.mkdir(pathToCopyFile,{ recursive: true }, err => {
  if(err) throw err; 
});
fs.readdir(pathToMainFile,(err,data) => {
  if(err) {throw err;}
  data.forEach(file => {
    fs.copyFile(path.resolve(pathToMainFile, file), path.resolve(pathToCopyFile, file), err =>{
      if(err) throw err;
    });
  });
});

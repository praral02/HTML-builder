const fs = require('fs');
const path = require('path');
const pathToMainFile = '05-merge-styles/styles';
const pathToCopyFile = '05-merge-styles/project-dist/bundle.css';
// path.resolve(filePath, file)

fs.writeFile(pathToCopyFile,'',err => {
  if(err){throw err;}
});

fs.readdir(pathToMainFile,(err,data) => {
  if(err) {throw err;}
  data.forEach(file => {
    if(path.extname(file) == '.css'){
      fs.readFile(
        path.join(pathToMainFile, file),
        'utf-8',
        (err, data) => {
          if (err) throw err;
        
          fs.appendFile(path.resolve(pathToCopyFile), data, err =>{
            if(err) throw err;
          });
        }
      );}


  });
});
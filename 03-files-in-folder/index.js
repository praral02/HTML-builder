const path = require('path');
const fs = require('fs');
let filePath = '03-files-in-folder/secret-folder/';

fs.readdir(filePath,(err,data) => {
  if(err) {throw err;}
  data.forEach(file => {
    fs.stat(path.resolve(filePath, file), (error,stats)=>{
      if(error){throw error;}
      if(file !== 'image.jpg'){console.log(file + '  ' + path.extname(file) + '  ' + stats.size/1000 + 'kb');}
    });
  });
});





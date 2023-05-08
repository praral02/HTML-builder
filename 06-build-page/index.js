const fs = require('fs');
const path = require('path');
const pathToDir = '06-build-page/project-dist';
const pathToCopyCss ='06-build-page/project-dist/style.css';
const pathtoCopyHTML = '06-build-page/project-dist/index.html';
const pathtoCopyAssets = '06-build-page/project-dist/assets';
const pathToMainCss = '06-build-page/styles';
const pathToMainHTML = '06-build-page/template.html';
const pathToheader = '06-build-page/components/header.html';
const pathToArticles = '06-build-page/components/articles.html';
const pathToFooter = '06-build-page/components/footer.html';




fs.mkdir(pathToDir,{ recursive: true }, err => {
  if(err) throw err;
});

fs.mkdir(pathtoCopyAssets,{ recursive: true }, err => {
  if(err) throw err;
});
fs.mkdir('06-build-page/project-dist/assets/fonts',{ recursive: true }, err => {
  if(err) throw err;
});
fs.mkdir('06-build-page/project-dist/assets/img',{ recursive: true }, err => {
  if(err) throw err;
});
fs.mkdir('06-build-page/project-dist/assets/svg',{ recursive: true }, err => {
  if(err) throw err;
});

fs.writeFile(pathToCopyCss,'',err => {
  if(err){throw err;}
});

fs.writeFile(pathtoCopyHTML,'',err => {
  if(err){throw err;}
});





fs.readdir('06-build-page/assets/fonts',(err,data) => {
  if(err) {throw err;}
  data.forEach(file => {
    fs.copyFile(path.resolve('06-build-page/assets/fonts', file), path.resolve('06-build-page/project-dist/assets/fonts', file), err =>{
      if(err) throw err;
    });
  });
});

fs.readdir('06-build-page/assets/img',(err,data) => {
  if(err) {throw err;}
  data.forEach(file => {
    fs.copyFile(path.resolve('06-build-page/assets/img', file), path.resolve('06-build-page/project-dist/assets/img', file), err =>{
      if(err) throw err;
    });
  });
});

fs.readdir('06-build-page/assets/svg',(err,data) => {
  if(err) {throw err;}
  data.forEach(file => {
    fs.copyFile(path.resolve('06-build-page/assets/svg', file), path.resolve('06-build-page/project-dist/assets/svg', file), err =>{
      if(err) throw err;
    });
  });
});



fs.readdir(pathToMainCss,(err,data) => {
  if(err) {throw err;}
  data.forEach(file => {
    if(path.extname(file) == '.css'){
      fs.readFile(
        path.join(pathToMainCss, file),
        'utf-8',
        (err, data) => {
          if (err) throw err;
          fs.appendFile(path.resolve(pathToCopyCss), data, err =>{
            if(err) throw err;
          });
        }
      );}
  });
});

fs.copyFile(pathToMainHTML, pathtoCopyHTML, (err) => {
  if (err) throw err;
});




fs.readFile(
  path.join(pathtoCopyHTML),
  'utf-8',
  (err, main) => {
    if (err) throw err;
    fs.readFile(
      path.join(pathToheader),
      'utf-8',
      (err, dataHeader) => {
        fs.readFile(
          path.join(pathToArticles),
          'utf-8',
          (err, dataArticle) => {
            fs.readFile(
              path.join(pathToFooter),
              'utf-8',
              (err, dataFooter) => {
                if (err) throw err;
                let resHeader = main.replace('{{header}}', dataHeader).replace('{{articles}}', dataArticle).replace('{{footer}}', dataFooter);
                fs.writeFile(pathtoCopyHTML, resHeader, 'utf8', function (err) {
                  if (err) return console.log(err);
                });
              }
            );
          }
        );
        
      }
    );
  });

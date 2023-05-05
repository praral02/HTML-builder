let res = '';

const path = require('path');
const fs = require('fs');
const readline = require('readline');
const {
  stdin: input,
  stdout: output,
}  = process;
const rl = readline.createInterface({input, output});


fs.access('invite.txt', function(error){
  if (error) {
    fs.readFile(
      path.join(__dirname, 'invite.txt'),
      'utf-8',
      (err, data) => {
        if (err){
          rl.question('Hello, write your invitation ', (text) => {
            res += text;
              
            fs.writeFile(
              path.join(__dirname, 'invite.txt'),
              `${res}`, 
              (error) => {
                if(error){throw error;}
                console.log('файл создвн');
              }
            );
                
              
          });
        }else{        
          res = data;
        }
      });
  }
});
rl.question('Hello, write your invitation ', (text) => {
  res += text;
    
  fs.writeFile(
    path.join(__dirname, 'invite.txt'),
    `${res}`, 
    (error, data) => {
      if(error){throw error;}
      res += data;
      console.log('файл создан');
    }
  );
});
process.on('exit', () => console.log('Goodbye'));


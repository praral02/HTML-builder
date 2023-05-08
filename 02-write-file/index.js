const path = require('node:path');
const fs = require('fs');
const process = require('node:process');
const pathToFile = path.join(__dirname, 'invite.txt');

const pToFile = fs.createWriteStream(pathToFile);

process.stdout.write('Введите текст \n');
process.stdin.on('data', (data) => {
  if (data.toString() === 'exit') {
    process.stdout.write('Вы вышли, использован exit');
    pToFile.end();
    process.exit();
  } else {
    pToFile.write(data);
  }
});
process.on('SIGINT', () => {
  process.stdout.write('Вы вышли из процесса с помощью комбинации Ctrl+C'); 
  process.exit();
});
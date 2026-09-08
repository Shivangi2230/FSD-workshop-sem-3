const fs = require('fs');

fs.writeFileSync('student.txt', 'This is the exp 3');
console.log('File is written successfully');

fs.appendFileSync('student.txt', '\nThis is new line');
console.log('File is appended');

fs.unlinkSync('example.txt');
console.log('File is deleted successfully');

fs.mkdirSync('newfolder');
console.log('Folder is created');

console.log(fs.existsSync('student.txt'));
console.log('File exists');
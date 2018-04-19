// let object = {
//     name : 'Himanshu Negi'
// };
// var stringObj = JSON.stringify(object);

// console.log(typeof stringObj);
// console.log(stringObj);

// let personString = '{"name":"Himanshu","age":25}';
// let person = JSON.parse(personString);

// console.log(typeof person);
// console.log(person);
const fs = require('fs');

let originalNote = {
    title : 'some title',
    body : 'some body',
    age:56
};
let originalNoteString = JSON.stringify(originalNote);
console.log(typeof originalNoteString);
fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json',{ encoding: 'utf-8' });
console.log(typeof noteString);
console.log(noteString);
console.log(JSON.parse(noteString).title);


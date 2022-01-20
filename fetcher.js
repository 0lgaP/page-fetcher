const args = process.argv;
// npm install request

const fs = require('fs');
const net = require('net');
const request = require('request');

let URL = args[2];
let localPath = args[3];

// console.log(URL)
// console.log(localPath)
// console.log(typeof URL)


//responce is a property like 200 
// { flag: 'a+' } - open, position at end, create if does not exist

request(URL, (error, responce, body) => {
  if (error !== null) return; // if that returns is not null
 //You need to make an http request(URL) and wait for the response.
 if (responce.statusCode !== 200) return `Oh oh, cannot write file ${responce.statusCode}`
  fs.writeFile(localPath, body, { flag: 'a+'}, err => {

    if (err) {
      console.error(err);
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`);
    //file written successfully
  });
});


// const content = 'Some content!';
// /content is body from request


// const writeToFile = function(content, functionToRunWhenThingsAreDone) {

// };


// // CHANGE 1: Moved the console.log into a new function:
// const saveFile = data => {
//   fs.writeFile(localPath, content, err => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     //file written successfully
//   });
// };

// // CHANGE 2: we're now passing two arguments into breedDetailsFromFile: breed string and a callback function
// functionToRunWhenThingsAreDone(URL, saveFile);


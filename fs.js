// import * as fs from 'fs';
// fs.readFile('','utf-8', (err, data)=>{
//      err? console.log(err) : console.log(data)})

// write file

// let dataToAppend = "Don't fall in a trap that come from prettiness "

// // fs.writeFile('./newFile.txt', dataToWrite, (err) => console.log("Completed "))

// // fs.appendFile('./newFile.txt', dataToAppend, err => console.log("appeded.. !!!") )
// let date = new Date().toLocaleDateString('en-us')
// console.log(date)
// for(let i = 0 ; i< process.argv[2] || 1 ; i++){
//     let dataToWrite = `<html><title>Back_up_${i} | ${date}</title><body><h2>Good Morning !!</h2><p>Today is ${date}</p></body></html>`
//     writeFile(`./backups/test_${i}.html`, dataToWrite, (err) => console.log(`Back up ${i} Completed 👍`)) 
// }

// import * as axios from 'axios';

// axios.get('https://dev.to/aurelkurtula')
//     .then((response) => {
//         if(response.status === 200) {
//         const html = response.data;
//             const $ = cheerio.load(html); 
//     }
//     }, (error) => console.log(err) );

import { parser } from 'html-metadata-parser';

parser('https://www.youtube.com/watch?v=eSzNNYk7nVU').then(result=>{
   console.log(JSON.stringify(result, null, 3));
})
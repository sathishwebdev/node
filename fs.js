import { writeFile } from 'fs';
// fs.readFile('./cool.txt','utf-8', (err, data)=>{
//      err? console.log(err) : console.log(data)})

// write file



let dataToAppend = "Don't fall in a trap that come from prettiness "

// fs.writeFile('./newFile.txt', dataToWrite, (err) => console.log("Completed "))

// fs.appendFile('./newFile.txt', dataToAppend, err => console.log("appeded.. !!!") )
let date = new Date().toLocaleDateString('en-us')
console.log(date)
for(let i = 0 ; i< process.argv[2] || 1 ; i++){
    let dataToWrite = `<html><title>Back_up_${i} | ${date}</title><body><h2>Good Morning !!</h2><p>Today is ${date}</p></body></html>`
    writeFile(`./backups/test_${i}.html`, dataToWrite, (err) => console.log(`Back up ${i} Completed 👍`)) 
}


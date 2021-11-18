const fs = require('fs')
let limit = process.argv[2] ? +process.argv[2] : 1
let date = new Date().toLocaleDateString('en-us')
date = date.split('/');
date = `${date[2]}/${date[0]}/${date[1]}`
console.log(process.argv[2] ? +process.argv[2]:1);
if (!fs.existsSync(`./backups/${date}`)){
    fs.mkdirSync(`./backups/${date}`, { recursive: true });
}

for(let i = 0 ; i < limit ; i++){
    fs.writeFile(`./backups/${date}/backup_${i}.html`, `<html><head><title>Back_up_${i} | ${date}</title></head><body><h2>Good Morning !!</h2><p>Today is ${date}</p></body></html>`, (err) => err? console.log(err) : console.log(`Back up ${i+1} on ${date} Completed !!`)) 
}

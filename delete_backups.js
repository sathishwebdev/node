const fs = require('fs')

// fs.readdir('./backups', (err, files)=> {
//     err? console.log(err) : console.log(files)
// })

if (!process.argv[2]) {
    console.log(`Give input to delete \n to delete all -  delete_backup all \n to delete particular backup -  delete_backup <Location_of_backup>`)
}
else if(process.argv[2]=== 'all'){
    if (fs.existsSync(`./backups/`)){
    fs.readdir('./backups', (err, files)=> {
            try{
                if(files.length > 0){
                files.forEach((file)=> fs.rmdir(`./backups/${file}`,{recursive: true}, err=> err? console.log(err) : console.log("Successfully Deleted the backups")) )}
                else console.log("I think there is no backups !! \n Make Back up  - $node backup");
            }
            catch(err){
                console.log(err);
            }
        })
    }
    else console.log("I think there is no backups !!")
}else {
    if (fs.existsSync(`./backups/${process.argv[2]}`)){
        fs.rmdir(`./backups/${process.argv[2]}`,{recursive: true}, err=> err? console.log("i think no backups there !!") : console.log("Successfully Deleted the backups"))
        } 
    else console.log("I think there is no backups !!")  
}
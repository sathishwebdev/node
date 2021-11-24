import fs from 'fs'
let limit = process.argv[2] ? +process.argv[2] : 1
let date = new Date().toLocaleDateString('en-us')
date = date.split('/');
date = `${date[2]}/${date[0]}/${date[1]}`

let time = new Date().toLocaleTimeString('en-in')

if (!fs.existsSync(`./backups/${date}`)){
    fs.mkdirSync(`./backups/${date}`, { recursive: true });
}

for(let i = 0 ; i < limit ; i++){
    fs.writeFile(`./backups/${date}/backup_${i}.html`, `<html><head><title>Back_up_${i} | ${date}</title></head><body><h2>Good Morning !!</h2><p>Today is ${date}</p></body></html>`, (err) => err? console.log(err) : console.log(`Back up ${i+1} on ${date} Completed at ${time} !!`)) 
}


// // /movies
// //  with Queries
// const getQueryResults = (data, queries, queryNames, i) => {
//     let result =  data.filter(movie => `${movie[queryNames[i]]}` === queries[queryNames[i]].toUpperCase())
 
//     return result.length === 0 ? {message: "invalid query or data not found"} : result
//  }
 
//  const getGenreResult = (data, GenreQueries) =>{
//          let ulti = []
//          GenreQueries = GenreQueries.split('-')
//          data.forEach((movie)=> {
//            for(let i = 0 ; i < movie.genre.length; i++ ){
//              GenreQueries.forEach(query =>{
//                   if(movie.genre[i].toUpperCase() === query.toUpperCase()){
//                      ulti.push(movie)
//                  }
//              })
                
//              }
//          })
//          return ulti
     
//  }
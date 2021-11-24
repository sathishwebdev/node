import fs from 'fs';
import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import { get } from 'http';

dotenv.config()
const app = express();
const PORT = process.env.HOST_PORT
app.use(express.json()) // make requests as json

// mongo db config
const MONGO_URL = process.env.DB_URL

 // create db connection 

    async function createConnection(){
    const client = new MongoClient(MONGO_URL);
    await client.connect()
    console.log("db connected")
    return client
    }

createConnection() 

// backup the deleting file

const backup = (fileData) =>{
    fileData = JSON.stringify(fileData)
    let date = new Date().toLocaleDateString('en-us')
    date = date.split('/');
    date = `${date[1]}-${date[0]}-${date[2]}`
    let time = new Date().toLocaleTimeString('en-in')

    if (!fs.existsSync(`./backups/${date}`)){
        fs.mkdirSync(`./backups/${date}`, { recursive: true });
    }
    fs.readdir(`./backups/${date}`,(err,files)=>{
        fs.writeFile(`./backups/${date}/backup_on_${files.length}.json`, fileData  , (err) => err? console.log(err) : console.log(`Back up on ${date} Completed at ${time} !!`)) 
    })
   

}


//  read html file 
let indexData = ''
fs.readFile('./test.html', 'utf-8', (err, data)=> err? console.log(err) : indexData = data)



app.get('/', (request, response)=>{

    response.send(indexData  || {message: "no data founded"})
});
// /movies
//  with Queries
const getQueryResults = (data, queries, queryNames, i) => {
   let result =  data.filter(movie => `${movie[queryNames[i]]}` === queries[queryNames[i]].toUpperCase())

   return result.length === 0 ? {message: "invalid query or data not found"} : result
}

const getGenreResult = (data, GenreQueries) =>{
        let ulti = []
        GenreQueries = GenreQueries.split('-')
        data.forEach((movie)=> {
          for(let i = 0 ; i < movie.genre.length; i++ ){
            GenreQueries.forEach(query =>{
                 if(movie.genre[i].toUpperCase() === query.toUpperCase()){
                    ulti.push(movie)
                }
            })
               
            }
        })
        return ulti
    
}

app.get('/movies', async (request, response)=>{
    let filter = request.query
    if(filter.Language){filter.Language = filter.Language.toUpperCase()}
    if(filter.Rating) {filter.Rating = +filter.Rating } 
    const client = await createConnection()
    let results = await client
    .db("Movies")
    .collection("Movie DB")
    .find(filter)
    .toArray()
    response.send(results || {message: "no data founded"})
});


// /movies/id
app.get('/movies/:id', async (request, response)=>{
    const client = await createConnection()
    let filterResponse = await client
    .db("Movies")
    .collection("Movie DB")
    .findOne({id: request.params.id})
    response.send(filterResponse || {message: "no data founded"})
});

// delete movie by id with 
app.delete('/movies/:id', async (request, response)=>{
    const client = await createConnection()
   
    let dataToBackUp = await client
    .db("Movies")
    .collection("Movie DB")
    .findOne({id: request.params.id})
    backup(dataToBackUp) 
    let filterResponse = await client
    .db("Movies")
    .collection("Movie DB")
    .deleteOne({id: request.params.id})
    response.send(filterResponse || {message: "no data founded"})
});


// edit movie data


app.put('/movies/:id', async (request, response)=>{
    const data =  request.body
    const client = await createConnection()
    console.log({id: request.params.id, ...data})
    let result = await client
    .db("Movies")
    .collection("Movie DB")
    .updateOne({id: request.params.id},{$set : data})
    response.send(result)
});
// add movie data into DB

app.post('/movies', async (request, response)=>{
    
    const data =  request.body
    const client = await createConnection()
    console.log(data)
    let result = await client
    .db("Movies")
    .collection("Movie DB")
    .insertMany(data)

    response.send(result)
});


app.listen(PORT, ()=> console.log(" the started in port " + PORT))
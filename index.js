import { readFile, readFileSync, } from 'fs';
import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

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




//  read html file 
let indexData = ''
readFile('./test.html', 'utf-8', (err, data)=> err? console.log(err) : indexData = data)

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
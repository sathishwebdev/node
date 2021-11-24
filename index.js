import fs from 'fs';
import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import {
    allMovies,
    findByName,
    getById,
    deleteMovie,
    addMovie,
    editMovie
} from './helper.js';

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
    console.log("I got the Database, Boss.")
    return client
    }

export const client = await createConnection();

//  read html file 
let indexData = ''

fs.readFile('./test.html', 'utf-8', (err, data)=> err? console.log(err) : indexData = data)


// host to server


app.get('/',  (request, response)=>{
    response.send(indexData  || {message: "no data founded"})
});

app.get('/movies', allMovies);

app.delete('/movies/:id', deleteMovie);

app.put('/movies/:id', editMovie);

app.post('/movies', addMovie );

app.get('/movies/byname/:name', findByName);

app.get('/movies/:id', getById );

app.listen(PORT, ()=> console.log("Server started in port " + PORT))
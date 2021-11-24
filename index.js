import fs from 'fs';
import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import { moviesRouter } from './routes/movies.js';


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


// routes

app.use('/movies', moviesRouter )


app.listen(PORT, ()=> console.log("Server started in port " + PORT))
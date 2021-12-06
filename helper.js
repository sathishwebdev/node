import { client } from './index.js';
import fs from 'fs';
import bcrypt from 'bcrypt'
import { ObjectId } from 'bson';

// backup the deleting file
export const backup = (fileData) => {
    fileData = JSON.stringify(fileData);
    let date = new Date().toLocaleDateString('en-us');
    date = date.split('/');
    date = `${date[1]}-${date[0]}-${date[2]}`;
    let time = new Date().toLocaleTimeString('en-in');

    if (!fs.existsSync(`./backups/${date}`)) {
        fs.mkdirSync(`./backups/${date}`, { recursive: true });
    }
    fs.readdir(`./backups/${date}`, (err, files) => {
        fs.writeFile(`./backups/${date}/backup_on_${files.length}.json`, fileData, (err) => err ? console.log(err) : console.log(`Back up on ${date} Completed at ${time} !!`));
    });


};


// all movies

const allMovies = async (request, response) => {
    let filter = request.query;
    if (filter.Language) { filter.Language = filter.Language.toUpperCase(); }
    if (filter.Rating) { filter.Rating = +filter.Rating; }
    let results = await client
        .db("Movies")
        .collection("Movie DB")
        .find(filter)
        .toArray();
    response.send(results || { message: "no data founded" });
};
// /movies/id
const getById = async (request, response)=>{
    let filterResponse = await client
    .db("Movies")
    .collection("Movie DB")
    .findOne({id: request.params.id})
    response.send(filterResponse || {message: "no data founded"})
}


// delete movie by id
const deleteMovie =  async (request, response)=>{
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
}




// edit movie data

const editMovie =  async (request, response)=>{
    const data =  request.body
    let result = await client
    .db("Movies")
    .collection("Movie DB")
    .updateOne({id: request.params.id},{$set : data})

    let filterResponse = await client
    .db("Movies")
    .collection("Movie DB")
    .findOne({id: request.params.id})
    response.send( result.modifiedCount !== 0? filterResponse : {message: "no data founded"})
}


// edit User data

const editUser =  async (request, response)=>{
    const data =  request.body
    let result = await client
    .db("Movies")
    .collection("users")
    .updateOne({_id: new ObjectId(request.params.id)},{$set : data})

    let filterResponse = await client
    .db("Movies")
    .collection("users")
    .findOne({_id: new ObjectId(request.params.id)})
    response.send( result.modifiedCount !== 0? filterResponse : {message: "no data founded"})
}


// add movie data into DB

const addMovie = async (request, response)=>{
    const data =  request.body
    console.log(data)
    let result = await client
    .db("Movies")
    .collection("Movie DB")
    .insertMany(data)
    response.send(result)
}

// find by name
const findByName = async (request, response)=>{
    let filterResponse = await client
    .db("Movies")
    .collection("Movie DB")
    .find({name: request.params.name}).toArray()
    response.send(filterResponse || {message: "no data founded"})
}

// authentication

const keyGenerator = async (password)=>{    
     // salting   
    const saltedKey = await bcrypt.genSalt(10)
    //  hash the saltedKey
    const hashedKey = await bcrypt.hash(password, saltedKey)
    return hashedKey
}

// users

// get user by name
const getUserByName = async (name) => await client.db("Movies").collection("users").findOne({username: name})


// Signup

const getSignup = async ({username, password}) =>{
    let responce = await client
    .db("Movies")
    .collection("users")
    .insertOne({username, password})

    return {responce, data:{username,password}}
}

// admin
    // get admin by name
const getAdminByName = async (name) => await client.db("Movies").collection("admin").findOne({username: name})

    // create Admin

    const createAdmin = async ({username, password}) =>{
        let responce = await client
        .db("Movies")
        .collection("admin")
        .insertOne({username, password})
    
        return {responce, data:{username,password}}
    }


export {
    createAdmin,
    getAdminByName,
    getUserByName,
    keyGenerator,
    getSignup,
    allMovies,
    findByName,
    getById,
    deleteMovie,
    addMovie,
    editMovie,
    editUser
}
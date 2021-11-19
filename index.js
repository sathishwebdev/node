// const twice = (n) => n*2
// console.log(process.argv[2])
// const num = process.argv[2]
// console.log(num)
// console.log(twice(num))
import { readFile, readFileSync, } from 'fs';
import express from 'express';
const app = express();

//method of rest api

const PORT = 9000

// getData 
let Movies = JSON.parse(readFileSync('./movies.json'))
  let indexData = ''

  readFile('./test.html', 'utf-8', (err, data)=> err? console.log(err) : indexData = data)

app.get('/', (request, response)=>{
    response.send(indexData)
});
// /movies
//  with Queries
const getQueryResults = (data, queries, queryNames, i) => data.filter(movie => `${movie[queryNames[i]]}` === queries[queryNames[i]].toUpperCase())

const getGenreResult = (data, GenreQueries) =>{
        let ulti = []
        data.forEach((movie)=> {
          for(let i = 0 ; i < movie.genre.length; i++ ){
            GenreQueries.forEach(query =>{
                 if(movie.genre[i].toUpperCase() === query.toUpperCase()){
                    console.log(query)
                    ulti.push(movie)
                }
            })
               
            }
        })
        return ulti
    
}

app.get('/movies', (request, response)=>{
    let queries = request.query
    queries.genre = queries.genre? queries.genre.split('-') : null
    console.log(queries)
    let queryNames = Object.keys(queries)
    let queryResult = []
    if(queryNames[0]==='genre'){
        queryResult = getGenreResult(Movies, queries.genre)
    }else{
     queryResult = getQueryResults(Movies, queries, queryNames, 0)
    }
    
    if (queryNames.length > 1){
        for (let i = 1; i < queryNames.length; i++){
            if(queryNames[i]==='genre' && queries.genre !== null) {
                queryResult = getGenreResult(queryResult, queries.genre)
            }
            else if(queryNames[i]!=='genre') {
                queryResult = getQueryResults(queryResult, queries, queryNames, i)
            }
        }
    }
    
    let results = queryNames.length > 0 ? queryResult : Movies
   
    console.log(queries)
    response.send(results)
});
// /movies/id
app.get('/movies/:id', (request, response)=>{
    console.log(request.params.id);
    let filterResponse = Movies.find(movie => movie.id === request.params.id)
    response.send(filterResponse || {message: "no data founded"})
});
app.listen(PORT, ()=> console.log(" the started in port " + PORT))
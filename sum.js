// const Sum = (num) => num[0] + num[1]

// const numbers = [+process.argv[2], +process.argv[3]]

// console.log(Sum(numbers))
// console.log(global)

let queries = ["Romance","Comedy","Musical"]

let data = [{
    "id": "1",
    "name": "Peaky Blinders",
    "category": "Series",
    "poster": "https://cdn.shopify.com/s/files/1/0969/9128/products/PeakyBlinders-GillianMurphy-NetflixTVShow-ArtPoster_0cc3d8a7-1696-46e9-b930-cc95aa052e20.jpg?v=1619864531",
    "summary": "Tommy Shelby, a dangerous man, leads the Peaky Blinders, a gang based in Birmingham. Soon, Chester Campbell, an inspector, decides to nab him and put an end to the criminal activities.",
    "genre": ["Historical fiction", "Crime", "drama"],
    "releaseDate" :" 12 september 2013",
    "watchOn": {"link":"https://www.netflix.com/in/title/80002479?source=35", "name":"Netflix"},
    "trailer":"https://www.youtube.com/embed/oVzVdvGIC7U",
    "counts": {"likes":45, "disLikes": 8, "status": ""},
    "Language" : "ENGLISH",
    "Rating" : 8.9
},
{
    "id": "2",
    "name":"The Pursuit of Happyness",
"category":"Movie",
"poster":"https://m.media-amazon.com/images/M/MV5BMTQ5NjQ0NDI3NF5BMl5BanBnXkFtZTcwNDI0MjEzMw@@._V1_.jpg",
"summary":"Tired of Chris's professional failures, his wife decides to separate, leaving him financially broke with an unpaid internship in a brokerage firm and his son's custody to deal with.",
 "genre":["Drama"],
"releaseDate" :"15 December 2006",
"watchOn": {"link":"https://www.netflix.com/in/title/70044605?source=35","name":"Netflix"},
"trailer":"https://youtube.com/embed/DMOBlEcRuw8",
"counts": {"likes":0, "disLikes": 0, "status": ""},
"Language" : "ENGLISH",
    "Rating" : 7.8
},
{
    "id": "3",
    "name":"The Wolf of Wall Street",
"category":"Movie",
"poster":"https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_.jpg",
"summary":"Introduced to life in the fast lane through stockbroking, Jordan Belfort takes a hit after a Wall Street crash. He teams up with Donnie Azoff, cheating his way to the top as his relationships slide.",
 "genre":["Comedy", "Drama", "Dark Comedy", "Crime Fiction"],
"releaseDate" :"3 January 2014",
"watchOn": {"link": "https://www.amazon.com/Wolf-Wall-Street-Leonardo-DiCaprio/dp/B00IIU9U00", "name":"Prime Video"},
"trailer":"https://youtube.com/embed/iszwuX1AK6A",
"counts": {"likes":0, "disLikes": 0, "status": ""},
"Language" : "ENGLISH",
    "Rating" : 8.2
},
{
    "id": "4",
    "name":"Sex Education",
"category":"Series",
"poster":"https://www.tvguide.com/a/img/catalog/provider/1/1/1-6955305959.jpg",
"summary":"Socially awkward high school student Otis may not have much experience in the lovemaking department, but he gets good guidance on the topic in his personal sex ed course -- living with mom Jean, who is a sex therapist. Being surrounded by manuals, videos and tediously open conversations about sex, Otis has become a reluctant expert on the subject. When his classmates learn about his home life, Otis decides to use his insider knowledge to improve his status at school, so he teams with whip-smart bad girl Maeve to set up an underground sex therapy clinic to deal with their classmates' problems. But through his analysis of teenage sexuality, Otis realizes that he may need some therapy of his own.",
 "genre":["Comedy-drama", "Sex comedy","Teen drama"],
"releaseDate" :"11 January 2019",
"watchOn":{"link": "https://www.netflix.com/in/title/80197526?source=35", "name": "Netflix"},
"trailer":"https://youtube.com/embed/zmgYlYw7Uwk",
    "counts": {"likes":0, "disLikes": 0, "status": ""},
    "Language" : "ENGLISH",
    "Rating" : 8.6
},
{
    "id": "5",
    "name":"Iron Man",
"category":"Movie",
"poster":"https://mypostercollection.com/wp-content/uploads/2018/08/Iron-Man-Poster-2008-MyPosterCollection.com-3-683x1024.jpg",
"summary":"When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world.",
 "genre":["Action", "Super hero","War","Science Fiction", "Adventure", "Thriller"],
"releaseDate" :"1 May 2008",
"watchOn":{ "name":"HotStar", "link" : "https://www.hotstar.com/in/movies/iron-man/1660000038/watch?utm_source=gwa"},
"trailer":"https://youtube.com/embed/8ugaeA-nMTc",
    "counts": {"likes":0, "disLikes": 0, "status": ""},
    "Language" : "ENGLISH",
    "Rating" : 9
},
{
    "id": "6",
    "name":"Avengers",
"category":"Movie",
"poster":"https://sothebys-md.brightspotcdn.com/dims4/default/656d1d9/2147483647/strip/true/crop/4265x6369+0+0/resize/800x1195!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fmedia-desk%2Fa5%2Ffd%2F8fb5cfc24a7da8f0f8a93d58dc7d%2F252.%20THE%20AVENGERS.jpg",
"summary":"Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task.",
 "genre":["Action","Super hero","Adventure","Science Fiction","Fantasy"],
"releaseDate" :"27 April 2012 ","watchOn":{"link":"https://www.hotstar.com/in/movies/marvels-the-avengers/1660000015/watch?utm_source=gwa","name":"HotStar"},
"trailer":"https://youtube.com/embed/eOrNdBpGMv8",
    "counts": {"likes":0, "disLikes": 0, "status": ""},
    "Language" : "ENGLISH",
    "Rating" : 9.2
},
{
    "id": "7",
    "name":"Spider Man",
"category":"Movie",
"poster":"https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg",
"summary":"Peter Parker's life changes when he is bitten by a genetically altered spider and gains superpowers. He uses his powers to help people and finds himself facing the Green Goblin, an evil maniac.",
 "genre":["Action", "Super hero","Adventure","Fantasy","Science Fiction","Mystery"],
"releaseDate" :" 24 May 2002",
"watchOn":{"link":"http://www.youtube.com/watch?v=XhbJwZFgeVA", "name":"YouTube"},
"trailer":"https://youtube.com/embed/TYMMOjBUPMM",
    "counts": {"likes":0, "disLikes": 0, "status": ""},
    "Language" : "ENGLISH",
    "Rating" : 7.6
},
{
    "id": "8",
    "name":"Kootathil Oruthan",
"category":"Movie",
"poster":"https://i2.cinestaan.com/image-bank/1500-1500/94001-95000/94939.jpg",
"summary":"Aravind, a regular average student, falls in love with Janani, the class topper. When she rejects his proposal, Aravind sets out to change his life and win Janani's love.",
 "genre":["Romance", "Comedy"],
"releaseDate" :"28 July 2017",
"watchOn": {"link":"", "name":""},
"trailer":"https://youtube.com/embed/SifVEckLj0I",
    "counts": {"likes":0, "disLikes": 0, "status": ""},
    "Language" : "TAMIL",
    "Rating" : 5.5
},
{
    "id": "9",
    "name":"Meesaya Murukku",
"category":"Movie",
"poster":"https://m.media-amazon.com/images/M/MV5BYjRiOTk0YWMtNjAyOC00NGViLTlhYjctYjk0NzVhNGNhZjRmXkEyXkFqcGdeQXVyNjkwNTcxNTA@._V1_.jpg",
"summary":"Adhi, an aspiring musician, falls in love with Nila, a young woman in his college. Soon, he finds himself surrounded by several challenges as he tries to pursue his dreams.",
 "genre":["Romance","Comedy","Musical"],
"releaseDate" :"21 July 2017",
"watchOn": {"link":"", "name":""},
"trailer":"https://youtube.com/embed/eFjoaE6ffx0",
    "counts": {"likes":0, "disLikes": 0, "status": ""},
    "Language" : "TAMIL",
    "Rating" : 6
},
{
    "id": "10",
    "name":"Baby Driver",
"category":"Movie",
"poster":"https://m.media-amazon.com/images/I/91pmBq4ZloL._SL1500_.jpg",
"summary":"Doc forces Baby, a former getaway driver, to partake in a heist, threatening to hurt his girlfriend if he refuses. But the plan goes awry when their arms dealers turn out to be undercover officers.",
 "genre":["Music","Action","Adventure","Heist","Comedy","Thriller","Drama","Crime"],
"releaseDate" :"11 March 2017 ","watchOn":{"link":"https://www.netflix.com/watch/80142090?source=35","name":"Netflix"},
"trailer":"https://youtube.com/embed/D9YZw_X5UzQ" ,
    "counts": {"likes":0, "disLikes": 0, "status": ""},
    "Language" : "ENGLISH",
    "Rating" : 8
}]


const getGenreResult = () => {
    let ulti = []
    data.forEach((movie)=> {
      for(let i = 0 ; i < movie.genre.length; i++ ){
        queries.forEach(query =>{
             if(movie.genre[i].toUpperCase() === query.toUpperCase()){
                console.log(query)
                ulti.push(movie)
            }
        })
           
        }
    })
    return ulti
}
        


console.log(result())
import fetch from 'node-fetch';

let API_URL = "https://yts.mx/api/v2/list_movies.json?"

// export const getMovies = (limit, rating) => fetch(`${API_URL}`)
//     .then(res => res.json())
//     .then(json => json.data.movies)

export const getMovies = (limit, rating) => {
    let REQUEST_URL = API_URL
    if (limit > 0) {
        REQUEST_URL += `limit=${limit}`
    }
    if (rating > 0) {
        REQUEST_URL += `&minimum_rating=${rating}`
    }
    return fetch(REQUEST_URL)
        .then(res => res.json())
        .then(json => json.data.movies)

}

// let movies = [
//     {
//         id: "0",
//         name: "Taken",
//         score: 44

//     },
//     {
//         id: "1",
//         name: "Toy story ",
//         score: 99

//     },
//     {
//         id: "2",
//         name: "Toy story2",
//         score: 94

//     },
//     {
//         id: "3",
//         name: "harry potter ",
//         score: 94

//     },

// ]


// export const getMovies = () => movies;

// export const getById = id => {
//     const filteredMovies = movies.filter(movie => movie.id === String(id))
//     return filteredMovies[0]
// }


// export const deleteMovie = id => {
//     const cleanedMovies = movies.filter(movie => movie.id !== String(id))
//     if (movies.length > cleanedMovies.length) {
//         movies = cleanedMovies
//         return true
//     } else {
//         return false

//     }
// }

// export const addMovie = (name, score) => {

//     const NewMovie = {
//         id: `${movies.length + 1}`,
//         name,
//         score
//     }
//     movies.push(NewMovie)
//     return NewMovie
// }
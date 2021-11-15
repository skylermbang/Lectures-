
//import { getById, getMovies, addMovie, deleteMovie } from "./db"
import { getMovies } from "./db"
import { getNaver } from "./naver"

const resolvers = {
    Query: {
        movies: (_, { rating, limit }) => getMovies(limit, rating),
        naver: () => getNaver()
    }
}
// const skyler = {
//     name: "Skyler Bang",
//     age: 30,
//     gender: "male"
// }


// const people = [
//     {
//         id: 1,
//         name: "Skyler Bang",
//         age: 30,
//         gender: "male"
//     },
//     {
//         id: 2,
//         name: "Skyler Bang2",
//         age: 32,
//         gender: "male"

//     }]

// const resolvers = {
//     Query: {
//         person: () => skyler,
//         people: (_, args) => {
//             console.log(args)
//         },
//         person2: (_, args) => {
//             console.log(args)
//         },
//         movies: () => getMovies(),
//         movie: (_, args) => getById(id)



//         // name: function(){
//         //    return skyler
//         // }
//     },
//     Mutation: {
//         addMovie: (_, { name, score }) => addMovie(name, score),
//         deleteMovie: (_, { id }) => deleteMovie(id)
//     }
// }



export default resolvers
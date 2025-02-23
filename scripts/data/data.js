import { fetchTopMovies, getMovies } from "../modules/api.js";

export function oData(){
    const oMovieData = {
        topMovieList: [],
        
    };
    
}
oData();

const imdbKey = '635a622';
// const movies = {
//     Titil : "",
//     Year : "",
//     Runtime : "",
//     Genre : "",
//     Director : "",
//     Actors : [],
//     Plot : "",
    
// }
// getFavMovies(movies);

export async function getFavMovies() {
    let movies = JSON.parse(localStorage.getItem('movies')) || [];
    if(movies.length < 1) {
        console.log(movies);

        movies = await fetchTopMovies();
        setMovies(movies);
    }
    return movies;
}

export async function addFavMovies(movie) {
    const movies = await getFavMovies();
    movies.push(movie);
    setMovies(movies);
}

export async function removeFavMovies(id) {
    log('remove ' + id);
    const movies = await getFavMovies();
    const filtered = movies.filter(movie => movie.id !== parseInt(id));
    setMovies(filtered);
}

function setMovies(movies) {
    localStorage.setItem('movies', JSON.stringify(movies));
}


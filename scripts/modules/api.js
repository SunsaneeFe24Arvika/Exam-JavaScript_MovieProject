
import { oData } from "../data/data.js";
//import { displaySearchItem } from "../components/search.js";
import { getMovieCard } from "../utils/utils.js";


export async function fetchTopMovies() {
    const response = await fetch('https://santosnr6.github.io/Data/favoritemovies.json');
    let movies = await response.json();
    oData.topMovieList = movies;
}


// === Filmen som finns på IMDB ===
export async function getMovies(id) {
   
    try {
        const url = `http://www.omdbapi.com/?apikey=635a622&plot=full&i=${id}`;
        const response = await fetch(url);
        const imdbMovies = await response.json()
        console.log(imdbMovies);
        
        return imdbMovies;
      
    } catch (error) {
        console.error('Error fetching movies!');
    }
}


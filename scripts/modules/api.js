
import { oData } from "../data/data.js";


export async function fetchTopMovies() {
    const response = await fetch('https://santosnr6.github.io/Data/favoritemovies.json');
    let movies = await response.json();
    oData.topMovieList = movies;
}


// === Hämta filmer från IMDB med movie-id, sedan skicka filmens information till function getMovieDetails() ===
export async function getMovies(id) {
   
    try {
        const url = `http://www.omdbapi.com/?apikey=635a622&plot=full&i=${id}`;
        const response = await fetch(url);
        const imdbMovies = await response.json()
        console.log(imdbMovies);
        
        return imdbMovies;
      
    } catch (error) {
        console.error('Error fetching movies!');
        checkImageExists();
    }
}

// === Hämta filmer från IMDB av sök sträng och retunera sökresultat i search sida ===
export async function fetchImdbMovies(input) {
   
    try {
        const url = `http://www.omdbapi.com/?apikey=635a622&s=${input}&type=movie`;
        const response = await fetch(url);
        const imdbMovies = await response.json()
        console.log(imdbMovies);
        


        return imdbMovies;
      
    } catch (error) {
        console.error('Error fetching movies!');
        
    }
}


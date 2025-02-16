import { oData } from "../data/data.js";

export async function fetchTopMovies() {
    const response = await fetch('https://santosnr6.github.io/Data/favoritemovies.json');
    let movies = await response.json();
    oData.topMovieList = movies;
}


// === Filmen som finns på OMDB ===
export async function getMovies() {
   
    try {
        const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=635a622';
        const response = await fetch(url);
        const imdbMovies = await response.json();
        console.log(imdbMovies);
        
        
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}


// === Filmen som elever vill rekommendera ===
export async function getRecomend() {
   
    try {
        const url = 'https://santosnr6.github.io/Data/favoritemovies.json';
        const response = await fetch(url);
        const recomendMovies = await response.json();
        console.log(recomendMovies);
        
        
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}


import { moviesCaroussel,getRecommendations, getMovieDetails } from './components/movieCard.js';
import { fetchImdbMovies } from './components/search.js';
import { myFavMovies } from './modules/favorites.js';


if(window.location.pathname === '/' || window.location.pathname === '/index.html') {
    console.log('index.html');
    moviesCaroussel(); 
    getRecommendations();  

    document.addEventListener("DOMContentLoaded", () => {
        const searchBtn = document.getElementById("searchBtn");
    
        searchBtn.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = "search.html";
        })
    })


} else if(window.location.pathname === '/favorites.html') {
    console.log('favorites.html');
    myFavMovies();
    
   

} else if(window.location.pathname === '/movie.html') {
    console.log('movie.html');
    getMovieDetails();
   
} else if(window.location.pathname === '/search.html') {
    console.log('search.html');
    fetchImdbMovies();
}







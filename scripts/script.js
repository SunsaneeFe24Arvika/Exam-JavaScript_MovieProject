

import { moviesCaroussel,getRecommendations, getMovieDetails } from './components/movieCard.js';
import { movieSearch, searchFunction } from './components/search.js';
import { myFavMovies } from './modules/favorites.js';








if(window.location.pathname === '/' || window.location.pathname === '/index.html') {
    console.log('index.html');
    moviesCaroussel(); 
    getRecommendations();  
    searchFunction();


    

} else if(window.location.pathname === '/favorites.html') {
    console.log('favorites.html');
    searchFunction();
    myFavMovies();
    
   

} else if(window.location.pathname === '/movie.html') {
    console.log('movie.html');
    searchFunction();
    getMovieDetails();
   
} else if(window.location.pathname === '/search.html') {
    console.log('search.html');
    searchFunction();
    movieSearch();
}








import { moviesCaroussel,getRecommendations, getMovieDetails } from './components/movieCard.js';
import { fetchImdbMovies } from './modules/api.js';







if(window.location.pathname === '/' || window.location.pathname === '/index.html') {
    console.log('index.html');
    moviesCaroussel(); 
    getRecommendations();   
    
    

} else if(window.location.pathname === '/favorites.html') {
    console.log('favorites.html');
    
   

} else if(window.location.pathname === '/movie.html') {
    console.log('movie.html');
    getMovieDetails();
   
} else if(window.location.pathname === '/search.html') {
    console.log('search.html');
    fetchImdbMovies();
}









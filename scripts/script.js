
//import { getElement, querySelectorAll, createElement, appendChild, removeElement, addClass, removeClass, getDataSrc, setDataSrc } from './utils/domUtils.js';

import { moviesCaroussel,getRecommendations, getMovieDetails } from './components/movieCard.js';
import { myFavoriteFilm, updateFavoriteFilm } from './modules/favorites.js';
import { searchMovies, moviesResult } from './components/search.js';






if(window.location.pathname === '/' || window.location.pathname === '/index.html') {
    console.log('index.html');
    moviesCaroussel(); 
    getRecommendations();   
    searchMovies();
   
    

} else if(window.location.pathname === '/favorites.html') {
    console.log('favorites.html');
    myFavoriteFilm();

} else if(window.location.pathname === '/movie.html') {
    console.log('movie.html');
    getMovieDetails();
   
} else if(window.location.pathname === '/search.html') {
    console.log('search.html');
    
    moviesResult();
   

}




   






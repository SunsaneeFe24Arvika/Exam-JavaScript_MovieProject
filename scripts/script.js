
import { getElement, querySelectorAll, createElement, appendChild, removeElement, addClass, removeClass, getDataSrc, setDataSrc } from './utils/domUtils.js';
import { fetchTopMovies, getMovies, getRecomend } from './modules/api.js';
import { moviesCaroussel,getRecommendations, getMovieDetails } from './components/movieCard.js';
import { myFavoriteFilm, updateFavoriteFilm } from './modules/localstorage.js';
import { searchMovies } from './components/search.js';






if(window.location.pathname === '/' || window.location.pathname === '/template/index.html') {
    console.log('index.html');    
    moviesCaroussel();
    fetchTopMovies();
    getRecomend();
    getMovies();
   
    

} else if(window.location.pathname === '/template/favorites.html') {
    console.log('favorites.html');
    myFavoriteFilm();
    updateFavoriteFilm();

} else if(window.location.pathname === '/template/movie.html') {
    console.log('movie.html');
    printResult();

} else if(window.location.pathname === '/template/search.html') {
    console.log('search.html');
    searchMovies();
    

}



// function scrollNavigation() {
//     $("html,body").animate({scollTop: document.body.scrollHeight}, "slow");
// }

   
const popularTitle = getElement('.popular-title');
popularTitle.style.color = 'white';




getRecomend() 
    .then(() => {
        console.log('fetchTopMovies');
        getRecommendations();
         
    });


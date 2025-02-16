
import { getElement, querySelectorAll, createElement, appendChild, removeElement, addClass, removeClass, getDataSrc, setDataSrc } from './utils/domUtils.js';
import { fetchTopMovies, getMovies, getRecomend } from './modules/api.js';
import { getRecommendations } from './components/movieCard.js';
//import { printResult } from './components/search.js';








if(window.location.pathname === '/' || window.location.pathname === '/template/index.html') {
    console.log('index.html');
    getRecomend();

} else if(window.location.pathname === '/template/favorites.html') {
    console.log('favorites.html');

} else if(window.location.pathname === '/template/movie.html') {
    console.log('movie.html');
    getMovieDetails();

} else if(window.location.pathname === '/template/search.html') {
    console.log('search.html');

}



// function scrollNavigation() {
//     $("html,body").animate({scollTop: document.body.scrollHeight}, "slow");
// }


   
//<h2 class="popular-title">Our recommendations</h2>

const popularTitle = getElement('.popular-title');
popularTitle.style.color = 'white';

getRecomend() 
    .then(() => {
        console.log('fetchTopMovies');
        getRecommendations();
    });


import { getElement, querySelectorAll, createElement, appendChild, removeElement, addClass, removeClass, getDataSrc, setDataSrc } from './utils/domUtils.js';
import { fetchTopMovies, getMovies, getRecomend } from './modules/api.js';






if(window.location.pathname === '/' || window.location.pathname === '/index.html') {
    console.log('index.html');

} else if(window.location.pathname === '/favorites.html') {
    console.log('favorites.html');

} else if(window.location.pathname === '/movie.html') {
    console.log('movie.html');

} else if(window.location.pathname === '/search.html') {
    console.log('search.html');

}

function scrollNavigation() {
    $("html,body").animate({scollTop: document.body.scrollHeight}, "slow");
}
   
//<h2 class="popular-title">Our recommendations</h2>
const popularTitle = getElement('.popular-title');
popularTitle.style.color = 'white';

getMovies();
getRecomend();


import { getMoviesInfo } from "./components/movieCard.js";

if(window.location.pathname === '/' || window.location.pathname === '/index.html') {
    console.log('index.html');

} else if(window.location.pathname === '/favorites.html') {
    console.log('favorites.html');

} else if(window.location.pathname === '/movie.html') {
    console.log('movie.html');

} else if(window.location.pathname === '/search.html') {
    console.log('search.html');

}


fetch('https://www.omdbapi.com/?i=tt3896198&apikey=635a622')
    .then(response => response.json())
    .then(movie => console.log(movie));



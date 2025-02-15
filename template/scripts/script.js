

if(window.location.pathname === '/' || window.location.pathname === '/index.html') {
    console.log('index.html');

} else if(window.location.pathname === '/favorites.html') {
    console.log('favorites.html');

} else if(window.location.pathname === '/movie.html') {
    console.log('movie.html');

} else if(window.location.pathname === '/search.html') {
    console.log('search.html');

}

import { fetchTopMovies } from './modules/api.js';

// Anropa funktionen
fetchTopMovies().then(data => {
    console.log(data);
    // Gör något med den hämtade datan
});

randomMovies();
favoritemovies();
movieDatails();

function randomMovies() {
    console.log(randomMovies);
    

async function main() {
    await fetchTopMovies();
    console.log(oData.topMovieList); // Skriv ut den uppdaterade filmlistan
}

main();

    
    
}


function favoritemovies() {
    console.log(favoritemovies);
    
}
function movieDatails() {
    console.log(movieDatails);
    
}
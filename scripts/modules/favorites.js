import { getElement } from "../utils/domUtils.js";
import { getMovieCard } from "../utils/utils.js";


console.log('Hello from favorites page');

export function favoriteMovies(button) {
    getElement('#favBtn').addEventListener('click', async (event) => {
        event.preventDefault();
        if(button === event) {
            window.location.href = 'favorites.html?=';

        }
        addfavorites();
    })
    
}


export function addfavorites() {
    const myfavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favorites = myfavorites.some(myMovies => myMovies.imdbId === movie.imdbId);
    console.log(getMovieCard(), favorites);
    
}















// <!-- Favorite movies section -->
// <section>
//   <div class="content-wrapper">
//     <h2 class="favorites-title" id="favoritesTitle">Your favorites</h2>
//     <section class="card-container" id="cardContainer">
      
//     </section>
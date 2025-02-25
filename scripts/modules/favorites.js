import { getElement, createElement, removeElement, appendChild, addClass, removeClass } from "../utils/domUtils.js";
import { getMovieCard, setupCardsSection,  } from "../utils/utils.js";
import { getFavMovies, addFavMovies, removeFavMovies } from "../data/data.js";
import { fetchTopMovies } from "./api.js";

console.log('Hello from favorites page');

export function favoriteMovies(button) {
    getElement('#favBtn').addEventListener('click', async (event) => {
        event.preventDefault();
        if(button === event) {
            window.location.href = 'favorites.html?=';

        }
        
    })
    
}




// const heartIcon = createElement('i');
// heartIcon.classList.add('fa-heart', 'fa-regular')


// const myFavorit = JSON.parse(localStorage.getItem('favoritesFilm')) || [];
// const myFav = myFavorit.some(fav => fav.imdbID === movie.imdbId);
// if (myFav) {
//   heartIcon.addClass('fa-solid');
//   heartIcon.removeClass('fa-regular');
  
// }

// heartIcon.addEventListener('click', () => {
//   heartIcon.classList.toggle('fa-solid');
//   heartIcon.classList.toggle('fa-regular');

//   const myFavorit = JSON.parse(localStorage.getItem('favoritesFilm')) || [];
//   if (heartIcon.classList.contains('fa-solid')) {
//     myFavorit.push(movie);
//   } else {
//     const index = myFavorit.findIndex(fav => fav.imdbId === movie.imdbId);
//     if (index > -1) {
//       myFavorit.splice(index, 1);
//     }
//   }
//   localStorage.setItem('favoritesFilm', JSON.stringify(myFavorit));

//   console.log('Mina favorit filmer: ', myFavorit);
//   getMovieCard(myFavorit);
  
// });
import { getElement, createElement } from "../utils/domUtils.js";
import { ourRecommendations } from "../components/movieCard.js";

console.log('Hello from favorites page');

export function favoriteMovies(button) {
    getElement('#favBtn').addEventListener('click', async (event) => {
        event.preventDefault();
        if(button === event) {
            window.location.href = 'favorites.html?=';

        }
        
    })
    
}

export function myFavMovies() {
   document.addEventListener('DOMContentLoaded', async () => {
    const saveMyFavMovies = JSON.parse(localStorage.getItem('favoritesFilm')) || [];
   
    if (saveMyFavMovies.length === 0) {
      const p = createElement('p');
      p.textContent = 'No favorites in your storage';
      const cardContainer = getElement('#cardContainer');
      cardContainer.appendChild(p);
    } else {
      saveMyFavMovies.forEach(movie => {
        ourRecommendations(movie);
      });

    }
  });
  }







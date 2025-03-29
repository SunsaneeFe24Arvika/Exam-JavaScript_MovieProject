import { getElement, createElement } from "../utils/domUtils.js";
import { ourRecommendations } from "../components/movieCard.js";

console.log('Hello from favorites page');

const myFavorit = []; // Definiera en tom array för favoriter

export function favoriteMovies(button) {
    getElement('#favBtn').addEventListener('click', async (event) => {
        event.preventDefault();
        if (button === event.target) {
            window.location.href = 'favorites.html';
        }
    });
}

export function myFavMovies() {
    document.addEventListener('DOMContentLoaded', async () => {
        const saveMyFavMovies = JSON.parse(localStorage.getItem('favoritesFilm')) || [];
        const cardContainer = getElement('#cardContainer');
        cardContainer.textContent = ''; // Rensa tidigare innehåll

        if (saveMyFavMovies.length === 0) {
            const p = createElement('p');
            p.textContent = 'No favorites in your storage';
            cardContainer.appendChild(p);
        } else {
            saveMyFavMovies.forEach(movie => {
                ourRecommendations(movie);
            });
        }
    });
}

localStorage.setItem('favoritesFilm', JSON.stringify(myFavorit));
console.log('Mina favorit filmer: ', myFavorit);

export function updateFavMovies(data) {
    const myMovies = JSON.parse(localStorage.getItem('favoritesFilm')) || [];
    myMovies.push(data);
    myMovies.sort((a, b) => a.title.localeCompare(b.title)); // Sortera alfabetiskt
    localStorage.setItem('favoritesFilm', JSON.stringify(myMovies));

    console.log(myMovies);
}
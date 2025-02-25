import { getElement, createElement, removeElement, appendChild, addClass, removeClass } from "../utils/domUtils.js";
import { fetchTopMovies, getMovies } from "../modules/api.js";
//import { addFavMovies, getFavMovies, setupSearchForm } from "../data/data.js";



export function getMovieCard() {
    const card = getElement('#cardContainer');
    const movieCard = createElement('article');
    addClass(movieCard, 'movie-card');
    card.appendChild(movieCard);
    movieCard.innerHTML = `
            <figure class="card-figure">
              <img class="card-img" src="" alt="" />
              <i class="fa-solid fa-regular"></i>
            </figure>
            <aside class="card-content">
              <h3 class="card__title"></h3>
              <p class="card-description"></p>
            </aside>
            `;
            const cardTitle = movieCard.querySelector('.card__title');
            cardTitle.style.color = '#F5C518';
            cardTitle.style.fontSize = '25px';

            // Lägg till kortet i behållaren
            card.appendChild(movieCard);

            return movieCard;

}



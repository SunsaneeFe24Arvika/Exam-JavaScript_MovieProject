import { getElement, createElement, removeElement, appendChild, addClass, removeClass } from "../utils/domUtils.js";
import { fetchTopMovies, getMovies } from "../modules/api.js";

export function getMovieCard(movie) {
    const card = getElement('#cardContainer');
    const movieCard = createElement('article');
    addClass(movieCard, 'movie-card');
    movieCard.innerHTML = `
            <figure class="card-figure">
              <img class="card-img" src="${movie.poster}" alt="${movie.title}" />
              <i class="fa-solid fa-regular"></i>
            </figure>
            <aside class="card-content">
              <h3 class="card__title">${movie.title}</h3>
                cardTitle.style.color = '#F5C518';
                cardTitle.style.fontSize = '25px';
              <p class="card-description">${movie.Plot}</p>
            </aside>
            `;
            card.appendChild('movieCard');

    return movieCard;

    
}


// export function setupCardsSection(movie) {
//     const sectionRef = getElement('#cardContainer');
//     sectionRef.innerHTML = '';
    
//     for(let i = 0; i < plants.length; i++) {
//         if(i === 20) break;
//         sectionRef.appendChild(getMovieCard(movie[i]));
//     };
//     removePlantListener();
//     handleDisplayMoreButton();
// }

// function handleDisplayMoreButton() {
//     const btnRef = getElement('.show-more-button');
//     if(plants.length <= 20) {
//         addClass(btnRef, 'd-none');
//     } else {
//         removeClass(btnRef, 'd-none');

//         btnRef.addEventListener('click', (event) => {
//             if(event.target.innerText === 'Visa färre') {
//                 btnRef.textContent = 'Visa fler';
//                 setupCardsSection(plants);
//             } else if (event.target.innerText === 'Visa fler') {
//                 btnRef.textContent = 'Visa färre';
//                 showMorePlants(plants);
//             }
//         });
//     }
// }
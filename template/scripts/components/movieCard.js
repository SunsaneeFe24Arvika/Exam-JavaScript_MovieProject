
import { getElement, querySelectorAll, createElement, appendChild, removeElement, addClass, removeClass, getDataSrc, setDataSrc } from "../utils/domUtils.js";
import { fetchTopMovies, getRecomend, getMovies } from "../modules/api.js";
import { renderTrailers } from "../modules/caroussel.js";
import { oData } from "../data/data.js";

export async function moviesCaroussel() {
    await fetchTopMovies();
    const randomMovies = oData.topMovieList.sort(() => Math.random() - 0.5).slice(0, 5); // 5 random movies from the imdbMovies
    randomMovies.forEach((movie, index) => {
      renderTrailers(movie, index + 1);
      });
  }
  


export async function getRecommendations() {
   await fetchTopMovies();
   const topMovies = oData.topMovieList.sort(() => Math.random() - 0.5).slice(0, 20); // 20 random movies from the topMovieList

  
   const movieInfo = topMovies.map(movie => ({
       
           title: movie.Title,
           //description: movie.Trailer_link,
           poster: movie.Poster,
       
   }));
     
  console.log('movieInfo:', movieInfo);
  
  
  
  const cardContainer = getElement('#cardContainer');
  cardContainer.textContent = '';

  movieInfo.forEach(movie => {
    ourRecommendations(movie);  // Rendera filmer baserat på movieinfo
  });

}


function ourRecommendations(movie) {
const cardContainer = getElement('#cardContainer');


const card = createElement('article');
addClass(card, 'card');


const cardImg = createElement('img');
addClass(cardImg, 'card__img');
cardImg.src = `${movie.poster}`;
cardImg.alt = `${movie.title}`;
cardImg.addEventListener('click', () => {
  window.location.href = '/template/movie.html';
});

const cardContent = createElement('aside');
addClass(cardContent, 'card__content');


const cardTitle = createElement('h3');
addClass(cardTitle, 'card__title');
cardTitle.textContent = `${movie.title}`;
cardTitle.style.color = 'white';


cardContainer.appendChild(card);
card.appendChild(cardImg);
card.appendChild(cardContent);
cardContent.appendChild(cardTitle);

}
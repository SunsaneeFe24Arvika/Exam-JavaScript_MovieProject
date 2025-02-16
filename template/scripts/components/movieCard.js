
import { getElement, querySelectorAll, createElement, appendChild, removeElement, addClass, removeClass, getDataSrc, setDataSrc } from "../utils/domUtils.js";
import { fetchTopMovies, getRecomend, getMovies } from "../modules/api.js";
import { oData } from "../data/data.js";



export async function getRecommendations() {
   await fetchTopMovies();
   const topMovies = oData.topMovieList.sort(() => Math.random() - 0.5).slice(0, 21); // 20 random movies from the topMovieList

  
   const movieInfo = topMovies.map(movie => ({
       
           title: movie.Title,
           description: movie.Trailer_link,
           poster: movie.Poster,
       
   }));
     
  console.log('movieInfo:', movieInfo);
  
  
  
  const cardContainer = getElement('#cardContainer');
  // if (!cardContainer) {
  //     console.error('No cardContainer found');
  //     return;
  // }
  
  cardContainer.textContent = '';

  movieInfo.forEach(movie => {
    ourRecommendations(movie);  // Rendera filmer baserat på movieinfo
  });

}


function ourRecommendations(movie) {
const cardContainer = getElement('#cardContainer');
cardContainer.style.backgroundColor = 'Grey';

const card = createElement('article');
addClass(card, 'card');


const cardImg = createElement('img');
addClass(cardImg, 'card__img');
cardImg.src = `${movie.poster}`;
cardImg.alt = `${movie.title}`;

const cardContent = createElement('aside');
addClass(cardContent, 'card__content');


const cardTitle = createElement('h3');
addClass(cardTitle, 'card__title');
cardTitle.textContent = `${movie.title}`;
cardTitle.style.color = 'white';


const cardDescription = createElement('p');
addClass(cardDescription, 'card__description');
cardDescription.textContent = `${movie.description}`;
cardDescription.style.color = 'white';


const cardBtn = createElement('button');
addClass(cardBtn, 'card__btn');

cardContainer.appendChild(card);
card.appendChild(cardImg);
card.appendChild(cardContent);
cardContent.appendChild(cardTitle);
cardContent.appendChild(cardDescription);
cardContent.appendChild(cardBtn);


}
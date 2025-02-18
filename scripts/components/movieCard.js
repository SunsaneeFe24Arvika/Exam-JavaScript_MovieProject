
import { getElement, querySelectorAll, createElement, appendChild, removeElement, addClass, removeClass, getDataSrc, setDataSrc } from "../utils/domUtils.js";
import { fetchTopMovies, getRecomend, getMovies } from "../modules/api.js";
import { renderTrailers } from "../modules/caroussel.js";
import { oData } from "../data/data.js";
import { myFavoriteFilm } from "../modules/localstorage.js";

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

export async function getMovieDetails() {
    await getMovies();
    const imdbMovies = oData.imdbMovies;
    console.log('imdbMovies:', imdbMovies);
    const movie = imdbMovies;
    console.log('movie:', movie);
    const movieDetails = getElement('#movieInformation');
    movieDetails.textContent = '';
  
    const movieCard = createElement('article');
    addClass(movieCard, 'movie-card');
  
    const movieImg = createElement('img');
    addClass(movieImg, 'movie-img');
    movieImg.src = `${movie.Poster}`;
    movieImg.alt = `${movie.Title}`;
  
    const movieContent = createElement('aside');
    addClass(movieContent, 'movie-content');
  
    const movieTitle = createElement('h2');
    addClass(movieTitle, 'movie-title');
    movieTitle.textContent = `${movie.Title}`;
  
    const movieYear = createElement('p');
    addClass(movieYear, 'movie-year');
    movieYear.textContent = `Year: ${movie.Year}`;
  
    const movieRating = createElement('p');
    addClass(movieRating, 'movie-rating');
    movieRating.textContent = `Rating: ${movie.imdbRating}`;

    movieDetails.appendChild(movieCard);
    movieCard.appendChild(movieImg);
    movieCard.appendChild(movieContent);
    movieContent.appendChild(movieTitle);
    movieContent.appendChild(movieYear);
    movieContent.appendChild(movieRating);
  

}

          // <img class="movie-poster" src="" alt="">
          // <h1 class="movie title"></h1>
          // <h2 class="movie-year"></h2>
          // <h3 class="movie-rating"></h3>
          // <p class="movie rate"></p>
          // <p class="movie-runtime"></p>
          // <p class="movie genre"></p>
          // <p class="movie-director"></p>
          // <p class="movie-actors"></p>
          // <p class="movie-plot"></p>

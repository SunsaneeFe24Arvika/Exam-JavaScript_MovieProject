
import { getElement, querySelectorAll, createElement, appendChild, removeElement, addClass, removeClass, getDataSrc, setDataSrc } from "../utils/domUtils.js";
import { fetchTopMovies, getMovies } from "../modules/api.js";
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
   const topMovies = oData.topMovieList.sort(() => Math.random() - 0.5).slice(0, 20); // 20 random movies 

  
   const movieInfo = topMovies.map(movie => ({
       
           title: movie.Title,
           poster: movie.Poster,
           imdbId: movie.imdbID,
       
   }));
     
  console.log('movieInfo:', movieInfo);
  
  
  
  const cardContainer = getElement('#cardContainer');
  
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
  window.location.href = `movie.html?id=${movie.imdbId}`;
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
  
  const movieId = new URLSearchParams(window.location.search);
  const movieInfo = movieId.get('id');
  const movie = await getMovies(movieInfo);
    console.log('movie:', movieInfo);
    if (!movie) {
      return console.error('No movie found');
    }

  const movieInformation = getElement('#movieInformation');
  
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

  const movieGenre = createElement('p');
  addClass(movieGenre, 'movie-genre');
  movieGenre.textContent = `Genre: ${movie.Genre}`;

  const movieDirector = createElement('p');
  addClass(movieDirector, 'movie-director');
  movieDirector.textContent = `Director: ${movie.Director}`;

  const movieActors = createElement('p');
  addClass(movieActors, 'movie-actors');
  movieActors.textContent = `Actors: ${movie.Actors}`;

  const moviePlot = createElement('p');
  addClass(moviePlot, 'movie-plot');
  moviePlot.textContent = `Plot: ${movie.Plot}`;

  appendChild(movieInformation, movieCard);
  appendChild(movieCard, movieImg);
  appendChild(movieCard, movieContent);
  appendChild(movieContent, movieTitle);
  appendChild(movieContent, movieYear);
  appendChild(movieContent, movieRating);
  appendChild(movieContent, movieGenre);
  appendChild(movieContent, movieDirector);
  appendChild(movieContent, movieActors);
  appendChild(movieContent, moviePlot);
 }

          
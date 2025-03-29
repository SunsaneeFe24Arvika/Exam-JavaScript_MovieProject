

import { getElement, createElement, appendChild, addClass} from "../utils/domUtils.js";
import { fetchTopMovies, getMovies } from "../modules/api.js";
import { renderTrailers } from "../modules/caroussel.js";
import { oData } from "../data/data.js";
import { handleToggle } from "../utils/utils.js";



//Get 5 random trailers
export async function moviesCaroussel() {
  await fetchTopMovies();
  const randomMovies = oData.topMovieList.sort(() => Math.random() - 0.5).slice(0, 5); // 5 random movies from the imdbMovies
  randomMovies.forEach((movie, index) => {
    renderTrailers(movie, index + 1);
    });
}

//To get 20 random reccomendation movies
export async function getRecommendations() {
   await fetchTopMovies();
   const topMovies = oData.topMovieList.sort(() => Math.random() - 0.5).slice(0, 20); // 20 random movies 

  
   const movieInfo = topMovies.map(movie => ({
       
           title: movie.Title,
           poster: movie.Poster,
           imdbID: movie.imdbID,
           
       
   }));

     
  console.log('movieInfo:', movieInfo);
  
  movieInfo.forEach(movie => {
    ourRecommendations(movie);  // Rendera filmer baserat på movieinfo
  });

}

// === För att visa vår rekomederat flimer ===
export function ourRecommendations(movie) {
  const cardContainer = getElement('#cardContainer');


const card = createElement('article');
addClass(card, 'card');

const figure = createElement('figure');
addClass(figure, 'card_figure');


const cardImg = createElement('img');
addClass(cardImg, 'card-img');
cardImg.src = `${movie.poster}`;
cardImg.alt = `${movie.title}`;
cardImg.addEventListener('click', () => {
  window.location.href = `movie.html?id=${movie.imdbID}`;
});
//=== add icon ===
const heartIcon = createElement('i');
heartIcon.classList.add('fa-heart', 'fa-regular');



const myFavorit = JSON.parse(localStorage.getItem('favoritesFilm')) || [];
const myFav = myFavorit.some(fav => fav.imdbID === movie.imdbId);
if (myFav) {
  heartIcon.classList.add('fa-solid');
  heartIcon.classList.remove('fa-regular');
}


heartIcon.addEventListener('click', () => {
  heartIcon.classList.toggle('fa-solid');
  heartIcon.classList.toggle('fa-regular');

  const myFavorit = JSON.parse(localStorage.getItem('favoritesFilm')) || [];
  if (heartIcon.classList.contains('fa-solid')) {
    myFavorit.push(movie);
  } else {
    const index = myFavorit.findIndex(fav => fav.imdbId === movie.imdbId);
    if (index > -1) {
      myFavorit.splice(index, 1);
    }
  }
  localStorage.setItem('favoritesFilm', JSON.stringify(myFavorit));

  console.log('Mina favorit filmer: ', myFavorit);
  
});

handleToggle(movie, heartIcon);

const cardContent = createElement('aside');
addClass(cardContent, 'card-content');


const cardTitle = createElement('h3');
addClass(cardTitle, 'card__title');
cardTitle.textContent = `${movie.title}`;
cardTitle.addEventListener('click', () => {
  window.location.href = `movie.html?id=${movie.imdbID}`;
});

cardContainer.appendChild(card);
card.appendChild(figure);
figure.appendChild(cardImg);
cardContent.appendChild(heartIcon);
card.appendChild(cardContent);
cardContent.appendChild(cardTitle);


}



// === Hämta filmer och Visa filmer information ===
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

  const movieTitle = createElement('h1');
  addClass(movieTitle, 'movie-title');
  movieTitle.textContent = `${movie.Title}`;

  const movieYear = createElement('h2');
  addClass(movieYear, 'movie-year');
  movieYear.textContent = `Year: ${movie.Year}`;

  const movieRating = createElement('h2');
  addClass(movieRating, 'movie-rating');
  movieRating.textContent = `Rating: ${movie.imdbRating}`;

  const movieGenre = createElement('h3');
  addClass(movieGenre, 'movie-genre');
  movieGenre.textContent = `Genre: ${movie.Genre}`;

  const movieDirector = createElement('h3');
  addClass(movieDirector, 'movie-director');
  movieDirector.textContent = `Director: ${movie.Director}`;

  const movieActors = createElement('h3');
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



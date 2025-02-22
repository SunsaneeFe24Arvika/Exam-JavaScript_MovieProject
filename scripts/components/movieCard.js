
import { getElement, createElement, removeElement, appendChild, addClass, removeClass } from "../utils/domUtils.js";
import { fetchTopMovies, getMovies } from "../modules/api.js";
import { renderTrailers } from "../modules/caroussel.js";
import { oData } from "../data/data.js";
//import { myFavoriteFilm } from "../modules/localstorage.js";
import { addEventListenersToElements, removeEventListenersFromElements } from "../utils/utils.js";

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
           imdbId: movie.imdbID,
       
   }));
     
  console.log('movieInfo:', movieInfo);
  
  
  
  const cardContainer = getElement('#cardContainer');
  
  movieInfo.forEach(movie => {
    ourRecommendations(movie);  // Rendera filmer baserat på movieinfo
  });

}

// To print out the recomendation movies
function ourRecommendations(movie) {
  const cardContainer = getElement('#cardContainer');


const card = createElement('article');
addClass(card, 'card');

const figure = createElement('figure');
addClass(figure, 'card_figure');


const cardImg = createElement('img');
addClass(cardImg, 'card__img');
cardImg.src = `${movie.poster}`;
cardImg.alt = `${movie.title}`;
cardImg.addEventListener('click', () => {
  window.location.href = `movie.html?id=${movie.imdbId}`;
});
//=== add icon ===
const heartIcon = createElement('i');
heartIcon.classList.add('fa-heart', 'fa-regular')


const myFavorit = JSON.parse(localStorage.getItem('favoritesFilm')) || [];
const myFav = myFavorit.some(fav => fav.imdbID === movie.imdbId);
if (myFav) {
  heartIcon.addClass('fa-solid');
  heartIcon.removeClass('fa-regular');
  // heartIcon.removeClass('fa-heart');
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

const cardContent = createElement('aside');
addClass(cardContent, 'card__content');


const cardTitle = createElement('h3');
addClass(cardTitle, 'card__title');
cardTitle.textContent = `${movie.title}`;
cardTitle.style.color = '#F5C518';
cardTitle.style.fontSize = '25px';


cardContainer.appendChild(card);
card.appendChild(figure);
figure.appendChild(cardImg);
figure.appendChild(heartIcon);
card.appendChild(cardContent);
cardContent.appendChild(cardTitle);


}

// To display the movie that you choose from our recomend
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

          
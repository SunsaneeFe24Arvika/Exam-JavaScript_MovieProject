import { createElement, addClass, appendElement } from "../utils/domUtils";
import { fetchTopMovies } from "../modules/api";    
// export function getfilmInfo(info) {
//         fetch('https://www.omdbapi.com/?i=tt3896198&apikey=635a622')
//             .then(response => response.json())
//             .then(movie => console.log(movie))
//             .catch(error => log(error.message));
//     }
    const movieCard = document.querySelector('.movie-information');

  export  function getMoviesInfo(movie) {
        
    
    const movies = createElement('article');
    addClass(movies, 'movies');
    movieCard.innerHTML = `
    figure class="movie__poster">
        <img class="movie__poster-image" src="https://santosnr6.github.io/Data/Images/Matrix.jpg" alt="${movie.Title}">
    </figure>
    <aside class="movie__info">
        <h2 class="movie__title">${movie.Title}</h2>
        p class="movie__year">${movie.Year}</p>
        p class="movie__rated">${movie.Rated}</p>
        p class="movie__released">${movie.Released}</p>
        p class="movie__runtime">${movie.Runtime}</p>
        p class="movie__genre">${movie.Genre}</p>
        p class="movie__director">${movie.Director}</p>
        p class="movie__writer">${movie.Writer}</p>
        p class="movie__actors">${movie.Actors}</p>
       </aside> `;

       return movies;
}
    
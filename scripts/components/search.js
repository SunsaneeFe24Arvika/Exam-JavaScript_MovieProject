// import { getElement, querySelectorAll, createElement, appendChild, removeElement, addClass, removeClass, getDataSrc, setDataSrc } from "../utils/domUtils.js";
// import { fetchTopMovies, getMovies } from "../modules/api.js";


// export function searchMovies() {

//     const searchInput = getElement("searchInput").value.trim().toLowerCase();
//     console.log(searchInput);
//     getElement('#cardContainer').textContent = "";

//     fetch(getMovies())
//         .then((response) => response.jsaon())
        
//         .then((data) => {
//             console.log(data);
//             const movieResults = data.movie || []; // Hantera om det saknas data
//             const filteredMovies = movieResults.filter(movie => 
//                 movie.Title.toLowerCase().includes(searchInput)
//             );

//             moviesResult(); // Skicka vidare resultaten till visningsfunktionen
//         })
//         .catch(error => {
//             console.error("Error fetching movies:", error);
//         });
//         moviesResult();
// }

// export function moviesResult(movies) {

//     const movieContainer = getElement("#cardContainer");
//     movieContainer.innerHTML = ""; // Rensa tidigare resultat

//     if (movies.length === 0) {
//         movieContainer.textContent = "No results found";
//         return;
//     }

//     movies.forEach(movie => {
//         movieContainer.innerHTML += `
//             <article class="movie-information">
//                 <img class="result__img" src="${movie.Poster}" alt="${movie.Title}" />
//                 <h2 class="result__title">${movie.Title}</h2>
//                 <p class="result__year">${movie.Year}</p>
//                 <p class="result__rating">${movie.imdbRating}</p>
//                 <p class="result__genre">${movie.Genre}</p>
//                 <p class="result__description">${movie.Plot}</p>
//             </article>`;
//     });
// }

// const movie = getMovies(); 
//     if (movie && movie.imdbId) {
//         window.location.href = `search.html?id=${movie.imdbId}`;
//     } else {
//         console.error("Movie ID is missing or undefined");
//     }
//     console.log('Hello from moviesResult()');



 
// /* <body>
// <header class="header">
//   <div class="content-wrapper header__flex">
//     <a href="index.html"
//       ><img class="header__logo" src="./res/logo.png" alt="logotype"
//     /></a>
//   </div>
// </header>

// <!-- Search movies section -->
// <section>
//   <div class="content-wrapper">
//     <h2 class="search-title" id="favoritesHeader">Search Results</h2>
//     <section class="card-container" id="cardContainer"></section>
//   </div>
// </section>
// </body> */
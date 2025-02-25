import { getMovies, fetchImdbMovies, fetchTopMovies } from "../modules/api.js";
import { getElement, createElement, appendChild, removeElement, addClass, removeClass } from "../utils/domUtils.js";
import { getMovieCard } from "../utils/utils.js";
import { getRecommendations } from "./movieCard.js";
//import { setupSearchForm } from "../data/data.js";


/* <form class="header__form" id="searchForm">
          <input
            class="header__input"
            id="searchInput"
            type="text"
            aria-label="Search"
          />
          <button class="header__form-btn" id="searchBtn">Search</button>
        </form> */

// <!-- Search movies section -->
// <section>
//   <div class="content-wrapper">
//     <h2 class="search-title" id="favoritesHeader">Search Results</h2>
//     <section class="card-container" id="cardContainer"></section>
//   </div>
// </section>

export async function getSearchItem(movies) {
  await fetchImdbMovies();
  const searchMovies = movies.map(movie => ({
    title: movie.Title,
    poster: movie.Poster,
    imdbId: movie.imdbID,
  }));
  console.log('Här är dina filmer:', searchMovies);
  // if (searchMovies == 0) {
  //     console.log("Vi kan inte hitta din film!");
      
  // }else {
  //   getMovieCard();
  // }

}

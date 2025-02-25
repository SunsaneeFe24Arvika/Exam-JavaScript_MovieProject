

import { getMovieCard } from "../utils/utils.js";



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



export async function fetchImdbMovies() {
  const searchInput = 'Batman';
  console.log(searchInput);
  
  try {
      const url = `http://www.omdbapi.com/?apikey=635a622&s=${encodeURIComponent(searchInput)}`;
      const response = await fetch(url);
      const imdbSearch = await response.json()
      console.log("Sökresultat från API: ", imdbSearch);
      getMovieCard();
      
     
      return imdbSearch;

  } catch (error) {
      console.error('Error fetching movies!');
  }
}

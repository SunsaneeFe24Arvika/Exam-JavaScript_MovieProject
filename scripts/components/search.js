import { getMovies, fetchImdbMovies } from "../modules/api.js";
import { getElement, createElement, appendChild, removeElement, addClass, removeClass } from "../utils/domUtils.js";


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

const searchForm = getElement('#serchForm');
const searchBtn = getElement('#searchBtn');



function searchButton(button) {
  getElement('#searchBtn').addEventListener('click', (event) => {
    event.preventDefault();
    if (button === event) {
      window.location.href = 'search.html?=';
    }
    searchMovies();
})
  
}
      
  
// const section = getElement('section');

//     console.log('Hello from searchMomies function!');
//     const API_KEY = "635a622"; // Ersätt med din API-nyckel

    

  export function searchMovies() {
    const searchInput = getElement("#searchInput").value;
    const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(searchInput)}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log("Sökresultat:", data);
            displayMovies(data.Search); // Visa filmerna
        })
        .catch(error => console.error("Fel vid hämtning av filmer:"));
}



// export function displaySearch() {
//   const displayMovies = getElement("#cardContainer");
//   detailsDiv.innerHTML = getMovieCard();
// }

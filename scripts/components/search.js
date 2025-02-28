
import { fetchImdbMovies } from "../modules/api.js";
import { getElement } from "../utils/domUtils.js";
import { ourRecommendations } from "./movieCard.js";


//=== funktion för att handtera Sök knappen och den ska skicka sök värdret till movieSearch() och byta sida till Search.html ===
export async function searchFunction() {
  let searchInput = getElement('#searchInput');
    document.addEventListener("DOMContentLoaded", () => {
        const searchBtn = document.getElementById("searchBtn");
    
        searchBtn.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = `search.html?search=${searchInput.value}`;
        });
    });
}


//=== Funktion för att hämta filmen utifrån IMDB API:t ===
export async function movieSearch() {
  console.log('Hej från Search sidan!');
  const urlSearch = new URLSearchParams(window.location.search);
  const search = urlSearch.get('search');

  try {
      const response = await fetchImdbMovies(search);

      const movies = response.Search && Array.isArray(response.Search) 
      ? response.Search.map(movie => {
        let poster = movie.Poster === "N/A" || !movie.Poster  //Check för saknar bilder
                  ? "../res/icons/missing-poster.svg"  
                  : movie.Poster;

              return {
                  title: movie.Title,
                  poster: poster,
                  imdbID: movie.imdbID,
              };
            })
      : [];

      if (movies.length === 0) {
          console.error('Movies not found');
          const movieResult = getElement('#cardContainer');
          movieResult.innerHTML = `<h1 class="msg-error">Inga film hittades!</h1>`;
          return;
      } else {
          console.log('Movies found:', movies);
          const movieResult = getElement('#cardContainer');
          movieResult.textContent = ''; // rensa tidigare sök

          movies.forEach(movie => {
              ourRecommendations(movie); // Skicka varje filmer movie card
          });
      }
  } catch (error) {
      console.error('Error fetching movies:', error);
      const movieResult = getElement('#cardContainer');
      movieResult.textContent = 'Error fetching movies. Please try again later.';
  }

}



import { getElement } from "../utils/domUtils.js";
import { ourRecommendations } from "./movieCard.js";

export async function fetchImdbMovies(searchInput) {
  console.log(searchInput);

  try {
      const url = `http://www.omdbapi.com/?apikey=635a622&s=${encodeURIComponent(searchInput)}`;
      const response = await fetch(url);
      const imdbSearch = await response.json();
      console.log("Sökresultat från API: ", imdbSearch);
      return imdbSearch;
  } catch (error) {
      console.error("Error fetching movies:", error);
      throw error;
  }
}

export async function searchFunction() {
  document.addEventListener("DOMContentLoaded", () => {
      const searchInput = getElement('#searchInput');
      const searchBtn = document.getElementById("searchBtn");

      searchBtn.addEventListener('click', (event) => {
          event.preventDefault();
          window.location.href = `search.html?search=${searchInput.value}`;
      });
  });
}

export async function movieSearch() {
  console.log('Hej från Search sidan!');
  const urlSearch = new URLSearchParams(window.location.search);
  const search = urlSearch.get('search');

  try {
      const response = await fetchImdbMovies(search);

      const movies = response.Search && Array.isArray(response.Search)
          ? response.Search.map(movie => {
              let poster = movie.Poster === "N/A" || !movie.Poster
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
          movieResult.innerHTML = `<h1 class="msg-error">Inga filmer hittades!</h1>`;
          return;
      }

      console.log('Movies found:', movies);
      const movieResult = getElement('#cardContainer');
      movieResult.textContent = ''; // Rensa tidigare sökresultat

      movies.forEach(movie => {
          ourRecommendations(movie); // Skicka varje film till movie card
      });
  } catch (error) {
      console.error('Error fetching movies:', error);
      const movieResult = getElement('#cardContainer');
      movieResult.textContent = 'Error fetching movies. Please try again later.';
  }
}
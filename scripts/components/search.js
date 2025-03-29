

import { getMovieCard } from "../utils/utils.js";

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

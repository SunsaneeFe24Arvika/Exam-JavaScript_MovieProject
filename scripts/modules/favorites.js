import { getElement, createElement, removeElement, appendChild, addClass, removeClass } from "../utils/domUtils.js";
import { getFavMovies, addFavMovies, removeFavMovies } from "../data/data.js";
import { getMovieCard } from "../utils/utils.js";


console.log('Hello from favorites page');

export function favoriteMovies(button) {
    getElement('#favBtn').addEventListener('click', async (event) => {
        event.preventDefault();
        if(button === event) {
            window.location.href = 'favorites.html?=';

        }
        
    })
    
}

export function myFavMovies() {
    getMovieCard();
    const heartIcon = createElement('i');
heartIcon.classList.add('fa-heart', 'fa-regular')

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
}   


export function updateFavMovies(data) {
    const myMovies = getFavMovies();
    myMovies.push(data)
    myMovies.sort((a, b) => a.title - b.title);
    localStorage.setItem('myMovies', JSON.stringify(myMovies));

    console.log(myMovies);
    
    
}


// export async function addFavMovies(movie) {
//     const movies = await getFavMovies();
//     movies.push(movie);
//     setMovies(movies);
// }

// export async function removeFavMovies(id) {
//     log('remove ' + id);
//     const movies = await getFavMovies();
//     const filtered = movies.filter(movie => movie.id !== parseInt(id));
//     setMovies(filtered);
// }

// function setMovies(movies) {
//     localStorage.setItem('movies', JSON.stringify(movies));
// }



// // const heartIcon = createElement('i');
// // heartIcon.classList.add('fa-heart', 'fa-regular')


// const myFavorit = JSON.parse(localStorage.getItem('favoritesFilm')) || [];
// const myFav = myFavorit.some(fav => fav.imdbID === movie.imdbId);
// if (myFav) {
//   heartIcon.addClass('fa-solid');
//   heartIcon.removeClass('fa-regular');
  
// }

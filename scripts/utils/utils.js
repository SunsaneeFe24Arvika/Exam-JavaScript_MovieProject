


//=== för att lägga till filmer till favorites sida med hjälp av hjärtat icon och toggle ===

export function handleToggle(movie, heartIcon) {
  let myFavorites = JSON.parse(localStorage.getItem('favoritesFilm')) || [];

  const myFav = myFavorites.some(fav => fav.imdbID === movie.imdbID);
  if (myFav) {
    heartIcon.classList.add('fa-solid');
    heartIcon.classList.remove('fa-regular');
  }

  // Kontrollera om eventlyssnaren redan finns
  heartIcon.removeEventListener('click', toggleFavorite);
  heartIcon.addEventListener('click', toggleFavorite);

  function toggleFavorite() {
    heartIcon.classList.toggle('fa-solid');
    heartIcon.classList.toggle('fa-regular');

    if (heartIcon.classList.contains('fa-solid')) {
      if (!myFavorites.some(fav => fav.imdbID === movie.imdbID)) {
        myFavorites.push({
          title: movie.title,
          poster: movie.poster,
          imdbID: movie.imdbID,
        });
      }
    } else {
      myFavorites = myFavorites.filter(fav => fav.imdbID !== movie.imdbID);
    }

    localStorage.setItem('favoritesFilm', JSON.stringify(myFavorites));
    console.log('Mina favoritfilmer:', myFavorites);
  }
}




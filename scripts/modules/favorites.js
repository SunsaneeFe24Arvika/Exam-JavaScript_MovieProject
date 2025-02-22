console.log('Hello from favorites page');


export function addfavorites() {
    const myfavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favorites = myfavorites.some(myMovies => myMovies.imdbId === movie.imdbId);
}















// <!-- Favorite movies section -->
// <section>
//   <div class="content-wrapper">
//     <h2 class="favorites-title" id="favoritesTitle">Your favorites</h2>
//     <section class="card-container" id="cardContainer">
      
//     </section>
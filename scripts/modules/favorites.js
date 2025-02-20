

import { addClass, appendChild, createElement, getElement } from "../utils/domUtils.js";





export function myFavoriteFilm() {
    const favorite = getElement('#cardContainer')
    const heartIcon = createElement('i')
    addClass(heartIcon, 'heart-icon');
    appendChild(favorite, heartIcon);
    
//     getElement('#favoriteBtn').addEventListener('click', () => {
//         let favoriteMovies = JSON.parse(localStorage.getItem('myFavorites')) || [];
//             favoriteMovies.push(movie.Title);
//             localStorage.setItem('myFavorites', JSON.stringify(favoriteMovies));
//             alert(`Filmen ${movie.Title} är tillagd till dina favoriter`);
// });
}

export function updateFavoriteFilm(data) {
    const myFavorite = myFavoriteFilm();
    myFavorite.push(data)
    myFavorite.sort((a, b) => a.time - b.time);
    localStorage.setItem('myFavorite', JSON.stringify(myFavorite));
}




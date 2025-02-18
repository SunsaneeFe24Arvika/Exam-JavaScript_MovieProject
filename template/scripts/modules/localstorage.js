//import { getElement, querySelectorAll, createElement, appendChild, removeElement, addClass, removeClass, getDataSrc, setDataSrc } from './utils/domUtils.js';

// const lastUser = localStorage.getItem('lastUser');
// const lastUserConvert = JSON.parse(lastUser);
// const getLogin = document.getElementById('login'); //Need to crate a login button in the HTML
// console.log(getLogin.textContent);
// getLogin.textContent = lastUserConvert.email;
//     if(getLogin.textContent == 'undifined') {
//         getLogin.textContent = 'Log in';
//     }else {
//         getLogin.textContent = lastUserConvert.email;
//     }

// document.querySelector('#logout').addEventListener('click', () => {
//     console.log('Du är utloggad');
//     const last_user = [];
//     localStorage.setItem('last_user', JSON.stringify(last_user));
//     getLogin.textContent = 'Log in';
//     localStorage.removeItem('myFavorites');
//     localStorage.removeItem('movieNumbers');
//     location.reload();
// });


// function chengeToSearch() {
//     window.location.href = 'search.html';
// }

// const movieNumbers = localStorage.getItem('movieNumbers');
// if(movieNumbers) {
//     const movieNumbersConvert = JSON.parse(movieNumbers);
//     console.log(movieNumbersConvert);
//     document.getElementById('movieNumbers').textContent = movieNumbersConvert.length;
// } else {
//     document.getElementById('movieNumbers').textContent = 0;
// }



function myFavoriteFilm() {
    getElement('#favoriteBtn').addEventListener('click', () => {
        let favoriteMovies = JSON.parse(localStorage.getItem('myFavorites')) || [];
            favoriteMovies.push(movie.Title);
            localStorage.setItem('myFavorites', JSON.stringify(favoriteMovies));
            alert(`Filmen ${movie.Title} är tillagd till dina favoriter`);
});
}

function updateFavoriteFilm(data) {
    const myFavorite = myFavoriteFilm();
    myFavorite.push(data)
    myFavorite.sort((a, b) => a.time - b.time);
    localStorage.setItem('myFavorite', JSON.stringify(myFavorite));
}

export { myFavoriteFilm, updateFavoriteFilm };


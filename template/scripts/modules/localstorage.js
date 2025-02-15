function myFavoriteFilm() {
    return JSON.parse(localStorage.getItem('myFavorite')) || [];
}

function updateFavoriteFilm(data) {
    const myFavorite = getmyFavorite();
    myFavorite.push(data)
    myFavorite.sort((a, b) => a.time - b.time);
    localStorage.setItem('myFavorite', JSON.stringify(myFavorite));
}

export { myFavoriteFilm, updateFavoriteFilm };
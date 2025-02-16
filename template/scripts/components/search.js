// //import { getElement, querySelectorAll, createElement, appendChild, removeElement, addClass, removeClass, getDataSrc, setDataSrc } from './utils/domUtils.js';
// //import { fetchTopMovies, getMovies, getRecomend } from './modules/api.js';

// export function searchFunction() {
//     window.location.replace = "search.html";
// }

// let changePage = () => {
//     localStorage.setItem("movieId", this.id);
//     window.location.replace = "movie.html";
// };

// let movieItems = localStorage.getItem("movieItems");
// if (movieItems) {
//     let movieItemsConvert = JSON.parse(movieItems);
//     console.log(movieItemsConvert);
//     document.getElementById("movieItems").textContent = movieItemsConvert.length;
// } else {
//     document.getElementById("movieItems").textContent = 0;
// }

// export function searchMovies() {
//     let searchInput = getElement("searchInput").value;
//     console.log(searchInput);
//     getElement("movie_results").innerHTML = "";
//     getMovies(searchInput)
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             console.log(data);
//             data = data.movie_results;
//             const dataFullList = [];
//             for (j = 0; j < data.length; j++) {
//                 dataFullList.push(data[j]);
//             }
//             console.log(dataFullList);
//             const dataListResults = [];
//             console.log(dataListResults);
//             console.log(dataListResults[1].Title);
//             for (i = 0; i < dataFullList.length; i++) {
//             if (dataFullList[i].Title.includes(searchInput) ||
//                 dataFullList[i].Title.toLowerCase().includes(searchInput) ||
//                 dataFullList[i].Title.toUpperCase().includes(searchInput)) {
//                     getElement("movie_results").innerHTML += `<section class="result-container" id="resutlContainer">
//                     <img class="result__img" src="${dataFullList[i].Poster}" alt="${dataFullList[i].Title}" />
//                     <h2 class="result__title">${dataFullList[i].Title}</h2>
//                     <p class="result__year">${dataFullList[i].Year}</p>
//                     <p class="result__rating">${dataFullList[i].imdbRating}</p>
//                     <p class="result__genre">${dataFullList[i].Genre}</p>
//                     <p class="result__description">${dataFullList[i].Plot}</p>
//                     </section>`;
//                     dataListResults.push(dataFullList[i]);
                    
                    
//                 }
//             }
//             if (dataListResults.length == 0) {
//                 getElement("movie_results").textContent = "No results found";
//             }
//         })
//             .catch((error) => {
//                 console.error("Error fetching movies:", error);
//         });
//     }

//     export async function printResult(result) {


//         const movieInformation = getElement('.movie-information');
//         const movieCard = createElement('article');
//         addClass(movieCard, 'movie-card');

//         const movieImg = createElement('img');
//         addClass(movieImg, 'movie-img');
//         movieImg.src = `${result.poster}`;
//         movieImg.alt = `${result.title}`;

//         const movieContent = createElement('aside');
//         addClass(movieContent, 'movie-content');

//         const movieTitle = createElement('h2');
//         addClass(movieTitle, 'movie-title');
//         movieTitle.textContent = `${result.title}`;

//         const movieYear = createElement('p');
//         addClass(movieYear, 'movie-year');
        
//         const movieRating = createElement('p');
//         addClass(movieRating, 'movie-rating');

//         const movieGenre = createElement('p');
//         addClass(movieGenre, 'movie-genre');

//         const movieDescription = createElement('p');
//         addClass(movieDescription, 'movie-description');
//         movieDescription.textContent = `${result.description}`;
//         movieDescription.style.color = 'white';


//         movieInformation.appendChild(movieCard);
//         movieCard.appendChild(movieImg);
//         movieCard.appendChild(movieContent);
//         movieContent.appendChild(movieTitle);
//         movieContent.appendChild(movieYear);
//         movieContent.appendChild(movieRating);
//         movieContent.appendChild(movieGenre);
//         movieContent.appendChild(movieDescription);

//     }
            
            
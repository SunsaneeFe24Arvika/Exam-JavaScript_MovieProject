import { getMovies } from "../modules/api.js";
import { getElement, createElement, appendChild, removeElement, addClass, removeClass } from "../utils/domUtils.js";
import { addEventListenersToElements, removeEventListenersFromElements } from "../utils/utils.js";

/* <form class="header__form" id="searchForm">
          <input
            class="header__input"
            id="searchInput"
            type="text"
            aria-label="Search"
          />
          <button class="header__form-btn" id="searchBtn">Search</button>
        </form> */

// <!-- Search movies section -->
// <section>
//   <div class="content-wrapper">
//     <h2 class="search-title" id="favoritesHeader">Search Results</h2>
//     <section class="card-container" id="cardContainer"></section>
//   </div>
// </section>
const searchInput = getElement('#searchInput');
const searchForm = getElement('#serchForm');
const serchBtn = getElement('#searchBtn');

const section = getElement('section');

window.addEventListener('load', getMovies);



export function searchMovies() {
    console.log('Hello from searchMomies function!');
    const searchInput = getElement('#searchInput').value.trim().toLowerCase();
    console.log(searchInput);

    // const buttons = getElement("#searchBtn");
    //     buttons.addEventListener('click', () => {
    //     window.location.href = "search.html";
    
    // });
    
}


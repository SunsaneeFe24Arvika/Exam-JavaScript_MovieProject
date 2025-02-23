

export function getElement(selector) {
    return document.querySelector(selector);    
}


export function createElement(tag) {
    return document.createElement(tag);
}

export function appendChild(parent, child) {
    return parent.appendChild(child);
}

export function removeElement(element) {
    return element.remove();
}

export function addClass(element, className) {
    return element.classList.add(className);
}

export function removeClass(element, className) {
    return element.classList.remove(className);
}

// export function addFormListener() {
//     getElement('#searchForm').addEventListener('submit', async (event) => {
//         event.preventDefault();
//         if(validateAddPlantForm()) {
//             const movies = await getMovies();
//             log('Movies is: ', movies);
//             getMovieCard();
//         }
//     });
// }

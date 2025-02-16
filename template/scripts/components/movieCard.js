import { getElement, querySelectorAll, createElement, appendChild, removeElement, addClass, removeClass, getDataSrc, setDataSrc } from './utils/domUtils.js';




/*<section class="card-container" id="cardContainer">
          <!-- <article class="card">
            <img
              src="./res/movie-posters/avengers.jpg"
              alt="avengers"
              class="card__img"
            />
            <aside class="card__content">
              <h3 class="card__title">Avengers</h3>
              <p class="card__description">
                The Avengers and their allies must be willing to sacrifice all
                in an attempt to defeat the powerful Thanos before his blitz of
                devastation and ruin puts an end to the universe.
              </p>
              <button class="card__btn">Add to favorites</button>
            </aside>
          </article> -->
        </section> */

import { getDataSrc } from "../utils/domUtils";

const cardContainer = getElement('#cardContainer');
cardContainer.style.backgroundColor = 'Grey';

const card = createElement('article');
addClass(card, 'card');
appendChild(cardContainer, card);

const cardImg = createElement('img');
addClass(cardImg, 'card__img');
appendChild(card, cardImg);
cardImg.src = getDataSrc(cardImg);

const cardContent = createElement('aside');
addClass(cardContent, 'card__content');
appendChild(card, cardContent);

const cardTitle = createElement('h3');
addClass(cardTitle, 'card__title');
appendChild(cardContent, cardTitle);
cardTitle.style.color = 'white';
cardTitle.style.hight = '100px';

const cardDescription = createElement('p');
addClass(cardDescription, 'card__description');
appendChild(cardContent, cardDescription);
cardDescription.syle.color = 'white';
cardTitle.style.hight = '100px';

const cardBtn = createElement('button');
addClass(cardBtn, 'card__btn');
appendChild(cardContent, cardBtn);


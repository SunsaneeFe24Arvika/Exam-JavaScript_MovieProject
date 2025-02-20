import { getElement, querySelectorAll, createElement, appendChild, removeElement, addClass, removeClass, getDataSrc, setDataSrc } from './utils/domUtils.js';

export function heartIcon() {

    const cardContainer = getElement('#cardContainer');
    const iconHeart = createElement('i');
    addClass(iconHeart, 'i');
    appendChild(cardContainer, iconHeart);

    
}

